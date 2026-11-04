import React, { useContext, useEffect, useRef, useState } from 'react'
import { DashboardContext } from 'contexts/DashboardProvider'
import DashboardStatus from 'components/DashboardStatus'
import { getCalendarEvents } from 'adapters/dashboardAdapter'
import LearningHistory from './LearningHistory'
import SearchableProgramSelector from './SearchableProgramSelector'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/react/daygrid'
import classicThemePlugin from '@fullcalendar/react/themes/classic'
import I18N from 'components/I18N'
import Link from 'components/Link'
import NotificationDetailDialog from 'components/NotificationDetailDialog'
import Select from 'components/Select'
import TitleBlk from 'components/TitleBlk'
import Spinner from 'components/Spinner'
import useMedia from 'hooks/useMedia'
import { getProgramInfo } from 'api/dashboard'
import { LoginContext } from 'contexts/LoginProvider'

const WEEKDAY_LABELS = ['日', '一', '二', '三', '四', '五', '六']

const HISTORY_TABS = [
    { id: 'program', title: '我的學程' },
    { id: 'learning', title: '學習歷程' },
    { id: 'external', title: '外訓歷程' },
    { id: 'finished', title: '已結束的學程' }
]

const COURSE_STATUS_CONFIG = {
    notStarted: {
        label: '尚未選課之學分數',
        image: 'state-01.png'
    },
    inProgress: {
        label: '已選課，但尚未完成之學分數',
        image: 'state-02.png'
    },
    complete: {
        label: '已完成之學分數',
        image: 'state-03.png'
    },
    overdueComplete: {
        label: '超過修課期限完成之學分數',
        image: 'state-05.png'
    },
    failed: {
        label: '未通過之學分數',
        image: 'state-04.png'
    }
}

const COURSE_STATUS_LEGEND = [
    'notStarted',
    'inProgress',
    'complete',
    'overdueComplete',
    'failed'
]

const LINE_ICON_MAP = {
    bulb: 'bulb',
    calendar: 'calendar',
    chart: 'grid',
    chevron: 'arrow-right',
    document: 'doc',
    help: 'info',
    user: 'avatar'
}

const getLineIconSizeClass = (name, className) => {
    if (className.includes('h-3')) return 'text-[10px] md:text-[12px]'
    if (className.includes('h-4')) return 'text-[12px] md:text-[16px]'
    if (className.includes('h-7')) return 'text-[22px] md:text-[28px]'
    if (name === 'bulb') return 'h-5 w-5 text-[18px] md:text-[20px]'
    return 'h-5 w-5 text-[14px] md:text-[20px]'
}

const LineIcon = ({ name, className = '' }) => (
    <i
        className={`icon icon-${
            LINE_ICON_MAP[name] || 'arrow-right'
        } shrink-0 ${getLineIconSizeClass(name, className)} ${className}`}
        aria-hidden="true"
    />
)

const CalendarLegend = () => {
    const legends = [
        { id: 'pending', color: 'bg-main', title: '未完成' },
        { id: 'registered', color: 'bg-blue', title: '已報名' },
        { id: 'complete', color: 'bg-success', title: '已完成' }
    ]

    return (
        <ul className="flex flex-col gap-1.5 md:flex-row md:items-center md:gap-5">
            {legends.map(({ color, id, title }) => (
                <li
                    key={id}
                    className="flex items-center gap-1.5 whitespace-nowrap text-[12px] font-bold leading-4 text-[#536b87] md:text-[12px] xl:text-[14px] xl:leading-5"
                >
                    <span
                        className={`h-2.5 w-2.5 rounded-[2px] md:h-3 md:w-3 ${color}`}
                        aria-hidden="true"
                    />
                    <I18N>{title}</I18N>
                </li>
            ))}
        </ul>
    )
}

