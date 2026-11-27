import { apiClient, requireApiSuccess, requireUserKey, ApiError } from 'lib/apiClient'
import { AUTH_API_BASE, AUTH_API_KEY } from 'constants'

const passwordRequest = async (action, payload, signal, apiKey) => {
    try {
        const result = await apiClient(`${AUTH_API_BASE}/${action}`, {
            method: 'POST', credentials: 'include', cache: 'no-store', signal,
            headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'X-API-Key': apiKey },
            body: JSON.stringify(payload)
        })
        return requireApiSuccess(result, '操作失敗，請稍後再試。')
    } catch (error) {
        const messages = {
            DATA_EMPTY: '無資料，請確認身分證字號。',
            LDAP_PWD_CHANGE_ERROR: '密碼修改失敗。',
            PWD_CHANGE_ERROR: '無法修改密碼，請確認舊密碼正確，且新密碼長度符合規定並包含英文及數字。',
            SESSION_USER_ERROR: '身分不符無法修改密碼，請重新登入。',
            SESSION_EXPIRED: '登入時效已過期或尚未登入，請重新登入。'
        }
        if (messages[error.code]) error.message = messages[error.code]
        throw error
    }
}

export const forgetPassword = async ({ uid, userkey }, signal) =>
    passwordRequest('forgetPassword', { uid: String(uid || '').trim() }, signal, requireUserKey(userkey))

export const keepPassword = async ({ uid, userkey }, signal) =>
    passwordRequest('keepPassword', { uid: String(uid || '').trim() }, signal, requireUserKey(userkey))

export const changePassword = async ({ uid, oldpwd, newpwd, userkey }, signal) => {
    return passwordRequest('changePassword', { uid: String(uid || '').trim(), oldpwd, newpwd }, signal, requireUserKey(userkey))
}

export const requestModLogin = async (modurl) => {
    if (typeof modurl !== 'string' || !modurl.trim()) return

    try {
        const url = new URL(modurl.trim(), window.location.href)
        if (!['http:', 'https:'].includes(url.protocol)) return

        // The remote login only needs to run; its response is not consumed.
        await fetch(url.href, {
            method: 'GET',
            mode: 'no-cors',
            credentials: 'include',
            cache: 'no-store'
        })
    } catch (error) {
        console.warn('Moodle 背景同步請求未完成。', error)
    }
}

const loginErrorMessages = new Map([
    ['DATA_EMPTY', '無資料'],
    ['AUTH_ACCOUNT_LOCK', '帳號連續輸入錯誤密碼5次，帳號已鎖定，請5分鐘後再嘗試'],
    ['AUTH_ACCOUNT_DISABLED', '此帳號已被停用'],
    ['AUTH_ACCOUNT_ERROR', '帳號或密碼不符']
])

export const login = async ({ uid, pwd, keeplogin = 0 }, signal) => {
    const keepLogin = keeplogin === true || keeplogin === 1 || keeplogin === '1'
    const fallbackMessage = '登入失敗，請稍後再試。'

    try {
        const result = await apiClient(`${AUTH_API_BASE}/login`, {
            method: 'POST', credentials: 'include', cache: 'no-store', signal,
            headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'X-API-Key': AUTH_API_KEY },
            body: JSON.stringify({ uid: String(uid || '').trim(), pwd, keeplogin: keepLogin ? 1 : 0 })
        })
        return requireApiSuccess(result, fallbackMessage)
    } catch (error) {
        if (error instanceof ApiError) {
            const message = error.data?.error?.message || error.data?.message || error.data?.errorMessage
            error.message = (typeof message === 'string' && message.trim()) ||
                loginErrorMessages.get(error.code) ||
                (error.code === 'SESSION_EXPIRED' ? error.message : fallbackMessage)
        }
        throw error
    }
}

export const checkSession = async (signal) => {
    const result = await apiClient(`${AUTH_API_BASE}/session`, {
        method: 'POST', credentials: 'include', cache: 'no-store', signal,
        headers: { Accept: 'application/json', 'X-API-Key': AUTH_API_KEY }
    })
    requireApiSuccess(result, '無法確認登入狀態，請稍後再試。')
    if (!result.data || typeof result.data !== 'object' || Array.isArray(result.data)) {
        throw new ApiError(502, '登入狀態服務回應格式異常。', result)
    }
    return result
}

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
    return requireApiSuccess(result, '登出失敗，請稍後再試。')
}
