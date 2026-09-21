import React from 'react'
import I18N from 'components/I18N'

const ViewCount = ({ views }) => (
    <span
        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 ${
            views > 0 ? 'bg-[#eaf3ff] font-bold text-secondary' : ''
        }`}
        aria-label={`瀏覽人次 ${views}`}
    >
        <i className="icon icon-view text-[11px]" aria-hidden="true" />
        {views}
    </span>
)

const Card = ({ record, onOpen }) => {
    const { id, title, department, attendee, date, dateTime, views } = record

    return (
        <article className="relative flex h-full min-h-[132px] flex-col rounded-[9px] border border-solid border-[#dce5f0] bg-white p-3 transition-colors hover:border-secondary hover:bg-[#f8fbff] [box-shadow:0_2px_10px_rgba(9,58,123,0.05)] md:min-h-[174px] md:p-5">
            <header className="mb-1 flex items-center justify-between gap-3 text-[11px] leading-4 text-[#7c8da2] md:mb-2 md:text-[12px]">
                <span>
                    <I18N>序號</I18N> {id}
                </span>
                <ViewCount views={views} />
            </header>

            <h2 className="mb-2 line-clamp-2 min-h-8 text-[13px] font-bold leading-4 text-secondary md:mb-3 md:min-h-10 md:text-[15px] md:leading-5 xl:text-[17px] xl:leading-6">
                {title}
            </h2>
            <p className="line-clamp-2 flex-1 text-[11px] leading-4 text-[#4e6783] md:text-[13px] md:leading-5 xl:text-[14px] xl:leading-6">
                {department}
            </p>

            <footer className="mt-2 flex items-center justify-between gap-3 border-t border-solid border-[#e5ebf3] pt-2 text-[11px] leading-4 text-primary md:mt-3 md:pt-3 md:text-[12px] xl:text-[13px] xl:leading-5">
                <span className="min-w-0 truncate">
                    <I18N>姓名</I18N>：{attendee}
                </span>
                <time className="shrink-0" dateTime={dateTime}>
                    {date}
                </time>
            </footer>
            <button
                type="button"
                aria-label={`查看學習心得：${title}`}
                aria-haspopup="dialog"
                onClick={() => onOpen(record)}
                className="absolute inset-0 cursor-pointer rounded-[9px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            />
        </article>
    )
}

const Cards = ({ data, onOpen }) => (
    <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-3">
        {data.map((record) => (
            <li key={record.id}>
                <Card record={record} onOpen={onOpen} />
            </li>
        ))}
    </ul>
)

const CellText = ({ children }) => (
    <span className="line-clamp-2 break-words" title={children}>
        {children}
    </span>
)

const Table = ({ data, onOpen }) => (
    <div
        role="region"
        aria-label="外訓資料列表，可左右捲動查看完整欄位"
        tabIndex={0}
        className="overflow-x-auto rounded-[10px] border border-solid border-[#dce5f0] bg-white text-primary [box-shadow:0_2px_10px_rgba(9,58,123,0.05)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
    >
        <table className="w-full min-w-[960px] table-fixed border-collapse text-left text-[12px] leading-[18px] xl:text-[14px] xl:leading-5">
            <caption className="sr-only">外訓資料列表</caption>
            <colgroup>
                <col className="w-[6%]" />
                <col className="w-[8%]" />
                <col className="w-[32%]" />
                <col className="w-[24%]" />
                <col className="w-[10%]" />
                <col className="w-[10%]" />
            </colgroup>
            <thead>
                <tr className="border-b border-solid border-[#e6ecf4] bg-slate-100 text-primary">
                    {['序號', '觀看', '活動名稱', '單位', '姓名', '日期'].map(
                        (heading) => (
                            <th
                                key={heading}
                                scope="col"
                                className="px-3 pb-2 pt-4 font-semibold"
                            >
                                <I18N>{heading}</I18N>
                            </th>
                        )
                    )}
                </tr>
            </thead>
            <tbody>
                {data.map((record) => {
                    const {
                        id,
                        views,
                        title,
                        department,
                        attendee,
                        date,
                        dateTime
                    } = record

                    return (
                        <tr
                            key={id}
                            onClick={() => onOpen(record)}
                            className="cursor-pointer border-b border-solid border-[#e5ebf3] transition-colors hover:bg-[#eaf3ff] last:border-b-0"
                        >
                            <td className="whitespace-nowrap px-3 py-3 text-[11px] text-[#7c8da2] xl:text-[12px]">
                                {id}
                            </td>
                            <td className="px-3 py-3 text-[#7c8da2]">
                                <ViewCount views={views} />
                            </td>
                            <td className="px-3 py-3 font-semibold text-secondary">
                                <button
                                    type="button"
                                    aria-label={`查看學習心得：${title}`}
                                    onClick={(event) => {
                                        event.stopPropagation()
                                        onOpen(record)
                                    }}
                                    className="w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                                >
                                    <CellText>{title}</CellText>
                                </button>
                            </td>
                            <td className="px-3 py-3 text-[#4e6783]">
                                <CellText>{department}</CellText>
                            </td>
                            <td className="px-3 py-3">
                                <CellText>{attendee}</CellText>
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                <time dateTime={dateTime}>{date}</time>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
)

const Results = ({ data, viewMode, onOpen }) =>
    viewMode === 'list' ? (
        <Table data={data} onOpen={onOpen} />
    ) : (
        <Cards data={data} onOpen={onOpen} />
    )

export default React.memo(Results)
