import React, { useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import I18N from 'components/I18N'
import Link from 'components/Link'
import useDialogInteraction from 'hooks/useDialogInteraction'

const COURSE_STATUS = {
    complete: { className: 'bg-[#2f9b4b]', label: '已完成' },
    incomplete: { className: 'bg-[#ef3f35]', label: '尚未完成' }
}

const CourseProgressDetail = ({ detail }) => (
    <section className="mt-5" aria-labelledby="notification-course-title">
        <h3
            id="notification-course-title"
            className="mb-2 text-[14px] font-bold text-blue underline underline-offset-4 md:text-[15px]"
        >
            {detail.title}
        </h3>
        <div className="max-w-[560px] overflow-hidden rounded-[6px] border border-solid border-[#cfdbea]">
            <table className="w-full table-fixed border-collapse text-left text-[12px] leading-5 text-[#334f70] md:text-[13px]">
                <thead>
                    <tr className="bg-blue text-white">
                        <th
                            scope="col"
                            className="w-[62%] border-r border-solid border-white/25 px-3 py-2 font-bold"
                        >
                            <I18N>課程類別</I18N>
                        </th>
                        <th
                            scope="col"
                            className="px-3 py-2 text-center font-bold"
                        >
                            <I18N>修課狀況</I18N>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {detail.rows.map(({ label, statuses }) => (
                        <tr
                            key={label}
                            className="border-t border-solid border-[#dce5f0] first:border-t-0"
                        >
                            <th
                                scope="row"
                                className="border-r border-solid border-[#dce5f0] bg-[#f8fafe] px-3 py-1.5 font-semibold"
                            >
                                {label}
                            </th>
                            <td className="px-3 py-1.5">
                                <span className="flex min-h-5 flex-wrap items-center justify-center gap-1.5">
                                    {statuses.map((status, index) => {
                                        const config = COURSE_STATUS[status]

                                        return (
                                            <span
                                                key={`${status}-${index}`}
                                                className={`inline-block size-3 rounded-full ${config.className}`}
                                                title={config.label}
                                            >
                                                <span className="sr-only">
                                                    {config.label}
                                                </span>
                                            </span>
                                        )
                                    })}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[#607994] md:text-[12px]">
            {Object.entries(COURSE_STATUS).map(
                ([status, { className, label }]) => (
                    <span
                        key={status}
                        className="inline-flex items-center gap-1.5"
                    >
                        <span
                            className={`inline-block size-2.5 rounded-full ${className}`}
                            aria-hidden="true"
                        />
                        {label}
                    </span>
                )
            )}
        </div>
    </section>
)

const CreditOverviewDetail = ({ detail }) => (
    <section className="mt-5" aria-labelledby="notification-credit-title">
        <h3
            id="notification-credit-title"
            className="mb-3 text-center text-[15px] font-bold text-primary md:text-[17px]"
        >
            {detail.title}
        </h3>
        <div className="overflow-x-auto rounded-[6px] border border-solid border-[#cfdbea]">
            <table className="w-full min-w-[720px] border-collapse text-left text-[11px] leading-4 text-[#334f70] md:text-[12px] md:leading-5">
                <thead>
                    <tr className="bg-[#52b6c2] text-white">
                        {detail.columns.map((column) => (
                            <th
                                key={column}
                                scope="col"
                                className="border-r border-solid border-white/30 px-2 py-2 text-center font-bold last:border-r-0"
                            >
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {detail.rows.map((row, rowIndex) => (
                        <tr
                            key={`${row[0]}-${row[1]}-${rowIndex}`}
                            className="border-t border-solid border-[#dce5f0] even:bg-[#f8fbfd]"
                        >
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={`${cell}-${cellIndex}`}
                                    className={`border-r border-solid border-[#dce5f0] px-2 py-1.5 last:border-r-0 ${
                                        cellIndex === 2 || cellIndex === 4
                                            ? 'text-center'
                                            : ''
                                    }`}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </section>
)

const NotificationDetail = ({ detail }) => {
    if (!detail) return null
    if (detail.kind === 'course-progress') {
        return <CourseProgressDetail detail={detail} />
    }
    if (detail.kind === 'credit-overview') {
        return <CreditOverviewDetail detail={detail} />
    }
    return null
}

const NotificationDetailDialog = ({ notice, onClose }) => {
    const dialogId = useId()
    const dialogRef = useRef(null)
    const closeButtonRef = useRef(null)
    const isAnnouncement = notice.type === 'announcement'
    const paragraphs = Array.isArray(notice.content)
        ? notice.content
        : [notice.content].filter(Boolean)

    useDialogInteraction({
        dialogId,
        dialogRef,
        initialFocusRef: closeButtonRef,
        onClose
    })

    return createPortal(
        <div className="fixed inset-0 z-[4000] flex items-center justify-center bg-[#061f42]/65 md:p-6">
            <button
                type="button"
                className="absolute inset-0 hidden cursor-default md:block"
                aria-label="關閉通知內容"
                tabIndex={-1}
                onClick={onClose}
            />
            <section
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`${dialogId}-title`}
                aria-describedby={`${dialogId}-content`}
                className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-white text-primary md:h-auto md:max-h-[calc(100dvh-48px)] md:max-w-[980px] md:rounded-[12px] md:border md:border-solid md:border-[#cfdbea] md:shadow-2xl"
            >
                <header className="flex shrink-0 items-start gap-3 border-b border-solid border-[#dce5f0] bg-[#f6f9fe] px-4 py-3 md:gap-4 md:px-6 md:py-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#deebfb] text-blue md:size-11">
                        <i
                            className={`icon icon-${
                                isAnnouncement ? 'mail' : 'speaker'
                            } text-[19px] md:text-[21px]`}
                            aria-hidden="true"
                        />
                    </span>
                    <div className="min-w-0 flex-1 pt-1">
                        <h2
                            id={`${dialogId}-title`}
                            className="break-words text-[16px] font-bold leading-6 text-primary md:text-[20px] md:leading-7"
                        >
                            {notice.title}
                        </h2>
                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#70849d] md:text-[12px]">
                            <span>
                                <I18N>
                                    {isAnnouncement ? '通知信' : '消息'}
                                </I18N>
                            </span>
                            <time dateTime={notice.publishedAt}>
                                {notice.publishedAt || notice.date}
                            </time>
                        </div>
                    </div>
                    <button
                        ref={closeButtonRef}
                        type="button"
                        aria-label="關閉通知內容"
                        className="flex size-9 shrink-0 items-center justify-center rounded-full text-[16px] text-primary transition-colors hover:bg-[#e5edf8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue"
                        onClick={onClose}
                    >
                        <i className="icon icon-close" aria-hidden="true" />
                    </button>
                </header>

                <div
                    id={`${dialogId}-content`}
                    className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 md:px-7 md:py-6"
                >
                    {(notice.subject || notice.publishedAt) &&
                        isAnnouncement && (
                            <dl className="mb-5 space-y-2 text-[12px] leading-5 text-[#405a78] md:text-[14px] md:leading-6">
                                {notice.subject && (
                                    <div className="flex items-start gap-2">
                                        <i
                                            className="icon icon-doc mt-1 shrink-0 text-[13px] text-[#7890ab]"
                                            aria-hidden="true"
                                        />
                                        <dt className="shrink-0 font-bold">
                                            <I18N>標題</I18N>：
                                        </dt>
                                        <dd className="break-words">
                                            {notice.subject}
                                        </dd>
                                    </div>
                                )}
                                {notice.publishedAt && (
                                    <div className="flex items-start gap-2">
                                        <i
                                            className="icon icon-clock mt-1 shrink-0 text-[13px] text-[#7890ab]"
                                            aria-hidden="true"
                                        />
                                        <dt className="shrink-0 font-bold">
                                            <I18N>日期</I18N>：
                                        </dt>
                                        <dd>
                                            <time dateTime={notice.publishedAt}>
                                                {notice.publishedAt}
                                            </time>
                                        </dd>
                                    </div>
                                )}
                            </dl>
                        )}

                    {notice.sender && (
                        <p className="mb-3 break-words text-[13px] font-semibold leading-6 text-[#405a78] md:text-[14px]">
                            {notice.sender}
                        </p>
                    )}

                    <div className="space-y-2 text-[13px] leading-6 text-[#405a78] md:text-[14px] md:leading-7">
                        {paragraphs.map((paragraph, index) => (
                            <p key={`${paragraph}-${index}`}>{paragraph}</p>
                        ))}
                    </div>

                    <NotificationDetail detail={notice.detail} />

                    {notice.sections?.length > 0 && (
                        <div className="mt-5 space-y-4">
                            {notice.sections.map(({ content, title }) => (
                                <section key={title}>
                                    <h3 className="text-[14px] font-bold text-blue underline underline-offset-4 md:text-[15px]">
                                        {title}
                                    </h3>
                                    <p className="mt-1 text-[13px] leading-6 text-[#405a78] md:text-[14px] md:leading-7">
                                        {content}
                                    </p>
                                </section>
                            ))}
                        </div>
                    )}

                    {notice.notes?.length > 0 && (
                        <div className="mt-5 rounded-[6px] border border-solid border-[#d6e2f1] bg-[#f1f6fc] px-4 py-3">
                            <ul className="list-disc space-y-1 pl-5 text-[12px] leading-5 text-[#405a78] md:text-[13px] md:leading-6">
                                {notice.notes.map((note) => (
                                    <li key={note}>{note}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {notice.action && (
                    <footer className="flex shrink-0 justify-end border-t border-solid border-[#dce5f0] bg-white px-4 py-3 md:px-7 md:py-4">
                        <Link
                            href={notice.action.href}
                            className="ml-auto flex min-h-10 w-full items-center justify-center rounded-[6px] bg-blue px-6 text-[13px] font-bold text-white transition-colors hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue md:w-auto md:min-w-[150px] md:text-[14px]"
                            onClick={onClose}
                        >
                            {notice.action.label}
                        </Link>
                    </footer>
                )}
            </section>
        </div>,
        document.body
    )
}

export default React.memo(NotificationDetailDialog)
