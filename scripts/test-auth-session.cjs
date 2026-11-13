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
const flush = () => new Promise(resolve => setImmediate(resolve))
const storage = () => {
    const values = new Map()
    return { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), removeItem: key => values.delete(key) }
}
const cookieJar = () => {
    const values = new Map(), writes = []
    const document = {}
    Object.defineProperty(document, 'cookie', {
        get: () => [...values].map(([name, value]) => `${name}=${value}`).join('; '),
        set: text => {
            writes.push(text)
            const [pair, ...attributes] = text.split(';').map(value => value.trim())
            const [name, ...value] = pair.split('=')
            const expired = attributes.some(attribute => /^max-age=0$/i.test(attribute) ||
                /^expires=/i.test(attribute) && new Date(attribute.slice(8)).getTime() <= Date.now())
            if (expired) values.delete(name)
            else values.set(name, value.join('='))
        }
    })
    return { document, writes }
}
const storedUser = { id: 'original', name: 'Original user' }
function mount(stored = false, options = {}) {
    const listeners = new Map()
    const cookies = options.cookieJar || cookieJar()
    const browser = {
        document: cookies.document, location: { protocol: options.protocol || 'https:' },
        localStorage: options.localStorage || storage(), sessionStorage: options.sessionStorage || storage(),
        addEventListener: (type, handler) => {
            if (!listeners.has(type)) listeners.set(type, new Set())
            listeners.get(type).add(handler)
        },
        removeEventListener: (type, handler) => listeners.get(type)?.delete(handler),
        dispatchEvent: event => { for (const handler of listeners.get(event.type) || []) handler(event); return true }
    }
    global.window = browser
    if (options.marker === true || stored && options.marker !== false) browser.document.cookie = 'tzuchi_lms_session=1; Path=/; SameSite=Lax'
    if (stored) window.localStorage.setItem('tzuchi-lms-login', JSON.stringify({ isLogin: true, user: storedUser }))
    let slots = [], cursor = 0, effects = [], checks = [], modurls = [], logoutCalls = 0
    let logoutResult = async () => ({ success: true, data: { modurl: 'https://moodle.example/logout' } })
    const same = (first, second) => first && second && first.length === second.length && first.every((item, index) => Object.is(item, second[index]))
    const fakeReact = {
        ...React,
        useState: initial => {
            const index = cursor++
            if (!(index in slots)) slots[index] = typeof initial === 'function' ? initial() : initial
            return [slots[index], value => { slots[index] = typeof value === 'function' ? value(slots[index]) : value }]
        },
        useRef: initial => {
            const index = cursor++
            return slots[index] ||= { current: initial }
        },
        useCallback: (fn, deps) => {
            const index = cursor++
            if (!same(slots[index]?.deps, deps)) slots[index] = { fn, deps }
            return slots[index].fn
        },
        useEffect: (fn, deps) => {
            const index = cursor++
            if (!same(slots[index]?.deps, deps)) {
                slots[index]?.cleanup?.()
                slots[index] = { deps }
                effects.push(() => { slots[index].cleanup = fn() })
            }
        }
    }
    const exports = load('src/contexts/LoginProvider.js', {
        react: fakeReact,
        'api/auth': {
            checkSession: signal => new Promise((resolve, reject) => checks.push({ signal, resolve, reject })),
            logout: () => { logoutCalls++; return logoutResult() },
            requestModLogin: url => { if (url) modurls.push(url); return new Promise(() => {}) }
        }
    })
    const render = () => {
        global.window = browser
        cursor = 0
        const tree = exports.default({})
        const pending = effects; effects = []
        pending.forEach(fn => fn())
        return tree.props.value
    }
    return {
        render, checks, modurls, browser, cookies,
        get logoutCalls() { return logoutCalls },
        setLogoutResult: fn => { logoutResult = fn },
        unmount: () => { global.window = browser; slots.forEach(slot => slot?.cleanup?.()) },
        emitStorage: event => { global.window = browser; browser.dispatchEvent({ type: 'storage', storageArea: browser.localStorage, ...event }) },
        emitPageShow: persisted => { global.window = browser; browser.dispatchEvent({ type: 'pageshow', persisted }) }
    }
}

