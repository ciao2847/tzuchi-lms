import { apiClient, requireApiSuccess } from 'lib/apiClient'
import { adaptDashboard } from 'adapters/dashboardAdapter'
import { AUTH_API_BASE, AUTH_API_KEY } from 'constants/auth'
import { ApiError } from 'lib/apiClient'
import { adaptProgramInfo } from 'adapters/programAdapter'

export const getProgramInfo = async (programId, signal) => {
    if (programId == null || !String(programId).trim()) {
        throw new ApiError(400, '學程ID不可為空', { success: false, error: { code: 'INPUTDATA_EMPTY', fields: {} } })
    }
    const result = await apiClient(`${AUTH_API_BASE}/dashboard/programInfo/${encodeURIComponent(programId)}`, {
        method: 'GET', credentials: 'include', cache: 'no-store', signal,
        headers: { Accept: 'application/json', 'X-API-Key': AUTH_API_KEY }
    })
    requireApiSuccess(result, '無法取得學程明細。')
    return adaptProgramInfo(result.data)
}

export const getDashboard = async (signal) => {
    const result = await apiClient(`${AUTH_API_BASE}/dashboard`, {
        method: 'GET', credentials: 'include', cache: 'no-store', signal,
        headers: {
            Accept: 'application/json',
            'X-API-Key': AUTH_API_KEY
        }
    })
    requireApiSuccess(result, '無法取得學習歷程。')
    return adaptDashboard(result.data)
}
