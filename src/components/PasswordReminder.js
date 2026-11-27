import React, { useContext, useEffect, useId, useRef, useState } from 'react'
import Spinner from 'components/Spinner'
import { Link, useLocation } from 'react-router-dom'
import { LoginContext } from 'contexts/LoginProvider'
import { keepPassword } from 'api/auth'

const ReminderDialog = ({ user, retrySession, expireSession }) => {
    const dialog = useRef(null)
    const request = useRef(null)
    const titleId = useId()
    const descriptionId = useId()
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const element = dialog.current
        if (!element || element.open) return
        element.showModal()
        return () => {
            request.current?.abort()
            element.close()
        }
    }, [])

    const handleKeepPassword = async () => {
        if (request.current) return
        const controller = new AbortController()
        request.current = controller
        setSubmitting(true)
        setError('')
        try {
            await keepPassword({ uid: user.id, userkey: user.userkey }, controller.signal)
            if (!controller.signal.aborted) await retrySession()
        } catch (error) {
            if (controller.signal.aborted) return
            if (error.status === 401) expireSession()
            else setError(error instanceof TypeError ? '無法連線，請稍後再試。' : error.message || '無法維持密碼，請稍後再試。')
        } finally {
            request.current = null
            if (!controller.signal.aborted) setSubmitting(false)
        }
    }

    return (
        <dialog
            ref={dialog}
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            onCancel={event => event.preventDefault()}
            className="m-auto max-h-[90dvh] w-[min(92vw,480px)] overflow-y-auto rounded-xl bg-white p-6 text-primary shadow-xl backdrop:bg-black/40"
        >
            <h2 id={titleId} className="text-lg font-bold">親愛的使用者您好：</h2>
            <div id={descriptionId} className="mt-3 space-y-1 text-sm leading-6">
                <p>基於保護您的資訊安全，建議定期六個月更新使用者密碼</p>
                <p>來維護您在「慈濟醫療志業學習網」上的學習資料，感恩 !!</p>
            </div>
            {error && (
                <p role="alert" className="mt-3 text-sm text-danger">{error}</p>
            )}
            <div className="mt-5 flex flex-wrap gap-3 border-t border-solid border-gray-200 pt-4">
                <Link to="/change-password" className="rounded bg-main px-4 py-2 text-sm font-bold text-white">
                    修改密碼
                </Link>
                <button type="button" onClick={handleKeepPassword} disabled={submitting} aria-busy={submitting} aria-label={submitting ? '處理中' : undefined}
                    className="rounded border border-gray-300 px-4 py-2 text-sm font-bold disabled:opacity-60">
                    {submitting ? <Spinner /> : '使用舊密碼'}
                </button>
            </div>
        </dialog>
    )
}

const PasswordReminder = () => {
    const { isLogin, user, retrySession, expireSession } = useContext(LoginContext)
    const { pathname } = useLocation()
    if (!isLogin || !user.id || user.changepassword !== 'Y' || pathname === '/change-password') return null

    return <ReminderDialog key={user.id} user={user} retrySession={retrySession} expireSession={expireSession} />
}

export default PasswordReminder
