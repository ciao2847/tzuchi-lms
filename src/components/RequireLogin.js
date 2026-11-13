import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { LoginContext } from 'contexts/LoginProvider'
import Spinner from 'components/Spinner'

const RequireLogin = ({ allowChecking = false }) => {
    const { isLogin, sessionStatus } = useContext(LoginContext)
    if (sessionStatus === 'checking' && allowChecking) return <Outlet />
    if (sessionStatus === 'checking') return <div
        role="status" aria-busy="true" aria-label="讀取資料"
        className="flex flex-1 items-center justify-center px-4 pt-[var(--header-height)]">
        <Spinner size={12} color="#093a7b" />
    </div>
    if (!isLogin || sessionStatus !== 'success') return <Navigate to="/#login" replace />
    return <Outlet />
}

export default RequireLogin
