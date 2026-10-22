const assert = require('node:assert/strict')
const path = require('node:path')
const Module = require('node:module')
const babel = require('@babel/core')
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')

// Load the project's Babel modules with explicit dependencies, without a browser.
function load(file, mocks = {}) {
    const mod = new Module(path.resolve(file), module)
    mod.filename = path.resolve(file)
    mod.paths = module.paths
    const original = mod.require.bind(mod)
    mod.require = (id) => mocks[id] || original(id)
    mod._compile(babel.transformFileSync(file).code, mod.filename)
    return mod.exports
}

const adapter = load('src/adapters/dashboardAdapter.js')
const fixture = {
    announcement: [{ id: 1, title: 'Announcement', date: '2026-10-21' }],
    mail: [{ id: 2, subject: 'Unread', read: '0', body: '<strong>Mail</strong>', created: '2026-10-21' },
        { id: 3, subject: 'Read', read: '1' }],
    programs: { inProgress: [{ id: 4, name: 'Program from API' }], past: [{ id: 5, title: 'Past program' }] },
    calendarInfo: {
        coming: [{ id: 6, title: 'Upcoming course', start: '2026-10-22 09:00:00', end: '2026-10-22 10:00:00', classroom: 'Room' }],
        usrhistroy: { pass: [{ id: 7, title: 'Passed', start: '2026-10-20 09:00:00' }], yat: [{ id: 8, title: 'Pending' }] }
    }
}
const flush = () => new Promise(resolve => setImmediate(resolve))

