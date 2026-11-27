const assert = require('node:assert/strict')
const path = require('node:path')
const Module = require('node:module')
const babel = require('@babel/core')
function load(file, mocks = {}) {
    const mod = new Module(path.resolve(file), module)
    mod.filename = path.resolve(file); mod.paths = module.paths
    const original = mod.require.bind(mod)
    mod.require = id => mocks[id] || original(id)
    mod._compile(babel.transformFileSync(file).code, mod.filename)
    return mod.exports
}
const client = load('src/lib/apiClient.js')
const { getLearningHistory } = load('src/api/learningHistory.js', {
    'lib/apiClient': client, 'constants': { AUTH_API_BASE: '/api', AUTH_API_KEY: 'test-key' }
})
async function main() {
    let request
    global.fetch = async (url, options) => {
        request = { url, ...options }
        return { ok: true, json: async () => ({ success: true, data: [
            { id: '35844', type: '1', coursename: '數位課程', status: '未完成', startDate: '2026-09-18 13:51', timemodified: '2026-09-18 13:51', completeTimemodified: '' },
            { id: '81769', type: '2', coursename: '實體課程', status: '通過', startDate: '2026-01-21 11:00', timemodified: '2026-04-13 08:30', completeTimemodified: '2026-04-13 09:00' }
        ] }) }
    }
    const controller = new AbortController()
    const courses = await getLearningHistory(2026, controller.signal, 'session-key')
    assert.equal(request.url, '/api/course/history/2026')
    assert.equal(request.method, 'GET')
    assert.equal(request.credentials, 'include')
    assert.equal(request.headers['X-API-Key'], 'session-key')
    assert.equal(request.signal, controller.signal)
    assert.deepEqual(courses[0], { id: '35844', title: '數位課程', type: '數位', status: 'yet', start: '2026-09-18 13:51', signedAt: '2026-09-18 13:51', passedAt: '' })
    assert.equal(courses[1].status, 'pass')
    assert.equal(courses[1].type, '實體')
    for (const year of [0, NaN, 2026.5, '2026']) await assert.rejects(getLearningHistory(year, undefined, 'session-key'))
    global.fetch = async () => ({ ok: true, json: async () => ({ success: true, data: [] }) })
    assert.deepEqual(await getLearningHistory(2025, undefined, 'session-key'), [])
    global.fetch = async () => ({ ok: true, json: async () => ({ success: true, data: {} }) })
    await assert.rejects(getLearningHistory(2026, undefined, 'session-key'), error => error.status === 502)
    global.fetch = async () => ({ ok: false, status: 401, json: async () => ({ success: false, error: { code: 'SESSION_EXPIRED' } }) })
    await assert.rejects(getLearningHistory(2026, undefined, 'session-key'), error => error.status === 401)
    const React = require('react')
    const slots = [], pending = [], requests = []
    let cursor = 0, expired = 0
    const context = { isLogin: true, sessionStatus: 'success', user: { id: 'user' }, expireSession: () => expired++ }
    const fakeReact = {
        ...React, useContext: () => context,
        useState: initial => {
            const i = cursor++
            if (!(i in slots)) slots[i] = typeof initial === 'function' ? initial() : initial
            return [slots[i], value => { slots[i] = typeof value === 'function' ? value(slots[i]) : value }]
        },
        useEffect: (effect, deps) => {
            const i = cursor++
            if (slots[i] && deps.every((value, index) => Object.is(value, slots[i].deps[index]))) return
            slots[i]?.cleanup?.()
            slots[i] = { deps }
            pending.push(() => { slots[i].cleanup = effect() })
        }
    }
    const Annual = load('src/views/calendar/AnnualLearningHistory.js', {
        react: fakeReact, 'contexts/LoginProvider': { LoginContext: {} },
        'components/Spinner': () => null, 'components/EmptyState': () => null, './LearningHistory': () => null,
        'api/learningHistory': { getLearningHistory: (year, signal) => new Promise((resolve, reject) => requests.push({ year, signal, resolve, reject })) }
    }).default
    const render = () => { cursor = 0; const tree = Annual(); pending.splice(0).forEach(effect => effect()); return tree.props }
    const flush = () => new Promise(resolve => setImmediate(resolve))
    let view = render()
    assert.equal(view.status, 'loading')
    requests[0].resolve(courses); await flush()
    assert.equal(render().courses.length, 2)
    view.onYearChange(2025)
    view = render()
    assert.equal(view.status, 'loading')
    assert.equal(requests.at(-1).year, 2025)
    assert.equal(requests[0].signal.aborted, true)
    view.onYearChange(2024)
    render()
    requests[1].resolve(courses); await flush()
    assert.equal(render().status, 'loading', 'An older year must not replace the current year')
    requests.at(-1).reject(new TypeError('Network')); await flush()
    view = render()
    assert.equal(view.status, 'error')
    assert.equal(view.statusContent.props.children, undefined, 'Error shows only the empty state without retry controls')
    view.onYearChange(2022)
    render()
    requests.at(-1).resolve([]); await flush()
    assert.equal(render().status, 'success')
    assert.deepEqual(render().courses, [])
    render().onYearChange(2023); render()
    requests.at(-1).reject({ status: 401, message: 'Expired' }); await flush()
    assert.equal(expired, 1)
    console.log('PASS: history GET/year, cookies/auth header, field mapping, empty/malformed response and session expiry')
    console.log('PASS: annual loading, year changes, stale requests, error empty state, empty year and 401 expiration')
}
main().catch(error => { console.error(error); process.exitCode = 1 })
