export class ApiError extends Error {
    constructor(status, message, data) {
        super(message)
        this.name = 'ApiError'
        this.status = status
        this.data = data
        this.code = data?.error?.code || data?.code || (typeof data?.error === 'string' ? data.error : undefined)
        this.fields = data?.error?.fields || {}
    }
}

export const requireUserKey = (userkey) => {
    if (typeof userkey !== 'string' || !userkey.trim()) {
        throw new ApiError(401, '登入時效已過期或尚未登入，請重新登入')
    }
    return userkey
}

const getErrorMessage = (status, data) => {
    if (typeof data === 'string') return data
    return data?.error?.message || data?.message || data?.errorMessage ||
        (data?.error?.code === 'SESSION_EXPIRED' || status === 401
            ? '登入時效已過期或尚未登入，請重新登入' : `HTTP ${status} Error`)
}

export const requireApiSuccess = (result, fallbackMessage) => {
    if (result?.success === true) return result
    const code = result?.error?.code || result?.code || result?.error
    const messages = {
        SESSION_EXPIRED: '登入時效已過期或尚未登入，請重新登入',
        AUTH_ACCOUNT_ERROR: '帳號或密碼不符',
        PROGRAM_ERROR: '學程不存在',
        INPUTDATA_EMPTY: '學程ID不可為空'
    }
    throw new ApiError(code === 'SESSION_EXPIRED' ? 401 : 400,
        result?.error?.message || result?.message || result?.errorMessage || messages[code] || fallbackMessage,
        result)
}

export const apiClient = async (endpoint, options = {}) => {
    const response = await fetch(endpoint, options)
    const data = await response.json().catch(() => null)

    if (!response.ok || data?.error?.code === 'SESSION_EXPIRED') {
        throw new ApiError(
            data?.error?.code === 'SESSION_EXPIRED' ? 401 : response.status,
            getErrorMessage(response.status, data),
            data
        )
    }

    return data
}