async function main() {
    const data = adapter.adaptDashboard(fixture)
    assert.equal(data.programs.inProgress[0].title, 'Program from API')
    assert.equal(data.messages[0].isUnread, true)
    assert.equal(data.messages[0].id, '2')
    assert.equal(data.messages[0].title, 'Unread')
    assert.equal(data.messages[0].date, '2026-10-21')
    assert.equal(data.messages[1].isUnread, false)
    assert.equal(data.messages[0].htmlBody, '<strong>Mail</strong>')
    assert.equal(data.coming[0].start, '2026-10-22T09:00:00')
    assert.equal(data.passed[0].tone, 'complete')
    assert.equal(data.yet[0].tone, 'pending')
    assert.equal(data.yet[0].status, 'yet')
    assert.equal(data.history.length, 2)
    const renamed = adapter.adaptDashboard({ ...fixture, calendarInfo: {
        coming: [], usrhistroy: { yet: [{ id: 9, title: 'Not completed', start: '2026-10-20 10:00:00', status: 'yet' }] }
    } })
    assert.equal(renamed.yet[0].status, 'yet')
    const mixed = adapter.adaptDashboard({ ...fixture, calendarInfo: {
        coming: [], usrhistroy: [{ id: 10, title: 'Complete', start: '2026-10-20 10:00:00', status: 'pass' },
            { id: 11, title: 'Not complete', start: '2026-10-20 11:00:00', status: 'yat' }]
    } })
    assert.equal(mixed.history.length, 2)
    assert.equal(mixed.passed.length, 1)
    assert.equal(mixed.yet.length, 1)
    const events = adapter.getCalendarEvents(data)
    assert.equal(events.length, 2) // Missing date in the third record is not plotted.
    assert.equal(events[0].start, '2026-10-22')
    assert.equal(events[0].extendedProps.tone, 'registered')
    assert.equal(events[1].extendedProps.tone, 'complete')
    assert.equal(adapter.getCalendarEvents(renamed)[0].extendedProps.tone, 'pending')
    const alternate = { ...fixture, calendarInfo: undefined, courses: { coming: [], usrhistory: fixture.calendarInfo.usrhistroy } }
    assert.equal(adapter.adaptDashboard(alternate).passed.length, 1)
    const empty = adapter.adaptDashboard({ announcement: [], mail: [], programs: {}, calendarInfo: {} })
    assert.equal(empty.coming.length, 0)
    assert.equal(empty.messages.length, 0)
    assert.equal(adapter.getCalendarEvents(empty).length, 0)
    assert.equal(empty.programs.inProgress.length, 0)
    assert.throws(() => adapter.adaptDashboard(null))
    assert.throws(() => adapter.adaptDashboard({}))

    const client = load('src/lib/apiClient.js')
    const auth = load('src/constants/auth.js')
    const api = load('src/api/dashboard.js', { 'lib/apiClient': client, 'adapters/dashboardAdapter': adapter, 'constants/auth': auth })
    let request
    global.fetch = async (url, options) => {
        request = { url, options }
        return { ok: true, json: async () => ({ success: true, data: fixture }) }
    }
    await api.getDashboard(new AbortController().signal)
    assert(request.url.endsWith('/api/dashboard'))
    assert.equal(request.options.method, 'GET')
    assert.equal(request.options.credentials, 'include')
    assert.equal(request.options.cache, 'no-store')
    assert(!('body' in request.options))
    global.fetch = async () => ({ ok: false, status: 401, json: async () => ({ success: false }) })
    await assert.rejects(api.getDashboard(), error => error.status === 401)
    global.fetch = async () => ({ ok: true, json: async () => ({ success: false, error: { message: 'Unavailable' } }) })
    await assert.rejects(api.getDashboard(), /Unavailable/)

    // Render components with real React to catch missing variables and mock fallbacks.
    const DashboardContext = React.createContext({ data, status: 'success' })
    const Summary = load('src/views/home/LearningSummarySection.js', {
        'contexts/DashboardProvider': { DashboardContext },
        'components/DashboardStatus': () => null,
        'components/I18N': ({ children }) => children,
        'components/Link': ({ href, children, ...props }) => React.createElement('a', { href, ...props }, children)
    }).default
    const summary = renderToStaticMarkup(React.createElement(Summary, { user: { name: 'Test user' } }))
    assert(summary.includes('Upcoming course'))
    assert(summary.includes('Test user'))
    const calendarConstants = load('src/constants/learningCalendar.js')
    assert.equal(calendarConstants.MESSAGE_LIST, undefined)
    assert.equal(calendarConstants.HAS_UNREAD_NOTICE, undefined)
    let calendarProps
    const Calendar = load('src/views/calendar/index.js', {
        'adapters/dashboardAdapter': adapter,
        'contexts/DashboardProvider': { DashboardContext },
        'components/DashboardStatus': () => null,
        '@fullcalendar/react': React.forwardRef((props, ref) => {
            calendarProps = props
            return React.createElement('div', { 'data-calendar': true })
        }),
        '@fullcalendar/react/daygrid': {},
        '@fullcalendar/react/themes/classic': {},
        'components/I18N': ({ children }) => children,
        'components/Link': ({ href, children, ...props }) => React.createElement('a', { href, ...props }, children),
        'components/Select': ({ children }) => React.createElement('select', null, children),
        'components/NotificationDetailDialog': () => null,
        'components/TitleBlk': () => null,
        'constants/learningCalendar': calendarConstants
    }).default
    const calendar = renderToStaticMarkup(React.createElement(Calendar))
    assert(calendar.includes('Announcement') && calendar.includes('Unread'))
    assert(calendar.includes('\u901a\u77e5\u4fe1') && calendar.includes('\u7cfb\u7d71\u516c\u544a'))
    assert(calendar.includes('xl:grid-cols-[minmax(0,1fr)_330px]'))
    assert(calendar.includes('2020/11/01'))
    assert(calendar.includes('Program from API'))
    assert(calendar.includes('value="4"'))
    assert(!calendar.includes('six-skills-1'))
    assert.equal(calendarProps.events.length, 2)
    assert.equal(calendarProps.dayMaxEvents, 1)
    assert.equal(calendarProps.moreLinkText(22), '22+')
    assert.equal(calendarProps.moreLinkClick, 'popover')
    assert.equal(calendarProps.initialDate, undefined)
    const courseMarkup = renderToStaticMarkup(calendarProps.eventContent({ event: {
        title: events[0].title, extendedProps: events[0].extendedProps
    } }))
    assert(courseMarkup.includes('09:00 Upcoming course'))
    assert(courseMarkup.includes('Room'))
    const emptyCalendar = renderToStaticMarkup(React.createElement(DashboardContext.Provider,
        { value: { data: empty, status: 'success' } }, React.createElement(Calendar)))
    assert(!emptyCalendar.includes('Announcement') && !emptyCalendar.includes('Unread'))
    assert(emptyCalendar.includes('\u76ee\u524d\u6c92\u6709\u901a\u77e5\u4fe1'))
    assert(emptyCalendar.includes('\u76ee\u524d\u6c92\u6709\u5b78\u7a0b'))
    // Exercise request lifecycle: no anonymous call, abort on logout, 401 expiration.
    let login = { isLogin: false, user: {} }, effect, state, expired = 0, calls = 0, signal
    let finish, fail
    const fakeReact = {
        createContext: () => ({ Provider: 'provider' }),
        useContext: () => login,
        useState: initial => [typeof initial === 'function' ? initial() : initial, value => { state = value }],
        useCallback: fn => fn,
        useEffect: fn => { effect = fn },
        createElement: (type, props) => ({ type, props })
    }
    const Provider = load('src/contexts/DashboardProvider.js', {
        react: fakeReact,
        'contexts/LoginProvider': { LoginContext: {} },
        'api/dashboard': { getDashboard: requestSignal => {
            calls++; signal = requestSignal
            return new Promise((resolve, reject) => { finish = resolve; fail = reject })
        } }
    }).default
    Provider({}); effect(); assert.equal(calls, 0)
    login = { isLogin: true, user: { id: 'test' }, expireSession: () => expired++ }
    Provider({}); const cancel = effect(); assert.equal(calls, 1)
    cancel(); assert.equal(signal.aborted, true)
    finish(data); await flush(); assert.notEqual(state.status, 'success')
    Provider({}); effect(); fail(Object.assign(new Error('Expired'), { status: 401 }))
    await flush(); assert.equal(expired, 1)
    Provider({}); effect(); finish(data); await flush(); assert.equal(state.status, 'success')
    Provider({}); effect(); fail(new TypeError('Network')); await flush(); assert.equal(state.status, 'error')
    assert.equal(state.data.messages.length, 0)
    console.log('PASS: dashboard fields, aliases, empty/invalid data, GET/session, failures, UI rendering, abort and 401 expiration')
}
main().catch(error => { console.error(error); process.exitCode = 1 })
