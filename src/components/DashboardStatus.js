import React, { useContext } from 'react'
import Link from 'components/Link'
import { DashboardContext } from 'contexts/DashboardProvider'
import { LoginContext } from 'contexts/LoginProvider'

const DashboardStatus = () => {
    const { status, error, reload } = useContext(DashboardContext)
    const { sessionExpired } = useContext(LoginContext)
    if (status === 'success') return null
    return (
        <div className="rounded border border-gray-200 bg-white p-4 text-[14px] text-primary" role={status === 'error' || sessionExpired ? 'alert' : 'status'}>
            {status === 'idle' ? <Link href="/#login">{sessionExpired ? '登入時效已過期，請重新登入。' : '請先登入以查看個人學習歷程。'}</Link> :
                status === 'loading' ? '學習歷程載入中…' : <>{error}<button type="button" onClick={reload} className="ml-3 text-secondary underline">重新載入</button></>}
        </div>
    )
}
export default DashboardStatus
