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
            className={`nav-sub-list justify-content-start pt-7 pt-xl-0 bg-white ${
                isCurrent ? 'current-lv' : ''
            }`}
            onClick={onClose}
        >
            {isDesktopLayout && (
                <div className="flex-shrink-0 w-50 position-relative">
                    <ThumbFrame
                        src="/assets/images/global/menu-cover-04.jpg"
                        alt={isTW ? translate('苗栗三義龍騰斷橋', lang) : ''}
                        className="fill-parent"
                    />
                    {isTW && (
                        <div className="ml-2 mb-2 px-12px py-4px bg-black-80 text-white absolute-bottom-left rounded">
                            <I18N>苗栗三義龍騰斷橋</I18N>
                        </div>
                    )}
                </div>
            )}
            <div
                className={`${
                    is1920Layout && isProd ? 'd-xl-flex' : ''
                } flex-fill menu-blk`}
            >
                {isTW && (
                    <div className="maw-320px menu-group flex-shrink-0 mb-xl-5 mb-0-last border-bottom border-xl-0">
                        <Link
                            className="d-inline-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                            to={`/zh-tw/${ROUTES_CONST.TOURS}`}
                            title={translate('客庄小旅行', lang)}
                        >
                            <div className="fz-xl-24px font-weight-xl-bold">
                                <I18N>在地小旅行</I18N>
                            </div>
                        </Link>

                        {isDesktopLayout && toursData && (
                            <ul className="pb-1 pl-3 p-xl-0 mt-xl-2">
                                {[...toursData]
                                    .filter(
                                        (tour) =>
                                            !tour.categories.includes(1027)
                                    )
                                    .sort((a, b) => b.viewsCount - a.viewsCount)
                                    .slice(0, 3)
                                    .map((item, i) => (
                                        <li
                                            className="mb-1 mb-xl-12px"
                                            key={item.id}
                                        >
                                            <Link
                                                to={`/zh-tw/${ROUTES_CONST.TOUR}/${item.id}`}
                                                className="d-block maw-300px text-decoration-none text-primary hover-secondary trs-all fz-16px fz-xl-18px line-clamp-2"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </div>
                )}

                <div className="maw-320px menu-group flex-shrink-0 mb-xl-5 mb-0-last border-bottom border-xl-0">
                    <Link
                        className="d-inline-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                        to={`/${lang}/${ROUTES_CONST.TOURCATEGORYS}`}
                        title="111年桐花小旅行"
                    >
                        <div className="fz-xl-24px font-weight-xl-bold">
                            <I18N>111年桐花小旅行</I18N>
                        </div>
                    </Link>

                    {isTW && isDesktopLayout && toursData && (
                        <ul className="pb-1 pl-3 p-xl-0 mt-xl-2">
                            {[...toursData]
                                .filter((tour) =>
                                    tour.categories.includes(1027)
                                )
                                .sort((a, b) => b.viewsCount - a.viewsCount)
                                .slice(0, 3)
                                .map((item, i) => (
                                    <li
                                        className="mb-1 mb-xl-12px"
                                        key={item.id}
                                    >
                                        <Link
                                            to={`/zh-tw/${ROUTES_CONST.TOUR}/${item.id}`}
                                            className="d-block maw-300px text-decoration-none text-primary hover-secondary trs-all fz-16px fz-xl-18px line-clamp-2"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    )}
                </div>
                {isTW && (
                    <div className="maw-320px menu-group flex-shrink-0 mb-xl-5 mb-0-last border-bottom border-xl-0">
                        <Link
                            className="d-inline-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                            to={`/zh-tw/${ROUTES_CONST.TOUROTHERCATEGORYS}`}
                            title="其他推薦行程"
                        >
                            <div className="fz-xl-24px font-weight-xl-bold">
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
