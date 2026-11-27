import { apiClient, ApiError, requireApiSuccess, requireUserKey } from 'lib/apiClient'
import { AUTH_API_BASE } from 'constants'

const requireRegistrationCourseId = courseId => {
    const courseid = Number(courseId)
    if (!/^[0-9]+$/.test(String(courseId)) || !Number.isSafeInteger(courseid) || courseid < 1) {
        throw new ApiError(400, '課程 ID 格式不正確。')
    }
    return courseid
}

export const registerCourse = async (courseId, { note, info }, signal, userkey) => {
    const courseid = requireRegistrationCourseId(courseId)
    const result = await apiClient(`${AUTH_API_BASE}/course/courseRegister`, {
        method: 'POST', credentials: 'include', cache: 'no-store', signal,
        headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'X-API-Key': requireUserKey(userkey) },
        body: JSON.stringify({ courseid, note, info })
    })
    requireApiSuccess(result, '報名失敗。')
    const registration = Array.isArray(result.data) ? result.data[0] : result.data
    if (registration?.register !== true || registration.type !== 'success') {
        throw new ApiError(502, '無法確認報名結果，請重新查看課程報名狀態。', result)
    }
    return { message: registration.message || '報名成功' }
}

export const cancelCourseRegistration = async (courseId, signal, userkey) => {
    const courseid = requireRegistrationCourseId(courseId)
    const result = await apiClient(`${AUTH_API_BASE}/course/courseRegister/delete`, {
        method: 'POST', credentials: 'include', cache: 'no-store', signal,
        headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'X-API-Key': requireUserKey(userkey) },
        body: JSON.stringify({ courseid })
    })
    requireApiSuccess(result, '取消報名失敗。')
    return { message: result.data?.[0]?.message || '取消成功' }
}

export const getCourseInfo = async (courseId, signal, userkey) => {
    const id = String(courseId ?? '').trim()
    if (!id) throw new ApiError(400, '課程 ID 不可為空。')
    const result = await apiClient(`${AUTH_API_BASE}/course/courseInfo/${encodeURIComponent(id)}`, {
        method: 'GET', credentials: 'include', cache: 'no-store', signal,
        headers: { Accept: 'application/json', 'X-API-Key': requireUserKey(userkey) }
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
