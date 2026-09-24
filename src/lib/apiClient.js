export class ApiError extends Error {
    constructor(status, message, data) {
        super(message)
        this.name = 'ApiError'
        this.status = status
        this.data = data
    }
}

const getErrorMessage = (status, data) => {
    if (typeof data === 'string') return data
    return data?.message || `HTTP ${status} Error`
}

export const apiClient = async (endpoint, options = {}) => {
    const response = await fetch(endpoint, options)
    const data = await response.json().catch(() => null)

    if (!response.ok) {
        throw new ApiError(
            response.status,
            getErrorMessage(response.status, data),
            data
        )
    }

    return data
}
