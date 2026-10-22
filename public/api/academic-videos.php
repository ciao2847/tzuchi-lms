<?php
// Same-origin endpoint for the public academic lecture feed.
// The upstream URL is fixed: callers cannot choose a proxy destination.
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function speech_proxy_error($status, $message, $details = array())
{
    http_response_code($status);
    header('Cache-Control: no-store');
    echo json_encode(array_merge(array('message' => $message), $details));
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'GET') {
    header('Allow: GET');
    speech_proxy_error(405, 'Method not allowed');
}

if (!function_exists('curl_init')) {
    speech_proxy_error(503, 'Speech proxy requires the PHP cURL extension');
}

$ca_bundle = __DIR__ . '/cacert.pem';
if (!is_readable($ca_bundle)) {
    speech_proxy_error(503, 'Speech proxy CA bundle is missing or unreadable', array(
        'code' => 'CA_BUNDLE_UNAVAILABLE'
    ));
}

$handle = curl_init('https://nlms.tzuchi.com.tw/speech/sp.json');
if ($handle === false) {
    speech_proxy_error(502, 'Unable to initialize the speech data request');
}

$body = '';
$too_large = false;
curl_setopt_array($handle, array(
    CURLOPT_CONNECTTIMEOUT => 5,
    CURLOPT_TIMEOUT => 15,
    CURLOPT_FOLLOWLOCATION => false,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_SSL_VERIFYHOST => 2,
    CURLOPT_CAINFO => $ca_bundle,
    CURLOPT_HTTPHEADER => array('Accept: application/json'),
    CURLOPT_WRITEFUNCTION => function ($handle, $chunk) use (&$body, &$too_large) {
        // Bound memory use even when the upstream sends an unexpected response.
        if (strlen($body) + strlen($chunk) > 5 * 1024 * 1024) {
            $too_large = true;
            return 0;
        }
        $body .= $chunk;
        return strlen($chunk);
    }
));

$result = curl_exec($handle);
$upstream_status = curl_getinfo($handle, CURLINFO_HTTP_CODE);
$curl_code = curl_errno($handle);
$curl_error = curl_error($handle);
curl_close($handle);

if ($result === false || $too_large || $upstream_status !== 200) {
    // Keep detailed connection errors (which can contain local paths) in the
    // server log. Return only codes and the generic cURL description to clients.
    error_log('[speech-proxy] ' . json_encode(array(
        'curlCode' => $curl_code,
        'curlError' => $curl_error,
        'upstreamStatus' => $upstream_status,
        'tooLarge' => $too_large
    )));

    if ($too_large) {
        speech_proxy_error(502, 'Academic lecture response exceeds the size limit', array(
            'code' => 'UPSTREAM_RESPONSE_TOO_LARGE'
        ));
    }

    if ($result === false) {
        speech_proxy_error(502, 'Unable to retrieve academic lecture data', array(
            'code' => 'UPSTREAM_CURL_ERROR',
            'curlCode' => $curl_code,
            'curlMessage' => curl_strerror($curl_code),
            'upstreamStatus' => $upstream_status
        ));
    }

    speech_proxy_error(502, 'Academic lecture source returned an unexpected HTTP status', array(
        'code' => 'UPSTREAM_HTTP_ERROR',
        'upstreamStatus' => $upstream_status
    ));
}

$data = json_decode($body);
if (json_last_error() !== JSON_ERROR_NONE || !is_array($data)) {
    speech_proxy_error(502, 'Invalid academic lecture data', array(
        'code' => 'UPSTREAM_INVALID_JSON_ARRAY'
    ));
}

header('Cache-Control: no-store');
echo $body;
