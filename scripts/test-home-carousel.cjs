const assert = require('node:assert/strict')
const path = require('node:path')
const Module = require('node:module')
const babel = require('@babel/core')
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
let index = 0, previousDeps, cleanup
const timers = new Map()
global.window = {
    setInterval: (callback, delay) => { const id = Symbol(); timers.set(id, { callback, delay }); return id },
    clearInterval: id => timers.delete(id)
}
const fakeReact = {
    ...React,
    memo: component => component,
    useState: () => [index, value => { index = typeof value === 'function' ? value(index) : value }],
    useEffect: (effect, deps) => {
        if (previousDeps && deps.every((value, i) => value === previousDeps[i])) return
        cleanup?.()
        previousDeps = deps
        cleanup = effect()
    }
}
const mocks = {
    react: fakeReact,
    'components/Spinner': () => null,
    'components/AutoSwitchLink': ({ children }) => React.createElement('a', null, children),
    'components/ThumbFrame': () => null
}
const mod = new Module(path.resolve('src/views/home/AnnouncementSection.js'), module)
mod.filename = path.resolve('src/views/home/AnnouncementSection.js')
mod.paths = module.paths
const original = mod.require.bind(mod)
mod.require = id => mocks[id] || original(id)
mod._compile(babel.transformFileSync(mod.filename).code, mod.filename)
const Component = mod.exports.default
const announcements = [{ id: '1', title: 'First notice' }, { id: '2', title: 'Second notice' }]
const render = props => renderToStaticMarkup(Component({ announcements, ...props }))
assert(render().includes('First notice'))
assert.equal(timers.size, 1)
const timer = [...timers.values()][0]
assert.equal(timer.delay, 5000)
timer.callback()
assert(render().includes('Second notice'))
assert.equal(timers.size, 1, 'Rerender must not create duplicate intervals')
timer.callback()
assert(render().includes('First notice'))
const loadingMarkup = render({ loading: true })
assert(loadingMarkup.includes('h-[224px]') && !loadingMarkup.includes('載入中'))
assert(loadingMarkup.includes('animate-pulse') && loadingMarkup.includes('motion-reduce:animate-none'))
assert.equal(timers.size, 0)
render({ announcements: announcements.slice(0, 1) })
assert.equal(timers.size, 0)
render({ statusContent: React.createElement('p', null, 'Error') })
assert.equal(timers.size, 0)
render()
assert.equal(timers.size, 1)
cleanup()
assert.equal(timers.size, 0)
console.log('PASS: five-second carousel, wraparound, single interval, loading/error/single-item pause and cleanup')
