import React, { useState, useEffect } from 'react'
import MrtStationPanel from 'components/MrtStationPanel'
import I18N from 'components/I18N'
import { useQueryObject, useMedia } from 'hooks'
import { MRT_STATION_DATA } from 'constants'

const AdvFilterSortBlk = ({ options, onSort, className }) => {
    const isLayoutXXL = useMedia('(min-width: 1600px)')
    const query = useQueryObject()
    const [isShowAdv, toggleAdv] = useState(false)
    const [advType, setAdvType] = useState(null)
    // const [nearAttractions, setNearAttractions] = useState([])
    // const [nearTransports, setNearTransports] = useState([])
    const sortby = query.sortby || 'hits'
    const sortValue = query.sortValue || ''
    const currentMrtStationId = query.sortby === 'near-mrt' && query.sortValue
    const currentMrtStationData = MRT_STATION_DATA.find(
        (item) => item.id === currentMrtStationId
    )
    const doSort = (obj) => {
        onSort(obj)
    }
    useEffect(() => {
        document.addEventListener('keyup', (e) => {
            const charCode = e.which ? e.which : e.keyCode
            if (charCode === 27) {
                toggleAdv(false)
            }
        })
    }, [])
    return (
        <>
            <div className={`d-flex align-items-center mb-3`}>
                <div className="d-flex align-items-center text-info px-12px fz-15px flex-shrink-0">
                    <i className="icon icon-sort mr-4px" aria-hidden="true"></i>
                    <I18N>排序</I18N>
                </div>
                <div className="button-group d-flex flex-shrink-0">
                    {options.hits && (
                        <button
                            className={`btn h-5 miw-64px miw-md-120px px-2 fz-15px rounded-16px ${
                                sortby?.toLowerCase() === 'hits'
                                    ? 'btn-primary'
                                    : ''
                            }`}
                            onClick={() => {
                                doSort({ sortby: 'hits' })
                            }}
                        >
                            <I18N>熱門度</I18N>
                        </button>
                    )}
                    {/*options.tripadvisor && (
                        <button
                            className={`btn h-5 miw-64px miw-md-120px px-2 fz-15px rounded-16px ${
                                sortby?.toLowerCase() === 'tripadvisor'
                                    ? 'btn-primary'
                                    : ''
                            }`}
                            onClick={() => {
                                doSort('tripadvisor')
                            }}
                        >
                            Tripadvisor評價
                        </button>
                    )*/}
                    {options.new && (
                        <button
                            className={`btn h-5 miw-64px miw-md-120px px-2 fz-15px rounded-16px ${
                                sortby?.toLowerCase() === 'new'
                                    ? 'btn-primary'
                                    : ''
                            }`}
                            onClick={() => {
                                doSort({ sortby: 'new' })
                            }}
                        >
                            <I18N>最新上架</I18N>
                        </button>
                    )}

                    {options.old && (
                        <button
                            className={`btn h-5 miw-64px miw-md-120px px-2 fz-15px rounded-16px ${
                                sortby?.toLowerCase() === 'old'
                                    ? 'btn-primary'
                                    : ''
                            }`}
                            onClick={() => {
                                doSort({ sortby: 'old' })
                            }}
                        >
                            <I18N>發佈日期較舊</I18N>
                        </button>
                    )}
                    {options.price && (
                        <button
                            className={`btn h-5 miw-64px miw-md-120px px-2 fz-15px rounded-16px ${
                                sortby?.toLowerCase() === 'price'
                                    ? 'btn-primary'
                                    : ''
                            }`}
                            onClick={() => {
                                doSort({
                                    sortby: 'price',
                                    sortValue:
                                        sortValue !== 'asc' ? 'asc' : 'desc'
                                })
                            }}
                        >
                            <I18N>價格</I18N>
                            {sortby?.toLowerCase() === 'price' && (
                                <i
                                    className={`${
                                        sortValue === 'asc' && 'rotate-180'
                                    } icon icon-sorting ml-1 fz-13px`}
                                    aria-hidden="true"
                                ></i>
                            )}
                        </button>
                    )}
                    {options.mrt && (
                        <div className={`item position-relative ml-n1px`}>
                            <button
                                className={`btn h-5 miw-64px miw-md-120px px-2 fz-15px rounded-16px ${
                                    sortby?.toLowerCase() === 'near-mrt'
                                        ? 'btn-primary'
                                        : ''
                                }`}
                                onClick={() => {
                                    setAdvType(3)
                                    toggleAdv(true)
                                }}
                            >
                                {currentMrtStationData ? (
                                    `${currentMrtStationData.lineName}-${currentMrtStationData.name}`
                                ) : (
                                    <I18N>鄰近捷運站</I18N>
                                )}
                                <i
                                    className="icon icon-arrow-down w-2 h-2 ml-4px fz-13px"
                                    aria-hidden="true"
                                ></i>
                            </button>
                            <div
                                className={`filter-selector-blk d-none d-md-block ${
                                    isShowAdv && advType === 3
                                        ? ''
                                        : 'op-0 pointer-events-none visibility-hidden'
                                } fixed-top w-100 h-100 z-1000`}
                            >
                                <div
                                    className="filter-selector-list d-flex flex-wrap align-content-start bg-white z-100 p-2 border border-primary border-width-2px rounded"
                                    style={{
                                        minWidth: 560,
                                        transform: isLayoutXXL
                                            ? `translateX(-50%)`
                                            : `translateX(-224px)`
                                    }}
                                >
                                    <MrtStationPanel
                                        currentStationId={currentMrtStationId}
                                        onChange={(id) => {
                                            doSort({
                                                sortby: 'near-mrt',
                                                sortValue: id
                                            })
                                            toggleAdv(false)
                                        }}
                                    />
                                </div>
                                <div
                                    className="overlay fill-parent bg-black-50"
                                    onClick={() => toggleAdv(false)}
                                ></div>
                            </div>
                        </div>
                    )}
                    {/*options.attraction && (
                        <div className={`position-relative ml-n1px`}>
                            <button
                                className={`btn h-5 miw-64px miw-md-120px px-2 fz-15px rounded-16px ${
                                    sortby?.toLowerCase() === 'near-attraction'
                                        ? 'btn-primary'
                                        : ''
                                }`}
                                onClick={() => {
                                    setAdvType(1)
                                    toggleAdv(true)
                                }}
                            >
                                <I18N>鄰近景點</I18N>
                                <i
                                    className="icon icon-arrow-down w-2 h-2 ml-4px fz-13px text-info"
                                    aria-hidden="true"
                                ></i>
                            </button>
                            <div
                                className={`filter-selector-blk d-none d-md-block ${
                                    isShowAdv && advType === 1
                                        ? ''
                                        : 'op-0 pointer-events-none visibility-hidden'
                                } fixed-top w-100 h-100 z-1000`}
                            >
                                <ul className="filter-selector-list d-flex flex-wrap align-content-start absolute-bottom-left w-100 bg-white z-100 p-2">
                                    {nearAttractions.map((spot, i) => (
                                        <li className="mb-1 mr-1" key={spot.id}>
                                            <button
                                                className={`btn h-5 miw-64px px-1 fz-13px rounded ${
                                                    sortValue?.toLowerCase() ===
                                                    `${spot.lat},${spot.lng}`
                                                        ? 'btn-primary'
                                                        : ''
                                                }`}
                                                onClick={() => {
                                                    toggleAdv(false)
                                                    doSort({
                                                        sortby: 'near-attraction',
                                                        sortValue: `${spot.lat},${spot.lng}`
                                                    })
                                                }}
                                            >
                                                {spot.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <div
                                    className="overlay fill-parent bg-black-50"
                                    onClick={() => toggleAdv(false)}
                                ></div>
                            </div>
                        </div>
                    )*/}
                    {/*options.transport && (
                        <div className={`position-relative ml-n1px`}>
                            <button
                                className={`btn h-5 miw-64px miw-md-120px px-2 fz-15px rounded ${
                                    sortby?.toLowerCase() === 'near-transport'
                                        ? 'btn-primary'
                                        : ''
                                }`}
                                onClick={() => {
                                    setAdvType(2)
                                    toggleAdv(true)
                                }}
                            >
                                <I18N>鄰近交通站</I18N>
                                <i
                                    className={`icon icon-arrow-down w-2 h-2 ml-4px fz-13px  ${
                                        sortby?.toLowerCase() ===
                                        'near-transport'
                                            ? 'text-white'
                                            : 'text-info'
                                    }`}
                                    aria-hidden="true"
                                ></i>
                            </button>
                            <div
                                className={`filter-selector-blk d-none d-md-block ${
                                    isShowAdv && advType === 2
                                        ? ''
                                        : 'op-0 pointer-events-none visibility-hidden'
                                } fixed-top w-100 h-100 z-1000`}
                            >
                                <ul className="filter-selector-list d-flex flex-wrap align-content-start absolute-bottom-left w-100 bg-white z-100 p-2">
                                    {nearTransports.map((spot, i) => (
                                        <li className="mb-1 mr-1" key={spot.id}>
                                            <button
                                                className={`btn h-5 miw-64px px-1 fz-13px rounded ${
                                                    sortValue?.toLowerCase() ===
                                                    `${spot.lat},${spot.lng}`
                                                        ? 'btn-primary'
                                                        : ''
                                                }`}
                                                onClick={() => {
                                                    toggleAdv(false)

                                                    doSort({
                                                        sortby: 'near-transport',
                                                        sortValue: `${spot.lat},${spot.lng}`
                                                    })
                                                }}
                                            >
                                                {spot.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <div
                                    className="overlay fill-parent bg-black-50"
                                    onClick={() => toggleAdv(false)}
                                ></div>
                            </div>
                        </div>
                    )*/}
                </div>
            </div>
            {options.mrt && (
                <div
                    className={`d-md-none ${
                        isShowAdv && advType === 3
                            ? ''
                            : 'op-0 pointer-events-none visibility-hidden'
                    } fixed-top w-100 h-100 z-1000`}
                >
                    <div className="filter-selector-list d-flex flex-wrap align-content-start absolute-bottom-left w-100 bg-white z-100">
                        <MrtStationPanel
                            currentStationId={currentMrtStationId}
                            onChange={(id) => {
                                doSort({
                                    sortby: 'near-mrt',
                                    sortValue: id
                                })
                                toggleAdv(false)
                            }}
                        />
                    </div>
                    <div
                        className="overlay fill-parent bg-black-50"
                        onClick={() => toggleAdv(false)}
                    ></div>
                </div>
            )}
            {/*options.attraction && (
                <div
                    className={`d-md-none ${
                        isShowAdv && advType === 1
                            ? ''
                            : 'op-0 pointer-events-none visibility-hidden'
                    } fixed-top w-100 h-100 z-1000`}
                >
                    <ul className="filter-selector-list d-flex flex-wrap align-content-start absolute-bottom-left w-100 bg-white z-100 p-2">
                        {nearAttractions.map((spot, i) => (
                            <li className="mb-1 mr-1" key={spot.id}>
                                <button
                                    className={`btn h-5 miw-64px px-1 fz-13px rounded ${
                                        sortValue?.toLowerCase() ===
                                        `${spot.lat},${spot.lng}`
                                            ? 'btn-primary'
                                            : ''
                                    }`}
                                    onClick={() => {
                                        toggleAdv(false)
                                        doSort({
                                            sortby: 'near-attraction',
                                            sortValue: `${spot.lat},${spot.lng}`
                                        })
                                    }}
                                >
                                    {spot.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div
                        className="overlay fill-parent bg-black-50"
                        onClick={() => toggleAdv(false)}
                    ></div>
                </div>
            )*/}
            {/*options.transport && (
                <div
                    className={`d-md-none ${
                        isShowAdv && advType === 2
                            ? ''
                            : 'op-0 pointer-events-none visibility-hidden'
                    } fixed-top w-100 h-100 z-1000`}
                >
                    <ul className="filter-selector-list d-flex flex-wrap align-content-start absolute-bottom-left w-100 bg-white z-100 p-2">
                        {nearTransports.map((spot, i) => (
                            <li className="mb-1 mr-1" key={spot.id}>
                                <button
                                    className={`btn h-5 miw-64px px-1 fz-13px rounded ${
                                        sortValue?.toLowerCase() ===
                                        `${spot.lat},${spot.lng}`
                                            ? 'btn-primary'
                                            : ''
                                    }`}
                                    onClick={() => {
                                        toggleAdv(false)
                                        doSort({
                                            sortby: 'near-transport',
                                            sortValue: `${spot.lat},${spot.lng}`
                                        })
                                    }}
                                >
                                    {spot.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div
                        className="overlay fill-parent bg-black-50"
                        onClick={() => toggleAdv(false)}
                    ></div>
                </div>
            )*/}
        </>
    )
}

export default React.memo(AdvFilterSortBlk)
