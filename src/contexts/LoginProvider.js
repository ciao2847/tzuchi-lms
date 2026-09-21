import React, { useState } from 'react'

const LOGIN_STORAGE_KEY = 'tzuchi-lms-login'

const DEFAULT_USER = {
    name: '王小明'
}

const getInitialLoginState = () => {
    if (typeof window === 'undefined') return true

    const rememberedState = window.localStorage.getItem(LOGIN_STORAGE_KEY)
    if (rememberedState !== null) return rememberedState === 'true'

    const sessionState = window.sessionStorage.getItem(LOGIN_STORAGE_KEY)
    if (sessionState !== null) return sessionState === 'true'

    return true
}

const saveLoginState = (isLogin, remember = false) => {
    if (typeof window === 'undefined') return

    if (!isLogin) {
        window.localStorage.setItem(LOGIN_STORAGE_KEY, 'false')
        window.sessionStorage.removeItem(LOGIN_STORAGE_KEY)
        return
    }

    if (remember) {
        window.localStorage.setItem(LOGIN_STORAGE_KEY, 'true')
        window.sessionStorage.removeItem(LOGIN_STORAGE_KEY)
        return
    }

    window.localStorage.removeItem(LOGIN_STORAGE_KEY)
    window.sessionStorage.setItem(LOGIN_STORAGE_KEY, 'true')
}

export const LoginContext = React.createContext({
    isLogin: true,
    user: DEFAULT_USER,
    login: () => undefined,
    logout: () => undefined,
    toggleLogin: () => undefined
})

const LoginProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(getInitialLoginState)

    const toggleLogin = (nextValue) => {
        setIsLogin((currentValue) => {
            const nextIsLogin =
                typeof nextValue === 'function'
                    ? nextValue(currentValue)
                    : nextValue

            saveLoginState(nextIsLogin)
            return nextIsLogin
        })
    }

    const login = ({ remember = false } = {}) => {
        saveLoginState(true, remember)
        setIsLogin(true)
    }

    const logout = () => {
        saveLoginState(false)
        setIsLogin(false)
    }

    const contextValue = {
        isLogin,
        user: DEFAULT_USER,
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
