import { filterLearningHistory, getLearningHistoryYears } from 'adapters/learningHistoryAdapter'
import DashboardStatus from 'components/DashboardStatus'
import I18N from 'components/I18N'
import AutoSwitchLink from 'components/AutoSwitchLink'
import { useNavigate } from 'react-router-dom'
import MoreOptionsSelector from 'components/MoreOptionsSelector'
import PaginatedList from 'components/PaginatedList'
import Select from 'components/Select'
import ViewModeToggle from 'components/ViewModeToggle'
import useMedia from 'hooks/useMedia'
import React, { useMemo, useState } from 'react'

const formatTime = (value) => value ? String(value).replace('T', ' ').slice(0, 16) : '—'
const HEADINGS = ['類型', '課程名稱', '狀態', '上課日期', '簽到時間', '通過時間']

const CourseType = ({ value }) => <span className="inline-flex h-5 shrink-0 items-center rounded-full bg-[#eaf3ff] px-2 text-[10px] font-bold leading-none text-secondary xl:h-6 xl:text-[12px]">
    {value || '—'}
</span>

const CourseStatus = ({ value }) => {
    const passed = value === 'pass'
    const unfinished = value === 'yet' || value === 'yat'
    return <span className={`inline-flex min-h-6 shrink-0 items-center rounded-full px-2 text-[11px] font-bold leading-4 xl:text-[12px] ${passed ? 'bg-[#e7f5df] text-[#329500]' : unfinished ? 'bg-[#fff1d8] text-[#db8500]' : 'bg-[#f0f2f5] text-[#556273]'}`}>
        <I18N>{passed ? '通過' : unfinished ? '未完成' : '—'}</I18N>
    </span>
}

const HistoryTable = ({ data }) => {
    const navigate = useNavigate()
    return (
    <div role="region" aria-label="學習歷程列表，可左右捲動查看完整欄位" tabIndex={0}
        className="overflow-x-auto rounded-[10px] border border-solid border-[#dce5f0] bg-white text-primary [box-shadow:0_2px_10px_rgba(9,58,123,0.05)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
        <table className="w-full min-w-[1080px] table-fixed border-collapse text-left text-[12px] leading-[18px] xl:text-[14px] xl:leading-5">
            <caption className="sr-only">個人學習歷程課程列表</caption>
            <colgroup>
                <col className="w-[8%]" /><col className="w-[35%]" /><col className="w-[10%]" />
                <col className="w-[16%]" /><col className="w-[16%]" /><col className="w-[15%]" />
            </colgroup>
            <thead><tr className="border-b border-solid border-[#e6ecf4] bg-slate-100 text-primary">
                {HEADINGS.map(title => <th key={title} scope="col" className="px-3 pb-2 pt-4 font-semibold"><I18N>{title}</I18N></th>)}
            </tr></thead>
            <tbody>{data.map(course => <tr key={`${course.status}-${course.id}-${course.start}`}
                onClick={event => { if (!event.target.closest('a') && !window.getSelection()?.toString()) navigate(`/course/${encodeURIComponent(course.id)}`) }}
                className="cursor-pointer border-b border-solid border-[#e5ebf3] transition-colors last:border-b-0 hover:bg-[#eaf3ff] focus-within:bg-[#eaf3ff]">
                <td className="px-3 py-3"><CourseType value={course.type} /></td>
                <td className="px-3 py-3 font-semibold"><AutoSwitchLink href={`/course/${encodeURIComponent(course.id)}`} title={course.title} className="break-words hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary xl:overflow-hidden xl:[display:-webkit-box] xl:[-webkit-box-orient:vertical] xl:[-webkit-line-clamp:2]">{course.title}</AutoSwitchLink></td>
                <td className="px-3 py-3"><CourseStatus value={course.status} /></td>
                <td className="whitespace-nowrap px-3 py-3 text-[#486785]"><time dateTime={course.start || undefined}>{formatTime(course.start)}</time></td>
                <td className="whitespace-nowrap px-3 py-3 text-[#486785]"><time dateTime={course.signedAt || undefined}>{formatTime(course.signedAt)}</time></td>
                <td className="whitespace-nowrap px-3 py-3 text-[#486785]"><time dateTime={course.passedAt || undefined}>{formatTime(course.passedAt)}</time></td>
            </tr>)}</tbody>
        </table>
    </div>
)
}

