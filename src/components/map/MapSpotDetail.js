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
        <div className="absolute top-0 left-0 w-full md:w-[320px] px-3 md:p-0 z-[100] mt-3 md:mt-5 md:ml-5">
            <div
                className={`${
                    isMiniMode ? 'h-8' : ''
                } w-full p-2 bg-white rounded-lg shadow relative overflow-hidden`}
            >
                <div
                    className={`${
                        isMiniMode ? 'mb-2' : ''
                    } flex items-center justify-between`}
                >
                    <div className="font-bold text-[18px] truncate">
                        {name || title}
                    </div>
                    <div className="flex">
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
                <div className="mt-1 -mx-2">
                    <ThumbFrame
                        src={cover.replace('150x150', '480x360')}
                        alt={name}
                        ratio="4by3"
                        className="hidden md:block"
                    />
                </div>
                <div className="pt-1">
                    {!!categoryNames?.length && (
                        <div
                            className="flex flex-wrap md:mt-1 text-[14px] xl:text-[15px] leading-normal text-info"
                        >
                            {categoryNames.map((cate, i) => (
                                <div
                                    className="mr-1 last:mr-0 px-[4px] py-[2px] bg-primary/10 rounded"
                                    key={i}
                                >
                                    {cate}
                                </div>
                            ))}
                        </div>
                    )}
                    {shop && (
                        <div className="flex items-center mt-[12px] text-[13px] leading-normal text-info">
                            <i
                                className="icon icon-store w-2 text-[15px] mr-1 text-primary"
                                aria-hidden="true"
                            ></i>
                            <div className="truncate">{shop}</div>
                        </div>
                    )}
                    {shop_address && (
                        <div className="flex items-center mt-[12px] text-[13px] leading-normal text-info">
                            <i
                                className="icon icon-location w-2 text-[15px] mr-1 text-primary"
                                aria-hidden="true"
                            ></i>
                            <div className="truncate">{shop_address}</div>
                        </div>
                    )}

                    {shop_tel && (
                        <div className="flex items-center mt-[12px] text-[13px] text-info">
                            <i
                                className="icon icon-tel w-2 mr-1 text-primary"
                                aria-hidden="true"
                            ></i>
                            {shop_tel}
                        </div>
                    )}
                    <div className="pt-2 space-y-1">
                        {(order_link || shop_website) && (
                            <div className="flex gap-1">
                                {order_link && (
                                    <a
                                        className="btn btn-secondary flex-1 h-5 font-bold text-[18px]"
                                        href={order_link}
                                        title="立即訂購 (另開視窗)"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        立即訂購
                                        <i
                                            className="icon icon-arrow-forward ml-1 text-[15px]"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                )}
                                {shop_website && (
                                    <a
                                        className="btn btn-secondary flex-1 h-5 font-bold text-[18px]"
                                        href={shop_website}
                                        title="官方網站 (另開視窗)"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        官方網站
                                        <i
                                            className="icon icon-arrow-forward ml-1 text-[15px]"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                )}
                            </div>
                        )}
                        <div>
                            <Link
                                className="btn btn-outline-secondary w-full h-5 font-bold text-[18px]"
                                href={url}
                                title="查看更多 (另開視窗)"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                查看更多
                                <i
                                    className="icon icon-arrow-forward ml-1 text-[15px]"
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
