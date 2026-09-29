import React, { useState } from 'react'
import { login as requestLogin } from 'api/auth'

const LOGIN_STORAGE_KEY = 'tzuchi-lms-login'

const DEFAULT_USER = {
    name: '王小明'
}

const LOGGED_OUT_STATE = {
    isLogin: false,
    user: {}
}

const parseStoredLogin = (storedValue) => {
    if (!storedValue || storedValue === 'false') return null

    // 相容舊版只儲存 true / false 的登入狀態。
    if (storedValue === 'true') {
        return {
            isLogin: true,
            user: DEFAULT_USER
        }
    }

    try {
        const storedLogin = JSON.parse(storedValue)
        if (!storedLogin?.isLogin || !storedLogin.user) return null

        return storedLogin
    } catch (error) {
        return null
    }
}

const getInitialLoginState = () => {
    if (typeof window === 'undefined') return LOGGED_OUT_STATE

    return (
        parseStoredLogin(window.localStorage.getItem(LOGIN_STORAGE_KEY)) ||
        parseStoredLogin(window.sessionStorage.getItem(LOGIN_STORAGE_KEY)) ||
        LOGGED_OUT_STATE
    )
}

const saveLoginState = (loginState, remember = false) => {
    if (typeof window === 'undefined') return

    const targetStorage = remember ? window.localStorage : window.sessionStorage
    const otherStorage = remember ? window.sessionStorage : window.localStorage

    targetStorage.setItem(LOGIN_STORAGE_KEY, JSON.stringify(loginState))
    otherStorage.removeItem(LOGIN_STORAGE_KEY)
}

const clearLoginState = () => {
    if (typeof window === 'undefined') return
    window.localStorage.removeItem(LOGIN_STORAGE_KEY)
    window.sessionStorage.removeItem(LOGIN_STORAGE_KEY)
}

export const LoginContext = React.createContext({
    isLogin: false,
    user: {},
    login: async () => undefined,
    logout: () => undefined,
    toggleLogin: () => undefined
})

const LoginProvider = ({ children }) => {
    const [loginState, setLoginState] = useState(getInitialLoginState)

    const toggleLogin = (nextValue) => {
        setLoginState((currentState) => {
            const nextIsLogin =
                typeof nextValue === 'function'
                    ? nextValue(currentState.isLogin)
                    : nextValue

            if (!nextIsLogin) {
                clearLoginState()
                return LOGGED_OUT_STATE
            }

            const nextState = {
                isLogin: true,
                user:
                    Object.keys(currentState.user).length > 0
                        ? currentState.user
                        : DEFAULT_USER
            }
            saveLoginState(nextState)
            return nextState
        })
    }

    const login = async ({ remember = false, ...credentials } = {}) => {
        const response = await requestLogin(credentials)

        if (response?.status !== 200) {
            const error = new Error(
                response?.message || '登入失敗，請稍後再試。'
            )
            error.status = response?.status
            throw error
        }

        const user = response.data?.user || DEFAULT_USER
        const nextState = {
            isLogin: true,
            user
        }

        saveLoginState(nextState, remember)
        setLoginState(nextState)

        return nextState
    }

    const logout = () => {
        clearLoginState()
        setLoginState(LOGGED_OUT_STATE)
    }

    const contextValue = {
        ...loginState,
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