const CalendarControls = ({ calendarTitle, onMove }) => (
    <div className="flex min-w-0 flex-1 flex-col items-center gap-1.5 md:flex-row md:justify-end md:gap-3">
        <h2 className="whitespace-nowrap text-[20px] font-bold leading-6 text-blue md:text-[23px] xl:text-[27px] xl:leading-8">
            {calendarTitle}
        </h2>
        <div className="flex items-center gap-2">
            <button
                type="button"
                className="inline-flex h-7 w-11 items-center justify-center rounded-[4px] bg-primary text-white transition-colors hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary md:h-9 md:w-14"
                aria-label="上一個月"
                onClick={() => onMove('prev')}
            >
                <LineIcon name="chevron" className="h-3 w-3 rotate-180" />
            </button>
            <button
                type="button"
                className="inline-flex h-7 w-11 items-center justify-center rounded-[4px] bg-primary text-white transition-colors hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary md:h-9 md:w-14"
                aria-label="下一個月"
                onClick={() => onMove('next')}
            >
                <LineIcon name="chevron" className="h-3 w-3" />
            </button>
            <button
                type="button"
                className="inline-flex h-7 items-center justify-center rounded-[4px] bg-[#8995aa] px-3 text-[12px] font-bold text-white transition-colors hover:bg-[#6e7d95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary md:h-9 md:px-4 md:text-[12px] xl:text-[14px]"
                onClick={() => onMove('today')}
            >
                回到今天
            </button>
        </div>
    </div>
)

const HistoryTabs = ({ activeTab, onChange }) => (
    <ul className="grid grid-cols-4 border-b border-solid border-[#dce5f0]">
        {HISTORY_TABS.map(({ icon, id, title }) => {
            const isActive = activeTab === id

            return (
                <li key={id} className="min-w-0">
                    <button
                        type="button"
                        className={`relative flex h-[52px] w-full items-center justify-center gap-1 px-1 text-[13px] font-bold leading-4 transition-colors md:h-[66px] md:gap-2 md:text-[15px] xl:text-[17px] xl:leading-6 ${
                            isActive
                                ? 'text-main after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:rounded-full after:bg-main'
                                : 'text-[#3d5572] hover:text-secondary'
                        }`}
                        aria-pressed={isActive}
                        onClick={() => onChange(id)}
                    >
                        <span
                            className="shrink-0 text-[13px] md:text-[22px]"
                            aria-hidden="true"
                        >
                            {icon}
                        </span>
                        <span className="truncate">
                            <I18N>{title}</I18N>
                        </span>
                    </button>
                </li>
            )
        })}
    </ul>
)

