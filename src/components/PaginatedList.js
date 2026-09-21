import React, { useEffect, useId, useRef, useState } from 'react'
import I18N from 'components/I18N'
import Select from 'components/Select'

const EMPTY_DATA = []
const PAGE_SIZE_OPTIONS = [10, 20, 50]

const getPageButtons = (currentPage, pageCount) => {
    if (pageCount <= 7) {
        return Array.from({ length: pageCount }, (_, index) => index + 1)
    }

    const pages = [
        ...new Set([
            1,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            pageCount
        ])
    ]
        .filter((page) => page >= 1 && page <= pageCount)
        .sort((a, b) => a - b)

    return pages.flatMap((page, index) => {
        const previousPage = pages[index - 1]
        if (!previousPage || page - previousPage === 1) return [page]
        if (page - previousPage === 2) return [previousPage + 1, page]
        return [`ellipsis-${page}`, page]
    })
}

const PaginatedList = ({
    data,
    component: ListComponent,
    componentProps = {},
    emptyText = '暫無資料',
    emptyClassName = 'py-10 text-center text-[18px] text-info',
    resetKey = '',
    className = ''
}) => {
    const pageSizeId = useId()
    const [pageSize, setPageSize] = useState(20)
    const normalizedData = Array.isArray(data) ? data : EMPTY_DATA
    const normalizedPageSize = Math.max(1, pageSize)
    const pageCount = Math.max(
        1,
        Math.ceil(normalizedData.length / normalizedPageSize)
    )
    const [page, setPage] = useState(1)
    const listRef = useRef(null)
    const currentPage = Math.min(page, pageCount)
    const currentItems = normalizedData.slice(
        (currentPage - 1) * normalizedPageSize,
        currentPage * normalizedPageSize
    )

    useEffect(() => {
        setPage(1)
    }, [normalizedData, normalizedPageSize, resetKey])

    const changePage = (nextPage) => {
        if (nextPage === currentPage || nextPage < 1 || nextPage > pageCount) {
            return
        }

        setPage(nextPage)
        window.requestAnimationFrame(() => {
            listRef.current?.scrollIntoView({ block: 'start' })
        })
    }

    return (
        <div ref={listRef} className={`scroll-mt-[96px] ${className}`}>
            {normalizedData.length > 0 ? (
                <ListComponent data={currentItems} {...componentProps} />
            ) : (
                <div className={emptyClassName}>
                    <I18N>{emptyText}</I18N>
                </div>
            )}

            <div className="mt-6 grid grid-cols-1 items-center gap-3 md:mt-8 md:grid-cols-[1fr_auto_1fr]">
                {normalizedData.length > 0 && (
                    <nav
                        aria-label="資料頁碼"
                        className="flex flex-wrap items-center justify-center gap-2 md:col-start-2"
                    >
                        <button
                            type="button"
                            aria-label="上一頁"
                            disabled={currentPage === 1}
                            onClick={() => changePage(currentPage - 1)}
                            className="inline-flex size-9 items-center justify-center rounded-[6px] border border-solid border-[#d8e1ee] bg-white text-primary transition-colors hover:border-secondary hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:cursor-not-allowed disabled:opacity-40 md:size-10"
                        >
                            <i
                                className="icon icon-arrow-left text-[14px]"
                                aria-hidden="true"
                            />
                        </button>
                        {getPageButtons(currentPage, pageCount).map(
                            (pageItem) =>
                                typeof pageItem === 'number' ? (
                                    <button
                                        key={pageItem}
                                        type="button"
                                        aria-label={`第 ${pageItem} 頁`}
                                        aria-current={
                                            pageItem === currentPage
                                                ? 'page'
                                                : undefined
                                        }
                                        onClick={() => changePage(pageItem)}
                                        className={`inline-flex size-9 items-center justify-center rounded-[6px] border border-solid text-[13px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary md:size-10 md:text-[14px] ${
                                            pageItem === currentPage
                                                ? 'border-primary bg-primary text-white'
                                                : 'border-[#d8e1ee] bg-white text-primary hover:border-secondary hover:text-secondary'
                                        }`}
                                    >
                                        {pageItem}
                                    </button>
                                ) : (
                                    <span
                                        key={pageItem}
                                        className="inline-flex size-9 items-center justify-center text-[#6f8299]"
                                        aria-hidden="true"
                                    >
                                        …
                                    </span>
                                )
                        )}
                        <button
                            type="button"
                            aria-label="下一頁"
                            disabled={currentPage === pageCount}
                            onClick={() => changePage(currentPage + 1)}
                            className="inline-flex size-9 items-center justify-center rounded-[6px] border border-solid border-[#d8e1ee] bg-white text-primary transition-colors hover:border-secondary hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary disabled:cursor-not-allowed disabled:opacity-40 md:size-10"
                        >
                            <i
                                className="icon icon-arrow-right text-[14px]"
                                aria-hidden="true"
                            />
                        </button>
                    </nav>
                )}
                <div className="flex items-center justify-self-center gap-2 text-[12px] font-medium text-primary md:col-start-3 md:justify-self-end md:text-[14px]">
                    <label htmlFor={pageSizeId}>
                        <I18N>每頁顯示</I18N>：
                    </label>
                    <Select
                        id={pageSizeId}
                        value={String(pageSize)}
                        wrapperClassName="w-[88px]"
                        className="h-9 px-2 text-[12px] md:h-10 md:text-[14px]"
                        onChange={({ target: { value } }) => {
                            setPageSize(Number(value))
                            setPage(1)
                        }}
                    >
                        {PAGE_SIZE_OPTIONS.map((size) => (
                            <option key={size} value={size}>
                                {size}筆
                            </option>
                        ))}
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default React.memo(PaginatedList)
