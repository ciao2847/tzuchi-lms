import { apiClient } from 'lib/apiClient'
import { adaptDashboard } from 'adapters/dashboardAdapter'
import { AUTH_API_BASE, AUTH_API_KEY } from 'constants/auth'

export const getDashboard = async (signal) => {
    const result = await apiClient(`${AUTH_API_BASE}/dashboard`, {
        method: 'GET', credentials: 'include', cache: 'no-store', signal,
        headers: {
            Accept: 'application/json',
            'X-API-Key': AUTH_API_KEY
        }
    })
    if (result?.success !== true) {
        throw new Error(result?.error?.message || result?.message || '無法取得學習歷程。')
    }
    return adaptDashboard(result.data)
}
