import React, { useContext, useEffect, useState } from 'react'
import { getLearningHistory } from 'api/learningHistory'
import { LoginContext } from 'contexts/LoginProvider'
import Spinner from 'components/Spinner'
import EmptyState from 'components/EmptyState'
import LearningHistory from './LearningHistory'

const AnnualLearningHistory = ({ fetchHistory = getLearningHistory, label = '學習歷程', resultsComponent } = {}) => {
    const { isLogin, user, sessionStatus, expireSession } = useContext(LoginContext)
    const [year, setYear] = useState(() => Number(new Intl.DateTimeFormat('en', { year: 'numeric', timeZone: 'Asia/Taipei' }).format(new Date())))
    const [result, setResult] = useState({ status: 'loading', courses: [] })
    const verified = isLogin && sessionStatus === 'success'
    useEffect(() => {
        if (!verified) return undefined
        const controller = new AbortController()
        setResult({ status: 'loading', courses: [], year, owner: user.id })
        fetchHistory(year, controller.signal).then(courses => {
            if (!controller.signal.aborted) setResult({ status: 'success', courses, year, owner: user.id })
        }).catch(error => {
            if (controller.signal.aborted) return
            if (error.status === 401) expireSession()
            setResult({ status: 'error', courses: [], year, owner: user.id })
        })
        return () => controller.abort()
    }, [verified, user.id, year, expireSession, fetchHistory])
    const current = verified && result.owner === user.id && result.year === year
    const status = current ? result.status : 'loading'
    return <LearningHistory label={label} resultsComponent={resultsComponent} courses={current ? result.courses : []} year={year} onYearChange={setYear} status={status}
        statusContent={status === 'error'
            ? <EmptyState />
            : <Spinner block className="py-6" />} />
}

export default AnnualLearningHistory
