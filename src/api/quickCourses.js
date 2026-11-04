import { apiClient, ApiError } from 'lib/apiClient'
import { AUTH_API_BASE, AUTH_API_KEY } from 'constants/auth'

const dateLabel = timestamp => {
    if (!timestamp || !Number.isFinite(Number(timestamp))) return ''
    const date = new Date(Number(timestamp) * 1000)
    return Number.isNaN(date.getTime()) ? '' : new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Taipei' }).format(date)
}

export const getQuickCourses = async (filters = {}, signal) => {
    const params = {
        oldcourse: 0, branch: 'all', category: '', type: 'all', program: 'all', keyword: '',
        ...filters,
        page: Math.max(1, Math.trunc(Number(filters.page) || 1)),
        pagesize: Math.min(500, Math.max(1, Math.trunc(Number(filters.pagesize) || 20)))
    }
    const result = await apiClient(`${AUTH_API_BASE}/course/quick`, {
        method: 'POST', credentials: 'include', cache: 'no-store', signal,
        headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'X-API-Key': AUTH_API_KEY },
        body: JSON.stringify(params)
    })
    if (result?.success !== true) {
        const code = result?.error?.code || result?.code || result?.error
        throw new ApiError(code === 'SESSION_EXPIRED' ? 401 : 400,
            result?.error?.message || result?.message || '無法取得快速選課清單。', result)
    }
    const data = result.data
    if (!Array.isArray(data?.courselist) || !Number.isFinite(Number(data.total)) || Number(data.total) < 0) {
        throw new Error('快速選課回應格式異常。')
    }
    return {
        total: Number(data.total),
        courses: data.courselist.map(course => ({
            id: String(course.id), campus: course.branchname || '', type: course.typename || '',
            title: course.coursename || '', lecturer: course.teacher || '',
            date: [dateLabel(course.coursedate), course.coursetime].filter(Boolean).join(' '),
            isToday: dateLabel(course.coursedate) === new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Taipei' }).format(new Date()),
            enrollment: `${course.applynum || '0'}/${course.applylimit || '0'}`,
            programs: Array.isArray(course.programlist) ? course.programlist : [],
            isApplied: String(course.isapply) === '1', isSelected: String(course.isselect) === '1',
            isRegistrationOpen: String(course.isreg) === '1'
        }))
    }
}
