import React, { useCallback, useEffect, useRef, useState } from 'react'
import { logout as requestLogout, requestModLogin, checkSession } from 'api/auth'
import { requireUserKey } from 'lib/apiClient'

const LOGIN_STORAGE_KEY = 'tzuchi-lms-login'
const BROWSER_SESSION_COOKIE = 'tzuchi_lms_session'

const hasBrowserSession = () => (window.document?.cookie || '').split(';')
    .some(cookie => cookie.trim() === `${BROWSER_SESSION_COOKIE}=1`)

const setBrowserSession = (active) => {
    if (!window.document) return
    // No expiry on creation: keep this marker only for the browser session.
    window.document.cookie = `${BROWSER_SESSION_COOKIE}=${active ? '1' : ''}; Path=/; SameSite=Lax${active ? '' : '; Max-Age=0'}${window.location?.protocol === 'https:' ? '; Secure' : ''}`
}

const LOGGED_OUT_STATE = {
    isLogin: false,
    user: {}
}

const parseStoredLogin = (storedValue) => {
    if (!storedValue || storedValue === 'false') return null

    try {
        const storedLogin = JSON.parse(storedValue)
        if (!storedLogin?.isLogin || !storedLogin.user?.id ||
            storedLogin.user.id === 'user-001') return null

        return storedLogin
    } catch (error) {
        return null
    }
}

const getInitialLoginState = () => {
    if (typeof window === 'undefined') return LOGGED_OUT_STATE
    const storedLogin = parseStoredLogin(window.localStorage.getItem(LOGIN_STORAGE_KEY)) ||
        parseStoredLogin(window.sessionStorage.getItem(LOGIN_STORAGE_KEY))
    if (storedLogin?.remember !== true && !hasBrowserSession()) {
        window.localStorage.removeItem(LOGIN_STORAGE_KEY)
        window.sessionStorage.removeItem(LOGIN_STORAGE_KEY)
        return LOGGED_OUT_STATE
    }

    return storedLogin || LOGGED_OUT_STATE
}

const saveLoginState = (loginState) => {
    if (typeof window === 'undefined') return

    // Unremembered profiles need the browser marker; remembered ones may be
    // restored after a restart. Neither bypasses server /session validation.
    setBrowserSession(true)
    const { userkey, ...profile } = loginState.user
    window.localStorage.setItem(LOGIN_STORAGE_KEY, JSON.stringify({ ...loginState, user: profile }))
    window.sessionStorage.removeItem(LOGIN_STORAGE_KEY)
}

const clearLoginState = () => {
    if (typeof window === 'undefined') return
    setBrowserSession(false)
    window.localStorage.removeItem(LOGIN_STORAGE_KEY)
    window.sessionStorage.removeItem(LOGIN_STORAGE_KEY)
}

export const LoginContext = React.createContext({
    isLogin: false,
    user: {},
    login: async () => undefined,
    logout: async () => undefined,
    isLoggingOut: false,
    sessionStatus: 'idle',
    sessionError: '',
    retrySession: () => undefined,
    toggleLogin: () => undefined
})

