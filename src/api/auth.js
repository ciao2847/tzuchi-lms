import { apiClient } from 'lib/apiClient'
import { AUTH_API_BASE, AUTH_API_KEY } from 'constants/auth'

export const logout = async () => {
    const result = await apiClient(`${AUTH_API_BASE}/logout`, {
        method: 'POST',
        credentials: 'include',
        cache: 'no-store',
        headers: {
            Accept: 'application/json',
            'X-API-Key': AUTH_API_KEY
        }
    })
    if (result?.success !== true) {
        throw new Error(result?.error?.message || result?.message ||
            result?.errorMessage || '登出失敗，請稍後再試。')
    }
    return result
}
