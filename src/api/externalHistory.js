import { apiClient, ApiError, requireApiSuccess } from 'lib/apiClient'
import { AUTH_API_BASE, AUTH_API_KEY } from 'constants/auth'

export const getExternalHistory = async (year, signal) => {
    if (!Number.isInteger(year) || year < 1 || year > 9999) throw new Error('請選擇有效的西元年份。')
    const result = await apiClient(`${AUTH_API_BASE}/course/outerHistory/${year}`, {
        method: 'GET', credentials: 'include', cache: 'no-store', signal,
        headers: { Accept: 'application/json', 'X-API-Key': AUTH_API_KEY }
    })
    requireApiSuccess(result, '無法取得外訓紀錄。')
    if (!Array.isArray(result.data) || result.data.some(item => !item || !item.id || typeof item.coursename !== 'string')) {
        throw new ApiError(502, '外訓紀錄回傳格式錯誤。', result)
    }
    return result.data
}