const LoginProvider = ({ children }) => {
    const [loginState, setLoginState] = useState(getInitialLoginState)
    const [sessionExpired, setSessionExpired] = useState(false)
    const [sessionStatus, setSessionStatus] = useState(loginState.isLogin ? 'checking' : 'idle')
    const [sessionError, setSessionError] = useState('')
    const sessionRequest = useRef(null)
    const sessionVersion = useRef(0)
    const authVersion = useRef(0)
    const cancelSessionCheck = useCallback(() => {
        sessionVersion.current += 1
        sessionRequest.current?.abort()
        sessionRequest.current = null
    }, [])
    const expireSession = useCallback(() => {
        authVersion.current += 1
        cancelSessionCheck()
        clearLoginState()
        setLoginState(LOGGED_OUT_STATE)
        setSessionExpired(true)
        setSessionStatus('idle')
        setSessionError('')
    }, [cancelSessionCheck])
    const [isLoggingOut, setIsLoggingOut] = useState(false)
    const logoutRequest = useRef(null)

    const validateSession = useCallback(async (fallbackLogin) => {
        cancelSessionCheck()
        const cachedLogin = getInitialLoginState()
        const storedLogin = cachedLogin.isLogin ? cachedLogin : fallbackLogin || LOGGED_OUT_STATE
        if (!storedLogin.isLogin) {
            setLoginState(LOGGED_OUT_STATE)
            setSessionStatus('idle')
            setSessionError('')
            return
        }
        const controller = new AbortController()
        const version = sessionVersion.current
        sessionRequest.current = controller
        setSessionStatus('checking')
        setSessionError('')
        try {
            const { data } = await checkSession(controller.signal)
            if (controller.signal.aborted || version !== sessionVersion.current) return
            if (data?.id && data.id !== storedLogin.user.id) {
                expireSession()
                return
            }
            const user = { ...storedLogin.user }
            user.userkey = requireUserKey(data?.userkey)
            if (typeof data?.name === 'string' && data.name) user.name = data.name
            if (typeof data?.depname === 'string') user.department = data.depname
            if (typeof data?.mail === 'string') user.mail = data.mail
            if (typeof data?.branch === 'string') user.branch = data.branch
            if (data?.changepassword === 'Y' || data?.changepassword === 'N') {
                user.changepassword = data.changepassword
            }
            const nextState = { ...storedLogin, user }
            saveLoginState(nextState)
            setLoginState(nextState)
            setSessionExpired(false)
            setSessionStatus('success')
        } catch (error) {
            if (controller.signal.aborted || version !== sessionVersion.current) return
            if (error.status === 401) { expireSession(); return }
            setSessionStatus('error')
            setSessionError(error instanceof TypeError
                ? '無法連線至登入狀態服務，請確認網路後重試。'
                : error.message || '無法確認登入狀態，請稍後重試。')
        } finally {
            if (version === sessionVersion.current) sessionRequest.current = null
        }
    }, [cancelSessionCheck, expireSession])

    const retrySession = useCallback(() => validateSession(), [validateSession])

    useEffect(() => {
        void retrySession()
        return cancelSessionCheck
    }, [retrySession, cancelSessionCheck])

    useEffect(() => {
        if (typeof window === 'undefined' || !window.addEventListener) return undefined
        const handlePageShow = (event) => {
            if (event.persisted) void retrySession()
        }
        window.addEventListener('pageshow', handlePageShow)
        return () => window.removeEventListener('pageshow', handlePageShow)
    }, [retrySession])

    useEffect(() => {
        if (typeof window === 'undefined' || !window.addEventListener) return undefined
        const handleStorage = (event) => {
            if (event.storageArea && event.storageArea !== window.localStorage) return
            if (event.key !== null && event.key !== LOGIN_STORAGE_KEY) return
            authVersion.current += 1
            if (window.localStorage.getItem(LOGIN_STORAGE_KEY) === null) {
                // A same-origin page can clear all storage without ending the LMS session.
                if (event.key === null && loginState.isLogin && sessionStatus === 'success') {
                    void validateSession(loginState)
                    return
                }
                cancelSessionCheck()
                clearLoginState()
                setLoginState(LOGGED_OUT_STATE)
                setSessionStatus('idle')
                setSessionError('')
                setSessionExpired(false)
                return
            }
            void retrySession()
        }
        window.addEventListener('storage', handleStorage)
        return () => window.removeEventListener('storage', handleStorage)
    }, [cancelSessionCheck, loginState, retrySession, sessionStatus, validateSession])

    const toggleLogin = (nextValue) => {
        const nextIsLogin = typeof nextValue === 'function'
            ? nextValue(loginState.isLogin && sessionStatus === 'success') : nextValue
        if (nextIsLogin) { void retrySession(); return }
        authVersion.current += 1
        cancelSessionCheck()
        clearLoginState()
        setLoginState(LOGGED_OUT_STATE)
        setSessionStatus('idle')
        setSessionError('')
    }

    const login = async ({ user, remember = true } = {}) => {
        if (!user?.id || !user?.name) {
            throw new Error('登入回應資料不完整，請稍後再試。')
        }
        const nextState = {
            isLogin: true,
            user: { ...user, userkey: requireUserKey(user.userkey) },
            remember: remember === true
        }

        authVersion.current += 1
        cancelSessionCheck()
        saveLoginState(nextState)
        setSessionExpired(false)
        setLoginState(nextState)
        setSessionStatus('success')
        setSessionError('')

        void requestModLogin(user.modurl)

        return nextState
    }

    const logout = () => {
        if (logoutRequest.current) return logoutRequest.current
        const version = ++authVersion.current
        cancelSessionCheck()
        setIsLoggingOut(true)
        logoutRequest.current = (async () => {
            try {
                const result = await requestLogout()
                if (version !== authVersion.current) return
                cancelSessionCheck()
                clearLoginState()
                setLoginState(LOGGED_OUT_STATE)
                setSessionStatus('idle')
                setSessionError('')
                setSessionExpired(false)
                void requestModLogin(result.data?.modurl)
            } catch (error) {
                if (version !== authVersion.current) return
                if (error.status === 401) { expireSession(); return }
                throw error
            } finally {
                logoutRequest.current = null
                setIsLoggingOut(false)
            }
        })()
        return logoutRequest.current
    }

    const contextValue = {
        ...loginState,
        isLogin: loginState.isLogin && sessionStatus === 'success',
        user: sessionStatus === 'success' ? loginState.user : {},
        sessionExpired,
        sessionStatus,
        sessionError,
        retrySession,
        expireSession,
        markPasswordChanged: (userId) => {
            const storedLogin = getInitialLoginState()
            if (storedLogin.user.id !== userId) return
            const nextState = { ...storedLogin, user: { ...storedLogin.user, changepassword: 'N' } }
            saveLoginState(nextState)
            setLoginState({ ...nextState, user: { ...nextState.user, userkey: loginState.user.userkey } })
        },
        isLoggingOut,
        login,
        logout,
        toggleLogin
    }

    return (
        <LoginContext.Provider value={contextValue}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider
