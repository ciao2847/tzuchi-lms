const assert = require('node:assert/strict')
const path = require('node:path')
const Module = require('node:module')
const babel = require('@babel/core')
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
function load(file, mocks = {}) {
    const mod = new Module(path.resolve(file), module)
    mod.filename = path.resolve(file)
    mod.paths = module.paths
    const original = mod.require.bind(mod)
    mod.require = id => mocks[id] || original(id)
    mod._compile(babel.transformFileSync(file).code, mod.filename)
    return mod.exports
}
const api = load('src/api/courseInfo.js', {
    'lib/apiClient': load('src/lib/apiClient.js'),
    'constants/auth': load('src/constants/auth.js')
})
const fixture = {
    id: '70614', year: 113, type: '2', coursename: '課程 API 測試',
    teacher: [{ id: '1', name: '講師甲', company: '大林', jobname: '顧問' }, { id: '2', name: '講師乙' }],
    category: { '891': '病人安全', '1055': '醫療品質' },
    program: [{ id: '1', name: '核心課程', program: '認證學程', credit: '1' }],
    student: ['全院同仁'], completion: ['課後評量', '滿意度問卷'],
    startdate: '2024-12-13', starthh: '16', startmm: '30', enddate: '2024-12-13', endhh: '17', endmm: '30',
    classroom: '2', classroomother: '', length: 60, contacter: '負責人/5410',
    outline: '<ul><li>大綱</li></ul><script>alert(1)</script>',
    moodle_courseid: '69635',
    signUpCheck: { enterCourse: true, canRegister: false, typeMes: { moodleUrl: ' http://example.org/course?id=55124 ' }, message: { register: '報名截止' } }
}
async function main() {
    let response = { success: true, data: fixture }, request
    global.fetch = async (url, options) => {
        request = { url, ...options }
        return { ok: true, json: async () => response }
    }
    const signal = new AbortController().signal
    assert.deepEqual(await api.getCourseInfo('70614', signal, 'session-key'), fixture)
    assert(request.url.endsWith('/course/courseInfo/70614'))
    assert.equal(request.method, 'GET')
    assert.equal(request.credentials, 'include')
    assert.equal(request.signal, signal)
    assert.equal(request.headers['X-API-Key'], 'session-key')
    assert.equal(request.body, undefined)
    await assert.rejects(api.getCourseInfo('', undefined, 'session-key'), error => error.status === 400)
    for (const data of [null, [], {}, { ...fixture, id: 'wrong' }, { ...fixture, type: '3' }]) {
        response = { success: true, data }
        await assert.rejects(api.getCourseInfo('70614', undefined, 'session-key'), error => error.status === 502)
    }
    response = { success: false, error: { code: 'SESSION_EXPIRED' } }
    await assert.rejects(api.getCourseInfo('70614', undefined, 'session-key'), error => error.status === 401)
    const { RegistrationDetail } = load('src/views/pick-detail/index.js', {
        'api/courseInfo': api,
        'components/AutoSwitchLink': load('src/components/AutoSwitchLink.js', {
            'components/Link': ({ href, children, ...props }) => React.createElement('a', { href, ...props }, children),
            hooks: { useLocale: () => 'zh-tw' },
            'components/I18N': { translate: value => value }
        }).default,
        'contexts/LoginProvider': { LoginContext: React.createContext({}) },
        'components/I18N': ({ children }) => children,
        'components/TitleBlk': () => null,
        'components/Spinner': () => null,
        'components/DashboardStatus': () => null,
        'components/CourseHtml': load('src/components/CourseHtml.js').default
    })
    const render = course => renderToStaticMarkup(React.createElement(RegistrationDetail, { course }))
    let html = render({ ...fixture, classroom: '測試教室 A', classroomother: '其他地點 B' })
    assert(html.includes('測試教室 A') && !html.includes('其他地點 B'))
    for (const text of ['課程 API 測試', '講師甲', '講師乙', '病人安全', '醫療品質', '核心課程', '認證學程', '2024-12-13 16:30', '60 分鐘', '報名截止']) assert(html.includes(text), text)
    assert.equal((html.match(/>進入課程</g) || []).length, 2, 'Desktop and mobile actions use the API permission')
    assert.equal(html.split('href="http://10.2.10.236:8064/tzuchi/lms2/course/view.php?id=69635"').length - 1, 2)
    assert.equal((html.match(/target="_blank"/g) || []).length, 2)
    assert(!html.includes('course_opration.php'))
    assert(html.includes('<ul><li>大綱</li></ul>'))
    assert(!html.includes('<iframe') && !html.includes('min-h-[180px]'))
    assert(!html.includes('<script>'))
    const CourseHtml = load('src/components/CourseHtml.js').default
    const rich = renderToStaticMarkup(React.createElement(CourseHtml, { html: '<p onclick="alert(1)">第一段<br>換行 &amp; 文字</p><ol><li><strong>重點</strong></li></ol><img src="x" onerror="alert(1)"><svg><script>alert(1)</script></svg><a href="javascript:alert(1)">連結文字</a><style>body{display:none}</style>' }))
    assert(rich.includes('<p>第一段<br/>換行 &amp; 文字</p>'))
    assert(rich.includes('<ol><li><strong>重點</strong></li></ol>'))
    assert(rich.includes('連結文字'))
    for (const unwanted of ['onclick', 'onerror', '<img', '<svg', '<script', 'javascript:', '<style', 'display:none']) assert(!rich.includes(unwanted), unwanted)
    html = render({ ...fixture, signUpCheck: { canRegister: true, typeMes: fixture.signUpCheck.typeMes } })
    assert.equal((html.match(/>我要報名</g) || []).length, 2)
    assert.equal(html.split('href="http://example.org/course?id=55124"').length - 1, 2)
    html = render({ ...fixture, id: '15561', moodle_courseid: 8949, signUpCheck: { enterCourse: true, canRegister: false } })
    assert.equal(html.split('href="http://10.2.10.236:8064/tzuchi/lms2/course/view.php?id=8949"').length - 1, 2)
    assert.equal((html.match(/target="_blank"/g) || []).length, 2)
    assert(!html.includes('id=15561') && !html.includes('disabled'))
    html = render({ ...fixture, moodle_courseid: undefined })
    assert(!html.includes('href=') && html.includes('disabled'))
    html = render({ ...fixture, signUpCheck: { canRegister: true } })
    assert(!html.includes('href=') && html.includes('disabled'))
    html = render({ ...fixture, signUpCheck: {} })
    assert(!html.includes('course_opration.php'))
    assert(html.includes('disabled'))
    assert(!html.includes('嬰兒足底採血'))
    console.log('PASS: course info contract, validation, session expiry, real fields, multiple teachers, inline content formatting, unsafe markup removal and desktop/mobile permission actions')
}
main().catch(error => { console.error(error); process.exitCode = 1 })
