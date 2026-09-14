import React, { useId, useState } from 'react'

const LoginSection = ({ onLogin, onForgotPassword, className = '' }) => {
    const sectionId = useId()
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const { currentTarget } = event
        const values = new FormData(currentTarget)
        const { account = null, password = null } = Object.fromEntries(values)
        const remember = values.has('remember')
        if (onLogin) {
            onLogin({
                account,
                password,
                remember
            })
        }
    }

    return (
        <div
            className={`flex min-w-0 flex-col justify-center rounded-[20px] border border-solid border-gray-200 bg-white/95 p-6 shadow-sm lg:min-h-[404px] ${className}`}
        >
            <div className="mb-6 text-center text-primary">
                <h2
                    id={`${sectionId}-login-title`}
                    className="text-[20px] font-bold leading-7"
                >
                    歡迎登入
                </h2>
                <p className="mt-1 text-gray-500 text-[13px] leading-4">慈濟醫療學習平台</p>
            </div>
            <form
                className="flex flex-col gap-5"
                aria-labelledby={`${sectionId}-login-title`}
                onSubmit={handleSubmit}
            >
                <div>
                    <label
                        htmlFor={`${sectionId}-account`}
                        className="mb-2 block text-[16px] font-medium leading-5 text-primary"
                    >
                        帳號
                    </label>
                    <div className="relative">
                        <i
                            className="icon icon-avatar pointer-events-none absolute inset-y-0 left-3 text-[16px] leading-6 text-gray-400"
                            aria-hidden="true"
                        />
                        <input
                            id={`${sectionId}-account`}
                            name="account"
                            type="text"
                            autoComplete="username"
                            placeholder="請輸入帳號"
                            required
                            className="block h-10 w-full min-w-0 rounded border border-gray-200 bg-transparent py-2 pl-9 pr-3 text-[14px] leading-5 text-primary outline-none placeholder:text-gray-400 focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                        />
                    </div>
                </div>
                <div>
                    <label
                        htmlFor={`${sectionId}-password`}
                        className="mb-2 block text-[16px] font-medium leading-5 text-primary"
                    >
                        密碼
                        <span className="ml-1 text-[13px]">
                            （密碼已重置，請使用 lms＋帳號後 6 碼登入）
                        </span>
                    </label>
                    <div className="relative">
                        <i
                            className="icon icon-lock pointer-events-none absolute inset-y-0 left-3 text-[16px] leading-6 text-gray-400"
                            aria-hidden="true"
                        />
                        <input
                            id={`${sectionId}-password`}
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            autoComplete="current-password"
                            placeholder="請輸入密碼"
                            required
                            className="block h-10 w-full min-w-0 rounded border border-gray-200 bg-transparent py-2 pl-9 pr-11 text-[14px] leading-5 text-primary outline-none placeholder:text-gray-400 focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                        />
                        <button
                            type="button"
                            aria-label={showPassword ? '隱藏密碼' : '顯示密碼'}
                            aria-pressed={showPassword}
                            onClick={() =>
                                setShowPassword((current) => !current)
                            }
                            className="absolute inset-y-0 right-0 flex w-10 items-center justify-center rounded text-gray-400 hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
                        >
                            <i
                                className={`icon ${
                                    showPassword ? 'icon-eye' : 'icon-eye-slash'
                                } text-[16px] leading-6`}
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-[12px] leading-5 text-primary">
                    <label className="inline-flex cursor-pointer items-center gap-2">
                        <input
                            type="checkbox"
                            name="remember"
                            value="1"
                            className="h-4 w-4 appearance-auto accent-primary"
                        />
                        保持登入
                    </label>
                    <button
                        type="button"
                        onClick={onForgotPassword}
                        className="text-secondary transition-colors hover:text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                    >
                        忘記密碼
                    </button>
                </div>
                <button
                    type="submit"
                    className="flex h-10 w-full shrink-0 items-center justify-center rounded bg-main text-[16px] font-bold leading-6 text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-main"
                >
                    登入
                </button>
            </form>
        </div>
    )
}

export default React.memo(LoginSection)
