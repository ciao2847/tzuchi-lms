const assert = require('node:assert/strict')
const path = require('node:path')
const Module = require('node:module')
const babel = require('@babel/core')
function load(file, mocks = {}) {
    const mod = new Module(path.resolve(file), module)
    mod.filename = path.resolve(file)
    mod.paths = module.paths
    const original = mod.require.bind(mod)
    mod.require = id => mocks[id] || original(id)
    mod._compile(babel.transformFileSync(file).code, mod.filename)
    return mod.exports
}
const client = load('src/lib/apiClient.js')
const constants = load('src/constants/auth.js')
const mocks = { 'lib/apiClient': client, 'constants/auth': constants }
const auth = load('src/api/auth.js', mocks)
const dashboard = load('src/api/dashboard.js', { ...mocks,
    'adapters/dashboardAdapter': load('src/adapters/dashboardAdapter.js'),
    'adapters/programAdapter': load('src/adapters/programAdapter.js')
})
let requests = [], status = 200, body = { success: true, data: {} }
global.fetch = async (url, options) => {
    requests.push({ url, ...options })
    return { ok: status >= 200 && status < 300, status, json: async () => body }
}
const last = () => requests[requests.length - 1]
;(async () => {
    const signal = new AbortController().signal
    await auth.login({ uid: ' user ', pwd: ' password ', keeplogin: true }, signal)
    assert(last().url.endsWith('/login'))
    assert.equal(last().method, 'POST')
    assert.equal(last().credentials, 'include')
    assert.equal(last().headers['Content-Type'], 'application/json')
    assert.equal(last().headers['X-API-Key'], constants.AUTH_API_KEY)
    assert.equal(last().signal, signal)
    assert.deepEqual(JSON.parse(last().body), { uid: 'user', pwd: ' password ', keeplogin: 1 })
    await auth.login({ uid: 'user', pwd: 'password' })
    assert.equal(JSON.parse(last().body).keeplogin, 0)
    for (const value of [true, 1, '1', false, 0, '0', 'false', null]) {
        await auth.login({ uid: 'user', pwd: 'password', keeplogin: value })
        assert.equal(JSON.parse(last().body).keeplogin, [true, 1, '1'].includes(value) ? 1 : 0)
    }
    for (const [action, route] of [[auth.checkSession, '/session'], [auth.logout, '/logout']]) {
        await action(signal)
        assert(last().url.endsWith(route))
        assert.equal(last().method, 'POST')
        assert.equal(last().credentials, 'include')
        assert(!('body' in last()))
    }
    for (const httpStatus of [200, 401]) {
        status = httpStatus
        body = { success: false, error: { code: 'SESSION_EXPIRED', message: '登入時效已過期或尚未登入，請重新登入', fields: {} } }
        for (const action of [auth.checkSession, auth.logout, () => dashboard.getDashboard(undefined, 'session-key'), () => dashboard.getProgramInfo('3324', undefined, 'session-key')]) {
            await assert.rejects(action(), error => error.status === 401 && error.code === 'SESSION_EXPIRED' && error.message === body.error.message)
        }
    }
    for (const httpStatus of [200, 403, 404]) {
        status = httpStatus
        for (const code of ['PROGRAM_ERROR', 'INPUTDATA_EMPTY']) {
            body = { success: false, error: { code, message: `後端訊息 ${code}`, fields: { programid: 'invalid' } } }
            await assert.rejects(dashboard.getProgramInfo('3324', undefined, 'session-key'), error => error.code === code && error.message === body.error.message && error.fields.programid === 'invalid')
        }
    }
    status = 401
    body = { success: false, error: { code: 'AUTH_ACCOUNT_ERROR', message: '帳號或密碼不符', fields: {} } }
    await assert.rejects(auth.login({ uid: 'user', pwd: 'bad' }), error => error.code === 'AUTH_ACCOUNT_ERROR' && error.message === '帳號或密碼不符')
    for (const httpStatus of [200, 403]) {
        status = httpStatus
        for (const [code, message, expected] of [
            ['DATA_EMPTY', '', '無資料'],
            ['AUTH_ACCOUNT_LOCK', ' ', '帳號連續輸入錯誤密碼5次，帳號已鎖定，請5分鐘後再嘗試'],
            ['AUTH_ACCOUNT_DISABLED', '', '此帳號已被停用'],
            ['AUTH_ACCOUNT_ERROR', '', '帳號或密碼不符'],
            ['AUTH_ACCOUNT_ERROR', '登入錯誤', '登入錯誤'],
            ['', '', '登入失敗，請稍後再試。']
        ]) {
            body = { success: false, error: { code, message, fields: {} } }
            await assert.rejects(auth.login({ uid: 'user', pwd: 'bad' }), { message: expected })
        }
    }
    const before = requests.length
    await assert.rejects(dashboard.getProgramInfo('  ', undefined, 'session-key'), error => error.code === 'INPUTDATA_EMPTY')
    await assert.rejects(dashboard.getDashboard(), { status: 401 })
    assert.equal(requests.length, before)
    status = 200; body = null
    await assert.rejects(auth.checkSession(), /無法確認登入狀態/)
    body = { success: true, data: null }
    await assert.rejects(auth.checkSession(), /回應格式異常/)
    global.window = { location: { href: 'https://frontend.example/' } }
    const modCount = requests.length
    await auth.requestModLogin('')
    await auth.requestModLogin(null)
    await auth.requestModLogin('javascript:alert(1)')
    assert.equal(requests.length, modCount)
    await auth.requestModLogin('https://moodle.example/auto-login')
    assert.equal(last().mode, 'no-cors')
    assert.equal(last().credentials, 'include')
    assert(!last().headers) // API key is never forwarded to Moodle.
    console.log('PASS: auth/dashboard contracts, credentials, nested errors, session expiry, invalid IDs/responses and Moodle background request')
})().catch(error => { console.error(error); process.exitCode = 1 })
