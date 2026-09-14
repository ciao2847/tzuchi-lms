import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ROUTES_CONST } from 'constants/'
import ThumbFrame from 'components/ThumbFrame'
import I18N, { translate } from 'components/I18N'
import useMedia from 'hooks/useMedia'
const SubMenuTrail = ({ isCurrent, onClose }) => {
    const isDesktopLayout = useMedia('(min-width: 1200px)')
    const { lang = 'zh-tw' } = useParams()
    const isTW = lang === 'zh-tw'
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
                        src="/assets/images/global/menu-cover-03.jpg"
                        alt={translate('桃園龍潭小粗坑古道', lang)}
                        className="fill-parent"
                    />
                    <div className="ml-2 mb-2 px-[12px] py-[4px] bg-black/80 text-white absolute bottom-0 left-0 rounded">
                        <I18N>桃園龍潭小粗坑古道</I18N>
                    </div>
                </div>
            )}
            <div className="xl:flex items-start flex-1 menu-blk">
                <div className="xl:flex flex-wrap w-full xl:max-w-[640px]">
                    <div className="xl:w-1/2">
                        <div className="xl:mb-5 last:mb-0 border-b xl:border-b-0">
                            <Link
                                className="flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                                to={`/${lang}/${ROUTES_CONST.TRAILS}`}
                                title={translate('走訪細路', lang)}
                            >
                                <div className="xl:text-[24px] xl:font-bold">
                                    <I18N>走訪細路</I18N>
                                </div>
                            </Link>
                        </div>
                        <div className="xl:mb-5 last:mb-0 border-b xl:border-b-0">
                            <Link
                                className="flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                                to={`/${lang}/${ROUTES_CONST.TRAIL}/${
                                    lang === 'zh-tw'
                                        ? '3'
                                        : lang === 'ja'
                                        ? '11'
                                        : '13'
                                }`}
                                title={translate('小粗坑古道', lang)}
                            >
                                <div className="xl:text-[24px] xl:font-bold">
                                    <I18N>小粗坑古道</I18N>
                                </div>
                            </Link>
                        </div>

                        <div className="xl:mb-5 last:mb-0 border-b xl:border-b-0">
                            <Link
                                className="flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                                to={`/${lang}/${ROUTES_CONST.TRAIL}/${
                                    lang === 'zh-tw'
                                        ? '10'
                                        : lang === 'ja'
                                        ? '19'
                                        : '15'
                                }`}
                                title={translate('渡南古道&飛鳳古道', lang)}
                            >
                                <div className="xl:text-[24px] xl:font-bold">
                                    <I18N>渡南古道&飛鳳古道</I18N>
                                </div>
                            </Link>
                        </div>
                        <div className="xl:mb-5 last:mb-0 border-b xl:border-b-0">
                            <Link
                                className="flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                                to={`/${lang}/${ROUTES_CONST.TRAIL}/${
                                    lang === 'zh-tw'
                                        ? '6'
                                        : lang === 'ja'
                                        ? '20'
                                        : '16'
                                }`}
                                title={translate('石峎古道', lang)}
                            >
                                <div className="xl:text-[24px] xl:font-bold">
                                    <I18N>石峎古道</I18N>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="xl:w-1/2">
                        <div className="xl:mb-5 last:mb-0 border-b xl:border-b-0">
                            <Link
                                className="flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                                to={`/${lang}/${ROUTES_CONST.TRAIL}/${
                                    lang === 'zh-tw'
                                        ? '7'
                                        : lang === 'ja'
                                        ? '12'
                                        : '14'
                                }`}
                                title={translate('鳴鳳古道', lang)}
                            >
                                <div className="xl:text-[24px] xl:font-bold">
                                    <I18N>鳴鳳古道</I18N>
                                </div>
                            </Link>
                        </div>
                        <div className="xl:mb-5 last:mb-0 border-b xl:border-b-0">
                            <Link
                                className="flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                                to={`/${lang}/${ROUTES_CONST.TRAIL}/${
                                    lang === 'zh-tw'
                                        ? '8'
                                        : lang === 'ja'
                                        ? '21'
                                        : '17'
                                }`}
                                title={translate('老官道(路)', lang)}
                            >
                                <div className="xl:text-[24px] xl:font-bold">
                                    <I18N>老官道(路)</I18N>
                                </div>
                            </Link>
                        </div>
                        <div className="xl:mb-5 last:mb-0 border-b xl:border-b-0">
                            <Link
                                className="flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                                to={`/${lang}/${ROUTES_CONST.TRAIL}/${
                                    lang === 'zh-tw'
                                        ? '9'
                                        : lang === 'ja'
                                        ? '22'
                                        : '18'
                                }`}
                                title={translate('出關古道', lang)}
                            >
                                <div className="xl:text-[24px] xl:font-bold">
                                    <I18N>出關古道</I18N>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(SubMenuTrail)
