import React, { useContext, useId, useState } from 'react'
import swal from 'sweetalert'
import { LoginContext } from 'contexts/LoginProvider'
import { changePassword } from 'api/auth'

const FIELDS = [
    { name: 'oldPassword', label: '輸入舊密碼', autoComplete: 'current-password' },
    { name: 'newPassword', label: '輸入新密碼', autoComplete: 'new-password' },
    { name: 'confirmPassword', label: '確認新密碼', autoComplete: 'new-password' }
]

export const validatePasswordChange = ({ oldPassword, newPassword, confirmPassword }) => {
    if (!oldPassword || !newPassword || !confirmPassword) return '請完整輸入舊密碼、新密碼及確認新密碼。'
    if (!newPassword.trim()) return '新密碼不可全部為空白。'
    if (!/[a-z]/i.test(newPassword) || !/[0-9]/.test(newPassword)) return '新密碼須包含英文及數字。'
    if (oldPassword === newPassword) return '新密碼不可與舊密碼相同。'
    if (newPassword !== confirmPassword) return '兩次輸入的新密碼不一致，請重新確認。'
    return ''
}

const ChangePassword = () => {
    const { user, expireSession } = useContext(LoginContext)
    const sectionId = useId()
    const [error, setError] = useState('')
    const [confirming, setConfirming] = useState(false)
    const handleSubmit = async event => {
        event.preventDefault()
        if (confirming) return
        const { currentTarget: form } = event
        const values = Object.fromEntries(new FormData(form))
        const message = validatePasswordChange(values)
        setError(message)
        setConfirming(true)
        try {
            if (message) {
                await swal({ title: '請確認密碼', text: message, icon: 'warning', button: '返回修改' })
                return
            }
            const confirmed = await swal({
                title: '確認修改密碼？', text: '請確認您已記住新密碼，修改後請使用新密碼登入。',
                icon: 'warning', buttons: { cancel: '返回檢查', confirm: '確認修改' }, dangerMode: false
            })
            if (confirmed) {
                if (!user.account) throw new Error('缺少登入帳號，請重新登入。')
                await changePassword({ uid: user.account, oldpwd: values.oldPassword, newpwd: values.newPassword })
                form.reset()
                await swal({ title: '密碼已修改', text: '下次登入請使用新密碼。', icon: 'success', button: '我知道了' })
            }
        } catch (error) {
            setError(error instanceof TypeError ? '無法連線，請稍後再試。' : error.message || '密碼修改失敗。')
            if (error.status === 401 || error.code === 'SESSION_EXPIRED') expireSession()
        } finally { setConfirming(false) }
    }
    return <main className="bg-light pt-[var(--header-height)]">
        <section className="relative isolate flex min-h-[calc(100dvh-var(--header-height))] items-center justify-center px-4 py-10 md:px-6 xl:px-10" aria-labelledby={`${sectionId}-title`}>
            <img src={`${process.env.BASE_PATH}/images/index/login-bg-deco.png`} alt="" aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-auto w-full object-cover object-bottom" />
            <div className="relative z-[1] w-full max-w-[560px] rounded-[20px] border border-solid border-gray-200 bg-white/95 p-6 shadow-sm md:p-8">
                <div className="mb-6 text-center text-primary">
                    <h1 id={`${sectionId}-title`} className="text-[20px] font-bold leading-7">修改密碼</h1>
                    <p className="mt-1 text-[13px] leading-4 text-gray-500">慈濟醫療學習平台</p>
                </div>
                <div className="mb-6 border-b border-solid border-gray-200 pb-6">
                    <h2 className="mb-2 text-[16px] font-medium leading-5 text-primary">系統通知信箱</h2>
                    <p className="flex items-start gap-2 text-[14px] leading-6 text-primary"><i className="icon icon-mail mt-1 shrink-0 text-[16px] text-success" aria-hidden="true" /><span className="min-w-0 break-all">{user.mail || '尚未設定通知信箱'}</span></p>
                </div>
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5" aria-labelledby={`${sectionId}-title`}>
                    <input type="text" name="username" value={user.account || ''} autoComplete="username" readOnly hidden />
                    {FIELDS.map(field => <div key={field.name}>
                        <label htmlFor={`${sectionId}-${field.name}`} className="mb-2 block text-[16px] font-medium leading-5 text-primary">{field.label}</label>
                        <div className="relative">
                            <i className="icon icon-lock pointer-events-none absolute inset-y-0 left-3 text-[16px] leading-6 text-gray-400" aria-hidden="true" />
                            <input id={`${sectionId}-${field.name}`} name={field.name} type="password" autoComplete={field.autoComplete} placeholder={field.label} required
                                aria-invalid={Boolean(error)} aria-describedby={error ? `${sectionId}-error` : undefined}
                                className="block h-10 w-full min-w-0 rounded border border-gray-200 bg-transparent py-2 pl-9 pr-3 text-[14px] leading-5 text-primary outline-none placeholder:text-gray-400 focus:border-secondary focus:ring-2 focus:ring-secondary/20" />
                        </div>
                    </div>)}
                    {error && <p id={`${sectionId}-error`} role="alert" className="text-[13px] leading-5 text-danger">{error}</p>}
                    <button type="submit" disabled={confirming} className="flex h-10 w-full items-center justify-center rounded bg-main text-[16px] font-bold leading-6 text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-main disabled:cursor-wait disabled:opacity-60">確認修改</button>
                </form>
            </div>
        </section>
    </main>
}

export default ChangePassword
