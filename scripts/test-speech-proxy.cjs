const assert = require('node:assert/strict')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const { createHash, X509Certificate } = require('node:crypto')
const { spawnSync } = require('node:child_process')

// PHP -n disables extensions; mocked cURL never opens a network connection.
const endpoint = path.resolve(__dirname, '../public/api/academic-videos.php')
const caBundle = fs.readFileSync(
    path.join(path.dirname(endpoint), 'cacert.pem')
)
assert.equal(
    createHash('sha256').update(caBundle).digest('hex'),
    'a41b5d356aea97a529fe27e0f7316d2f9d946d75927476cf9cf1b90637d00505'
)
const certificates = caBundle
    .toString('utf8')
    .match(/-----BEGIN CERTIFICATE-----[\s\S]+?-----END CERTIFICATE-----/g)
assert.equal(certificates.length, 121)
for (const certificate of certificates) new X509Certificate(certificate)
console.log('PASS official CA bundle hash and certificate parsing')
const cases = [
    {
        name: 'lecture array',
        body: '[{"id":"1090","title":"Lecture"}]',
        status: 200
    },
    { name: 'empty array', body: '[]', status: 200 },
    {
        name: 'object response',
        body: '{"message":"login required"}',
        status: 502,
        code: 'UPSTREAM_INVALID_JSON_ARRAY'
    },
    {
        name: 'HTML response',
        body: '<html>Login</html>',
        status: 502,
        code: 'UPSTREAM_INVALID_JSON_ARRAY'
    },
    {
        name: 'upstream 404',
        body: '[]',
        upstreamStatus: 404,
        status: 502,
        code: 'UPSTREAM_HTTP_ERROR'
    },
    {
        name: 'upstream redirect',
        body: '',
        upstreamStatus: 302,
        status: 502,
        code: 'UPSTREAM_HTTP_ERROR'
    },
    {
        name: 'connection failure',
        fail: true,
        curlCode: 7,
        upstreamStatus: 0,
        status: 502,
        code: 'UPSTREAM_CURL_ERROR'
    },
    {
        name: 'TLS verification failure',
        fail: true,
        curlCode: 60,
        upstreamStatus: 0,
        status: 502,
        code: 'UPSTREAM_CURL_ERROR'
    },
    {
        name: 'CA file failure',
        fail: true,
        curlCode: 77,
        upstreamStatus: 0,
        status: 502,
        code: 'UPSTREAM_CURL_ERROR'
    },
    {
        name: 'timeout',
        fail: true,
        curlCode: 28,
        upstreamStatus: 0,
        status: 502,
        code: 'UPSTREAM_CURL_ERROR'
    },
    {
        name: 'DNS failure',
        fail: true,
        curlCode: 6,
        upstreamStatus: 0,
        status: 502,
        code: 'UPSTREAM_CURL_ERROR'
    },
    {
        name: 'oversized response',
        large: true,
        status: 502,
        code: 'UPSTREAM_RESPONSE_TOO_LARGE'
    },
    { name: 'missing cURL', noCurl: true, status: 503 },
    {
        name: 'missing CA bundle',
        noCa: true,
        status: 503,
        code: 'CA_BUNDLE_UNAVAILABLE'
    },
    { name: 'POST rejected', method: 'POST', noCurl: true, status: 405 }
]

for (const test of cases) {
    const fixtureDirectory = test.noCa
        ? fs.mkdtempSync(path.join(os.tmpdir(), 'tzuchi-speech-proxy-'))
        : undefined
    const testEndpoint = fixtureDirectory
        ? path.join(fixtureDirectory, 'academic-videos.php')
        : endpoint
    if (fixtureDirectory) fs.copyFileSync(endpoint, testEndpoint)
    const mock = test.noCurl
        ? ''
        : `
foreach (array('CURLOPT_CONNECTTIMEOUT', 'CURLOPT_TIMEOUT', 'CURLOPT_FOLLOWLOCATION',
    'CURLOPT_SSL_VERIFYPEER', 'CURLOPT_SSL_VERIFYHOST', 'CURLOPT_HTTPHEADER',
    'CURLOPT_WRITEFUNCTION', 'CURLOPT_CAINFO', 'CURLINFO_HTTP_CODE') as $i => $name) {
    define($name, $i + 1);
}
function curl_init($url) {
    if ($url !== 'https://nlms.tzuchi.com.tw/speech/sp.json') {
        throw new Exception('Unexpected proxy destination');
    }
    return new stdClass();
}
function curl_setopt_array($handle, $options) {
    // Keep certificate and hostname verification enabled with a readable CA file.
    if ($options[CURLOPT_SSL_VERIFYPEER] !== true || $options[CURLOPT_SSL_VERIFYHOST] !== 2
        || !is_readable($options[CURLOPT_CAINFO])) {
        throw new Exception('TLS verification is not configured correctly');
    }
    $handle->options = $options;
    return true;
}
function curl_exec($handle) {
    if (${test.fail ? 'true' : 'false'}) return false;
    $body = ${
        test.large
            ? "str_repeat('x', 6 * 1024 * 1024)"
            : `base64_decode('${Buffer.from(test.body || '').toString(
                  'base64'
              )}')`
    };
    foreach (str_split($body, 64 * 1024) as $chunk) {
        if (call_user_func($handle->options[CURLOPT_WRITEFUNCTION], $handle, $chunk) !== strlen($chunk)) {
            return false;
        }
    }
    return true;
}
function curl_getinfo($handle, $option) { return ${
              test.upstreamStatus ?? 200
          }; }
function curl_errno($handle) { return ${test.curlCode || 0}; }
function curl_error($handle) { return 'Mock detailed error with C:/private/ca.pem'; }
function curl_strerror($code) { return 'Mock generic cURL description'; }
function curl_close($handle) {}
`
    const php = `<?php
http_response_code(200);
$_SERVER['REQUEST_METHOD'] = '${test.method || 'GET'}';
// Query parameters must never change the fixed upstream destination.
$_GET = array('url' => 'http://example.invalid/private');
register_shutdown_function(function () {
    fwrite(STDERR, 'HTTP_STATUS=' . http_response_code());
});
${mock}
require base64_decode('${Buffer.from(testEndpoint).toString('base64')}');
`
    let result
    try {
        result = spawnSync('php', ['-n', '-r', php.slice('<?php'.length)], {
            encoding: 'utf8'
        })
    } finally {
        if (fixtureDirectory) {
            fs.unlinkSync(testEndpoint)
            fs.rmdirSync(fixtureDirectory)
        }
    }
    if (result.error) throw result.error
    assert.equal(result.status, 0, result.stderr + result.stdout)
    assert.match(
        result.stderr.trim(),
        new RegExp(`HTTP_STATUS=${test.status}$`),
        test.name
    )
    if (test.status === 200) {
        assert.equal(result.stdout, test.body, test.name)
    } else {
        const error = JSON.parse(result.stdout)
        assert.equal(typeof error.message, 'string', test.name)
        if (test.code) assert.equal(error.code, test.code, test.name)
        if (test.code === 'UPSTREAM_CURL_ERROR') {
            assert.equal(error.curlCode, test.curlCode, test.name)
            assert.equal(typeof error.curlMessage, 'string', test.name)
        }
        if (
            test.code === 'UPSTREAM_HTTP_ERROR' ||
            test.code === 'UPSTREAM_CURL_ERROR'
        ) {
            assert.equal(error.upstreamStatus, test.upstreamStatus, test.name)
        }
        assert.ok(!result.stdout.includes('C:/private/ca.pem'), test.name)
    }
    console.log(`PASS ${test.name}`)
}
