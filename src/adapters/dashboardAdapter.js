const list = (value) => Array.isArray(value) ? value : []
const object = (value) => value && typeof value === 'object' && !Array.isArray(value)

const adaptCourse = (course, fallbackStatus) => {
    const { id, title, name, start, end, classroom, status: courseStatus } = course
    const rawStatus = fallbackStatus === 'coming' ? 'coming' : courseStatus || fallbackStatus
    const status = rawStatus === 'yat' ? 'yet' : rawStatus
    return {
        id: String(id),
        title: title || name || '',
        start: String(start || '').replace(' ', 'T'),
        end: end ? String(end).replace(' ', 'T') : undefined,
        classroom: classroom || '',
        status,
        tone: status === 'coming' ? 'registered' : status === 'pass' ? 'complete' : 'pending'
    }
}

export const getCalendarEvents = ({ coming, history }) => [...coming, ...history]
    .filter(course => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(course.start))
    .map(course => ({
        id: `${course.status}-${course.id}`,
        title: course.title,
        url: `${process.env.BASE_PATH || ''}/course/${encodeURIComponent(course.id)}`,
        start: course.start.slice(0, 10),
        allDay: true,
        extendedProps: { tone: course.tone, sortTime: course.start, course }
    }))

export const adaptDashboard = (data) => {
    if (!object(data) || !Array.isArray(data.announcement) ||
        !Array.isArray(data.mail) || !object(data.programs) ||
        !object(data.courses || data.calendarInfo)) {
        throw new Error('學習歷程回應格式異常，請稍後再試。')
    }
    const calendar = data.courses || data.calendarInfo
    const history = calendar.usrhistory || calendar.usrhistroy || {}
    // History contains every past course, regardless of its completion status.
    const historyCourses = Array.isArray(history) ? history.map(course => adaptCourse(course, 'yet')) :
        Object.entries(history).flatMap(([status, courses]) => list(courses).map(course => adaptCourse(course, status)))
    const program = ({ id, title, name }) => ({ id: String(id), title: title || name || '' })
    const announcements = data.announcement.map(({ id, title, date, read, branch }) => ({
        id: String(id), type: 'announcement', title: title || '',
        date: date || '', publishedAt: date || '', isUnread: String(read ?? '0') === '0',
        content: [], branch
    }))
    const messages = data.mail.map(({ id, subject, created, read, body }) => ({
        id: String(id), type: 'message', title: subject || '',
        date: created || '', publishedAt: created || '',
        isUnread: String(read) === '0', htmlBody: String(body || ''), content: []
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
