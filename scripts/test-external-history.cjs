const assert = require('node:assert/strict')
const path = require('node:path')
const Module = require('node:module')
const babel = require('@babel/core')
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
function load(file, mocks = {}) {
    const mod = new Module(path.resolve(file), module)
    mod.filename = path.resolve(file); mod.paths = module.paths
    const original = mod.require.bind(mod)
    mod.require = id => mocks[id] || original(id)
    mod._compile(babel.transformFileSync(file).code, mod.filename)
    return mod.exports
}
async function main() {
    const client = load('src/lib/apiClient.js')
    const api = load('src/api/externalHistory.js', {
        'lib/apiClient': client, 'constants/auth': { AUTH_API_BASE: '/api', AUTH_API_KEY: 'test-key' }
    })
    const record = { id: '3433', source: 'lms', coursename: '外訓測試', cost: '0', pubCost: '自主外訓', status: '通過',
        startTime: '2026年07月14日', endTime: '2026年07月14日', resource: { status: '不需', time: '1970年01月01日' },
        feedback: { status: '完成', time: '2026-07-14', feedbackInfo: [{ title: '課程評價', feedbackText: '非常滿意' }] },
        haslearned: { status: '完成', count: 4, artical: '學習心得', time: '2026-07-14' }, file: [] }
    let request
    global.fetch = async (url, options) => {
        request = { url, ...options }
        return { ok: true, json: async () => ({ success: true, data: [record] }) }
    }
    const controller = new AbortController()
    assert.deepEqual(await api.getExternalHistory(2026, controller.signal, 'session-key'), [record])
    assert.equal(request.url, '/api/course/outerHistory/2026')
    assert.equal(request.method, 'GET')
    assert.equal(request.credentials, 'include')
    assert.equal(request.cache, 'no-store')
    assert.equal(request.signal, controller.signal)
    assert.equal(request.headers['X-API-Key'], 'session-key')
    for (const year of [0, '2026', 2026.5, NaN]) await assert.rejects(api.getExternalHistory(year, undefined, 'session-key'))
    for (const data of [{}, [null], [{ id: '1' }]]) {
        global.fetch = async () => ({ ok: true, json: async () => ({ success: true, data }) })
        await assert.rejects(api.getExternalHistory(2026, undefined, 'session-key'), error => error.status === 502)
    }
    global.fetch = async () => ({ ok: true, json: async () => ({ success: true, data: [] }) })
    assert.deepEqual(await api.getExternalHistory(2025, undefined, 'session-key'), [])
    global.fetch = async () => ({ ok: false, status: 404, json: async () => ({ errorMessage: 'Not found.' }) })
    await assert.rejects(api.getExternalHistory(2026, undefined, 'session-key'), error => error.status === 404)
    global.fetch = async () => ({ ok: true, json: async () => ({ success: false, error: { code: 'SESSION_EXPIRED' } }) })
    await assert.rejects(api.getExternalHistory(2026, undefined, 'session-key'), error => error.status === 401)
    global.window = { location: { origin: 'http://localhost' } }
    const view = load('src/views/calendar/ExternalHistory.js', {
        'api/externalHistory': api,
        './AnnualLearningHistory': () => null,
        'components/AutoSwitchLink': ({ children }) => children
    })
    assert.equal(view.displayDate('1970年01月01日'), '—')
    assert.equal(view.attachmentUrl('javascript:alert(1)'), null)
    assert.equal(view.attachmentUrl({ url: '/file/1' }), 'http://localhost/file/1')
    for (const viewMode of ['list', 'card']) {
        const html = renderToStaticMarkup(React.createElement(view.ExternalHistoryResults, { data: [record], viewMode }))
        for (const text of ['外訓測試', '自主外訓', '通過', '檢視滿意度', '檢視心得', '工作計畫', '轉訓', '附件']) assert.ok(html.includes(text), text)
        assert.ok(!html.includes('1970'))
        for (const text of ['<dialog', '題目', '1.課程評價', '非常滿意', 'method="dialog"']) assert.ok(html.includes(text), text)
    }
    let dialogsOpened = 0
    const alerts = []
    window.alert = value => alerts.push(value)
    function visit(element) {
        if (!element || typeof element !== 'object') return
        if (typeof element.type === 'function') return visit(element.type(element.props))
        if (element.type === 'button' && element.props.onClick) element.props.onClick({ currentTarget: { nextElementSibling: { showModal: () => dialogsOpened++ } } })
        React.Children.forEach(element.props?.children, visit)
    }
    visit(view.ExternalHistoryResults({ data: [record], viewMode: 'card' }))
    assert.equal(dialogsOpened, 1)
    assert.ok(alerts.some(text => text.includes('學習心得')))
    console.log('PASS: external history request, validation, empty/session errors, card/table fields, placeholder dates, attachment safety, satisfaction dialog and reflection alert')
}
main().catch(error => { console.error(error); process.exitCode = 1 })
