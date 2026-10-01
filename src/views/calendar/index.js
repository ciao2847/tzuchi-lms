import React, { useRef, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/react/daygrid'
import classicThemePlugin from '@fullcalendar/react/themes/classic'
import I18N from 'components/I18N'
import Link from 'components/Link'
import NotificationDetailDialog from 'components/NotificationDetailDialog'
import Select from 'components/Select'
import TitleBlk from 'components/TitleBlk'
import {
    ANNOUNCEMENT_LIST,
    COURSE_PROGRESS,
    MESSAGE_LIST,
    getCalendarCourseById
} from 'constants/learningCalendar'

const WEEKDAY_LABELS = ['日', '一', '二', '三', '四', '五', '六']

const CALENDAR_EVENTS = [
    {
        id: 'event-aug-11',
        title: '+23m',
        start: '2026-08-11',
        extendedProps: { tone: 'registered' }
    },
    {
        id: 'event-aug-13',
        title: '+3m',
        start: '2026-08-13',
        extendedProps: { tone: 'pending' }
    },
    {
        id: 'event-aug-31',
        title: '+1m',
        start: '2026-08-31',
        extendedProps: { tone: 'registered' }
    }
]

const HISTORY_TABS = [
    { id: 'program', title: '我的學程' },
    { id: 'learning', title: '學習歷程' },
    { id: 'external', title: '外訓歷程' },
    { id: 'finished', title: '已結束的學程' }
]

const PROGRAM_OPTIONS = [
    { id: 'six-skills-1', title: '精實六標準差技能認證' },
    { id: 'six-skills-2', title: '精實六標準差技能認證' },
    { id: 'six-skills-3', title: '精實六標準差技能認證' },
    { id: 'six-skills-4', title: '精實六標準差技能認證' },
    { id: 'six-skills-5', title: '精實六標準差技能認證' },
    { id: 'six-skills-6', title: '精實六標準差技能認證' }
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
                Today
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

const ProgramSelector = ({ selectedProgram, onChange }) => {
    return (
        <div className="py-2 md:px-1 md:py-3">
            <label className="sr-only" htmlFor="program-select">
                選擇學程
            </label>
            <Select
                id="program-select"
                wrapperClassName="md:hidden"
                className="font-bold"
                value={selectedProgram}
                onChange={({ target: { value } }) => onChange(value)}
            >
                {PROGRAM_OPTIONS.map(({ id, title }, index) => (
                    <option key={id} value={id}>
                        {title}
                        {index > 0 ? ` ${index + 1}` : ''}
                    </option>
                ))}
            </Select>

            <ul className="hidden grid-cols-3 gap-3 md:grid">
                {PROGRAM_OPTIONS.map(({ id, title }) => {
                    const isSelected = selectedProgram === id

                    return (
                        <li key={id}>
                            <button
                                type="button"
                                className={`flex min-h-[42px] w-full items-center justify-center rounded-[5px] px-3 py-2 text-[14px] font-bold leading-5 transition-colors lg:text-[15px] xl:text-[17px] xl:leading-6 ${
                                    isSelected
                                        ? 'bg-blue text-white'
                                        : 'bg-[#f1f5fb] text-[#3c5573] hover:bg-[#e8eff9] hover:text-secondary'
                                }`}
                                aria-pressed={isSelected}
                                onClick={() => onChange(id)}
                            >
                                <I18N>{title}</I18N>
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
    const { image, label } = COURSE_STATUS_CONFIG[status]

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

const ProgressCourseList = ({ courses, emptyText, showStatus = false }) =>
    courses.length ? (
        <ul className="space-y-1 md:space-y-2">
            {courses.map(({ id, status, title }) => (
                <li key={id} className="break-words">
                    {showStatus && (
                        <>
                            <span>{status}</span>{' '}
                        </>
                    )}
                    <Link
                        href={`/pick/${id}`}
                        className="font-semibold text-secondary underline decoration-transparent underline-offset-2 hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
                    >
                        {title}
                    </Link>
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

const CourseProgressTable = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState(5)
    const selectedCategory =
        COURSE_PROGRESS.find(({ id }) => id === selectedCategoryId) ||
        COURSE_PROGRESS[0]
    const { id, states, title } = selectedCategory
    const programCourse = getCalendarCourseById(`program-${id}`)
    const completedCourses =
        id === 5
            ? [getCalendarCourseById('84540')]
            : states.some((status) => ['complete', 'failed'].includes(status))
            ? [programCourse]
            : []
    const availableCourses =
        id === 5
            ? [getCalendarCourseById('85257'), getCalendarCourseById('84946')]
            : states.some((status) =>
                  ['notStarted', 'inProgress', 'failed'].includes(status)
              )
            ? [programCourse]
            : []

    const selectCategory = (categoryId) => {
        setSelectedCategoryId(categoryId)
    }

    return (
        <div className="overflow-x-auto border-t border-solid border-[#dfe7f1]">
            <table className="w-full table-fixed border-collapse text-left text-[11px] leading-4 text-[#49617e] md:text-[12px] xl:text-[15px] xl:leading-6">
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
                    {COURSE_PROGRESS.map((category, index) => {
                        const isSelected = category.id === selectedCategoryId
                        const isLastRow = index === COURSE_PROGRESS.length - 1
                        const cellClass = `${
                            isLastRow ? '' : 'border-b'
                        } border-r border-solid border-[#dfe7f1] align-middle ${
                            isSelected ? 'bg-[#eaf3ff]' : 'bg-white'
                        }`

                        return (
                            <tr key={category.id}>
                                <th
                                    scope="row"
                                    className={cellClass}
                                    onMouseEnter={() =>
                                        selectCategory(category.id)
                                    }
                                >
                                    <button
                                        type="button"
                                        className="flex min-h-7 w-full items-center px-2 py-1 text-left font-medium hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary md:min-h-10 md:px-4 md:py-2"
                                        aria-pressed={isSelected}
                                        onFocus={() =>
                                            selectCategory(category.id)
                                        }
                                        onClick={() =>
                                            selectCategory(category.id)
                                        }
                                    >
                                        {category.title}
                                    </button>
                                </th>
                                <td
                                    className={cellClass}
                                    onMouseEnter={() =>
                                        selectCategory(category.id)
                                    }
                                >
                                    <button
                                        type="button"
                                        className="flex min-h-7 w-full flex-wrap content-center items-center gap-1 overflow-visible px-1 py-1 text-left hover:bg-[#dcecff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary md:min-h-10 md:gap-2 md:px-4 md:py-2"
                                        aria-label={`查看${category.title}的修課情況與課程資訊`}
                                        aria-pressed={isSelected}
                                        onFocus={() =>
                                            selectCategory(category.id)
                                        }
                                        onClick={() =>
                                            selectCategory(category.id)
                                        }
                                    >
                                        {category.states.map(
                                            (status, stateIndex) => (
                                                <CourseStatusIcon
                                                    key={`${category.id}-${status}-${stateIndex}`}
                                                    status={status}
                                                />
                                            )
                                        )}
                                    </button>
                                </td>
                                {index === 0 && (
                                    <td
                                        rowSpan={COURSE_PROGRESS.length}
                                        className="bg-white px-2 py-2 align-top md:px-4 md:py-3"
                                    >
                                        <div
                                            key={selectedCategoryId}
                                            className="h-[308px] overflow-y-auto overscroll-contain pr-1 [scrollbar-gutter:stable] md:h-[440px]"
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
                className="flex min-h-[42px] w-full items-center gap-2 bg-[#f3f7fd] px-3 py-2 text-left text-[14px] font-bold text-primary transition-colors hover:bg-[#eaf1fb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary md:min-h-[48px] md:px-5 md:text-[16px] xl:text-[18px]"
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

const NoticeCard = ({ items, onSelect, title, tone }) => (
    <section className="overflow-hidden rounded-[9px] border border-solid border-[#dce5f0] bg-white [box-shadow:0_2px_12px_rgba(9,58,123,0.04)]">
        <header className="flex h-[58px] items-center justify-between border-b border-solid border-[#e6ecf4] px-5">
            <h2 className="text-[17px] font-bold text-primary xl:text-[19px]">
                <I18N>{title}</I18N>
            </h2>
        </header>
        <ul className="px-5 py-2">
            {items.map((item) => (
                <li key={item.id}>
                    <button
                        type="button"
                        className="flex w-full items-center gap-3 rounded-[4px] py-3 text-left transition-colors hover:bg-[#f7f9fd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
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
                        <span className="min-w-0 flex-1 truncate text-[11px] font-semibold text-[#405a78] xl:text-[13px]">
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

const ProgramDetails = () => (
    <>
        <div className="overflow-hidden rounded-[6px] border border-solid border-[#e0e8f2] bg-white">
            <ProgramInfoRow icon="calendar">
                <strong className="font-bold text-primary">學程起迄：</strong>
                2020/11/01 ～ 2028/01/31
            </ProgramInfoRow>
            <ProgramInfoRow icon="bulb" iconColor="text-main">
                <strong className="font-bold text-primary">先備知識：</strong>-
            </ProgramInfoRow>
            <ProgramInfoRow icon="document">
                <strong className="font-bold text-primary">學程說明：</strong>
                為培養同仁持續改善能力，以最少資源達成醫院目標，歡迎同仁自由報名參加「精實六標準差技能認證」。
            </ProgramInfoRow>
            <ProgramInfoRow icon="user">
                <strong className="font-bold text-primary">學程聯絡人：</strong>
                精實醫療中心 課程負責人 5410
            </ProgramInfoRow>
        </div>

        <div className="mt-3 space-y-2">
            <CollapsiblePanel title="修課列表" isDefaultOpen={true}>
                <CourseProgressTable />
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
)

const formatMonthTitle = (date) =>
    `${date.getFullYear()}年${date.getMonth() + 1}月`

const Page = () => {
    const calendarRef = useRef(null)
    const [calendarTitle, setCalendarTitle] = useState('2026年8月')
    const [activeTab, setActiveTab] = useState('program')
    const [selectedProgram, setSelectedProgram] = useState('six-skills-1')
    const [selectedNotice, setSelectedNotice] = useState(null)

    const moveCalendar = (action) => {
        const calendarApi = calendarRef.current?.getApi()
        if (calendarApi && typeof calendarApi[action] === 'function') {
            calendarApi[action]()
        }
    }

    const handleDatesSet = ({ view: { currentStart } }) => {
        setCalendarTitle(formatMonthTitle(currentStart))
    }

    const getDayCellClass = ({ date, isOther }) => {
        const dateString = [
            date.getFullYear(),
            String(date.getMonth() + 1).padStart(2, '0'),
            String(date.getDate()).padStart(2, '0')
        ].join('-')

        return [
            'learning-fc-cell',
            date.getDay() === 0 ? 'is-sunday' : '',
            isOther ? 'is-other-month' : '',
            dateString === '2026-08-07' ? 'is-selected-day' : ''
        ]
            .filter(Boolean)
            .join(' ')
    }

    const getEventClass = ({ event: { extendedProps } }) => {
        const { tone = 'registered' } = extendedProps
        return `learning-fc-event is-${tone}`
    }

    return (
        <div className="min-h-screen bg-[#f4f7fd] pt-[56px] text-primary xl:pt-[80px]">
            <TitleBlk
                title="我的學習行事曆"
                icon="calendar"
                breadcrumbs={[{ title: '我的學習歷程' }]}
            />
            <div className="px-4 pb-10 pt-4 md:px-6 md:pt-6 xl:px-10 xl:py-10">
                <div className="mx-auto w-full xl:max-w-[1200px] 2xl:max-w-[1400px]">
                    <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_330px] xl:items-start xl:gap-3">
                        <div className="min-w-0">
                            <section className="overflow-hidden rounded-[8px] border border-solid border-[#dce5f0] bg-white px-2 pb-3 pt-2 [box-shadow:0_2px_14px_rgba(9,58,123,0.035)] md:px-4 md:pb-5 md:pt-4">
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
                                        initialDate="2026-08-01"
                                        headerToolbar={false}
                                        height="auto"
                                        aspectRatio={2.05}
                                        firstDay={0}
                                        fixedWeekCount={true}
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
                                        eventContent={({
                                            event: { title }
                                        }) => <span>{title}</span>}
                                        events={CALENDAR_EVENTS}
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
                                    <ProgramSelector
                                        selectedProgram={selectedProgram}
                                        onChange={setSelectedProgram}
                                    />
                                    <ProgramDetails />
                                </div>
                            </section>
                        </div>

                        <aside className="mt-3 hidden space-y-3 xl:mt-0 xl:block">
                            <NoticeCard
                                title="消息"
                                items={MESSAGE_LIST}
                                tone="blue"
                                onSelect={setSelectedNotice}
                            />
                            <NoticeCard
                                title="最新公告"
                                items={ANNOUNCEMENT_LIST}
                                tone="red"
                                onSelect={setSelectedNotice}
                            />
                        </aside>
                    </div>
                </div>
            </div>
            {selectedNotice && (
                <NotificationDetailDialog
                    notice={selectedNotice}
                    onClose={() => setSelectedNotice(null)}
                />
            )}
        </div>
    )
}

export default React.memo(Page)