const ProgramSelector = ({ programs, selectedProgram, onChange, status }) => {
    if (!programs.length) return <p className="py-3 text-[14px] text-[#8292a7]">
        {status === 'success' ? '目前沒有學程' : status === 'loading' ? '學程載入中…' : status === 'idle' ? '請先登入以查看學程' : '學程載入失敗，請重新載入'}
    </p>
    return (
        <div className="py-2 md:px-1 md:py-3">
            <label className="sr-only" htmlFor="program-select">
                選擇學程
            </label>
            <Select
                id="program-select"
                wrapperClassName="md:hidden"
                className="!h-[42px] !rounded-full !border-[#1769d2] !bg-[#edf3fc] !px-5 !text-[14px] !text-[#0755cf]"
                truncateOptions
                value={selectedProgram}
                title={programs.find(program => program.id === selectedProgram)?.title || ''}
                onChange={({ target: { value } }) => onChange(value)}
            >
                {programs.map(({ id, title }) => (
                    <option key={id} value={id} title={title}>
                        {title}
                    </option>
                ))}
            </Select>

            <ul className="hidden grid-cols-3 gap-2 md:grid">
                {programs.map(({ id, title }) => {
                    const isSelected = selectedProgram === id

                    return (
                        <li key={id} className="min-w-0">
                            <button
                                type="button"
                                title={title}
                                className={`block h-10 w-full min-w-0 max-w-full overflow-hidden rounded-full border border-solid px-4 py-2 text-[13px] font-normal leading-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary xl:text-[14px] ${
                                    isSelected
                                        ? 'border-blue bg-[#eaf3ff] text-blue ring-2 ring-blue/15'
                                        : 'border-[#dce5f0] bg-white text-[#708399] hover:border-secondary hover:bg-[#f3f7fd]'
                                }`}
                                aria-pressed={isSelected}
                                onClick={() => onChange(id)}
                            >
                                <span className="block w-full truncate text-center"><I18N>{title}</I18N></span>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

const ProgramInfoRow = ({ children, icon, iconColor = 'text-secondary' }) => (
    <div className="flex items-start gap-2 border-b border-solid border-[#e1e8f1] px-2 py-2.5 last:border-b-0 md:px-5 md:py-3">
        <LineIcon name={icon} className={`mt-[1px] ${iconColor}`} />
        <div className="min-w-0 flex-1 text-[13px] font-medium leading-5 text-[#405a78] md:text-[13px] md:leading-6 xl:text-[15px] xl:leading-7">
            {children}
        </div>
    </div>
)

const CourseStatusIcon = ({ status, decorative = false, large = false }) => {
    const { image, label } = COURSE_STATUS_CONFIG[status] || {}
    if (!image) return <span aria-label="未知燈號">？</span>

    return (
        <img
            src={`${process.env.BASE_PATH}/images/global/${image}`}
            alt={decorative ? '' : label}
            title={decorative ? undefined : label}
            aria-hidden={decorative || undefined}
            className={`shrink-0 object-contain h-[13px] w-[13px] md:h-4 md:w-4 xl:h-5 xl:w-5`}
        />
    )
}

export const ProgressCourseList = ({ courses, emptyText, showStatus = false }) =>
    courses.length ? (
        <ul className="space-y-1 md:space-y-2">
            {courses.map(({ id, status, title, type }, index) => (
                <li key={`${id}-${index}`} className="break-words">
                    {showStatus && (
                        <>
                            <span>{status}</span>{' '}
                        </>
                    )}
                    {type && <span className="mr-1">【{type}】</span>}
                    {!id || ["morning", "other", "[morning]", "[other]"].includes(status.trim().toLowerCase()) ? <span>{title}</span> : <Link
                        href={`https://nlms.tzuchi.com.tw/tzuchi/edurd/register_course/course_opration.php?id=${encodeURIComponent(id)}`}
                        className="font-semibold text-secondary underline decoration-transparent underline-offset-2 hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
                    >
                        {title}
                    </Link>}
                </li>
            ))}
        </ul>
    ) : (
        <p className="text-[#778ba3]">{emptyText}</p>
    )

const CourseProgressDetails = ({
    availableCourses,
    completedCourses,
    title
}) => (
    <div
        className="space-y-2 break-words md:space-y-4"
        aria-live="polite"
        aria-atomic="true"
    >
        <p className="font-bold text-primary">{title}</p>
        <section>
            <h3 className="mb-1 font-bold text-primary">◎已上課程資訊</h3>
            <ProgressCourseList
                courses={completedCourses}
                emptyText="目前沒有已上課程"
                showStatus={true}
            />
        </section>
        <section>
            <h3 className="mb-1 font-bold text-primary">◎其他可選之課程</h3>
            <ProgressCourseList
                courses={availableCourses}
                emptyText="目前沒有其他可選課程"
            />
        </section>
    </div>
)

export const CourseProgressTable = ({ categories }) => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(categories[0]?.id)
    const selectedCategory = categories.find(({ id }) => id === selectedCategoryId) || categories[0]
    if (!selectedCategory) return <p className="min-h-[340px] p-4 md:min-h-[480px]">目前沒有學程類別。</p>
    const rowCount = Math.max(categories.length, 11)
    const emptyRowCount = rowCount - categories.length
    const { title, courses } = selectedCategory
    const completedCourses = courses.filter(course => course.status !== '')
    const availableCourses = courses.filter(course => course.status === '')

    const selectCategory = (categoryId) => {
        setSelectedCategoryId(categoryId)
    }

    return (
        <div className="overflow-x-auto border-t border-solid border-[#dfe7f1]">
            <table className="h-[340px] w-full table-fixed border-collapse text-left text-[11px] leading-4 text-[#49617e] md:h-[480px] md:text-[12px] xl:text-[15px] xl:leading-6">
                <thead>
                    <tr className="bg-[#f3f7fd]">
                        <th
                            scope="col"
                            className="w-[32%] border-b border-r border-solid border-[#dfe7f1] px-2 py-1.5 font-bold md:w-[35%] md:px-4 md:py-2"
                        >
                            <I18N>類別</I18N>
                        </th>
                        <th
                            scope="col"
                            className="w-[23%] border-b border-r border-solid border-[#dfe7f1] px-1 py-1.5 font-bold md:px-4 md:py-2"
                        >
                            <I18N>修課情況</I18N>
                        </th>
                        <th
                            scope="col"
                            className="w-[45%] border-b border-solid border-[#dfe7f1] px-2 py-1.5 font-bold md:w-[42%] md:px-4 md:py-2"
                        >
                            <I18N>詳細說明</I18N>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => {
                        const isSelected = category.id === selectedCategoryId
                        const isLastRow = index === rowCount - 1
                        const cellClass = `${
                            isLastRow ? '' : 'border-b'
                        } border-r border-solid border-[#dfe7f1] align-middle ${
                            isSelected ? 'bg-[#eaf3ff]' : 'bg-white'
                        }`

                        return (
                            <tr key={category.id}>
                                <td
                                    colSpan={2}
                                    className={cellClass}
                                    onMouseEnter={() =>
                                        selectCategory(category.id)
                                    }
                                >
                                    <button
                                        type="button"
                                        className="grid min-h-7 w-full grid-cols-[32fr_23fr] items-stretch text-left font-medium hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-secondary md:min-h-10 md:grid-cols-[35fr_23fr]"
                                        aria-pressed={isSelected}
                                        onFocus={() =>
                                            selectCategory(category.id)
                                        }
                                        onClick={() =>
                                            selectCategory(category.id)
                                        }
                                    >
                                        <span className="flex items-center border-r border-solid border-[#dfe7f1] px-2 py-1 md:px-4 md:py-2">
                                            {category.title}（{category.credit} 學分）
                                        </span>
                                        <span className="flex flex-wrap content-center items-center gap-1 px-1 py-1 md:gap-2 md:px-4 md:py-2">
                                        <span className="sr-only">修課情況：</span>
                                        {category.states.map(
                                            (status, stateIndex) => (
                                                <CourseStatusIcon
                                                    key={`${category.id}-${status}-${stateIndex}`}
                                                    status={status}
                                                />
                                            )
                                        )}
                                        </span>
                                    </button>
                                </td>
                                {index === 0 && (
                                    <td
                                        rowSpan={rowCount}
                                        className="bg-white px-2 py-2 align-top md:px-4 md:py-3"
                                    >
                                        <div
                                            key={selectedCategoryId}
                                            className="break-words"
                                        >
                                            <CourseProgressDetails
                                                title={title}
                                                completedCourses={
                                                    completedCourses
                                                }
                                                availableCourses={
                                                    availableCourses
                                                }
                                            />
                                        </div>
                                    </td>
                                )}
                            </tr>
                        )
                    })}
                    {Array.from({ length: emptyRowCount }, (_, index) => (
                        <tr key={`empty-${index}`} aria-hidden="true">
                            <td className={`border-r border-solid border-[#dfe7f1] bg-white ${index < emptyRowCount - 1 ? 'border-b' : ''}`}>
                                <div className="min-h-7 md:min-h-10" />
                            </td>
                            <td className={`border-r border-solid border-[#dfe7f1] bg-white ${index < emptyRowCount - 1 ? 'border-b' : ''}`} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const CollapsiblePanel = ({ children, icon, isDefaultOpen = false, title }) => {
    const [isOpen, setIsOpen] = useState(isDefaultOpen)

    return (
        <section className="overflow-hidden rounded-[6px] border border-solid border-[#e0e8f2] bg-white">
            <button
                type="button"
                className="flex min-h-[42px] w-full items-center gap-2 bg-[#f3f7fd] px-3 py-2 text-left text-[14px] font-bold text-primary transition-colors hover:bg-[#eaf1fb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-secondary md:min-h-[48px] md:px-5 md:text-[16px] xl:text-[18px]"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((currentValue) => !currentValue)}
            >
                {icon && <LineIcon name={icon} className="text-blue" />}
                <span className="min-w-0 flex-1">
                    <I18N>{title}</I18N>
                </span>
                <LineIcon
                    name="chevron"
                    className={`h-4 w-4 text-blue transition-transform ${
                        isOpen ? '-rotate-90' : 'rotate-90'
                    }`}
                />
            </button>
            {isOpen && children}
        </section>
    )
}

const NoticeCard = ({ items, onSelect, title, tone, emptyText }) => (
    <section className="overflow-hidden rounded-[9px] border border-solid border-[#dce5f0] bg-white [box-shadow:0_2px_12px_rgba(9,58,123,0.04)]">
        <header className="flex h-[58px] items-center justify-between border-b border-solid border-[#e6ecf4] px-5">
            <h2 className="text-[17px] font-bold text-primary xl:text-[19px]">
                <I18N>{title}</I18N>
            </h2>
        </header>
        <ul className="max-h-[256px] overflow-y-auto overscroll-contain px-5 py-2">
            {!items.length && emptyText && <li className="py-3 text-[13px] text-[#8292a7]">{emptyText}</li>}
            {items.map((item) => (
                <li key={item.id}>
                    <button
                        type="button"
                        className="flex h-12 w-full items-center gap-3 rounded-[4px] py-3 text-left transition-colors hover:bg-[#f7f9fd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
                        aria-haspopup="dialog"
                        aria-label={`查看${item.title}`}
                        onClick={() => onSelect(item)}
                    >
                        <span
                            className={`h-2 w-2 shrink-0 rounded-full ${
                                tone === 'red' ? 'bg-danger' : 'bg-blue'
                            } ${item.isUnread ? '' : 'opacity-45'}`}
                            aria-hidden="true"
                        />
                        <span title={item.title} className="min-w-0 flex-1 truncate text-[11px] font-semibold text-[#405a78] xl:text-[13px]">
                            {item.title}
                        </span>
                        <time className="shrink-0 text-[10px] text-[#8292a7] xl:text-[12px]">
                            {item.date}
                        </time>
                    </button>
                </li>
            ))}
        </ul>
    </section>
)

export const ProgramDetails = ({ programId }) => {
    const { expireSession, user } = useContext(LoginContext)
    const [result, setResult] = useState({ status: 'loading' })
    const [revision, setRevision] = useState(0)
    useEffect(() => {
        const controller = new AbortController()
        setResult({ status: 'loading', programId, owner: user.id })
        getProgramInfo(programId, controller.signal).then(data => {
            if (!controller.signal.aborted) setResult({ status: 'success', data, programId, owner: user.id })
        }).catch(error => {
            if (controller.signal.aborted) return
            if (error.status === 401) {
                setResult({ status: 'expired', programId, owner: user.id })
                expireSession()
                return
            }
            setResult({ status: 'error', programId, owner: user.id, error: error instanceof TypeError
                ? '無法連線至學程服務，請確認網路後重試。' : error.message })
        })
        return () => controller.abort()
    }, [programId, user.id, expireSession, revision])
    if (result.programId !== programId || result.owner !== user.id || result.status === 'loading') return (
        <div role="status" aria-busy="true" className="flex h-[480px] items-center justify-center p-4 md:h-[640px]">
            <span aria-hidden="true"><Spinner size={12} color="#093a7b" /></span>
            <span className="sr-only">學程明細載入中…</span>
        </div>
    )
    if (result.status === 'expired') return <p role="alert" className="min-h-[480px] p-4 md:min-h-[640px]"><Link href="/#login">登入時效已過期或尚未登入，請重新登入。</Link></p>
    if (result.status === 'error') return <div role="alert" className="min-h-[480px] p-4 md:min-h-[640px]">
        <p>{result.error}</p>
        <button type="button" className="mt-2 text-secondary underline" onClick={() => setRevision(value => value + 1)}>重新載入</button>
    </div>
    return <>
        <div className="flex flex-wrap gap-4 rounded border border-solid border-[#e0e8f2] bg-white p-4 text-[14px]">
            <span>應完成總學分：{result.data.totalCredit}</span>
            <span>已取得通過學分：{result.data.passCredit}</span>
            <span>綠色 OK 學分：{result.data.passRealCredit}</span>
        </div>
        <div className="mt-3 space-y-2">
            <CollapsiblePanel title="修課列表" isDefaultOpen={true}>
                <CourseProgressTable categories={result.data.categories} />
            </CollapsiblePanel>
            <CollapsiblePanel title="修課說明" icon="help">
                <ul className="grid xl:gap-3 border-t border-solid border-[#e1e8f1] p-2 xl:p-4 text-[13px] leading-5 text-[#49617e] md:grid-cols-2 md:px-5 xl:grid-cols-3 xl:text-[15px] xl:leading-6">
                    {COURSE_STATUS_LEGEND.map((status) => (
                        <li key={status} className="flex items-center gap-2">
                            <CourseStatusIcon
                                status={status}
                                decorative
                                large
                            />
                            <span className="min-w-0 pt-0.5">
                                <I18N>
                                    {COURSE_STATUS_CONFIG[status].label}
                                </I18N>
                            </span>
                        </li>
                    ))}
                </ul>
            </CollapsiblePanel>
        </div>
    </>
}

const formatMonthTitle = (date) =>
    `${date.getFullYear()}年${date.getMonth() + 1}月`

const Page = () => {
    const isMobile = useMedia('(max-width: 767px)')
    const { data, status } = useContext(DashboardContext)
    const calendarEvents = getCalendarEvents(data)
    const calendarRef = useRef(null)
    const [calendarTitle, setCalendarTitle] = useState(() => formatMonthTitle(new Date()))
    const [activeTab, setActiveTab] = useState('program')
    const [selectedProgram, setSelectedProgram] = useState('')
    const programs = activeTab === 'finished' ? data.programs.past : data.programs.inProgress
    const selectedProgramId = programs.some(program => program.id === selectedProgram)
        ? selectedProgram : programs[0]?.id || ''
    const [selectedNotice, setSelectedNotice] = useState(null)
    useEffect(() => setSelectedNotice(null), [data])

    const moveCalendar = (action) => {
        const calendarApi = calendarRef.current?.getApi()
        if (calendarApi && typeof calendarApi[action] === 'function') {
            calendarApi[action]()
        }
    }

    const handleDatesSet = ({ view: { currentStart } }) => {
        setCalendarTitle(formatMonthTitle(currentStart))
    }

    const getDayCellClass = ({ date, isOther, isToday }) => {
        return [
            'learning-fc-cell',
            date.getDay() === 0 ? 'is-sunday' : '',
            isOther ? 'is-other-month' : '',
            isToday ? '!bg-primary-light' : ''
        ]
            .filter(Boolean)
            .join(' ')
    }

    const getEventClass = ({ event: { extendedProps } }) => {
        const { tone = 'registered' } = extendedProps
        return `learning-fc-event is-${tone}`
    }

    return (
        <div className="min-h-screen bg-[#f4f7fd] pt-[var(--header-height)] text-primary">
            <TitleBlk
                title="我的學習行事曆"
                icon="calendar"
                breadcrumbs={[{ title: '我的學習歷程' }]}
            />
            <div className="px-4 pb-10 pt-4 md:px-6 md:pt-6 xl:px-10 xl:py-10">
                <div className="mx-auto w-full xl:max-w-[1200px] 2xl:max-w-[1400px]">
                    <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_330px] xl:items-start xl:gap-3">
                        <div className="min-w-0">
                            <section className="overflow-visible rounded-[8px] border border-solid border-[#dce5f0] bg-white px-2 pb-3 pt-2 [box-shadow:0_2px_14px_rgba(9,58,123,0.035)] md:px-4 md:pb-5 md:pt-4">
                                <div className="flex items-start gap-2 px-1 md:items-center md:px-2">
                                    <CalendarLegend />
                                    <CalendarControls
                                        calendarTitle={calendarTitle}
                                        onMove={moveCalendar}
                                    />
                                </div>

                                <div className="learning-calendar__fullcalendar mt-2 md:mt-3">
                                    <FullCalendar
                                        ref={calendarRef}
                                        plugins={[
                                            dayGridPlugin,
                                            classicThemePlugin
                                        ]}
                                        themeSystem="classic"
                                        initialView="dayGridMonth"
                                        headerToolbar={false}
                                        height={isMobile ? 340 : 540}
                                        firstDay={0}
                                        fixedWeekCount={false}
                                        expandRows={true}
                                        showNonCurrentDates={true}
                                        dayHeaders={true}
                                        dayHeaderContent={({ date }) =>
                                            WEEKDAY_LABELS[date.getDay()]
                                        }
                                        dayHeaderClass="learning-fc-header-cell"
                                        dayHeaderInnerClass="learning-fc-header-inner"
                                        dayCellClass={getDayCellClass}
                                        dayCellInnerClass="learning-fc-cell-inner"
                                        dayCellTopClass="learning-fc-cell-top"
                                        dayCellTopInnerClass="learning-fc-cell-top-inner"
                                        dayCellTopContent={({ date }) =>
                                            date.getDate()
                                        }
                                        eventClass={getEventClass}
                                        eventContent={({ event }) => <span className="block w-full truncate"
                                            title={`${event.extendedProps.course.start.replace('T', ' ')} ${event.title} ${event.extendedProps.course.classroom}`}>
                                            {event.extendedProps.course.start.slice(11, 16)} {event.title}
                                        </span>}
                                        events={calendarEvents}
                                        eventOrder="sortTime,title,id"
                                        eventOrderStrict={true}
                                        dayMaxEvents={isMobile ? 0 : 1}
                                        moreLinkText={(count) => `${count}+`}
                                        moreLinkContent={({ num }) => `${num}+`}
                                        moreLinkHint={(count) => `另有 ${count} 筆課程`}
                                        moreLinkClick="popover"
                                        popoverClass="learning-calendar-popover"
                                        popoverCloseClass="learning-calendar-popover__close"
                                        popoverCloseContent={() => <span aria-hidden="true">×</span>}
                                        moreLinkClass="learning-fc-more"
                                        displayEventTime={false}
                                        eventDisplay="block"
                                        editable={false}
                                        selectable={false}
                                        datesSet={handleDatesSet}
                                    />
                                </div>

                                <div className="mt-1 md:mt-3">
                                    <HistoryTabs
                                        activeTab={activeTab}
                                        onChange={setActiveTab}
                                    />
                                    {activeTab === 'learning' ? <LearningHistory courses={data.history} status={status} /> : <>
                                    {activeTab === 'external' || activeTab === 'finished' ? <SearchableProgramSelector
                                        key={activeTab}
                                        searchWithButtons
                                        programs={programs}
                                        status={status}
                                        selectedProgram={selectedProgramId}
                                        onChange={setSelectedProgram}
                                    /> : <ProgramSelector
                                        programs={programs}
                                        status={status}
                                        selectedProgram={selectedProgramId}
                                        onChange={setSelectedProgram}
                                    />}
                                    {selectedProgramId && <ProgramDetails key={selectedProgramId} programId={selectedProgramId} />}
                                    </>}
                                </div>
                            </section>
                        </div>

                        <aside className="mt-3 hidden space-y-3 xl:mt-0 xl:block">
                            <DashboardStatus />
                            <NoticeCard
                                title="通知信"
                                items={data.messages}
                                emptyText={status === 'success' ? '目前沒有通知信' : ''}
                                tone="blue"
                                onSelect={setSelectedNotice}
                            />
                            <NoticeCard
                                title="系統公告"
                                items={data.announcements}
                                emptyText={status === 'success' ? '目前沒有系統公告' : ''}
                                tone="red"
                                onSelect={setSelectedNotice}
                            />
                        </aside>
                    </div>
                </div>
            </div>
            {selectedNotice && status === 'success' && (
                <NotificationDetailDialog
                    notice={selectedNotice}
                    onClose={() => setSelectedNotice(null)}
                />
            )}
        </div>
    )
}

export default React.memo(Page)
