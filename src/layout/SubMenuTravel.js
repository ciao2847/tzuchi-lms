import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ROUTES_CONST } from 'constants/'
import ThumbFrame from 'components/ThumbFrame'
import I18N, { translate } from 'components/I18N'
import useMedia from 'hooks/useMedia'
const isProd = process.env.NODE_ENV === 'production' && !process.env.IS_STAGING
const SubMenuTravel = ({ isCurrent, onClose }) => {
    const isDesktopLayout = useMedia('(min-width: 1200px)')
    const { lang = 'zh-tw' } = useParams()
    const isTW = lang === 'zh-tw'
    const isJA = lang === 'ja'
    return (
        <div
            className={`nav-sub-list justify-content-start pt-7 pt-xl-0 bg-white ${
                isCurrent ? 'current-lv' : ''
            }`}
            onClick={onClose}
        >
            {isDesktopLayout && (
                <div className="w-50 position-relative">
                    <ThumbFrame
                        src="/assets/images/global/menu-cover-02.jpg"
                        alt={translate('苗栗銅鑼客家大院', lang)}
                        className="fill-parent"
                    />
                    <div className="ml-2 mb-2 px-12px py-4px bg-black-80 text-white absolute-bottom-left rounded">
                        <I18N>苗栗銅鑼客家大院</I18N>
                    </div>
                </div>
            )}
            <div className="d-xl-flex flex-fill menu-blk">
                <div className="d-xl-flex flex-wrap w-100 maw-xl-480px">
                    <div className={`${isJA ? 'pr-xl-2' : ''} w-xl-50`}>
                        <div className="mb-xl-5 mb-0-last border-bottom border-xl-0">
                            <Link
                                className="d-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                                to={`/${lang}/${ROUTES_CONST.REGIONS}`}
                                title={translate('認識好客庄', lang)}
                            >
                                <div className="fz-xl-24px font-weight-xl-bold">
                                    <I18N>認識好客庄</I18N>
                                </div>
                            </Link>
                        </div>
                        <div className="mb-xl-5 mb-0-last border-bottom border-xl-0">
                            <Link
                                className="d-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                                to={`/${lang}/${ROUTES_CONST.TRAVEL_GUIDE}`}
                                title={translate('好客夯玩法', lang)}
                            >
                                <div className="fz-xl-24px font-weight-xl-bold">
                                    <I18N>好客夯玩法</I18N>
                                </div>
                            </Link>
                        </div>
                        <div className="mb-xl-5 mb-0-last border-bottom border-xl-0">
                            <Link
                                className="d-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                                to={`/${lang}/${ROUTES_CONST.GOURMET}`}
                                title={translate('心動客家味', lang)}
                            >
                                <div className="fz-xl-24px font-weight-xl-bold">
                                    <I18N>心動客家味</I18N>
                                </div>
                            </Link>
                        </div>
                        <div className="mb-xl-5 mb-0-last border-bottom border-xl-0">
                            <Link
                                className="d-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                                to={`/${lang}/${ROUTES_CONST.SOUVENIR}`}
                                title={translate('買客家等路', lang)}
                            >
                                <div className="fz-xl-24px font-weight-xl-bold">
                                    <I18N>買客家等路</I18N>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={`${isJA ? 'pl-xl-2' : ''} w-xl-50`}>
                        <div className="mb-xl-5 mb-0-last border-bottom border-xl-0">
                            <Link
                                className="d-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                                to={`/${lang}/${ROUTES_CONST.ATTRACTIONS}`}
                                title={translate('好玩景點', lang)}
                            >
                                <div className="fz-xl-24px font-weight-xl-bold">
                                    <I18N>好玩景點</I18N>
                                </div>
                            </Link>
                        </div>
                        <div className="mb-xl-5 mb-0-last border-bottom border-xl-0">
                            <Link
                                className="d-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                                to={`/${lang}/${ROUTES_CONST.MAP}`}
                                title={translate('好遊地圖', lang)}
                            >
                                <div className="fz-xl-24px font-weight-xl-bold">
                                    <I18N>好遊地圖</I18N>
                                </div>
                            </Link>
                        </div>
                        <div className="mb-xl-5 mb-0-last border-bottom border-xl-0">
                            <a
                                className="d-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                                href={`/${lang}/${ROUTES_CONST.IMMERSIVE}`}
                                title={translate('虛擬旅客', lang)}
                            >
                                <div className="fz-xl-24px font-weight-xl-bold">
                                    <I18N>虛擬旅客</I18N>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(SubMenuTravel)
