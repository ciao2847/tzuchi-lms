const assert = require('node:assert/strict')
const path = require('node:path')
const Module = require('node:module')
const babel = require('@babel/core')
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const router = require('react-router-dom')
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

const LoginContext = React.createContext({})
let mountedPages = [], redirects = [], routeConfig
const testRouter = {
    ...router,
    useRoutes: definitions => {
        routeConfig = definitions
        return router.useRoutes(definitions)
    },
    Navigate: ({ to, replace }) => {
        // Static rendering cannot run Navigate's effect; inspect its actual
        // router-resolved destination while still exercising real matching.
        redirects.push({ to, replace, href: router.useHref(to) })
        return null
    }
}
const RequireLogin = load('src/components/RequireLogin.js', {
    'contexts/LoginProvider': { LoginContext },
    'react-router-dom': testRouter,
    'components/Spinner': () => null
}).default
const testReact = {
    ...React,
    lazy: importer => {
        const match = importer.toString().match(/['"]views\/([^'"]+)['"]/)
        assert(match, 'The test must identify each lazy page without executing its imports')
        const pageName = match[1]
        return () => {
            mountedPages.push(pageName)
            return React.createElement('p', { 'data-page': pageName }, `Page: ${pageName}`)
        }
    }
}
const Routes = load('src/Routes.js', {
    react: testReact,
    'react-router-dom': testRouter,
    'components/RequireLogin': RequireLogin,
    'components/Spinner': () => null,
    'layout/': ({ children }) => React.createElement('main', null, children)
}).default

const guest = { isLogin: false, sessionStatus: 'idle' }
const checking = { isLogin: false, sessionStatus: 'checking' }
const unavailable = { isLogin: false, sessionStatus: 'error', sessionError: 'Network error' }
const verified = { isLogin: true, sessionStatus: 'success', user: { id: 'user' } }
const expired = { isLogin: false, sessionStatus: 'idle', sessionExpired: true }
function render(location, login, basename = '/') {
    mountedPages = []; redirects = []
    const html = renderToStaticMarkup(React.createElement(StaticRouter, { location, basename },
        React.createElement(LoginContext.Provider, { value: login }, React.createElement(Routes))))
    return { html, pages: [...mountedPages], redirects: [...redirects] }
}

const protectedLocations = [
    ['/pick', 'pick'], ['/pick/85453', 'pick-detail'], ['/calendar', 'calendar'],
    ['/external-training-data', 'external-training'], ['/tree', 'menu-page'],
    ['/edu-service', 'menu-page'], ['/edu-service-country', 'menu-page'], ['/404', 'not-found'],
    ['/pick?embed=1&keyword=test#courses', 'pick'], ['/tree?embed=1#external-training-form', 'menu-page']
]
for (const [location, page] of protectedLocations) {
    for (const login of [guest, unavailable, expired, { isLogin: true, sessionStatus: 'idle' }]) {
        const result = render(location, login)
        assert.deepEqual(result.pages, [], `No protected page may mount for ${location}`)
        assert.deepEqual(result.redirects, [{ to: '/#login', replace: true, href: '/#login' }])
        assert(!result.html.includes(`Page: ${page}`))
    }
    const pending = render(location, checking)
    assert.deepEqual(pending.pages, [], 'Session verification must not mount protected pages')
    assert.deepEqual(pending.redirects, [], 'Wait for verification rather than flashing the login page')
    assert(pending.html.includes('role="status"') && pending.html.includes('aria-busy="true"'))
    const success = render(location, verified)
    assert.deepEqual(success.pages, [page])
    assert.deepEqual(success.redirects, [])
}
for (const login of [guest, checking, unavailable, verified, expired]) {
    const home = render('/#login', login)
    assert.deepEqual(home.pages, ['home'], 'The homepage and login must remain public')
    assert.deepEqual(home.redirects, [])
}
assert.deepEqual(render('/missing-page?embed=1#anything', guest).redirects,
    [{ to: '/#login', replace: true, href: '/#login' }])
assert.deepEqual(render('/missing-page', verified).redirects,
    [{ to: '/404', replace: true, href: '/404' }])
const based = render('/tzuchi/react/calendar?embed=1', guest, '/tzuchi/react')
assert.deepEqual(based.pages, [])
assert.deepEqual(based.redirects,
    [{ to: '/#login', replace: true, href: '/tzuchi/react#login' }])
assert.deepEqual(render('/tzuchi/react/calendar', verified, '/tzuchi/react').pages, ['calendar'])
// Simulate session loss on the currently open page, not only direct entry.
assert.deepEqual(render('/calendar', verified).pages, ['calendar'])
assert.deepEqual(render('/calendar', expired).pages, [])
assert.equal(render('/calendar', expired).redirects[0].replace, true)
assert(routeConfig, 'The real route definitions must have been rendered')

// Outbound links remain real external hrefs for guests; no auth guard is
// attached to the shared link components or their targets.
const Link = load('src/components/Link.js').default
const AutoSwitchLink = load('src/components/AutoSwitchLink.js', {
    'components/Link': Link,
    hooks: { useLocale: () => 'zh-tw' },
    'components/I18N': { translate: value => value }
}).default
for (const [Component, props] of [
    [Link, { href: 'https://nlms.tzuchi.com.tw/tzuchi/' }],
    [AutoSwitchLink, { href: 'https://example.org/help', isLinkOut: true }]
]) {
    const html = renderToStaticMarkup(React.createElement(StaticRouter, { location: '/', basename: '/' },
        React.createElement(LoginContext.Provider, { value: guest }, React.createElement(Component, props, 'External'))))
    assert(html.includes(`href="${props.href}"`))
    assert(!html.includes('href="/#login"'))
}
console.log('PASS: public homepage, protected page mounts, session checking/expiry/errors, query/hash bypass attempts, basename redirects and external links')
