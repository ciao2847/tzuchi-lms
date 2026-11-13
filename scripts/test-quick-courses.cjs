const assert = require('node:assert/strict')
const path = require('node:path')
const Module = require('node:module')
const babel = require('@babel/core')
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const { StaticRouter } = require('react-router-dom/server')
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
const api = load('src/api/quickCourses.js', { 'lib/apiClient': client, 'constants/auth': constants })
let request
let response = { success: true, data: { branch: 'dl', total: 737, courselist: [{
    id: '85453', branchname: '大林', typename: '數位', coursename: '抗生素報告', teacher: '講師',
    coursedate: '1787120435', coursetime: '', programlist: ['學程'], isselect: '1'
}] } }
global.fetch = async (url, options) => {
    request = { url, ...options }
    return { ok: true, json: async () => response }
}
;(async () => {
    const controller = new AbortController()
    const result = await api.getQuickCourses({ branch: 'dl', keyword: '抗生素 報告', pagesize: 999 }, controller.signal)
    assert(request.url.endsWith('/course/quick'))
    assert.equal(request.method, 'POST')
    assert.equal(request.credentials, 'include')
    assert.equal(request.headers['X-API-Key'], constants.AUTH_API_KEY)
    assert.equal(request.signal, controller.signal)
    assert.deepEqual(JSON.parse(request.body), { oldcourse: 0, branch: 'dl', category: '', type: 'all', program: 'all', keyword: '抗生素 報告', page: 1, pagesize: 500 })
    assert.equal(result.total, 737)
    assert.equal(result.branch, 'dl')
    assert.equal(result.courses[0].title, '抗生素報告')
    assert.equal(result.courses[0].isSelected, true)
    assert.match(result.courses[0].date, /^\d{4}-\d{2}-\d{2}$/)
    response = { success: true, data: { total: 0, courselist: [] } }
    assert.deepEqual((await api.getQuickCourses()).courses, [])
    assert.equal(JSON.parse(request.body).pagesize, 20)
    response = { success: true, data: {} }
    await assert.rejects(api.getQuickCourses(), /回應格式異常/)
    response = { success: false, error: { code: 'SESSION_EXPIRED' } }
    await assert.rejects(api.getQuickCourses(), error => error.status === 401)
    response = { success: true, data: [
        { id: '1', branch: 'dl', name: '晨間人文' },
        { id: '399', branch: 'hl', name: '衛生醫療法規 > 人工協助生殖管理辦法' }
    ] }
    assert.deepEqual(await api.getCourseCategories(controller.signal), response.data)
    assert(request.url.endsWith('/course/category'))
    assert.equal(request.method, 'GET')
    assert.equal(request.body, undefined)
    assert.equal(request.credentials, 'include')
    assert.equal(request.headers['X-API-Key'], constants.AUTH_API_KEY)
    assert.equal(request.signal, controller.signal)
    response = { success: true, data: [] }
    assert.deepEqual(await api.getCourseCategories(), [])
    for (const data of [{}, [null], [{ id: '1', branch: 'dl' }]]) {
        response = { success: true, data }
        await assert.rejects(api.getCourseCategories(), error => error.status === 502)
    }
    response = { success: false, error: { code: 'SESSION_EXPIRED' } }
    await assert.rejects(api.getCourseCategories(), error => error.status === 401)
    const Results = load('src/components/pick/Results.js', {
        'components/I18N': ({ children }) => children,
        'components/Link': load('src/components/Link.js').default
    }).default
    const courses = [
        { id: '85453', title: '抗生素報告', programs: [] },
        { id: '85454', title: '第二堂課程', programs: [] }
    ]
    for (const viewMode of ['list', 'card']) {
        const html = renderToStaticMarkup(React.createElement(StaticRouter, { location: '/course' },
            React.createElement(Results, { data: courses, viewMode })))
        const links = [...html.matchAll(/<a\b[^>]*>/g)].map(match => match[0])
        assert.equal(links.length, courses.length, 'Each course needs one native keyboard-accessible link')
        courses.forEach((course, index) => {
            assert(links[index].includes(`href="/course/${course.id}"`))
            assert(links[index].includes(`aria-label="查看課程：${course.title}"`))
            assert(links[index].includes('focus-visible:outline'))
            assert.equal(links[index].includes('tabindex="-1"'), viewMode === 'list')
        })
        if (viewMode === 'list') {
            assert(html.includes('<table') && html.includes('scope="col"'))
            assert(html.includes('focus-within:bg-[#eaf3ff]'))
            const rows = [...html.matchAll(/<tr\b[^>]*tabindex="0"[^>]*>/g)]
            assert.equal(rows.length, courses.length, 'Each complete course row is a Tab stop')
            rows.forEach((row, index) => {
                assert(row[0].includes(`課程名稱：${courses[index].title}`))
                for (const label of ['院區', '類型', '上課時間', '講師', '報名人數', '認列學程']) {
                    assert(row[0].includes(`${label}：`))
                }
                assert(row[0].includes('focus-visible:outline'))
            })
        }
    }
    console.log('PASS: quick-course POST, defaults, page-size limit, mapping, empty/malformed data and session expiry')
    console.log('PASS: list/card course links, tab order, accessible names, focus styles and table semantics')
})().catch(error => { console.error(error); process.exitCode = 1 })
