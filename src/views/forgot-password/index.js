import AutoSwitchLink from 'components/AutoSwitchLink'
import React, { useContext, useId, useRef, useState } from 'react'
import { forgetPassword } from 'api/auth'
import { LoginContext } from 'contexts/LoginProvider'

const CONTACTS = [
    { campus: '花蓮', extension: '13643' },
    { campus: '台北', extension: '7304' },
    { campus: '台中', extension: '3345' },
    { campus: '大林', extension: '3345' }
]
const inputClass = 'block h-10 w-full min-w-0 rounded border border-gray-200 bg-transparent px-3 py-2 text-[14px] leading-5 text-primary outline-none placeholder:text-gray-400 focus:border-secondary focus:ring-2 focus:ring-secondary/20'

const ForgotPassword = () => {
    const { isLogin, user, sessionStatus, expireSession } = useContext(LoginContext)
    const canSubmit = isLogin && Boolean(user.userkey)
    const sectionId = useId()
    const pending = useRef(false)
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState('')
    const [sent, setSent] = useState(false)
    const handleSubmit = async event => {
        event.preventDefault()
        if (pending.current || !canSubmit) return
        const form = event.currentTarget
        const uid = String(new FormData(form).get('uid') || '').trim()
        setError('')
        setSent(false)
        if (!uid) { setError('請輸入身分證字號。'); return }
        pending.current = true
        setSubmitting(true)
        try {
            await forgetPassword({ uid, userkey: user.userkey })
            form.reset()
            setSent(true)
        } catch (error) {
            if (error.status === 401) expireSession()
            setError(error instanceof TypeError ? '無法連線，請稍後再試。' : error.message || '寄信失敗，請稍後再試。')
        } finally { pending.current = false; setSubmitting(false) }
    }
    return <main className="bg-light pt-[var(--header-height)]">
        <section className="relative isolate flex min-h-[calc(100dvh-var(--header-height))] items-center justify-center px-4 py-10 md:px-6 xl:px-10" aria-labelledby={`${sectionId}-title`}>
            <img src={`${process.env.BASE_PATH}/images/index/login-bg-deco.png`} alt="" aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-auto w-full object-cover object-bottom" />
            <div className="relative z-[1] w-full max-w-[560px] rounded-[20px] border border-solid border-gray-200 bg-white/95 p-6 shadow-sm md:p-8">
                <div className="mb-6 text-center text-primary">
                    <h1 id={`${sectionId}-title`} className="text-[20px] font-bold leading-7">忘記密碼</h1>
                    <p className="mt-1 text-[13px] leading-4 text-gray-500">慈濟醫療學習平台</p>
                </div>
                <div className="mb-6 space-y-2 text-[14px] leading-6 text-primary">
                    <p>親愛的使用者您好：</p>
                    {canSubmit && <p>請輸入您的身分證字號，系統將寄發通知信至您登錄的信箱。</p>}
                </div>
                <aside aria-labelledby={`${sectionId}-reminder`} className="mb-6 rounded-[12px] border border-solid border-secondary/20 bg-secondary/5 p-4">
                    <h2 id={`${sectionId}-reminder`} className="mb-2 flex items-center gap-2 text-[14px] font-bold leading-5 text-primary"><i className="icon icon-info text-[16px]" aria-hidden="true" />提醒</h2>
                    <p className="text-[13px] leading-6 text-primary">請確定您的 Notes 信箱
                        <AutoSwitchLink href="https://nlms.tzuchi.com.tw/tzuchi/index/mail_pic.png" isLinkOut rel="noopener noreferrer"
                            className="mx-1 text-success underline underline-offset-2 transition-colors hover:text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-success">有對外</AutoSwitchLink>
                        ，若無，請您聯絡您院區的教學部協助取回密碼。</p>
                    <div className="mt-4 overflow-hidden rounded-[8px] border border-solid border-gray-200">
                        <table className="w-full table-fixed border-collapse text-center text-[12px] leading-5 text-primary sm:text-[13px]">
                            <caption className="sr-only">各院區教學部聯絡分機</caption>
                            <thead><tr className="bg-white/70"><th scope="col" className="px-1 py-2 font-medium">院區</th>
                                {CONTACTS.map(item => <th scope="col" key={item.campus} className="px-1 py-2 font-medium">{item.campus}</th>)}
                            </tr></thead>
                            <tbody><tr className="border-t border-solid border-gray-200 bg-white/40"><th scope="row" className="px-1 py-2 font-medium">分機</th>
                                {CONTACTS.map(item => <td key={item.campus} className="px-1 py-2 tabular-nums">{item.extension}</td>)}
                            </tr></tbody>
                        </table>
                    </div>
                </aside>
                {canSubmit ? <form onSubmit={handleSubmit} className="flex flex-col gap-5" aria-busy={submitting}>
                    <div>
                        <label htmlFor={`${sectionId}-account`} className="mb-2 block text-[16px] font-medium leading-5 text-primary">身分證字號</label>
                        <div className="relative">
                            <i className="icon icon-avatar pointer-events-none absolute inset-y-0 left-3 text-[16px] leading-6 text-gray-400" aria-hidden="true" />
                            <input id={`${sectionId}-account`} name="uid" type="text" autoComplete="username" placeholder="請輸入身分證字號" required aria-describedby={error ? `${sectionId}-error` : undefined} className={`${inputClass} pl-9`} />
                        </div>
                    </div>
                    {error && <p id={`${sectionId}-error`} role="alert" className="text-[13px] text-danger">{error}</p>}
                    {sent && <p role="status" className="text-[14px] text-primary">已寄信，請至您登錄的信箱查看通知。</p>}
                    <button type="submit" disabled={submitting} className="flex h-10 w-full items-center justify-center rounded bg-main text-[16px] font-bold text-white disabled:opacity-60">{submitting ? '寄送中…' : '寄送通知信'}</button>
                </form> : <p role="status" className="text-[14px] leading-6 text-primary">
                    {sessionStatus === 'checking' ? '正在確認登入狀態…' : '寄送通知信需要有效的登入狀態。若無法登入，請聯絡上方所列的院區教學部。'}
                </p>}
            </div>
        </section>
    </main>
}

export default ForgotPassword
