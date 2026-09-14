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
            className={`nav-sub-list justify-start pt-7 xl:pt-0 bg-white ${
                isCurrent ? 'current-lv' : ''
            }`}
            onClick={onClose}
        >
            {isDesktopLayout && (
                <div className="w-1/2 relative">
                    <ThumbFrame
                        src="/assets/images/global/menu-cover-02.jpg"
                        alt={translate('苗栗銅鑼客家大院', lang)}
                        className="fill-parent"
                    />
                    <div className="ml-2 mb-2 px-[12px] py-[4px] bg-black/80 text-white absolute bottom-0 left-0 rounded">
                        <I18N>苗栗銅鑼客家大院</I18N>
                    </div>
                </div>
            )}
            <div className="xl:flex flex-1 menu-blk">
                <div className="xl:flex flex-wrap w-full xl:max-w-[480px]">
                    <div className={`${isJA ? 'xl:pr-2' : ''} xl:w-1/2`}>
                        <div className="xl:mb-5 last:mb-0 border-b xl:border-b-0">
                            <Link
                                className="flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                                to={`/${lang}/${ROUTES_CONST.REGIONS}`}
                                title={translate('認識好客庄', lang)}
                            >
                                <div className="xl:text-[24px] xl:font-bold">
                                    <I18N>認識好客庄</I18N>
                                </div>
                            </Link>
                        </div>
                        <div className="xl:mb-5 last:mb-0 border-b xl:border-b-0">
                            <Link
                                className="flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                                to={`/${lang}/${ROUTES_CONST.TRAVEL_GUIDE}`}
                                title={translate('好客夯玩法', lang)}
                            >
                                <div className="xl:text-[24px] xl:font-bold">
                                    <I18N>好客夯玩法</I18N>
                                </div>
                            </Link>
                        </div>
                        <div className="xl:mb-5 last:mb-0 border-b xl:border-b-0">
                            <Link
                                className="flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                                to={`/${lang}/${ROUTES_CONST.GOURMET}`}
                                title={translate('心動客家味', lang)}
                            >
                                <div className="xl:text-[24px] xl:font-bold">
                                    <I18N>心動客家味</I18N>
                                </div>
                            </Link>
                        </div>
                        <div className="xl:mb-5 last:mb-0 border-b xl:border-b-0">
                            <Link
                                className="flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                                to={`/${lang}/${ROUTES_CONST.SOUVENIR}`}
                                title={translate('買客家等路', lang)}
                            >
                                <div className="xl:text-[24px] xl:font-bold">
                                    <I18N>買客家等路</I18N>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={`${isJA ? 'xl:pl-2' : ''} xl:w-1/2`}>
                        <div className="xl:mb-5 last:mb-0 border-b xl:border-b-0">
                            <Link
                                className="flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                                to={`/${lang}/${ROUTES_CONST.ATTRACTIONS}`}
                                title={translate('好玩景點', lang)}
                            >
                                <div className="xl:text-[24px] xl:font-bold">
                                    <I18N>好玩景點</I18N>
                                </div>
                            </Link>
                        </div>
                        <div className="xl:mb-5 last:mb-0 border-b xl:border-b-0">
                            <Link
                                className="flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                                to={`/${lang}/${ROUTES_CONST.MAP}`}
                                title={translate('好遊地圖', lang)}
                            >
                                <div className="xl:text-[24px] xl:font-bold">
                                    <I18N>好遊地圖</I18N>
                                </div>
                            </Link>
                        </div>
                        <div className="xl:mb-5 last:mb-0 border-b xl:border-b-0">
                            <a
                                className="flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                                href={`/${lang}/${ROUTES_CONST.IMMERSIVE}`}
                                title={translate('虛擬旅客', lang)}
                            >
                                <div className="xl:text-[24px] xl:font-bold">
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
