const assert = require('node:assert/strict')
const path = require('node:path')
const Module = require('node:module')
const babel = require('@babel/core')
const React = require('react')
const { renderToString } = require('react-dom/server')
const passThrough = ({ children }) => children
const mocks = {
    'contexts/LoadingProvider': passThrough,
    'contexts/PhotoSwipeProvider': passThrough,
    'react-ga4': {},
    'react-router-dom': { useSearchParams: () => [new URLSearchParams()], useParams: () => ({}) },
    'components/Spinner': () => React.createElement('span', { role: 'status', 'aria-busy': true }),
    './Header': () => React.createElement('header', null, 'Header'),
    './Footer': () => React.createElement('footer', null, 'Footer'),
    ...Object.fromEntries(['BtnBackTop', 'LightBox', 'LoadingHint', 'ScrollReset'].map(name => [`./${name}`, () => null]))
}
const mod = new Module(path.resolve('src/layout/index.js'), module)
mod.filename = path.resolve('src/layout/index.js')
mod.paths = module.paths
const original = mod.require.bind(mod)
mod.require = id => mocks[id] || original(id)
mod._compile(babel.transformFileSync(mod.filename).code, mod.filename)
const Layout = mod.exports.default
const render = child => renderToString(React.createElement(Layout, null, child))
const shortPage = render(React.createElement('p', null, 'Short content'))
assert(shortPage.includes('min-h-[100dvh]'))
assert(shortPage.includes('flex w-full flex-1 flex-col'))
assert(shortPage.includes('Short content') && shortPage.includes('<footer>Footer</footer>'))
const pending = new Promise(() => {})
const LazyPage = () => { throw pending }
const loading = render(React.createElement(LazyPage))
assert(loading.includes('<header>Header</header>'))
assert(loading.includes('<footer>Footer</footer>'))
assert(loading.includes('role="status"') && !loading.includes('載入中'))
assert(loading.indexOf('role="status"') < loading.indexOf('<footer>'))
console.log('PASS: viewport-height layout, growing main content, header/footer retained during lazy loading, spinner inside main')
