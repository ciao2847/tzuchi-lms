import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { LoginContext } from 'contexts/LoginProvider'

const RequireLogin = () => {
    const { isLogin, sessionStatus } = useContext(LoginContext)
    if (sessionStatus === 'checking') return <div
        role="status" aria-busy="true"
        className="flex min-h-[80vh] items-center justify-center px-4 pt-[var(--header-height)] text-[14px] text-primary">
        正在確認登入狀態…
    </div>
    if (!isLogin || sessionStatus !== 'success') return <Navigate to="/#login" replace />
    return <Outlet />
}

export default RequireLogin
