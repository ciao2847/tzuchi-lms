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
    mod.require = id => mocks[id] || (id === 'components/Spinner' ? load('src/components/Spinner.js').default : original(id))
    mod._compile(babel.transformFileSync(file).code, mod.filename)
    return mod.exports
}
const flush = () => new Promise(resolve => setImmediate(resolve))
const { adaptProgramInfo } = load('src/adapters/programAdapter.js')
const fixture = {
    totalCredit: 19, passCredit: 4, passRealCredit: 2,
    programCategory: { '14818': {
        name: '健康促進', credit: '6', status: ['p', 'p', 'q', 'w', 'd.', 'd', 'o', '?'],
        course: [
            { id: 1, name: 'Completed', status: '通過', type: '實體' },
            { id: 2, name: 'Available', status: '', type: '數位' },
            { id: 3, name: 'Morning marker', status: '[morning]' },
            { id: 4, name: 'Other marker', status: 'OTHER' },
            { id: 5, name: 'Unfinished', status: '未完成' },
            { name: 'No course ID', status: '通過' }
        ]
    } }
}
const adapted = adaptProgramInfo(fixture)
assert.deepEqual(adapted.categories[0].states, ['complete', 'complete', 'overdueComplete', 'inProgress', 'failed', 'failed', 'notStarted', 'unknown'])
assert.equal(adapted.totalCredit, 19)
assert.equal(adapted.passCredit, 4)
assert.equal(adapted.passRealCredit, 2)
assert.equal(adaptProgramInfo({ programCategory: {} }).categories.length, 0)
for (const value of [null, {}, { programCategory: [] }, { programCategory: { a: null } },
    { programCategory: { a: { course: [null] } } }, { programCategory: { a: { status: 'p' } } },
    { programCategory: {}, totalCredit: {} }]) {
    assert.throws(() => adaptProgramInfo(value), /回應格式異常/)
}

let manualRender = false, cursor = 0, slots = [], effectSlot, queuedEffect
let login = { user: { id: 'u1' }, expireSession: () => { expired++ } }, expired = 0
const requests = []
const fakeReact = {
    ...React,
    useContext: context => manualRender ? login : React.useContext(context),
    useState: initial => {
        if (!manualRender) return React.useState(initial)
        const index = cursor++
        if (!(index in slots)) slots[index] = typeof initial === 'function' ? initial() : initial
        return [slots[index], value => { slots[index] = typeof value === 'function' ? value(slots[index]) : value }]
    },
    useEffect: (effect, deps) => {
        if (!manualRender) return React.useEffect(effect, deps)
        if (!effectSlot || deps.some((value, index) => value !== effectSlot.deps[index])) {
            queuedEffect = () => {
                effectSlot?.cleanup?.()
                effectSlot = { deps, cleanup: effect() }
            }
        }
    }
}
const { ProgramDetails, CourseProgressTable, ProgressCourseList } = load('src/views/calendar/index.js', {
    react: fakeReact,
    'hooks/useMedia': () => false,
    'contexts/LoginProvider': { LoginContext: React.createContext(login) },
    'contexts/DashboardProvider': { DashboardContext: React.createContext({}) },
    'api/dashboard': { getProgramInfo: (id, signal) => new Promise((resolve, reject) => requests.push({ id, signal, resolve, reject })) },
    'adapters/dashboardAdapter': {},
    './LearningHistory': () => null,
    './AnnualLearningHistory': () => null,
    './ExternalHistory': () => null,
    './SearchableProgramSelector': () => null,
    'components/DashboardStatus': () => null,
    '@fullcalendar/react': () => null,
    '@fullcalendar/react/daygrid': {},
    '@fullcalendar/react/themes/classic': {},
    'components/I18N': ({ children }) => children,
    'components/AutoSwitchLink': ({ href, children, ...props }) => React.createElement('a', { href, ...props }, children),
    'components/NotificationDetailDialog': () => null,
    'components/Select': () => null,
    'components/TitleBlk': () => null,
    'components/Spinner': load('src/components/Spinner.js').default
})

const markup = component => renderToStaticMarkup(component)
const courses = adapted.categories[0].courses
const list = markup(React.createElement(ProgressCourseList, { courses, emptyText: 'Empty' }))
assert(list.includes('/course/1"') && list.includes('/course/2"') && list.includes('/course/5"'))
assert(!list.includes('/course/3"') && !list.includes('/course/4"') && !list.includes('id=undefined'))
const table = markup(React.createElement(CourseProgressTable, { categories: adapted.categories }))
assert.equal((table.match(/<button\b/g) || []).length, adapted.categories.length, 'Category and progress share one keyboard-focusable button')
assert(/colspan="2"/i.test(table) && table.includes('修課情況：'))
assert(table.includes('focus-visible:outline-offset-[-2px]'))
assert.equal((table.match(/state-03\.png/g) || []).length, 2)
assert(table.includes('state-05.png') && table.includes('state-04.png') && table.includes('未知燈號'))
const completedSection = table.slice(table.indexOf('◎已上課程資訊'), table.indexOf('◎其他可選之課程'))
assert(completedSection.includes('Completed') && completedSection.includes('Unfinished') && !completedSection.includes('Available'))
const availableSection = table.slice(table.indexOf('◎其他可選之課程'))
assert(availableSection.includes('Available') && !availableSection.includes('Morning marker'))

function render(id = '3324', runEffect = true) {
    cursor = 0
    manualRender = true
    let tree
    try { tree = ProgramDetails({ programId: id }) } finally { manualRender = false }
    if (runEffect && queuedEffect) { const effect = queuedEffect; queuedEffect = null; effect() }
    return tree
}

;(async () => {
    assert(markup(render()).includes('aria-busy="true"'))
    requests[0].resolve(adapted)
    await flush()
    assert(markup(render()).includes('應完成總學分：19'))
    // Old data must disappear immediately, even before the new effect starts.
    assert(!markup(render('3325', false)).includes('應完成總學分：19'))
    render('3325')
    assert(requests[0].signal.aborted)
    render('3326')
    requests[1].resolve({ ...adapted, totalCredit: 99 })
    await flush()
    assert(!markup(render('3326')).includes('應完成總學分：99'))
    requests[2].reject(Object.assign(new Error('expired'), { status: 401 }))
    await flush()
    const expiredMarkup = markup(render('3326'))
    assert(expiredMarkup.includes('role="alert"') && expiredMarkup.includes('重新登入') && !expiredMarkup.includes('載入中'))
    assert.equal(expired, 1)
    render('3327')
    requests[3].reject(new Error('學程不存在'))
    await flush()
    assert(markup(render('3327')).includes('學程不存在'))
    const retryTree = render('3327')
    React.Children.toArray(retryTree.props.children).find(child => child.type === 'button').props.onClick()
    render('3327')
    assert(requests.length === 5)
    requests[4].resolve({ ...adapted, categories: [] })
    await flush()
    assert(markup(render('3327')).includes('暫無資料'))
    login = { ...login, user: { id: 'u2' } }
    assert(markup(render('3327')).includes('aria-busy="true"'))
    effectSlot?.cleanup?.()
    console.log('PASS: program lights/counts, credits, malformed data, course groups/links, loading, expiry, retry, cancellation and stale data')
})().catch(error => { console.error(error); process.exitCode = 1 })
