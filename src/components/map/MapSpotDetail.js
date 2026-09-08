import React, { useState, useEffect } from 'react'
import { useLocale } from 'hooks'
import Link from 'components/Link'
import ThumbFrame from 'components/ThumbFrame'

const isStag = process.env.NODE_ENV === 'development' || process.env.IS_STAGING

const MapSpotDetail = ({ data, nearInfoData, onClose }) => {
    const {
        id,
        name,
        title,
        cover,
        categoryNames,
        shop,
        shop_address,
        shop_tel,
        order_link,
        shop_website,
        url
    } = data

    const [isMiniMode, toggleMiniMode] = useState(false)
    const lang = useLocale()
    const isTW = lang === 'zh-tw'

    useEffect(() => {
        toggleMiniMode(nearInfoData)
    }, [nearInfoData])

    useEffect(() => {
        toggleMiniMode(false)
    }, [data])

    return (
        <div className="absolute-top-left w-100 w-md-320px px-3 p-md-0 z-100 mt-3 mt-md-5 ml-md-5">
            <div
                className={`${
                    isMiniMode ? 'h-8' : ''
                } w-100 p-2 bg-white rounded-lg shadow position-relative overflow-hidden`}
            >
                <div
                    className={`${
                        isMiniMode ? 'mb-2' : ''
                    } d-flex align-items-center justify-content-between`}
                >
                    <div className="font-weight-bold fz-18px text-truncate">
                        {name || title}
                    </div>
                    <div className="d-flex">
                        <button
                            className="btn w-4 h-4 border-0 rounded"
                            onClick={onClose}
                        >
                            <i
                                className="icon icon-close"
                                aria-hidden="true"
                            ></i>
                            <div className="sr-only">關閉</div>
                        </button>
                    </div>
                </div>
                <div className="mt-1 mx-n2">
                    <ThumbFrame
                        src={cover.replace('150x150', '480x360')}
                        alt={name}
                        ratio="4by3"
                        className="d-none d-md-block"
                    />
                </div>
                <div className="pt-1">
                    {!!categoryNames?.length && (
                        <div
                            className={`d-flex flex-wrap mt-md-1 fz-14px fz-xl-15px lh-initial text-info`}
                        >
                            {categoryNames.map((cate, i) => (
                                <div
                                    className="mr-1 mr-0-last px-4px py-2px bg-primary-10 rounded"
                                    key={i}
                                >
                                    {cate}
                                </div>
                            ))}
                        </div>
                    )}
                    {shop && (
                        <div className="d-flex align-items-center mt-12px fz-13px lh-initial text-info">
                            <i
                                className="icon icon-store w-2 fz-15px mr-1 text-primary"
                                aria-hidden="true"
                            ></i>
                            <div className="text-truncate">{shop}</div>
                        </div>
                    )}
                    {shop_address && (
                        <div className="d-flex align-items-center mt-12px fz-13px lh-initial text-info">
                            <i
                                className="icon icon-location w-2 fz-15px mr-1 text-primary"
                                aria-hidden="true"
                            ></i>
                            <div className="text-truncate">{shop_address}</div>
                        </div>
                    )}

                    {shop_tel && (
                        <div className="d-flex align-items-center mt-12px fz-13px text-info">
                            <i
                                className="icon icon-tel w-2 mr-1 text-primary"
                                aria-hidden="true"
                            ></i>
                            {shop_tel}
                        </div>
                    )}
                    <div className="row g-1 pt-2">
                        {order_link && (
                            <div className="col-auto flex-fill">
                                <a
                                    className="btn btn-secondary w-100 h-5 font-weight-bold fz-18px"
                                    href={order_link}
                                    title="立即訂購 (另開視窗)"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    立即訂購
                                    <i
                                        className="icon icon-arrow-forward ml-1 fz-15px"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                            </div>
                        )}
                        {shop_website && (
                            <div className="col-auto flex-fill">
                                <a
                                    className="btn btn-secondary w-100 h-5 font-weight-bold fz-18px"
                                    href={shop_website}
                                    title="官方網站 (另開視窗)"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    官方網站
                                    <i
                                        className="icon icon-arrow-forward ml-1 fz-15px"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                            </div>
                        )}
                        <div className="col-12">
                            <Link
                                className="btn btn-outline-secondary w-100 h-5 font-weight-bold fz-18px"
                                href={url}
                                title="查看更多 (另開視窗)"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                查看更多
                                <i
                                    className="icon icon-arrow-forward ml-1 fz-15px"
                                    aria-hidden="true"
                                ></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(MapSpotDetail)
