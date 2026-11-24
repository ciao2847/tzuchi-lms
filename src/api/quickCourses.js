import { apiClient, ApiError, requireApiSuccess, requireUserKey } from 'lib/apiClient'
import { AUTH_API_BASE } from 'constants/auth'

export const getCourseCategories = async (signal, userkey) => {
    const result = await apiClient(`${AUTH_API_BASE}/course/category`, {
        method: 'GET', credentials: 'include', cache: 'no-store', signal,
        headers: { Accept: 'application/json', 'X-API-Key': requireUserKey(userkey) }
    })
    requireApiSuccess(result, '無法取得課程屬性。')
    if (!Array.isArray(result.data) || result.data.some(item =>
        !item || !['string', 'number'].includes(typeof item.id) || !String(item.id).trim() ||
        typeof item.branch !== 'string' || !item.branch.trim() ||
        typeof item.name !== 'string' || !item.name.trim())) {
        throw new ApiError(502, '課程屬性回應格式異常。', result)
    }
    return result.data.map(item => ({ id: String(item.id), branch: item.branch, name: item.name }))
}

const dateLabel = timestamp => {
    if (!timestamp || !Number.isFinite(Number(timestamp))) return ''
    const date = new Date(Number(timestamp) * 1000)
    return Number.isNaN(date.getTime()) ? '' : new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Taipei' }).format(date)
}

export const getQuickCourses = async (filters = {}, signal, userkey) => {
    const params = {
        oldcourse: 0, branch: '', category: '', type: 'all', program: 'all', keyword: '',
        ...filters,
        page: Math.max(1, Math.trunc(Number(filters.page) || 1)),
        pagesize: Math.min(500, Math.max(1, Math.trunc(Number(filters.pagesize) || 20)))
    }
    const result = await apiClient(`${AUTH_API_BASE}/course/quick`, {
        method: 'POST', credentials: 'include', cache: 'no-store', signal,
        headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'X-API-Key': requireUserKey(userkey) },
        body: JSON.stringify(params)
    })
    if (result?.success !== true) {
        const code = result?.error?.code || result?.code || result?.error
        throw new ApiError(code === 'SESSION_EXPIRED' ? 401 : 400,
            result?.error?.message || result?.message || '無法取得快速選課清單。', result)
    }
    const { data } = result
    if (!Array.isArray(data?.courselist) || !Number.isFinite(Number(data.total)) || Number(data.total) < 0) {
        throw new Error('快速選課回應格式異常。')
    }
    return {
        branch: typeof data.branch === 'string' ? data.branch.trim() : '',
        total: Number(data.total),
        courses: data.courselist.map(({
            id, branchname, typename, coursename, teacher, coursedate, coursetime,
            applynum, applylimit, programlist, isapply, isselect, isreg
        }) => ({
            id: String(id), campus: branchname || '', type: typename || '',
            title: coursename || '', lecturer: teacher || '',
            date: [dateLabel(coursedate), coursetime].filter(Boolean).join(' '),
            isToday: dateLabel(coursedate) === new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Taipei' }).format(new Date()),
            enrollment: `${applynum || '0'}/${applylimit || '0'}`,
            programs: Array.isArray(programlist) ? programlist : [],
            isApplied: String(isapply) === '1', isSelected: String(isselect) === '1',
            isRegistrationOpen: String(isreg) === '1'
        }))
    }
}