const HistoryMeta = ({ title, value }) => (
    <div className="flex min-w-0 items-start gap-2 text-[11px] leading-[17px] text-[#486785] md:text-[12px] xl:text-[14px] xl:leading-5">
        <i className="icon icon-calendar mt-[2px] h-3 w-3 shrink-0 text-[11px] text-secondary" aria-hidden="true" />
        <span className="min-w-0 break-words"><I18N>{title}</I18N>：{formatTime(value)}</span>
    </div>
)

const HistoryCards = ({ data }) => (
    <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {data.map(course => <li key={`${course.status}-${course.id}-${course.start}`}>
            <AutoSwitchLink href={`/course/${encodeURIComponent(course.id)}`} aria-label={course.title} className="block h-full rounded-[7px] transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
            <article className="flex h-full min-h-[124px] flex-col rounded-[7px] border border-solid border-[#dce5f0] bg-white px-4 py-3 xl:min-h-[135px] xl:px-5">
                <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
                    <CourseType value={course.type} /><CourseStatus value={course.status} />
                </div>
                <h3 title={course.title} className="mb-1.5 overflow-hidden break-words text-[12px] font-bold leading-[17px] text-primary [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] md:text-[13px] md:leading-[19px] xl:text-[16px] xl:leading-[22px]">{course.title}</h3>
                <div className="mt-auto space-y-0.5 pt-1">
                    <HistoryMeta title="上課日期" value={course.start} />
                    <HistoryMeta title="簽到時間" value={course.signedAt} />
                    <HistoryMeta title="通過時間" value={course.passedAt} />
                </div>
            </article>
            </AutoSwitchLink>
        </li>)}
    </ul>
)

export const LearningHistoryResults = ({ data, viewMode }) => viewMode === 'list'
    ? <HistoryTable data={data} /> : <HistoryCards data={data} />

const LearningHistory = ({ courses, status, year, onYearChange, statusContent, label = '學習歷程', resultsComponent = LearningHistoryResults }) => {
    const isDesktopLayout = useMedia('(min-width: 1200px)')
    const [selectedYear, setSelectedYear] = useState(null)
    const [selectedViewMode, setSelectedViewMode] = useState(null)
    const years = useMemo(() => getLearningHistoryYears(courses), [courses])
    const activeYear = year ?? (years.includes(selectedYear) ? selectedYear : years[0])
    const changeYear = onYearChange || setSelectedYear
    const data = useMemo(() => year ? courses : filterLearningHistory(courses, activeYear), [courses, activeYear, year])
    const viewMode = selectedViewMode || (isDesktopLayout ? 'list' : 'card')
    if (status !== 'success' && !onYearChange) return <div className="mt-3"><DashboardStatus /></div>
    return <section aria-label={label}>
        <div className="py-3 md:px-1">
        <Select
            wrapperClassName="md:hidden"
            aria-label={`${label}年份`}
            value={activeYear ?? ''}
            onChange={event => changeYear(Number(event.target.value))}
            className="!h-[42px] !rounded-full !border-[#1769d2] !bg-[#edf3fc] !px-5 !text-[13px] !text-[#0755cf]"
        >
            {years.map(year => <option key={year} value={year}>{year} 年</option>)}
        </Select>
        <MoreOptionsSelector options={years.map(year => ({ value: year, label: year }))}
            value={activeYear} onChange={changeYear} ariaLabel={`${label}年份`}
            moreLabel="更多年份" emptyText="目前沒有更多年份" className="hidden md:grid" />
        </div>
        {status !== 'success' ? statusContent || <DashboardStatus /> : <>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3 md:mb-4">
            <h2 className="text-[13px] font-bold leading-5 text-primary md:text-[15px] xl:text-[17px] xl:leading-6">
                <I18N>課程數</I18N>：{data.length} <I18N>筆</I18N>
            </h2>
            <ViewModeToggle ariaLabel={`${label}顯示方式`} value={viewMode} onChange={setSelectedViewMode} />
        </div>
        <PaginatedList data={data} component={resultsComponent} componentProps={{ viewMode }}
            resetKey={activeYear} emptyText="暫無資料"
            emptyClassName="rounded-[10px] border border-solid border-[#dce5f0] bg-white py-10 text-center text-[14px] text-[#8292a7]" />
        </>}
    </section>
}
export default LearningHistory