async function main() {
    let app = mount(true)
    let context = app.render()
    assert.equal(context.isLogin, false)
    assert.equal(context.sessionStatus, 'checking')
    assert.deepEqual(context.user, {})
    assert.equal(app.checks.length, 1)
    app.checks[0].resolve({ success: true, data: {} }); await flush()
    context = app.render()
    assert.equal(context.isLogin, true)
    assert.equal(context.user.id, 'original')
    assert.equal(app.modurls.length, 0, 'Restoring a session must not replay a Moodle login URL')

    app = mount(true); app.render()
    app.checks[0].reject(Object.assign(new Error('Expired'), { status: 401 })); await flush()
    context = app.render()
    assert.equal(context.isLogin, false)
    assert.equal(context.sessionExpired, true)
    assert.equal(window.localStorage.getItem('tzuchi-lms-login'), null)
    assert.equal(window.sessionStorage.getItem('tzuchi-lms-login'), null)
    assert(!app.browser.document.cookie.includes('tzuchi_lms_session='))

    app = mount(true); app.render()
    app.checks[0].reject(new TypeError('Network')); await flush()
    context = app.render()
    assert.equal(context.sessionStatus, 'error')
    assert.equal(context.sessionExpired, false)
    assert(window.localStorage.getItem('tzuchi-lms-login'))
    assert(app.browser.document.cookie.includes('tzuchi_lms_session=1'))
    const retry = context.retrySession()
    assert.equal(app.render().sessionStatus, 'checking')
    app.checks[1].resolve({ success: true }); await retry
    assert.equal(app.render().isLogin, true)

    app = mount(true); context = app.render()
    await context.login({ user: { id: 'new', name: 'New user', modurl: 'https://moodle.example/login' }, remember: false })
    assert.equal(app.checks[0].signal.aborted, true)
    app.checks[0].reject(Object.assign(new Error('Old expired session'), { status: 401 })); await flush()
    context = app.render()
    assert.equal(context.isLogin, true)
    assert.equal(context.user.id, 'new')
    assert.deepEqual(app.modurls, ['https://moodle.example/login'])
    assert(window.localStorage.getItem('tzuchi-lms-login'))
    assert.equal(window.sessionStorage.getItem('tzuchi-lms-login'), null)
    assert(app.browser.document.cookie.includes('tzuchi_lms_session=1'))
    const logout = context.logout()
    assert.equal(context.logout(), logout)
    assert.equal(app.render().isLoggingOut, true)
    await logout
    context = app.render()
    assert.equal(context.isLogin, false)
    assert.equal(context.isLoggingOut, false)
    assert.equal(app.logoutCalls, 1)
    assert.deepEqual(app.modurls, ['https://moodle.example/login', 'https://moodle.example/logout'])
    assert.equal(window.sessionStorage.getItem('tzuchi-lms-login'), null)
    assert(!app.browser.document.cookie.includes('tzuchi_lms_session='))

    app = mount(false); context = app.render()
    assert.equal(app.checks.length, 0)
    await context.login({ user: storedUser })
    app.setLogoutResult(async () => { throw new TypeError('Network') })
    await assert.rejects(app.render().logout(), /Network/)
    assert.equal(app.render().isLogin, true)
    assert.equal(app.render().isLoggingOut, false)
    app.setLogoutResult(async () => { throw Object.assign(new Error('Expired'), { status: 401 }) })
    await app.render().logout()
    assert.equal(app.render().isLogin, false)
    assert.equal(app.render().sessionExpired, true)

    for (const staleFailure of [false, true]) {
        app = mount(false); context = app.render()
        await context.login({ user: storedUser })
        let resolveLogout, rejectLogout
        app.setLogoutResult(() => new Promise((resolve, reject) => { resolveLogout = resolve; rejectLogout = reject }))
        const pendingLogout = app.render().logout()
        await app.render().login({ user: { id: 'replacement', name: 'Replacement user' } })
        if (staleFailure) rejectLogout(Object.assign(new Error('Old session expired'), { status: 401 }))
        else resolveLogout({ success: true, data: { modurl: 'https://moodle.example/old-logout' } })
        await pendingLogout
        context = app.render()
        assert.equal(context.isLogin, true, 'A stale logout cannot clear a newer login')
        assert.equal(context.user.id, 'replacement')
        assert.equal(context.sessionExpired, false)
        assert.equal(context.isLoggingOut, false)
        assert(!app.modurls.includes('https://moodle.example/old-logout'))
        assert.equal(JSON.parse(window.localStorage.getItem('tzuchi-lms-login')).user.id, 'replacement')
    }

    app = mount(false); context = app.render()
    await context.login({ user: storedUser })
    let resolveLogout
    app.setLogoutResult(() => new Promise(resolve => { resolveLogout = resolve }))
    const pendingLogout = app.render().logout()
    const recheck = app.render().retrySession()
    app.checks[0].resolve({ success: true }); await recheck
    resolveLogout({ success: true, data: {} }); await pendingLogout
    assert.equal(app.render().isLogin, false, 'A session recheck must not invalidate logout for the same login')

    app = mount(false); context = app.render()
    await context.login({ user: storedUser })
    app.setLogoutResult(() => new Promise(resolve => { resolveLogout = resolve }))
    const finalLogout = app.render().logout()
    const lateRecheck = app.render().retrySession()
    resolveLogout({ success: true, data: {} }); await finalLogout
    assert.equal(app.checks[0].signal.aborted, true)
    app.checks[0].resolve({ success: true }); await lateRecheck
    assert.equal(app.render().isLogin, false, 'A late session recheck cannot restore a successful logout')
    assert.equal(window.sessionStorage.getItem('tzuchi-lms-login'), null)

    // A tab close only cancels requests. Cached profile supports another tab;
    // the API Session, rather than that cache, determines whether it is signed in.
    app = mount(false); context = app.render()
    await context.login({ user: storedUser, remember: false })
    const sharedStorage = app.browser.localStorage
    const sharedCookies = app.cookies
    const savedProfile = sharedStorage.getItem('tzuchi-lms-login')
    assert(savedProfile)
    const markerWrite = sharedCookies.writes.findLast(value => /^tzuchi_lms_session=1(?:;|$)/.test(value))
    assert(markerWrite, 'Login must set the browser-session marker')
    assert(!/expires=|max-age=/i.test(markerWrite), 'The login marker must be a session Cookie')
    assert(/path=\//i.test(markerWrite) && /samesite=lax/i.test(markerWrite) && /secure/i.test(markerWrite))
    app.unmount()
    assert.equal(app.logoutCalls, 0)
    assert.equal(sharedStorage.getItem('tzuchi-lms-login'), savedProfile)
    assert(sharedCookies.document.cookie.includes('tzuchi_lms_session=1'))
    const newTab = mount(false, { localStorage: sharedStorage, cookieJar: sharedCookies })
    context = newTab.render()
    assert.equal(context.sessionStatus, 'checking')
    assert.equal(context.isLogin, false)
    assert.deepEqual(context.user, {})
    assert.equal(newTab.checks.length, 1)
    newTab.checks[0].resolve({ success: true, data: {} }); await flush()
    context = newTab.render()
    assert.equal(context.isLogin, true)
    assert.equal(context.user.id, storedUser.id)
    assert.equal(newTab.modurls.length, 0)

    // Existing sessionStorage profiles migrate only after server validation.
    const legacyStorage = storage()
    legacyStorage.setItem('tzuchi-lms-login', savedProfile)
    app = mount(false, { sessionStorage: legacyStorage, marker: true })
    context = app.render()
    assert.equal(context.isLogin, false)
    assert.equal(app.browser.localStorage.getItem('tzuchi-lms-login'), null)
    assert.equal(legacyStorage.getItem('tzuchi-lms-login'), savedProfile)
    app.checks[0].resolve({ success: true }); await flush()
    assert.equal(app.render().isLogin, true)
    assert.equal(app.browser.localStorage.getItem('tzuchi-lms-login'), savedProfile)
    assert.equal(legacyStorage.getItem('tzuchi-lms-login'), null)

    const expiredLegacy = storage()
    expiredLegacy.setItem('tzuchi-lms-login', savedProfile)
    app = mount(false, { sessionStorage: expiredLegacy, marker: true }); app.render()
    app.checks[0].reject(Object.assign(new Error('Expired'), { status: 401 })); await flush()
    assert.equal(app.render().isLogin, false)
    assert.equal(app.browser.localStorage.getItem('tzuchi-lms-login'), null)
    assert.equal(expiredLegacy.getItem('tzuchi-lms-login'), null)
    assert(!app.browser.document.cookie.includes('tzuchi_lms_session='))

    // A full browser restart retains localStorage but starts without session
    // Cookies, so profiles without opt-in must require explicit login.
    for (const oldRememberValue of [false, undefined]) {
        const persistent = storage(), oldTab = storage()
        const oldProfile = JSON.stringify({ isLogin: true, user: storedUser, ...(oldRememberValue === undefined ? {} : { remember: oldRememberValue }) })
        persistent.setItem('tzuchi-lms-login', oldProfile)
        oldTab.setItem('tzuchi-lms-login', oldProfile)
        app = mount(false, { localStorage: persistent, sessionStorage: oldTab })
        context = app.render()
        assert.equal(context.isLogin, false)
        assert.equal(context.sessionStatus, 'idle')
        assert.equal(app.checks.length, 0, 'A missing session marker must require explicit login')
        assert.equal(persistent.getItem('tzuchi-lms-login'), null)
        assert.equal(oldTab.getItem('tzuchi-lms-login'), null)
        assert.equal(app.logoutCalls, 0)
    }

    app = mount(false, { protocol: 'http:' }); context = app.render()
    await context.login({ user: storedUser, remember: true })
    assert.equal(JSON.parse(app.browser.localStorage.getItem('tzuchi-lms-login')).remember, true)
    const httpMarker = app.cookies.writes.findLast(value => /^tzuchi_lms_session=1(?:;|$)/.test(value))
    assert(httpMarker && !/secure/i.test(httpMarker))
    assert(!/expires=|max-age=/i.test(httpMarker), 'Remember opt-in must not make the UI marker persistent')
    const rememberedStorage = app.browser.localStorage
    app.unmount()
    app = mount(false, { localStorage: rememberedStorage })
    context = app.render()
    assert.equal(context.sessionStatus, 'checking')
    assert.equal(context.isLogin, false, 'A remembered profile still requires API validation')
    assert.deepEqual(context.user, {})
    assert.equal(app.checks.length, 1)
    app.checks[0].resolve({ success: true }); await flush()
    context = app.render()
    assert.equal(context.isLogin, true)
    assert.equal(context.user.id, storedUser.id)
    assert.equal(JSON.parse(rememberedStorage.getItem('tzuchi-lms-login')).remember, true)
    assert.deepEqual(app.modurls, [])

    // A fresh opt-out login overwrites a previously remembered profile.
    await context.login({ user: storedUser, remember: false })
    assert.equal(JSON.parse(rememberedStorage.getItem('tzuchi-lms-login')).remember, false)
    app.unmount()
    app = mount(false, { localStorage: rememberedStorage })
    context = app.render()
    assert.equal(context.isLogin, false)
    assert.equal(context.sessionStatus, 'idle')
    assert.equal(app.checks.length, 0)
    assert.equal(rememberedStorage.getItem('tzuchi-lms-login'), null)

    for (const failWithExpiry of [false, true]) {
        const persistent = storage()
        persistent.setItem('tzuchi-lms-login', JSON.stringify({ isLogin: true, user: storedUser, remember: true }))
        app = mount(false, { localStorage: persistent }); app.render()
        assert.equal(app.checks.length, 1)
        app.checks[0].reject(failWithExpiry ? Object.assign(new Error('Expired'), { status: 401 }) : new TypeError('Network'))
        await flush()
        context = app.render()
        assert.equal(context.isLogin, false)
        if (failWithExpiry) {
            assert.equal(context.sessionExpired, true)
            assert.equal(persistent.getItem('tzuchi-lms-login'), null)
            assert.equal(app.browser.sessionStorage.getItem('tzuchi-lms-login'), null)
            assert(!app.browser.document.cookie.includes('tzuchi_lms_session='))
        } else {
            assert.equal(context.sessionStatus, 'error')
            assert.equal(JSON.parse(persistent.getItem('tzuchi-lms-login')).remember, true)
            const revalidate = context.retrySession()
            app.checks[1].resolve({ success: true }); await revalidate
            assert.equal(app.render().isLogin, true)
            await app.render().logout()
            assert.equal(persistent.getItem('tzuchi-lms-login'), null)
            assert.equal(app.browser.sessionStorage.getItem('tzuchi-lms-login'), null)
            assert(!app.browser.document.cookie.includes('tzuchi_lms_session='))
        }
    }

    app = mount(true); app.render()
    app.checks[0].resolve({ success: true }); await flush()
    assert.equal(app.render().isLogin, true)
    const replacementProfile = JSON.stringify({ isLogin: true, user: { id: 'other-tab', name: 'Other tab user' } })
    app.browser.localStorage.setItem('tzuchi-lms-login', replacementProfile)
    app.emitStorage({ key: 'unrelated', newValue: 'value' })
    assert.equal(app.checks.length, 1)
    app.emitStorage({ key: 'tzuchi-lms-login', newValue: replacementProfile, storageArea: app.browser.sessionStorage })
    assert.equal(app.checks.length, 1)
    app.emitStorage({ key: 'tzuchi-lms-login', oldValue: savedProfile, newValue: replacementProfile })
    context = app.render()
    assert.equal(context.sessionStatus, 'checking')
    assert.equal(context.isLogin, false)
    assert.equal(app.checks.length, 2)
    app.checks[1].resolve({ success: true }); await flush()
    assert.equal(app.render().user.id, 'other-tab')
    app.browser.localStorage.removeItem('tzuchi-lms-login')
    app.emitStorage({ key: 'tzuchi-lms-login', oldValue: replacementProfile, newValue: null })
    context = app.render()
    assert.equal(context.isLogin, false)
    assert.equal(context.sessionStatus, 'idle')
    assert.equal(context.sessionExpired, false)
    assert.equal(app.logoutCalls, 0)
    assert.deepEqual(app.modurls, [])
    assert(!app.browser.document.cookie.includes('tzuchi_lms_session='))

    // A logout storage event also invalidates an earlier pending restore.
    app = mount(true); app.render()
    app.browser.localStorage.removeItem('tzuchi-lms-login')
    app.emitStorage({ key: null, newValue: null })
    assert.equal(app.checks[0].signal.aborted, true)
    app.checks[0].resolve({ success: true }); await flush()
    assert.equal(app.render().isLogin, false)
    assert.equal(app.browser.localStorage.getItem('tzuchi-lms-login'), null)
    assert.equal(app.logoutCalls, 0)

    // A queued older logout event must not erase a newer shared login.
    app = mount(true); app.render()
    app.browser.localStorage.setItem('tzuchi-lms-login', replacementProfile)
    app.emitStorage({ key: 'tzuchi-lms-login', newValue: null })
    assert.equal(app.browser.localStorage.getItem('tzuchi-lms-login'), replacementProfile)
    assert.equal(app.checks.length, 2)
    app.checks[1].resolve({ success: true }); await flush()
    assert.equal(app.render().user.id, 'other-tab')

    // A page restored from Back/Forward cache must verify its Session before
    // exposing the saved user, while a normal pageshow must not duplicate it.
    for (const expired of [false, true]) {
        app = mount(true); app.render()
        app.checks[0].resolve({ success: true }); await flush()
        assert.equal(app.render().isLogin, true)
        app.emitPageShow(false)
        assert.equal(app.checks.length, 1)
        assert.equal(app.render().isLogin, true)
        app.emitPageShow(true)
        context = app.render()
        assert.equal(app.checks.length, 2)
        assert.equal(context.sessionStatus, 'checking')
        assert.equal(context.isLogin, false)
        assert.deepEqual(context.user, {})
        if (expired) app.checks[1].reject(Object.assign(new Error('Expired'), { status: 401 }))
        else app.checks[1].resolve({ success: true })
        await flush()
        context = app.render()
        assert.equal(context.isLogin, !expired)
        if (expired) {
            assert.equal(context.sessionExpired, true)
            assert.equal(app.browser.localStorage.getItem('tzuchi-lms-login'), null)
            assert.equal(app.browser.sessionStorage.getItem('tzuchi-lms-login'), null)
            assert(!app.browser.document.cookie.includes('tzuchi_lms_session='))
        } else {
            assert.equal(context.user.id, storedUser.id)
            assert(app.browser.document.cookie.includes('tzuchi_lms_session=1'))
        }
        assert.deepEqual(app.modurls, [])
        assert.equal(app.logoutCalls, 0)
        const checkCount = app.checks.length
        app.unmount()
        app.emitPageShow(true)
        assert.equal(app.checks.length, checkCount, 'Unmount must remove the pageshow listener')
    }

    const LoginContext = React.createContext({})
    const LoginSection = load('src/views/home/LoginSection.js', {
        'components/Spinner': load('src/components/Spinner.js').default,
        'contexts/LoginProvider': { LoginContext },
        'adapters/authAdapter': load('src/adapters/authAdapter.js'),
        'api/auth': { login: async () => ({ success: true }) }
    }).default
    let html = renderToStaticMarkup(React.createElement(LoginContext.Provider,
        { value: { sessionStatus: 'checking' } }, React.createElement(LoginSection)))
    assert(!html.includes('正在確認登入狀態') && html.includes('role="status"') && html.includes('loading-animate'))
    assert(html.includes('aria-busy="true"') && html.includes('type="submit" disabled=""'))
    const rememberInput = html.match(/<input\b[^>]*\bname="remember"[^>]*>/)?.[0]
    assert(rememberInput && html.includes('保持登入'))
    assert(/\bchecked(?:=|\s|>)/.test(rememberInput), 'Keep login must be checked by default to survive browser restart')
    html = renderToStaticMarkup(React.createElement(LoginContext.Provider,
        { value: { sessionStatus: 'error', sessionError: 'Network error', retrySession: () => {} } }, React.createElement(LoginSection)))
    assert(html.includes('Network error') && html.includes('重新確認登入狀態') && html.includes('role="alert"'))

    const realFormData = global.FormData
    global.FormData = class {
        constructor(form) { this.pairs = form.pairs }
        [Symbol.iterator]() { return this.pairs[Symbol.iterator]() }
        has(name) { return this.pairs.some(([key]) => key === name) }
    }
    const findForm = node => {
        if (!React.isValidElement(node)) return null
        if (node.type === 'form') return node
        for (const child of React.Children.toArray(node.props.children)) {
            const form = findForm(child)
            if (form) return form
        }
        return null
    }
    try {
        for (const remember of [false, true]) {
            let submitted, loginArguments
            const Form = load('src/views/home/LoginSection.js', {
                'components/Spinner': load('src/components/Spinner.js').default,
                react: {
                    ...React, useId: () => 'login-test', useContext: () => ({ sessionStatus: 'idle' }), useEffect: () => {},
                    useState: initial => [initial, () => {}]
                },
                'contexts/LoginProvider': { LoginContext },
                'adapters/authAdapter': load('src/adapters/authAdapter.js'),
                'api/auth': { login: async payload => {
                    submitted = payload
                    return { success: true, data: { id: 'user-id', name: 'User name' } }
                } }
            }).default
            const form = findForm(Form.type({ onLogin: async options => { loginArguments = options } }))
            const pairs = [['account', ' account '], ['password', ' password ']]
            if (remember) pairs.push(['remember', '1'])
            await form.props.onSubmit({ preventDefault: () => {}, currentTarget: { pairs } })
            assert.deepEqual(submitted, { uid: 'account', pwd: ' password ', keeplogin: remember ? 1 : 0 })
            assert.equal(loginArguments.remember, remember)
            assert.equal(loginArguments.user.id, 'user-id')
            assert.equal(loginArguments.user.account, 'account')
        }
    } finally {
        global.FormData = realFormData
    }
    console.log('PASS: remember opt-in/out across browser restart, API-validated restore, session marker, Back/Forward checks, legacy migration, storage events, expiry/retry, stale requests and status UI')
}
main().catch(error => { console.error(error); process.exitCode = 1 })
