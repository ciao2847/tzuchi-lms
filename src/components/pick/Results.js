import React from 'react'
import { useNavigate } from 'react-router-dom'
import I18N from 'components/I18N'
import Link from 'components/Link'

const Tag = ({ children, tone = 'blue' }) => {
    const colorClass =
        tone === 'red'
            ? 'bg-[#fff0f0] text-[#e65b5b]'
            : tone === 'gray'
            ? 'bg-[#f0f2f5] text-[#556273]'
            : 'bg-[#eaf3ff] text-secondary'

    return (
        <li
            className={`inline-flex h-5 items-center rounded-full px-2 text-[10px] font-bold leading-none xl:h-6 xl:text-[12px] ${colorClass}`}
        >
            <I18N>{children}</I18N>
        </li>
    )
}

const Meta = ({ icon, children }) => (
    <div className="flex min-w-0 items-start gap-2 text-[11px] leading-[17px] text-[#486785] md:text-[12px] xl:text-[14px] xl:leading-5">
        <i
            className={`icon icon-${icon} mt-[2px] h-3 w-3 shrink-0 text-[11px] text-secondary`}
            aria-hidden="true"
        />
        <span className="min-w-0 break-words">{children}</span>
    </div>
)

const Programs = ({ programs, showLabel = true, largeText = false }) => {
    const visiblePrograms = programs.slice(0, 2)
    const hiddenCount = programs.length - visiblePrograms.length
    const fullTitle = programs.join('\n')

    return (
        <div className="min-w-0">
            {showLabel && (
                <p className="mb-1 text-[11px] font-bold text-secondary md:text-[12px] xl:text-[13px]">
                    <I18N>認列學程</I18N>
                </p>
            )}
            <ul
                className="space-y-1"
                aria-label={`認列學程：${programs.join('；')}`}
            >
                {visiblePrograms.map((program, index) => (
                    <li
                        key={program}
                        title={fullTitle}
                        className={`flex min-w-0 items-center gap-1 text-[11px] leading-[17px] text-[#486785] md:text-[12px] ${
                            largeText
                                ? 'xl:text-[14px] xl:leading-5'
                                : 'xl:text-[13px]'
                        }`}
                    >
                        <span className="min-w-0 flex-1 truncate">
                            {program}
                        </span>
                        {index === 1 && hiddenCount > 0 && (
                            <>
                                {/* <span className="shrink-0 text-main">
                                    +{hiddenCount}筆…
                                </span> */}
                                <i
                                    className="icon icon-info shrink-0 text-[15px] text-success"
                                    aria-hidden="true"
                                />
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

const Card = ({ course }) => {
    const {
        campus,
        type,
        isToday = false,
        title,
        date,
        lecturer,
        enrollment,
        programs
    } = course

    return (
        <article className="flex h-full min-h-[124px] flex-col rounded-[7px] border border-solid border-[#dce5f0] bg-white px-4 py-3 transition-transform duration-300 group-hover:-translate-y-0.5 xl:min-h-[135px] xl:px-5">
            <ul className="mb-1.5 flex flex-wrap items-center gap-2">
                <Tag>{campus}</Tag>
                <Tag tone="gray">{type}</Tag>
                {isToday && <Tag tone="red">今天</Tag>}
            </ul>
            <h3 className="mb-1.5 overflow-hidden break-words text-[12px] font-bold leading-[17px] text-primary [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] md:text-[13px] md:leading-[19px] xl:text-[16px] xl:leading-[22px]">
                {title}
            </h3>
            <div className="space-y-0.5">
                <Meta icon="calendar">{date}</Meta>
                <Meta icon="avatar">
                    <I18N>講師</I18N>：{lecturer}
                </Meta>
                {enrollment && (
                    <Meta icon="avatar">
                        <I18N>報名人數</I18N>：{enrollment}
                    </Meta>
                )}
            </div>
            <div className="mt-auto pt-3">
                <div className="border-t border-solid border-[#e7edf5] pt-2">
                    <Programs programs={programs} />
                </div>
            </div>
        </article>
    )
}

const CellText = ({ children }) => (
    <span
        title={children}
        className="break-words xl:overflow-hidden xl:[display:-webkit-box] xl:[-webkit-box-orient:vertical] xl:[-webkit-line-clamp:2]"
    >
        {children}
    </span>
)

const Table = ({ data }) => {
    const navigate = useNavigate()

    return (
        <div
            role="region"
            aria-label="課程列表，可左右捲動查看完整欄位"
            tabIndex={0}
            className="overflow-x-auto rounded-[10px] border border-solid border-[#dce5f0] bg-white text-primary [box-shadow:0_2px_10px_rgba(9,58,123,0.05)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        >
            <table className="w-full min-w-[1080px] table-fixed border-collapse text-left text-[12px] leading-[18px] xl:text-[14px] xl:leading-5">
                <caption className="sr-only">快速選課課程列表</caption>
                <colgroup>
                    <col className="w-[14%]" />
                    <col className="w-[25%]" />
                    <col className="w-[20%]" />
                    <col className="w-[10%]" />
                    <col className="w-[9%]" />
                    <col className="w-[22%]" />
                </colgroup>
                <thead>
                    <tr className="border-b border-solid border-[#e6ecf4] bg-slate-100 text-primary">
                        <th
                            scope="col"
                            className="px-3 pb-2 pt-4 font-semibold"
                        >
                            <I18N>院區／類型</I18N>
                        </th>
                        <th
                            scope="col"
                            className="px-3 pb-2 pt-4 font-semibold"
                        >
                            <I18N>課程名稱</I18N>
                        </th>
                        <th
                            scope="col"
                            className="px-3 pb-2 pt-4 font-semibold"
                        >
                            <I18N>上課時間</I18N>
                        </th>
                        <th
                            scope="col"
                            className="px-3 pb-2 pt-4 font-semibold"
                        >
                            <I18N>講師</I18N>
                        </th>
                        <th
                            scope="col"
                            className="px-3 pb-2 pt-4 font-semibold"
                        >
                            <I18N>報名人數</I18N>
                        </th>
                        <th
                            scope="col"
                            className="px-3 pb-2 pt-4 font-semibold"
                        >
                            <I18N>認列學程</I18N>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(
                        ({
                            id,
                            campus,
                            type,
                            isToday,
                            title,
                            date,
                            lecturer,
                            enrollment,
                            programs
                        }) => (
                            <tr
                                key={id}
                                onClick={(event) => {
                                    if (
                                        event.defaultPrevented ||
                                        event.target.closest?.('a')
                                    ) {
                                        return
                                    }
                                    navigate(`/pick/${id}`)
                                }}
                                className="cursor-pointer border-b border-solid border-[#e5ebf3] transition-colors hover:bg-[#eaf3ff] focus-within:bg-primary-[#eaf3ff] last:border-b-0"
                            >
                                <td className="px-3 py-3">
                                    <ul className="flex flex-wrap items-center gap-1">
                                        <Tag>{campus}</Tag>
                                        <Tag tone="gray">{type}</Tag>
                                        {isToday && <Tag tone="red">今天</Tag>}
                                    </ul>
                                </td>
                                <td className="px-3 py-3 font-semibold">
                                    <CellText>{title}</CellText>
                                </td>
                                <td className="px-3 py-3 text-[#486785]">
                                    <CellText>{date}</CellText>
                                </td>
                                <td className="px-3 py-3">
                                    <CellText>{lecturer}</CellText>
                                </td>
                                <td className="px-3 py-3 text-[#486785]">
                                    {enrollment || '—'}
                                </td>
                                <td className="px-3 py-3">
                                    <Programs
                                        programs={programs}
                                        showLabel={false}
                                        largeText
                                    />
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    )
}

const Results = ({ data, viewMode }) =>
    viewMode === 'list' ? (
        <Table data={data} />
    ) : (
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {data.map(({ id, ...course }) => (
                <li key={id}>
                    <Link
                        href={`/pick/${id}`}
                        className="group block h-full rounded-[7px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        aria-label={`查看課程：${course.title}`}
                    >
                        <Card course={course} />
                    </Link>
                </li>
            ))}
        </ul>
    )

export default React.memo(Results)
