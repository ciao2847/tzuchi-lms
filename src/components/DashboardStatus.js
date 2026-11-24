import React, { useContext } from 'react'
import AutoSwitchLink from 'components/AutoSwitchLink'
import Spinner from 'components/Spinner'
import { DashboardContext } from 'contexts/DashboardProvider'
import { LoginContext } from 'contexts/LoginProvider'

const DashboardStatus = () => {
    const { status, error, reload } = useContext(DashboardContext)
    const { sessionExpired, sessionStatus, sessionError, retrySession } = useContext(LoginContext)
    if (sessionStatus === 'checking') return <Spinner block />
    if (sessionStatus === 'error') return <div role="alert" className="rounded border border-gray-200 bg-white p-4 text-[14px] text-primary">
        {sessionError}<button type="button" onClick={retrySession} className="ml-3 text-secondary underline">重新確認登入狀態</button>
    </div>
    if (status === 'success') return null
    if (status === 'loading') return <Spinner block />
    return (
        <div className="rounded border border-gray-200 bg-white p-4 text-[14px] text-primary" aria-busy={status === 'loading'} role={status === 'error' || sessionExpired ? 'alert' : 'status'}>
            {status === 'idle' ? <AutoSwitchLink href="/#login">{sessionExpired ? '登入時效已過期，請重新登入。' : '請先登入以查看個人學習歷程。'}</AutoSwitchLink> :
                <>{error}<button type="button" onClick={reload} className="ml-3 text-secondary underline">重新載入</button></>}
        </div>
    )
}
export default DashboardStatus
