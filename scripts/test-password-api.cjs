const assert = require('node:assert/strict')
const path = require('node:path')
const Module = require('node:module')
const React = require('react')
function load(file, mocks = {}) {
    const mod = new Module(path.resolve(file), module)
    mod.filename = path.resolve(file); mod.paths = module.paths
    const original = mod.require.bind(mod)
    mod.require = id => mocks[id] || original(id)
    mod._compile(require('@babel/core').transformFileSync(file).code, mod.filename)
    return mod.exports
}
async function main() {
    const api = load('src/api/auth.js', {
        'lib/apiClient': load('src/lib/apiClient.js'),
        'constants/auth': { AUTH_API_BASE: '/api', AUTH_API_KEY: 'test-key' }
    })
    const requests = []
    let response = { success: true, data: [{ meaage: 'OK' }] }, status = 200
    global.fetch = async (url, options) => {
        requests.push({ url, ...options })
        return { ok: status === 200, status, json: async () => response }
    }
    const signal = new AbortController().signal
    await api.forgetPassword({ uid: ' TEST ', userkey: 'session-key' }, signal)
    await api.changePassword({ uid: ' TEST ', oldpwd: ' old1 ', newpwd: ' new2 ', userkey: 'session-key' }, signal)
    await api.keepPassword({ uid: ' TEST ', userkey: 'session-key' }, signal)
    assert.equal(requests[0].url, '/api/forgetPassword')
    assert.equal(requests[1].url, '/api/changePassword')
    assert.equal(requests[2].url, '/api/keepPassword')
    assert.deepEqual(JSON.parse(requests[0].body), { uid: 'TEST' })
    assert.deepEqual(JSON.parse(requests[1].body), { uid: 'TEST', oldpwd: ' old1 ', newpwd: ' new2 ' })
    assert.deepEqual(JSON.parse(requests[2].body), { uid: 'TEST' })
    for (const request of requests) {
        assert.equal(request.method, 'POST')
        assert.equal(request.credentials, 'include')
        assert.equal(request.cache, 'no-store')
        assert.equal(request.headers['X-API-Key'], 'session-key')
        assert.equal(request.headers['Content-Type'], 'application/json')
        assert.equal(request.signal, signal)
    }
    await assert.rejects(api.changePassword({ uid: 'TEST' }), { status: 401 })
    await assert.rejects(api.keepPassword({ uid: 'TEST' }), { status: 401 })
    await assert.rejects(api.forgetPassword({ uid: 'TEST' }), { status: 401 })
    assert.equal(requests.length, 3)
    for (const code of ['DATA_EMPTY', 'LDAP_PWD_CHANGE_ERROR', 'PWD_CHANGE_ERROR', 'SESSION_USER_ERROR', 'SESSION_EXPIRED']) {
        response = { success: false, error: { code, message: code === 'DATA_EMPTY' ? '無資料' : undefined, fields: {} } }
        for (status of [200, 403]) {
            const request = code === 'DATA_EMPTY'
                ? api.forgetPassword({ uid: 'TEST', userkey: 'session-key' })
                : api.changePassword({ uid: 'TEST', oldpwd: 'old1', newpwd: 'new2', userkey: 'session-key' })
            await assert.rejects(request, error => error.code === code && !error.message.includes('HTTP') && (code !== 'SESSION_EXPIRED' || error.status === 401) && (status !== 403 || code === 'SESSION_EXPIRED' || error.status === 403))
        }
    }
    let calls = 0, resolveRequest, resets = 0
    const state = []
    let isLogin = false
    const Page = load('src/views/forgot-password/index.js', {
        react: { ...React, useContext: () => ({ isLogin, user: isLogin ? { userkey: 'session-key' } : {} }), useId: () => 'test', useRef: value => ({ current: value }), useState: value => [value, next => state.push(next)] },
        'api/auth': { forgetPassword: payload => { calls++; assert.deepEqual(payload, { uid: 'TEST', userkey: 'session-key' }); return new Promise(resolve => { resolveRequest = resolve }) } },
        'contexts/LoginProvider': { LoginContext: {} },
        'components/AutoSwitchLink': () => null
    }).default
    function find(node) {
        if (!React.isValidElement(node)) return null
        if (node.type === 'form') return node
        for (const child of React.Children.toArray(node.props.children)) { const result = find(child); if (result) return result }
        return null
    }
    assert.equal(find(Page()), null)
    isLogin = true
    const form = find(Page())
    const html = require('react-dom/server').renderToStaticMarkup(form)
    assert.equal((html.match(/<input\b/g) || []).length, 1)
    assert(!/captcha|加總|總和/i.test(html))
    const submit = form.props.onSubmit
    const originalFormData = global.FormData
    global.FormData = class { get() { return ' TEST ' } }
    try {
        const event = { preventDefault() {}, currentTarget: { reset() { resets++ } } }
        const pending = submit(event)
        await submit(event)
        assert.equal(calls, 1)
        assert.equal(resets, 0)
        resolveRequest({ success: true })
        await pending
        assert.equal(resets, 1)
        assert.ok(state.includes(true))
    } finally { global.FormData = originalFormData }
    console.log('PASS: password API payloads, headers, cookies, error codes, session expiry and forgot-password submission')
}
main().catch(error => { console.error(error); process.exitCode = 1 })
