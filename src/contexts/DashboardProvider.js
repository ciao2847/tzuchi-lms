import React, { useCallback, useContext, useEffect, useState } from 'react'
import { LoginContext } from 'contexts/LoginProvider'
import { getDashboard } from 'api/dashboard'

const EMPTY = Object.freeze({
    announcements: [], messages: [], programs: { inProgress: [], past: [] },
    coming: [], history: [], passed: [], yet: []
})
const readStorageKey = owner => `tzuchi-lms-read-notices:${owner}`
const noticeKey = notice => `${notice.type}:${notice.id}`
const readNotices = owner => {
    try {
        const saved = JSON.parse(window.localStorage.getItem(readStorageKey(owner)) || '[]')
        return new Set(Array.isArray(saved) ? saved.filter(item => typeof item === 'string') : [])
    } catch { return new Set() }
}
const applyReadNotices = (data, read) => ({
    ...data,
    messages: data.messages.map(item => read.has(noticeKey(item)) ? { ...item, isUnread: false } : item),
    announcements: data.announcements.map(item => read.has(noticeKey(item)) ? { ...item, isUnread: false } : item)
})
export const DashboardContext = React.createContext({
    data: EMPTY, status: 'idle', error: '', reload: () => undefined, markRead: () => undefined
})

const DashboardProvider = ({ children }) => {
    const { isLogin, user, expireSession } = useContext(LoginContext)
    const [result, setResult] = useState({ data: EMPTY, status: 'idle', error: '' })
    const [revision, setRevision] = useState(0)
    const reload = useCallback(() => setRevision((value) => value + 1), [])
    const markRead = useCallback(notice => {
        if (!isLogin || !user.id || !notice?.id || !['message', 'announcement'].includes(notice.type)) return
        const read = readNotices(user.id)
        read.add(noticeKey(notice))
        try { window.localStorage.setItem(readStorageKey(user.id), JSON.stringify([...read])) } catch { /* Keep the current page usable when storage is unavailable. */ }
        setResult(current => current.owner === user.id
            ? { ...current, data: applyReadNotices(current.data, read) } : current)
    }, [isLogin, user.id])
    useEffect(() => {
        if (!isLogin) {
            setResult({ data: EMPTY, status: 'idle', error: '' })
            return undefined
        }
        const controller = new AbortController()
        setResult({ data: EMPTY, status: 'loading', error: '' })
        getDashboard(controller.signal).then((data) => {
            if (!controller.signal.aborted) {
                setResult({ data: applyReadNotices(data, readNotices(user.id)), status: 'success', error: '', owner: user.id })
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
    return <DashboardContext.Provider value={{ ...current, reload, markRead }}>{children}</DashboardContext.Provider>
}
export default DashboardProvider
