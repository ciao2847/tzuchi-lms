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
    'constants': load('src/constants/index.js')
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
    let response = { success: true, data: fixture }, request, status = 200
    global.fetch = async (url, options) => {
        request = { url, ...options }
        return { ok: status < 400, status, json: async () => response }
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
    const info = { mobilephone: '0912345678', suits: { helpbuy: 'no', belt: '' } }
    response = { success: true, data: [{ register: true, type: 'success', message: '報名成功' }] }
    assert.deepEqual(await api.registerCourse('85510', { note: '分機 3347', info }, signal, 'session-key'), { message: '報名成功' })
    assert(request.url.endsWith('/course/courseRegister'))
    assert.equal(request.method, 'POST')
    assert.equal(request.headers['X-API-Key'], 'session-key')
    assert.equal(request.headers['Content-Type'], 'application/json')
    assert.equal(request.credentials, 'include')
    assert.equal(request.signal, signal)
    assert.deepEqual(JSON.parse(request.body), { courseid: 85510, note: '分機 3347', info })
    response = { success: true, data: { register: true, type: 'success', message: '報名成功' } }
    assert.deepEqual(await api.registerCourse('85511', {}, signal, 'session-key'), { message: '報名成功' })
    assert.deepEqual(JSON.parse(request.body), { courseid: 85511 })
    response = { success: true, data: { register: false, type: 'success' } }
    await assert.rejects(api.registerCourse('85511', {}, signal, 'session-key'), error => error.status === 502)
    status = 409
    response = { success: false, error: { code: 'REGISTRATION_ERROR', message: '您已報名', fields: { register: false, type: 'already', message: '您已報名' } } }
    await assert.rejects(api.registerCourse('85510', { info }, signal, 'session-key'),
        error => error.status === 409 && error.message === '您已報名' && error.fields.type === 'already')
    status = 401
    response = { success: false, error: { code: 'SESSION_EXPIRED' } }
    await assert.rejects(api.registerCourse('85510', {}, signal, 'session-key'), error => error.status === 401)
    await assert.rejects(api.cancelCourseRegistration('85510', signal, 'session-key'), error => error.status === 401)
    status = 200
    response = { success: true, data: [{ message: '取消成功' }] }
    assert.deepEqual(await api.cancelCourseRegistration('85510', signal, 'session-key'), { message: '取消成功' })
    assert(request.url.endsWith('/course/courseRegister/delete'))
    assert.equal(request.method, 'POST')
    assert.equal(request.headers['X-API-Key'], 'session-key')
    assert.equal(request.signal, signal)
    assert.deepEqual(JSON.parse(request.body), { courseid: 85510 })
    response = { success: false, error: { code: 'REGISTRATION_ERROR', message: '取消報名失敗，找不到報名資訊', fields: {} } }
    await assert.rejects(api.cancelCourseRegistration('85510', signal, 'session-key'),
        error => error.code === 'REGISTRATION_ERROR' && error.message === response.error.message)
    const registration = load('src/lib/courseRegistration.js')
    const { RegistrationDetail } = load('src/views/pick-detail/index.js', {
        'api/courseInfo': api,
        'views/course-registration': { CourseRegistrationDialog: () => null },
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
    for (const [id, flags] of [['85511', { setFamily: true }], ['85510', { setSuit: true }]]) {
        const registrationHtml = render({ ...fixture, id, signUpCheck: { canRegister: true, ...flags } })
        assert.equal((registrationHtml.match(/<button type="button" class="[^"]+">我要報名<\/button>/g) || []).length, 2)
    }
    const registeredCourse = { ...fixture, signUpCheck: { canRegister: true, setFamily: true, typeMes: { registered: true, familyString: '眷屬: 蝦' } } }
    const registeredHtml = render(registeredCourse)
    const renderCancellation = course => renderToStaticMarkup(React.createElement(RegistrationDetail, { course, onCancelled: () => {} }))
    const cancellationHtml = renderCancellation(registeredCourse)
    assert.equal((cancellationHtml.match(/>取消報名<\/button>/g) || []).length, 2)
    assert.match(cancellationHtml, /xl:hidden"><div class="grid w-full grid-cols-2 items-center gap-3"><span[^>]*>您已報名<\/span><button[^>]*bg-\[#e6f5ef\][^>]*>取消報名<\/button>/)
    assert(!renderCancellation({ ...registeredCourse, type: '1' }).includes('>取消報名</button>'))
    assert(!renderCancellation(fixture).includes('>取消報名</button>'))
    assert.equal((registeredHtml.match(/<button type="button" disabled="" class="[^"]*bg-gray-200[^"]*">您已報名<\/button>/g) || []).length, 2)
    assert.match(registeredHtml, /課程連絡人<\/h2><p[^>]*>[^<]+<\/p><\/div><\/section><div[^>]*xl:hidden[^>]*><p[^>]*>眷屬: 蝦<\/p>/)
    assert.equal((registeredHtml.match(/您已報名<\/button><p[^>]*>眷屬: 蝦<\/p>/g) || []).length, 1)
    const suitString = '身分為: 一般同仁 。<br>代購制服 : <br>&nbsp;&nbsp;&nbsp;&nbsp;灰衣5件,尺寸為XL<br>'
    const uniformHtml = render({ ...registeredCourse, signUpCheck: { typeMes: { registered: true, suitString } } })
    assert.equal(uniformHtml.split('身分為: 一般同仁 。\n代購制服 : \n\u00a0\u00a0\u00a0\u00a0灰衣5件,尺寸為XL').length - 1, 2)
    assert.match(uniformHtml, /課程連絡人<\/h2><p[^>]*>[^<]+<\/p><\/div><\/section><div[^>]*xl:hidden[^>]*><p[^>]*>身分為:/)
    assert.equal((uniformHtml.match(/您已報名<\/button><p[^>]*not-italic[^>]*>/g) || []).length, 1)
    assert(!render({ ...registeredCourse, signUpCheck: { typeMes: { registered: false, familyString: '眷屬: 蝦' } } }).includes('眷屬: 蝦'))
    const confirmedHtml = renderToStaticMarkup(React.createElement(RegistrationDetail, {
        course: { ...registeredCourse, signUpCheck: { canRegister: false } }, confirmedRegistration: true
    }))
    assert.equal((confirmedHtml.match(/>您已報名<\/button>/g) || []).length, 2)
    const phone = ['phone', '0912-345678']
    const family = new Map([
        phone,
        ['dependent-1-name', '測試一'], ['dependent-1-relationship', '父親'],
        ['dependent-1-identity', 'A1XXXXXXXX'], ['dependent-1-birthday', '1970-11-24'],
        ['dependent-3-name', '測試二'], ['dependent-3-relationship', '母親'],
        ['dependent-3-identity', 'A2XXXXXXXX'], ['dependent-3-birthday', '1971-11-24']
    ])
    assert.deepEqual(registration.buildRegistrationPayload('dependents', family), {
        mobilephone: '0912345678',
        family: [
            { name: '測試一', relationship: '父親', idcard: 'A1XXXXXXXX', birthday: '1970/11/24' },
            { name: '測試二', relationship: '母親', idcard: 'A2XXXXXXXX', birthday: '1971/11/24' }
        ]
    })
    const uniform = new Map([
        phone, ['uniform-purchase', '協請代購'], ['identity', '一般同仁'],
        ['grey_cloth-quantity', '1'], ['grey_cloth-size', 'XL'],
        ['white_pants-quantity', '1'], ['white_pants-size', 'f34'],
        ['blue_pants-quantity', '5'], ['blue_pants-size', 'm40'], ['belt-quantity', '2']
    ])
    assert.deepEqual(registration.buildRegistrationPayload('uniform', uniform), {
        mobilephone: '0912345678',
        suits: { helpbuy: 'yes', grey_cloth: 1, grey_cloth_size: 'XL', white_pants: 1, white_pants_size: 'f34', blue_pants: 5, blue_pants_size: 'm40', belt: 2, status: '一般同仁' }
    })
    uniform.set('uniform-purchase', '自行處理')
    assert.deepEqual(registration.buildRegistrationPayload('uniform', uniform).suits,
        { helpbuy: 'no', grey_cloth: '', grey_cloth_size: '', white_pants: '', white_pants_size: '', blue_pants: '', blue_pants_size: '', belt: '', status: '' })
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
    html = render({ ...fixture, type: '1', signUpCheck: { canRegister: true, typeMes: fixture.signUpCheck.typeMes } })
    assert.equal((html.match(/>我要報名</g) || []).length, 2)
    assert.equal(html.split('href="http://example.org/course?id=55124"').length - 1, 2)
    html = render({ ...fixture, id: '15561', moodle_courseid: 8949, signUpCheck: { enterCourse: true, canRegister: false } })
    assert.equal(html.split('href="http://10.2.10.236:8064/tzuchi/lms2/course/view.php?id=8949"').length - 1, 2)
    assert.equal((html.match(/target="_blank"/g) || []).length, 2)
    assert(!html.includes('id=15561') && !html.includes('disabled'))
    html = render({ ...fixture, moodle_courseid: undefined })
    assert(!html.includes('href=') && html.includes('disabled'))
    html = render({ ...fixture, type: '1', signUpCheck: { canRegister: true } })
    assert(!html.includes('href=') && html.includes('disabled'))
    html = render({ ...fixture, signUpCheck: {} })
    assert(!html.includes('course_opration.php'))
    assert(html.includes('disabled'))
    assert(!html.includes('嬰兒足底採血'))
    console.log('PASS: course info contract, validation, session expiry, real fields, multiple teachers, inline content formatting, unsafe markup removal and desktop/mobile permission actions')
}
main().catch(error => { console.error(error); process.exitCode = 1 })
