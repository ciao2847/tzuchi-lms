import { apiClient, ApiError, requireApiSuccess, requireUserKey } from 'lib/apiClient'
import { AUTH_API_BASE } from 'constants/auth'

export const getLearningHistory = async (year, signal, userkey) => {
    if (!Number.isInteger(year) || year < 1 || year > 9999) throw new Error('請選擇有效的西元年份。')
    const result = await apiClient(`${AUTH_API_BASE}/course/history/${year}`, {
        method: 'GET', credentials: 'include', cache: 'no-store', signal,
        headers: { Accept: 'application/json', 'X-API-Key': requireUserKey(userkey) }
    })
    requireApiSuccess(result, '無法取得學習歷程。')
    if (!Array.isArray(result.data) || result.data.some(item => !item || !item.id || typeof item.coursename !== 'string')) {
        throw new ApiError(502, '學習歷程回應格式異常。', result)
    }
    return result.data.map(({ id, coursename, type, status, startDate, timemodified, completeTimemodified }) => ({
        id: String(id), title: coursename,
        type: String(type) === '1' ? '數位' : String(type) === '2' ? '實體' : '',
        status: status === '通過' ? 'pass' : status === '未完成' ? 'yet' : status || '',
        start: startDate || '', signedAt: timemodified || '', passedAt: completeTimemodified || ''
    }))
}
