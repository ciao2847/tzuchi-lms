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
    mod.require = (id) => mocks[id] || (id === 'components/Spinner' ? load('src/components/Spinner.js').default : original(id))
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
    assert.equal(events[0].url, `${process.env.BASE_PATH || ''}/course/${encodeURIComponent(events[0].extendedProps.course.id)}`)
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
    const auth = load('src/constants/index.js')
    const programAdapter = load('src/adapters/programAdapter.js')
    const api = load('src/api/dashboard.js', { 'lib/apiClient': client, 'adapters/dashboardAdapter': adapter, 'adapters/programAdapter': programAdapter, 'constants': auth })
    global.fetch = async () => ({ ok: true, json: async () => ({ success: false, error: { code: 'SESSION_EXPIRED' } }) })
    await assert.rejects(api.getProgramInfo('3324', undefined, 'session-key'), error => error.status === 401)
    global.fetch = async (url, options) => {
        assert(url.endsWith('/dashboard/programInfo/3324'))
        assert.equal(options.credentials, 'include')
        assert.equal(options.headers['X-API-Key'], 'session-key')
        return { ok: true, json: async () => ({ success: true, data: {
            programCategory: { '14818': { name: 'Category', credit: '2',
                status: ['p', 'q', 'w', 'd.', 'o'],
                course: [{ id: 1, name: 'Course', status: '', type: 'digital' }] } },
            totalCredit: 5, passCredit: 2, passRealCredit: 1
        } }) }
    }
    const program = await api.getProgramInfo('3324', undefined, 'session-key')
    assert.deepEqual(program.categories[0].states, ['complete', 'overdueComplete', 'inProgress', 'failed', 'notStarted'])
    assert.equal(program.categories[0].courses[0].status, '')
    assert.equal(program.passRealCredit, 1)
    let request
    global.fetch = async (url, options) => {
        request = { url, options }
        return { ok: true, json: async () => ({ success: true, data: fixture }) }
    }
    await api.getDashboard(new AbortController().signal, 'session-key')
    assert(request.url.endsWith('/api/dashboard'))
    assert.equal(request.options.method, 'GET')
    assert.equal(request.options.credentials, 'include')
    assert.equal(request.options.cache, 'no-store')
    assert(!('body' in request.options))
    global.fetch = async () => ({ ok: false, status: 401, json: async () => ({ success: false }) })
    await assert.rejects(api.getDashboard(undefined, 'session-key'), error => error.status === 401)
    global.fetch = async () => ({ ok: true, json: async () => ({ success: false, error: { message: 'Unavailable' } }) })
    await assert.rejects(api.getDashboard(undefined, 'session-key'), /Unavailable/)

    // Render components with real React to catch missing variables and mock fallbacks.
    const DashboardContext = React.createContext({ data, status: 'success' })
    const Summary = load('src/views/home/LearningSummarySection.js', {
        'contexts/DashboardProvider': { DashboardContext },
        'components/DashboardStatus': () => null,
        'components/I18N': ({ children }) => children,
        'components/AutoSwitchLink': ({ href, children, ...props }) => React.createElement('a', { href, ...props }, children)
    }).default
    const summary = renderToStaticMarkup(React.createElement(Summary, { user: { name: 'Test user' } }))
    assert(summary.includes('Upcoming course'))
    assert(summary.includes('Test user'))
    const loadingSummary = renderToStaticMarkup(React.createElement(DashboardContext.Provider, { value: { data, status: 'loading' } }, React.createElement(Summary)))
    assert(loadingSummary.includes('h-[70px]') && loadingSummary.includes('h-[128px]'))
    assert(loadingSummary.includes('aria-busy="true"') && !loadingSummary.includes('loading-animate'))
    assert(loadingSummary.includes('animate-pulse') && loadingSummary.includes('motion-reduce:animate-none'))
    assert(!loadingSummary.includes('<header') && !loadingSummary.includes('<h2') && !loadingSummary.includes('<a'))
    assert(!loadingSummary.includes('載入中'))
    assert(!loadingSummary.includes('Upcoming course'))
    const calendarConstants = load('src/constants/index.js')
    assert.equal(calendarConstants.MESSAGE_LIST, undefined)
    assert.equal(calendarConstants.HAS_UNREAD_NOTICE, undefined)
    let calendarProps
    const RoundedSearchField = load('src/components/RoundedSearchField.js').default
    let mobileSelector = false
    const SearchableProgramSelector = load('src/views/calendar/SearchableProgramSelector.js', {
        'hooks/useMedia': () => mobileSelector,
        'components/Select': load('src/components/Select.js').default,
    'components/MoreOptionsSelector': load('src/components/MoreOptionsSelector.js').default,
        'components/KeywordSearchRow': load('src/components/KeywordSearchRow.js', { 'components/I18N': ({ children }) => children }).default,
        'components/RoundedSearchField': RoundedSearchField
    }).default
    const selector = renderToStaticMarkup(React.createElement(SearchableProgramSelector, {
        programs: Array.from({ length: 8 }, (_, id) => ({ id: String(id), title: `Course ${id}` })),
        selectedProgram: '4', onChange: () => {}, status: 'success'
    }))
    assert(selector.includes('col-start-3') && selector.includes('overflow-y-auto'))
    assert(selector.includes('Course 7') && selector.includes('更多：Course 4'))
    assert(selector.includes('type="search"') && selector.includes('rounded-full'))
    mobileSelector = true
    const compactSelector = renderToStaticMarkup(React.createElement(SearchableProgramSelector, {
        programs: [{ id: '4', title: '花慈師資培育課程' }], selectedProgram: '4', onChange: () => {}, status: 'success', searchWithButtons: true
    }))
    assert(compactSelector.includes('role="combobox"') && compactSelector.includes('花慈師資培育課程'))
    assert(compactSelector.includes('aria-label="開始查詢"') && compactSelector.includes('aria-label="清除條件"'))
    assert(!compactSelector.includes('col-start-3'))
    mobileSelector = false
    const desktopSelector = renderToStaticMarkup(React.createElement(SearchableProgramSelector, {
        programs: [{ id: '4', title: '花慈師資培育課程' }], selectedProgram: '4', onChange: () => {}, status: 'success', searchWithButtons: true
    }))
    assert(desktopSelector.includes('col-start-3') && desktopSelector.includes('開始查詢') && desktopSelector.includes('清除條件'))
    assert(!desktopSelector.includes('role="combobox"'))
    let courseDestination
    const calendarModule = load('src/views/calendar/index.js', {
        'react-router-dom': { useNavigate: () => destination => { courseDestination = destination } },
        'components/Spinner': load('src/components/Spinner.js').default,
        'hooks/useMedia': () => false,
        'api/dashboard': api,
        'contexts/LoginProvider': { LoginContext: React.createContext({ user: {}, expireSession: () => {} }) },
        'adapters/dashboardAdapter': adapter,
        './AnnualLearningHistory': () => null,
        './ExternalHistory': () => null,
        './SearchableProgramSelector': SearchableProgramSelector,
        'contexts/DashboardProvider': { DashboardContext },
        'components/DashboardStatus': () => null,
        '@fullcalendar/react': React.forwardRef((props, ref) => {
            calendarProps = props
            return React.createElement('div', { 'data-calendar': true })
        }),
        '@fullcalendar/react/daygrid': {},
        '@fullcalendar/react/themes/classic': {},
        'components/I18N': ({ children }) => children,
        'components/AutoSwitchLink': ({ href, children, ...props }) => React.createElement('a', { href, ...props }, children),
        'components/Select': ({ children }) => React.createElement('select', null, children),
        'components/NotificationDetailDialog': () => null,
        'components/TitleBlk': () => null,
        'constants': calendarConstants
    })
    const Calendar = calendarModule.default
    const { NoticeSection } = load('src/layout/MobileNotifications.js', {
        'contexts/DashboardProvider': { DashboardContext },
        'contexts/LoginProvider': { LoginContext: React.createContext({}) },
        'components/I18N': ({ children }) => children,
        'components/DashboardStatus': () => null,
        'components/NotificationDetailDialog': () => null,
        'hooks/useBodyScrollLock': () => {}
    })
    for (const Component of [calendarModule.NoticeCard, NoticeSection]) {
        const loading = renderToStaticMarkup(React.createElement(Component, { items: [], title: '通知信', status: 'loading', emptyText: '目前沒有資料' }))
        assert(loading.includes('aria-busy="true"') && !loading.includes('載入中'))
        if (Component === calendarModule.NoticeCard) {
            assert(loading.includes('h-[256px]') && !loading.includes('loading-animate'))
            assert(loading.includes('animate-pulse'))
        } else assert(loading.includes('loading-animate'))
        assert(!loading.includes('目前沒有資料'))
        const empty = renderToStaticMarkup(React.createElement(Component, { items: [], title: '通知信', status: 'success', emptyText: '目前沒有資料' }))
        assert(empty.includes('暫無資料') && !empty.includes('loading-animate'))
        const populated = renderToStaticMarkup(React.createElement(Component, {
            items: [{ id: 'notice-test', title: 'Loaded notice', date: '2026-11-11' }], title: '通知信', status: 'success'
        }))
        assert(populated.includes('Loaded notice') && !populated.includes('暫無資料') && !populated.includes('loading-animate'))
    }
    const calendar = renderToStaticMarkup(React.createElement(Calendar))
    assert(calendar.includes('Announcement') && calendar.includes('Unread'))
    assert(calendar.includes('\u901a\u77e5\u4fe1') && calendar.includes('\u7cfb\u7d71\u516c\u544a'))
    assert(calendar.includes('xl:grid-cols-[minmax(0,1fr)_330px]'))
    assert(!calendar.includes('2020/11/01'))
    assert(calendar.includes('Program from API'))
    assert(calendar.includes('value="4"'))
    assert(!calendar.includes('six-skills-1'))
    assert.equal(calendarProps.events.length, 2)
    assert.equal(calendarProps.dayMaxEvents, 1)
    assert.equal(calendarProps.moreLinkText(22), '22+')
    assert.equal(calendarProps.moreLinkClick, 'popover')
    let clickPrevented = false
    calendarProps.eventClick({ event: { extendedProps: events[0].extendedProps }, jsEvent: { preventDefault: () => { clickPrevented = true } } })
    assert.equal(clickPrevented, true)
    assert.equal(courseDestination, `/course/${encodeURIComponent(events[0].extendedProps.course.id)}`)
    courseDestination = undefined
    calendarProps.eventClick({ event: { extendedProps: events[0].extendedProps }, jsEvent: { ctrlKey: true, preventDefault: () => { throw new Error('Modified clicks must retain native link behavior') } } })
    assert.equal(courseDestination, undefined)
    assert.equal(calendarProps.initialDate, undefined)
    const courseMarkup = renderToStaticMarkup(calendarProps.eventContent({ event: {
        title: events[0].title, extendedProps: events[0].extendedProps
    } }))
    assert(courseMarkup.includes('09:00 Upcoming course'))
    assert(courseMarkup.includes('Room'))
    const emptyCalendar = renderToStaticMarkup(React.createElement(DashboardContext.Provider,
        { value: { data: empty, status: 'success' } }, React.createElement(Calendar)))
    assert(!emptyCalendar.includes('Announcement') && !emptyCalendar.includes('Unread'))
    assert(emptyCalendar.includes('\u66ab\u7121\u8cc7\u6599'))
    assert(!emptyCalendar.includes('loading-animate'))
    // Exercise request lifecycle: no anonymous call, abort on logout, 401 expiration.
    let login = { isLogin: false, user: {} }, effect, state, expired = 0, calls = 0, signal
    let finish, fail
    const fakeReact = {
        createContext: () => ({ Provider: 'provider' }),
        useContext: () => login,
        useState: initial => [typeof initial === 'function' ? initial() : initial, value => { state = typeof value === 'function' ? value(state) : value }],
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
    const previousWindow = global.window
    const savedReads = new Map()
    global.window = { localStorage: { getItem: key => savedReads.get(key) ?? null, setItem: (key, value) => savedReads.set(key, value) } }
    const unreadMessage = data.messages.find(item => item.isUnread)
    const unreadAnnouncement = data.announcements[0]
    assert.equal(unreadAnnouncement.isUnread, true, 'Announcements start unread when API provides no read state')
    const readContext = Provider({}).props.value
    readContext.markRead(unreadMessage)
    assert.equal(state.data.messages.find(item => item.id === unreadMessage.id).isUnread, false)
    readContext.markRead(unreadAnnouncement)
    assert.equal(state.data.announcements[0].isUnread, false)
    Provider({}); effect(); finish(data); await flush()
    assert.equal(state.data.messages.find(item => item.id === unreadMessage.id).isUnread, false, 'Read mail survives a reload')
    assert.equal(state.data.announcements[0].isUnread, false, 'Read announcements survive a reload')
    login = { ...login, user: { id: 'other-account' } }
    Provider({}); effect(); finish(data); await flush()
    assert.equal(state.data.messages.find(item => item.id === unreadMessage.id).isUnread, true, 'Accounts must not share read state')
    assert.equal(state.data.announcements[0].isUnread, true)
    global.window = previousWindow
    Provider({}); effect(); fail(new TypeError('Network')); await flush(); assert.equal(state.status, 'error')
    assert.equal(state.data.messages.length, 0)
    console.log('PASS: dashboard fields, read mail/announcements, reload persistence, account isolation, GET/session, failures, UI rendering, abort and 401 expiration')
}
main().catch(error => { console.error(error); process.exitCode = 1 })
