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

const adapter = load('src/adapters/learningHistoryAdapter.js')
const courses = [
    { id: '1', title: 'Earlier', start: '2026-08-04T09:00:00', status: 'pass' },
    { id: '2', title: 'Latest', start: '2026-10-20T14:00:00', status: 'yet' },
    { id: '3', title: 'Previous year', start: '2025-09-01T08:00:00', status: 'pass' },
    { id: '4', title: 'Old history', start: '2015-11-01T23:50:00', status: 'pass' }
]
const originalOrder = courses.map(course => course.id)
assert.deepEqual(adapter.getLearningHistoryYears([], 2026), Array.from({ length: 10 }, (_, i) => 2026 - i))
assert(adapter.getLearningHistoryYears(courses, 2026).includes(2015))
assert.deepEqual(adapter.filterLearningHistory(courses, 2026).map(course => course.id), ['2', '1'])
assert.deepEqual(courses.map(course => course.id), originalOrder)
assert.equal(adapter.filterLearningHistory(courses, 2024).length, 0)

const I18N = ({ children }) => children
const Toggle = load('src/components/ViewModeToggle.js', { 'components/I18N': I18N }).default
const PageList = ({ data, component: Component, componentProps }) => data.length
    ? React.createElement(Component, { data, ...componentProps }) : React.createElement('p', null, 'Empty')
let desktop = true, slots = [], cursor = 0
const fakeReact = {
    ...React,
    useMemo: fn => fn(),
    useState: initial => {
        const index = cursor++
        if (!(index in slots)) slots[index] = typeof initial === 'function' ? initial() : initial
        return [slots[index], value => { slots[index] = value }]
    }
}
const { default: LearningHistory, LearningHistoryResults } = load('src/views/calendar/LearningHistory.js', {
    react: fakeReact,
    'components/I18N': I18N,
    'components/PaginatedList': PageList,
    'components/ViewModeToggle': Toggle,
    'components/DashboardStatus': () => React.createElement('p', null, 'Loading'),
    'hooks/useMedia': () => desktop,
    'adapters/learningHistoryAdapter': adapter
})
function find(node, predicate) {
    if (!React.isValidElement(node)) return null
    if (predicate(node)) return node
    for (const child of React.Children.toArray(node.props.children)) {
        const result = find(child, predicate)
        if (result) return result
    }
    return null
}
function render(status = 'success') {
    cursor = 0
    return LearningHistory({ courses, status })
}
let tree = render()
assert.equal(find(tree, node => node.type === Toggle).props.value, 'list')
assert.equal(find(tree, node => node.type === PageList).props.data.length, 2)
find(tree, node => node.type === 'button' && node.props.children === 2025).props.onClick()
tree = render()
assert.equal(find(tree, node => node.type === PageList).props.data[0].id, '3')
find(tree, node => node.type === Toggle).props.onChange('card')
tree = render()
assert.equal(find(tree, node => node.type === Toggle).props.value, 'card')
const card = renderToStaticMarkup(tree)
assert(card.includes('<article') && card.includes('Previous year') && !card.includes('<table'))
find(tree, node => node.type === Toggle).props.onChange('list')
assert(renderToStaticMarkup(render()).includes('<table'))
desktop = false; slots = []
assert.equal(find(render(), node => node.type === Toggle).props.value, 'card')
const results = adapter.filterLearningHistory(courses, 2026)
for (const mode of ['list', 'card']) {
    const html = renderToStaticMarkup(React.createElement(LearningHistoryResults, { data: results, viewMode: mode }))
    assert(html.includes('Latest') && html.includes('Earlier'))
    assert(html.includes('2026-10-20 14:00'))
    assert(html.includes('—'))
    assert(!html.includes('undefined') && !html.includes('Invalid Date'))
}
assert(renderToStaticMarkup(render('loading')).includes('Loading'))
console.log('PASS: year range/filter/order, desktop/mobile defaults, year and view switching, card/list parity, missing fields and loading')
