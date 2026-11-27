const assert = require('node:assert/strict')
const path = require('node:path')
const Module = require('node:module')
const babel = require('@babel/core')
const React = require('react')
const flush = () => new Promise(resolve => setImmediate(resolve))
function mount(initialContext = {}) {
    let slots = [], cursor = 0, effects = []
    const requests = []
    let categoryRequests = 0
    const context = { isLogin: true, user: { id: 'user' }, sessionStatus: 'success', expireSession: () => {}, ...initialContext }
    const fakeReact = {
        ...React, memo: component => component, useContext: () => context,
        useState: initial => {
            const i = cursor++
            if (!(i in slots)) slots[i] = typeof initial === 'function' ? initial() : initial
            return [slots[i], value => { slots[i] = typeof value === 'function' ? value(slots[i]) : value }]
        },
        useRef: initial => { const i = cursor++; return slots[i] ||= { current: initial } },
        useEffect: (effect, deps) => {
            const i = cursor++
            if (slots[i] && deps.every((value, index) => Object.is(value, slots[i].deps[index]))) return
            slots[i]?.cleanup?.()
            slots[i] = { deps }
            effects.push(() => { slots[i].cleanup = effect() })
        }
    }
    const Select = () => null, KeywordSearchRow = () => null
    const mocks = {
        react: fakeReact,
        'api/quickCourses': {
            getQuickCourses: (filters, signal) => new Promise(resolve => requests.push({ filters, signal, resolve })),
            getCourseCategories: async () => { categoryRequests++; return [] }
        },
        'contexts/LoginProvider': { LoginContext: {} },
        'hooks/useMedia': () => true,
        'components/Select': Select,
        'components/KeywordSearchRow': KeywordSearchRow
    }
    for (const name of ['DashboardStatus', 'I18N', 'PaginatedList', 'Spinner', 'TitleBlk', 'ViewModeToggle', 'pick/FilterButtons', 'pick/Results']) mocks[`components/${name}`] = () => null
    const mod = new Module(path.resolve('src/views/pick/index.js'), module)
    mod.filename = path.resolve('src/views/pick/index.js'); mod.paths = module.paths
    const original = mod.require.bind(mod)
    mod.require = id => mocks[id] || original(id)
    mod._compile(babel.transformFileSync(mod.filename).code, mod.filename)
    const render = () => {
        cursor = 0
        const tree = mod.exports.default()
        const pending = effects; effects = []; pending.forEach(effect => effect())
        return tree
    }
    return { render, requests, Select, KeywordSearchRow, context, get categoryRequests() { return categoryRequests } }
}
function find(node, predicate) {
    if (!React.isValidElement(node)) return null
    if (predicate(node)) return node
    for (const child of React.Children.toArray(node.props.children)) {
        const found = find(child, predicate)
        if (found) return found
    }
    return null
}
async function main() {
    const checkingApp = mount({ isLogin: false, user: {}, sessionStatus: 'checking' })
    let checkingTree = checkingApp.render()
    checkingTree = checkingApp.render()
    assert.equal(checkingApp.requests.length, 0)
    assert.equal(checkingApp.categoryRequests, 0)
    assert.equal(find(checkingTree, node => node.type === 'fieldset').props.disabled, true)
    const waiting = find(checkingTree, node => node.props.role === 'status')
    assert(waiting && waiting.props.className.includes('py-6'))
    Object.assign(checkingApp.context, { isLogin: true, sessionStatus: 'success', user: { id: 'verified', branch: 'dl' } })
    checkingTree = checkingApp.render()
    checkingTree = checkingApp.render()
    assert.equal(find(checkingTree, node => node.type === 'fieldset').props.disabled, false)
    assert(find(checkingTree, node => node.props.role === 'status'), 'The list spinner must remain until course data arrives')
    assert(checkingApp.requests.length > 0 && checkingApp.categoryRequests > 0)
    checkingApp.requests.at(-1).resolve({ branch: 'dl', total: 0, courses: [] }); await flush()
    checkingTree = checkingApp.render()
    assert(!find(checkingTree, node => node.props.role === 'status'))
    assert(find(checkingTree, node => Array.isArray(node.props.data)), 'Render the list after verification and course loading')
    for (const branch of ['all', 'dl', 'hl', 'xd', 'tc', 'n2', 'fd', 'mf', 'sy']) {
        const app = mount(); app.render(); app.render()
        assert.equal(app.requests.at(-1).filters.branch, '', 'Unknown campus must be sent empty, never default to all')
        app.requests.at(-1).resolve({ branch, total: 0, courses: [] }); await flush()
        let tree = app.render()
        const campus = find(tree, node => node.props.id === 'campus-filter')
        assert.equal(campus.props.value, branch)
        assert.equal(app.requests.at(-1).filters.branch, branch)
        campus.props.onChange({ target: { value: 'hl' } })
        tree = app.render()
        app.requests.at(-1).resolve({ branch: 'hl', total: 0, courses: [] }); await flush()
        tree = app.render()
        assert.equal(find(tree, node => node.props.id === 'campus-filter').props.value, 'hl')
        find(tree, node => node.type === app.KeywordSearchRow).props.onClear()
        tree = app.render()
        assert.equal(find(tree, node => node.props.id === 'campus-filter').props.value, branch)
        assert.equal(app.requests.at(-1).filters.branch, branch)
        assert.equal(app.requests.at(-1).filters.oldcourse, 0)
    }
    const defaultApp = mount({ user: { id: 'default-user', branch: 'hl' } })
    defaultApp.render(); defaultApp.render()
    defaultApp.requests.at(-1).resolve({ branch: ' DL ', total: 0, courses: [] }); await flush()
    const defaultTree = defaultApp.render()
    const defaultSelect = find(defaultTree, node => node.props.id === 'campus-filter')
    assert.equal(defaultSelect.props.value, 'dl', 'Course API default must override the login campus')
    const selectedOption = React.Children.toArray(defaultSelect.props.children).find(option => option.props.value === defaultSelect.props.value)
    assert.equal(selectedOption.props.children, '大林', 'The selected campus label must match the API default')
    assert.equal(defaultApp.requests.at(-1).filters.branch, 'dl')

    const dalin = mount({ user: { id: 'dalin-user', branch: 'dl' } })
    dalin.render(); dalin.render()
    assert.equal(dalin.requests.at(-1).filters.branch, 'dl')
    dalin.requests.at(-1).resolve({ branch: 'all', total: 0, courses: [] }); await flush()
    let dalinTree = dalin.render()
    assert.equal(find(dalinTree, node => node.props.id === 'campus-filter').props.value, 'dl', 'API all must not replace a known login campus')
    find(dalinTree, node => node.type === dalin.KeywordSearchRow).props.onClear()
    dalinTree = dalin.render()
    assert.equal(dalin.requests.at(-1).filters.branch, 'dl', 'Reset must return to the login campus')
    find(dalinTree, node => node.props.id === 'campus-filter').props.onChange({ target: { value: 'all' } })
    dalin.render()
    assert.equal(dalin.requests.at(-1).filters.branch, 'all', 'All remains available when explicitly selected')

    const app = mount(); app.render(); let tree = app.render()
    const old = app.requests.at(-1)
    find(tree, node => node.props.id === 'campus-filter').props.onChange({ target: { value: 'tc' } })
    tree = app.render()
    assert(old.signal.aborted)
    old.resolve({ branch: 'dl', total: 0, courses: [] }); await flush()
    tree = app.render()
    assert.equal(find(tree, node => node.props.id === 'campus-filter').props.value, 'tc')
    const previousWindow = global.window
    const location = new URL('http://localhost/course?page=2&pagesize=50&branch=dl&oldcourse=1&type=1&program=my&category=12&keyword=test#results')
    global.window = { location, history: { state: {}, replaceState: (_state, _title, path) => { location.href = new URL(path, location).href } } }
    try {
        const restored = mount()
        restored.render(); let restoredTree = restored.render()
        assert.deepEqual(restored.requests.at(-1).filters, { branch: 'dl', oldcourse: 1, type: '1', program: 'my', category: '12', keyword: 'test', page: 2, pagesize: 48 })
        restored.requests.at(-1).resolve({ branch: 'dl', total: 150, courses: [] }); await flush()
        restoredTree = restored.render()
        assert.equal(find(restoredTree, node => node.props.id === 'campus-filter').props.value, 'dl')
        const listPagination = find(restoredTree, node => node.props.pagination)
        assert.deepEqual(listPagination.props.pageSizeOptions, [12, 24, 48])
        listPagination.props.pagination.onPageChange(3)
        restored.render()
        assert.equal(location.searchParams.get('page'), '3')
        assert.equal(location.hash, '#results')
        const refreshed = mount()
        refreshed.render(); refreshed.render()
        assert.equal(refreshed.requests.at(-1).filters.page, 3)
        assert.equal(refreshed.requests.at(-1).filters.oldcourse, 1)
        assert.equal(refreshed.requests.at(-1).filters.branch, 'dl')

        const listTree = refreshed.render()
        const requestCount = refreshed.requests.length
        find(listTree, node => typeof node.props.ariaLabel === 'string').props.onChange('card')
        refreshed.render()
        assert.equal(refreshed.requests.length, requestCount)
        assert.equal(refreshed.requests.at(-1).filters.page, 3)
        assert.equal(refreshed.requests.at(-1).filters.pagesize, 48)
        refreshed.requests.at(-1).resolve({ branch: 'dl', total: 150, courses: [] }); await flush()
        const cardList = find(refreshed.render(), node => node.props.pagination)
        assert.deepEqual(cardList.props.pageSizeOptions, [12, 24, 48])
        cardList.props.pagination.onPageSizeChange(24)
        refreshed.render()
        assert.equal(refreshed.requests.at(-1).filters.pagesize, 24)
        const refreshedCard = mount()
        refreshedCard.render()
        assert.equal(refreshedCard.requests.at(-1).filters.pagesize, 24)
        assert.equal(location.searchParams.get('view'), 'card')
    } finally { global.window = previousWindow }
    console.log('PASS: API campus defaults, query synchronization, refresh pagination/filter restoration, manual selection, clear/reset and stale response protection')
}
main().catch(error => { console.error(error); process.exitCode = 1 })
