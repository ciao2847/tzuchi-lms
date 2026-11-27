import { apiClient, requireApiSuccess, requireUserKey } from 'lib/apiClient'
import { adaptDashboard } from 'adapters/dashboardAdapter'
import { AUTH_API_BASE } from 'constants'
import { ApiError } from 'lib/apiClient'
import { adaptProgramInfo } from 'adapters/programAdapter'

export const getProgramInfo = async (programId, signal, userkey) => {
    if (programId == null || !String(programId).trim()) {
        throw new ApiError(400, '學程ID不可為空', { success: false, error: { code: 'INPUTDATA_EMPTY', fields: {} } })
    }
    const result = await apiClient(`${AUTH_API_BASE}/dashboard/programInfo/${encodeURIComponent(programId)}`, {
        method: 'GET', credentials: 'include', cache: 'no-store', signal,
        headers: { Accept: 'application/json', 'X-API-Key': requireUserKey(userkey) }
    })
    requireApiSuccess(result, '無法取得學程明細。')
    return adaptProgramInfo(result.data)
}

export const getDashboard = async (signal, userkey) => {
    const result = await apiClient(`${AUTH_API_BASE}/dashboard`, {
        method: 'GET', credentials: 'include', cache: 'no-store', signal,
        headers: {
            Accept: 'application/json',
            'X-API-Key': requireUserKey(userkey)
        }
    })
    requireApiSuccess(result, '無法取得學習歷程。')
    return adaptDashboard(result.data)
}
