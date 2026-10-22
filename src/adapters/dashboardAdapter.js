const list = (value) => Array.isArray(value) ? value : []
const object = (value) => value && typeof value === 'object' && !Array.isArray(value)

const adaptCourse = (course, fallbackStatus) => {
    const rawStatus = fallbackStatus === 'coming' ? 'coming' : course.status || fallbackStatus
    const status = rawStatus === 'yat' ? 'yet' : rawStatus
    return {
        id: String(course.id),
        title: course.title || course.name || '',
        start: String(course.start || '').replace(' ', 'T'),
        end: course.end ? String(course.end).replace(' ', 'T') : undefined,
        classroom: course.classroom || '',
        status,
        tone: status === 'coming' ? 'registered' : status === 'pass' ? 'complete' : 'pending'
    }
}

export const getCalendarEvents = (data) => [...data.coming, ...data.history]
    .filter(course => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(course.start))
    .map(course => ({
        id: `${course.status}-${course.id}`,
        title: course.title,
        start: course.start.slice(0, 10),
        allDay: true,
        extendedProps: { tone: course.tone, sortTime: course.start, course }
    }))

export const adaptDashboard = (data) => {
    if (!object(data) || !Array.isArray(data.announcement) ||
        !Array.isArray(data.mail) || !object(data.programs) ||
        !object(data.calendarInfo || data.courses)) {
        throw new Error('學習歷程回應格式異常，請稍後再試。')
    }
    const calendar = data.calendarInfo || data.courses
    const history = calendar.usrhistory || calendar.usrhistroy || {}
    // History contains every past course, regardless of its completion status.
    const historyCourses = Array.isArray(history) ? history.map(course => adaptCourse(course, 'yet')) :
        Object.entries(history).flatMap(([status, courses]) => list(courses).map(course => adaptCourse(course, status)))
    const program = (item) => ({ id: String(item.id), title: item.title || item.name || '' })
    const announcements = data.announcement.map((item) => ({
        id: String(item.id), type: 'announcement', title: item.title || '',
        date: item.date || '', publishedAt: item.date || '', isUnread: false,
        content: [], branch: item.branch
    }))
    const messages = data.mail.map((item) => ({
        id: String(item.id), type: 'message', title: item.subject || '',
        date: item.created || '', publishedAt: item.created || '',
        isUnread: String(item.read) === '0', htmlBody: String(item.body || ''), content: []
    }))
    return {
        announcements,
        messages,
        programs: {
            inProgress: list(data.programs.inProgress).map(program),
            past: list(data.programs.past).map(program)
        },
        coming: list(calendar.coming).map((item) => adaptCourse(item, 'coming')),
        history: historyCourses,
        passed: historyCourses.filter(course => course.status === 'pass'),
        yet: historyCourses.filter(course => course.status === 'yet')
    }
}
