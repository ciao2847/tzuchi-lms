import React, { useCallback, useContext, useEffect, useState } from 'react'
import { LoginContext } from 'contexts/LoginProvider'
import { getDashboard } from 'api/dashboard'

const EMPTY = Object.freeze({
    announcements: [], messages: [], programs: { inProgress: [], past: [] },
    coming: [], history: [], passed: [], yet: []
})
export const DashboardContext = React.createContext({
    data: EMPTY, status: 'idle', error: '', reload: () => undefined
})

const DashboardProvider = ({ children }) => {
    const { isLogin, user, expireSession } = useContext(LoginContext)
    const [result, setResult] = useState({ data: EMPTY, status: 'idle', error: '' })
    const [revision, setRevision] = useState(0)
    const reload = useCallback(() => setRevision((value) => value + 1), [])
    useEffect(() => {
        if (!isLogin) {
            setResult({ data: EMPTY, status: 'idle', error: '' })
            return undefined
        }
        const controller = new AbortController()
        setResult({ data: EMPTY, status: 'loading', error: '' })
        getDashboard(controller.signal).then((data) => {
            if (!controller.signal.aborted) {
                setResult({ data, status: 'success', error: '', owner: user.id })
            }
        }).catch((error) => {
            if (controller.signal.aborted) return
            if (error.status === 401) {
                expireSession()
                return
            }
            setResult({ data: EMPTY, status: 'error', owner: user.id,
                error: error instanceof TypeError ? '無法連線至學習歷程服務，請確認網路後重試。' :
                    error.data?.error?.message || error.message || '無法取得學習歷程。' })
        })
        return () => controller.abort()
    }, [isLogin, user.id, expireSession, revision])

    const current = !isLogin ? { data: EMPTY, status: 'idle', error: '' } :
        result.owner !== user.id && result.status !== 'loading' ?
            { data: EMPTY, status: 'loading', error: '' } : result
    return <DashboardContext.Provider value={{ ...current, reload }}>{children}</DashboardContext.Provider>
}
export default DashboardProvider
