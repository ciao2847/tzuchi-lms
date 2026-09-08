import React, { useState, useEffect, useRef, Suspense } from 'react'
import { useSearchParams } from 'react-router-dom'
import Spinner from 'components/Spinner'
import I18N from 'components/I18N'
import useQueryObject from 'hooks/useQueryObject'
import { makeParams, distance } from 'constants/utils'

const InfinityScrollList = ({
    data,
    initItemNums = 24,
    perScrollNums = 24,
    filterOptions,
    component,
    className
}) => {
    const DEFAULT_ITME_NUMS = perScrollNums
    const [dataDisplay, setDataDisplay] = useState(null)
    const [currentIdx, setCurrentIdx] = useState(initItemNums)
    const [isLoading, toggleLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const loadingRef = useRef(null)
    const query = useQueryObject()
    const sortby = query.sortby || 'hits'
    const sortValue = query.sortValue || ''
    const ListComponent = component
    const observer = new IntersectionObserver((entries, observer) => {
        toggleLoading(entries[0].isIntersecting)
    })

    useEffect(() => {
        setDataDisplay(data)
    }, [data])
    useEffect(() => {
        if (loadingRef.current) {
            observer.observe(loadingRef.current)
        }
        return () => {
            observer.disconnect()
        }
    }, [dataDisplay, loadingRef.current])
    useEffect(() => {
        if (
            data &&
            isLoading &&
            dataDisplay &&
            currentIdx < dataDisplay.length
        ) {
            setCurrentIdx(currentIdx + DEFAULT_ITME_NUMS)
            observer.unobserve(loadingRef.current)
            observer.observe(loadingRef.current)
        }
    }, [isLoading, data, dataDisplay])
    const onSort = (sortQuery) => {
        const queryResult = { ...query }
        delete queryResult.sortby
        delete queryResult.sortValue
        setSearchParams(makeParams(queryResult, sortQuery))
    }
    useEffect(() => {
        let dataAfterSort = [...data]
        let latlng
        if (filterOptions && sortby?.toLowerCase() === 'hits') {
            dataAfterSort = [
                ...dataAfterSort
                    .filter((spot) => spot.priority === 0)
                    .sort((spotA, spotB) => spotA.priority - spotB.priority),
                ...dataAfterSort
                    .filter((spot) => spot.priority !== 0)
                    .sort((spotA, spotB) => spotB.hits - spotA.hits)
            ]
        }
        if (filterOptions && sortby?.toLowerCase() === 'new') {
            dataAfterSort = [
                ...dataAfterSort.sort(
                    (a, b) =>
                        new Date(b.date_created).getTime() -
                        new Date(a.date_created).getTime()
                )
            ]
        }

        if (
            sortValue &&
            (sortby?.toLowerCase() === 'near-attraction' ||
                sortby?.toLowerCase() === 'near-transport')
        ) {
            latlng = sortValue.split(',')

            dataAfterSort.sort(
                (spotA, spotB) =>
                    distance(
                        spotA.lat,
                        spotA.lng,
                        latlng[0] * 1,
                        latlng[1] * 1
                    ) -
                    distance(spotB.lat, spotB.lng, latlng[0] * 1, latlng[1] * 1)
            )
        }

        if (
            sortby?.toLowerCase() === 'price' &&
            (sortValue === 'desc' || sortValue === 'asc')
        ) {
            dataAfterSort = [
                ...dataAfterSort
                    .filter((spot) => !!spot.price)
                    .sort((a, b) =>
                        sortValue === 'asc'
                            ? a.price - b.price
                            : b.price - a.price
                    ),
                ...dataAfterSort.filter((spot) => !spot.price)
            ]
        }
        setDataDisplay(dataAfterSort)
    }, [data, sortby, sortValue])
    return (
        <div className={className}>
            {!!dataDisplay?.length && (
                <>
                    <div className="mt-20px pb-1 mb-2 mb-md-20px text-info border-bottom">
                        <p className="fz-14px">
                            <I18N
                                params={[dataDisplay.length]}
                            >{`共有 {0} 個結果`}</I18N>
                        </p>
                    </div>
                    <Suspense fallback={<div></div>}>
                        {/*filterOptions && (
                            <AdvFilterSortBlk
                                options={filterOptions}
                                onSort={onSort}
                            />
                        )*/}
                        <ListComponent
                            data={dataDisplay}
                            //category={category}
                            currentIdx={currentIdx}
                        />
                    </Suspense>
                </>
            )}
            {dataDisplay && !dataDisplay.length && (
                <div className="py-10 text-info text-center fz-18px">
                    <I18N>暫無資料</I18N>
                </div>
            )}
            {
                /*needInfinityScroll &&*/
                data && currentIdx < dataDisplay?.length && (
                    <div
                        className={`d-flex justify-content-center mt-5`}
                        ref={loadingRef}
                    >
                        <Spinner size={16} />
                    </div>
                )
            }
        </div>
    )
}

export default React.memo(InfinityScrollList)
