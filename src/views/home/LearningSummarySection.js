import React, { useContext } from 'react'
import { DashboardContext } from 'contexts/DashboardProvider'
import DashboardStatus from 'components/DashboardStatus'
import I18N from 'components/I18N'
import Link from 'components/Link'

const LearningSummarySection = ({
    user = {},
    className = ''
}) => {
    const { name = '' } = user
    const { data, status } = useContext(DashboardContext)
    const stats = [
        { id: 'upcoming', label: '待上課', value: data.coming.length, className: 'bg-[#fff3e7] text-[#d96d21]' },
        { id: 'in-progress', label: '進行中學程', value: data.programs.inProgress.length, className: 'bg-[#eaf3ff] text-[#1769d2]' },
        { id: 'completed', label: '已完成課程', value: data.passed.length, className: 'bg-[#e9f8ef] text-[#168742]' }
    ]
    const recent = [...data.coming].filter(course => course.start).sort((a, b) => a.start.localeCompare(b.start))[0]
    const title = recent?.title || '目前沒有待上課課程'
    const dateTime = recent?.start || ''
    const displayTime = dateTime.replace('T', ' ') + (recent?.end ? ` ～ ${recent.end.replace('T', ' ')}` : '')

    return (
        <section
            className={`flex min-w-0 flex-col justify-center rounded-[20px] border border-solid border-gray-200 bg-white/95 p-5 shadow-sm sm:p-6 lg:min-h-[404px] ${className}`}
            aria-labelledby="learning-summary-title"
        >
            <header className="mb-5 flex items-center gap-3">
                <span
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] text-secondary"
                    aria-hidden="true"
                >
                    <i className="icon icon-avatar text-[22px]" />
                </span>
                <div className="min-w-0">
                    <p className="text-[12px] font-medium leading-5 text-[#687d95]">
                        <I18N>我的學習摘要</I18N>
                    </p>
                    <h2
                        id="learning-summary-title"
                        className="truncate text-[20px] font-bold leading-7 text-primary"
                    >
                        {name}，<I18N>歡迎回來</I18N>
                    </h2>
                </div>
            </header>

            <DashboardStatus />
            <ul className="mb-4 grid grid-cols-3 gap-2" aria-label="學習狀態">
                {stats.map(({ className: statClassName, id, label, value }) => (
                    <li
                        key={id}
                        className={`flex min-w-0 flex-col items-center justify-center rounded-[8px] px-2 py-3 text-center ${statClassName}`}
                    >
                        <strong className="text-[22px] font-bold leading-7">
                            {status === 'success' ? value : '—'}
                        </strong>
                        <span className="mt-0.5 text-[12px] font-bold leading-4">
                            <I18N>{label}</I18N>
                        </span>
                    </li>
                ))}
            </ul>

            <article className="mb-5 rounded-[10px] border border-solid border-[#dfe7f1] bg-[#f8fbff] p-4">
                <p className="mb-1 text-[12px] font-bold leading-5 text-secondary">
                    <I18N>下一堂課程</I18N>
                </p>
                <h3 className="line-clamp-2 text-[14px] font-bold leading-5 text-primary">
                    {status === 'success' ? title : '—'}
                </h3>
                <p className="mt-2 flex items-center gap-2 text-[12px] leading-5 text-[#55718f]">
                    <i
                        className="icon icon-calendar shrink-0 text-[13px] text-secondary"
                        aria-hidden="true"
                    />
                    <time dateTime={dateTime}>{displayTime}</time>
                </p>
            </article>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <Link
                    href="/calendar"
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-[6px] bg-main px-3 py-2 text-center text-[13px] font-bold leading-5 text-white transition-colors hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                    <i
                        className="icon icon-calendar text-[14px]"
                        aria-hidden="true"
                    />
                    <I18N>我的學習行事曆</I18N>
                </Link>
                <Link
                    href="/pick"
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-[6px] border border-solid border-main bg-white px-3 py-2 text-center text-[13px] font-bold leading-5 text-main transition-colors hover:bg-main hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                    <i
                        className="icon icon-pencil text-[14px]"
                        aria-hidden="true"
                    />
                    <I18N>快速選課</I18N>
                </Link>
            </div>
        </section>
    )
}

export default React.memo(LearningSummarySection)
