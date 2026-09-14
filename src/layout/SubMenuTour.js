import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { ROUTES_CONST } from 'constants/'
import ThumbFrame from 'components/ThumbFrame'
import I18N, { translate } from 'components/I18N'
import { fetchToursData } from 'store/tour/toursSlice'
import useMedia from 'hooks/useMedia'
const isProd = process.env.NODE_ENV === 'production' && !process.env.IS_STAGING
const SubMenuTour = ({ isCurrent, onClose }) => {
    const isDesktopLayout = useMedia('(min-width: 1200px)')
    const is1920Layout = useMedia('(min-width: 1920px)')
    const { lang = 'zh-tw' } = useParams()
    const isTW = lang === 'zh-tw'
    const dispatch = useDispatch()
    const toursData = useSelector(
        (state) => state.toursData?.data,
        shallowEqual
    )
    useEffect(() => {
        if (!toursData && isCurrent) {
            dispatch(fetchToursData())
        }
    }, [toursData, isCurrent])
    return (
        <div
            className={`nav-sub-list justify-start pt-7 xl:pt-0 bg-white ${
                isCurrent ? 'current-lv' : ''
            }`}
            onClick={onClose}
        >
            {isDesktopLayout && (
                <div className="shrink-0 w-1/2 relative">
                    <ThumbFrame
                        src="/assets/images/global/menu-cover-04.jpg"
                        alt={isTW ? translate('苗栗三義龍騰斷橋', lang) : ''}
                        className="fill-parent"
                    />
                    {isTW && (
                        <div className="ml-2 mb-2 px-[12px] py-[4px] bg-black/80 text-white absolute bottom-0 left-0 rounded">
                            <I18N>苗栗三義龍騰斷橋</I18N>
                        </div>
                    )}
                </div>
            )}
            <div
                className={`${
                    is1920Layout && isProd ? 'xl:flex' : ''
                } flex-1 menu-blk`}
            >
                {isTW && (
                    <div className="max-w-[320px] menu-group shrink-0 xl:mb-5 last:mb-0 border-b xl:border-b-0">
                        <Link
                            className="inline-flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                            to={`/zh-tw/${ROUTES_CONST.TOURS}`}
                            title={translate('客庄小旅行', lang)}
                        >
                            <div className="xl:text-[24px] xl:font-bold">
                                <I18N>在地小旅行</I18N>
                            </div>
                        </Link>

                        {isDesktopLayout && toursData && (
                            <ul className="pb-1 pl-3 xl:p-0 xl:mt-2">
                                {[...toursData]
                                    .filter(
                                        (tour) =>
                                            !tour.categories.includes(1027)
                                    )
                                    .sort((a, b) => b.viewsCount - a.viewsCount)
                                    .slice(0, 3)
                                    .map((item, i) => (
                                        <li
                                            className="mb-1 xl:mb-[12px]"
                                            key={item.id}
                                        >
                                            <Link
                                                to={`/zh-tw/${ROUTES_CONST.TOUR}/${item.id}`}
                                                className="block max-w-[300px] no-underline text-primary hover:text-secondary transition-all duration-300 text-[16px] xl:text-[18px] line-clamp-2"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </div>
                )}

                <div className="max-w-[320px] menu-group shrink-0 xl:mb-5 last:mb-0 border-b xl:border-b-0">
                    <Link
                        className="inline-flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                        to={`/${lang}/${ROUTES_CONST.TOURCATEGORYS}`}
                        title="111年桐花小旅行"
                    >
                        <div className="xl:text-[24px] xl:font-bold">
                            <I18N>111年桐花小旅行</I18N>
                        </div>
                    </Link>

                    {isTW && isDesktopLayout && toursData && (
                        <ul className="pb-1 pl-3 xl:p-0 xl:mt-2">
                            {[...toursData]
                                .filter((tour) =>
                                    tour.categories.includes(1027)
                                )
                                .sort((a, b) => b.viewsCount - a.viewsCount)
                                .slice(0, 3)
                                .map((item, i) => (
                                    <li
                                        className="mb-1 xl:mb-[12px]"
                                        key={item.id}
                                    >
                                        <Link
                                            to={`/zh-tw/${ROUTES_CONST.TOUR}/${item.id}`}
                                            className="block max-w-[300px] no-underline text-primary hover:text-secondary transition-all duration-300 text-[16px] xl:text-[18px] line-clamp-2"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    )}
                </div>
                {isTW && (
                    <div className="max-w-[320px] menu-group shrink-0 xl:mb-5 last:mb-0 border-b xl:border-b-0">
                        <Link
                            className="inline-flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                            to={`/zh-tw/${ROUTES_CONST.TOUROTHERCATEGORYS}`}
                            title="其他推薦行程"
                        >
                            <div className="xl:text-[24px] xl:font-bold">
                                其他推薦行程
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default React.memo(SubMenuTour)
