import React, {
    Suspense,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
} from 'react'
import Spinner from 'components/Spinner'
import I18N from 'components/I18N'
import useQueryObject from 'hooks/useQueryObject'
import { distance } from 'constants/utils'

const EMPTY_DATA = []

const sortData = ({ data, filterOptions, sortValue, sortby }) => {
    let sortedData = [...data]
    let latlng

    if (filterOptions && sortby?.toLowerCase() === 'hits') {
        sortedData = [
            ...sortedData
                .filter(({ priority }) => priority === 0)
                .sort(
                    ({ priority: priorityA }, { priority: priorityB }) =>
                        priorityA - priorityB
                ),
            ...sortedData
                .filter(({ priority }) => priority !== 0)
                .sort(({ hits: hitsA }, { hits: hitsB }) => hitsB - hitsA)
        ]
    }

    if (filterOptions && sortby?.toLowerCase() === 'new') {
        sortedData.sort(
            ({ date_created: dateA }, { date_created: dateB }) =>
                new Date(dateB).getTime() - new Date(dateA).getTime()
        )
    }

    if (
        sortValue &&
        (sortby?.toLowerCase() === 'near-attraction' ||
            sortby?.toLowerCase() === 'near-transport')
    ) {
        latlng = sortValue.split(',')
        sortedData.sort(
            ({ lat: latA, lng: lngA }, { lat: latB, lng: lngB }) =>
                distance(latA, lngA, latlng[0] * 1, latlng[1] * 1) -
                distance(latB, lngB, latlng[0] * 1, latlng[1] * 1)
        )
    }

    if (
        sortby?.toLowerCase() === 'price' &&
        (sortValue === 'desc' || sortValue === 'asc')
    ) {
        sortedData = [
            ...sortedData
                .filter(({ price }) => !!price)
                .sort(({ price: priceA }, { price: priceB }) =>
                    sortValue === 'asc' ? priceA - priceB : priceB - priceA
                ),
            ...sortedData.filter(({ price }) => !price)
        ]
    }

    return sortedData
}

const InfinityScrollList = ({
    data,
    initItemNums = 24,
    perScrollNums = 24,
    filterOptions,
    component,
    className = '',
    completeLabel = '',
    loadingLabel = '正在載入更多資料',
    resetKey = '',
    rootMargin = '0px 0px 160px 0px',
    showResultCount = true
}) => {
    const query = useQueryObject()
    const sortby = query.sortby || 'hits'
    const sortValue = query.sortValue || ''
    const ListComponent = component
    const normalizedData = Array.isArray(data) ? data : EMPTY_DATA
    const dataDisplay = useMemo(
        () =>
            sortData({
                data: normalizedData,
                filterOptions,
                sortValue,
                sortby
            }),
        [filterOptions, normalizedData, sortValue, sortby]
    )
    const { length: dataCount } = dataDisplay
    const [currentIdx, setCurrentIdx] = useState(() =>
        Math.min(initItemNums, dataCount)
    )
    const [isLoading, setIsLoading] = useState(false)
    const loadingRef = useRef(null)
    const loadingLockRef = useRef(false)
    const timerRef = useRef(null)
    const hasMore = currentIdx < dataCount

    const clearLoadingTimer = useCallback(() => {
        if (timerRef.current === null) return

        window.clearTimeout(timerRef.current)
        timerRef.current = null
    }, [])

    const loadMore = useCallback(() => {
        if (!hasMore || loadingLockRef.current) return

        loadingLockRef.current = true
        setIsLoading(true)
        timerRef.current = window.setTimeout(() => {
            setCurrentIdx((currentValue) =>
                Math.min(currentValue + perScrollNums, dataCount)
            )
            loadingLockRef.current = false
            timerRef.current = null
            setIsLoading(false)
        }, 150)
    }, [dataCount, hasMore, perScrollNums])

    useEffect(() => {
        clearLoadingTimer()
        loadingLockRef.current = false
        setIsLoading(false)
        setCurrentIdx(Math.min(initItemNums, dataCount))
    }, [clearLoadingTimer, dataCount, dataDisplay, initItemNums, resetKey])

    useEffect(() => {
        const target = loadingRef.current

        if (
            !target ||
            !hasMore ||
            typeof IntersectionObserver === 'undefined'
        ) {
            return undefined
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) loadMore()
            },
            { rootMargin }
        )

        observer.observe(target)

        return () => observer.disconnect()
    }, [currentIdx, hasMore, loadMore, rootMargin])

    useEffect(
        () => () => {
            clearLoadingTimer()
            loadingLockRef.current = false
        },
        [clearLoadingTimer]
    )

    return (
        <div className={className}>
            {showResultCount && dataCount > 0 && (
                <div className="mb-2 mt-5 border-b pb-1 text-info md:mb-5">
                    <p className="text-[14px]">
                        <I18N params={[dataCount]}>{`共有 {0} 個結果`}</I18N>
                    </p>
                </div>
            )}

            {dataCount > 0 && (
                <Suspense fallback={<div></div>}>
                    <ListComponent data={dataDisplay} currentIdx={currentIdx} />
                </Suspense>
            )}

            {dataCount === 0 && (
                <div className="py-10 text-center text-[18px] text-info">
                    <I18N>暫無資料</I18N>
                </div>
            )}

            {hasMore && (
                <div className="mt-5 flex min-h-10 justify-center">
                    <button
                        ref={loadingRef}
                        type="button"
                        className="inline-flex min-h-10 items-center justify-center rounded-[6px] px-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                        aria-label={loadingLabel}
                        disabled={isLoading}
                        onClick={loadMore}
                    >
                        <Spinner size={16} />
                    </button>
                </div>
            )}

            {!hasMore && dataCount > 0 && completeLabel && (
                <p
                    className="my-5 text-center text-[12px] font-medium text-[#7c8da2] md:my-8 md:text-[13px]"
                    role="status"
                >
                    <I18N>{completeLabel}</I18N>
                </p>
            )}
        </div>
    )
}

export default React.memo(InfinityScrollList)
