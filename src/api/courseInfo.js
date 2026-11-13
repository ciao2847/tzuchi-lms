import { apiClient, ApiError, requireApiSuccess } from 'lib/apiClient'
import { AUTH_API_BASE, AUTH_API_KEY } from 'constants/auth'

export const getCourseInfo = async (courseId, signal) => {
    const id = String(courseId ?? '').trim()
    if (!id) throw new ApiError(400, '課程 ID 不可為空。')
    const result = await apiClient(`${AUTH_API_BASE}/course/courseInfo/${encodeURIComponent(id)}`, {
        method: 'GET', credentials: 'include', cache: 'no-store', signal,
        headers: { Accept: 'application/json', 'X-API-Key': AUTH_API_KEY }
    })
    requireApiSuccess(result, '無法取得課程資訊。')
    const { data } = result
    if (!data || typeof data !== 'object' || Array.isArray(data) ||
        String(data.id ?? '') !== id || typeof data.coursename !== 'string' || !data.coursename.trim() ||
        !['1', '2'].includes(String(data.type))) {
        throw new ApiError(502, '課程資訊回應格式異常。', result)
    }
    const invalidList = (key, validItem) => data[key] != null &&
        (!Array.isArray(data[key]) || data[key].some(item => !validItem(item)))
    if (invalidList('teacher', item => item && typeof item.name === 'string') ||
        invalidList('program', item => item && typeof item.name === 'string' && typeof item.program === 'string') ||
        invalidList('student', item => typeof item === 'string') ||
        invalidList('completion', item => typeof item === 'string') ||
        (data.category != null && (typeof data.category !== 'object' || Array.isArray(data.category)))) {
        throw new ApiError(502, '課程資訊回應格式異常。', result)
    }
    return data
}
