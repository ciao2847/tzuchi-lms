import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ROUTES_CONST, BLOSSOM_LANG_MAP } from 'constants/'
import ThumbFrame from 'components/ThumbFrame'
import I18N, { translate } from 'components/I18N'
import useMedia from 'hooks/useMedia'
const SubMenuNews = ({ isCurrent, onClose }) => {
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
                <div className="shrink-0 w-1/2 relative">
                    <ThumbFrame
                        src="/assets/images/global/menu-cover-01.jpg"
                        alt={translate('苗栗南庄老街', lang)}
                        className="fill-parent"
                    />
                    <div className="ml-2 mb-2 px-[12px] py-[4px] bg-black/80 text-white absolute bottom-0 left-0 rounded">
                        <I18N>苗栗南庄老街</I18N>
                    </div>
                </div>
            )}
            <div className="xl:flex flex-1 menu-blk">
                <div className="menu-group">
                    <div className="xl:mb-5 last:mb-0 border-b xl:border-b-0">
                        <a
                            className="flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                            href={`https://tung.romantichakka.com/home?lang=${BLOSSOM_LANG_MAP[lang]}`}
                            title={`${translate('111年花況', lang)}(${translate(
                                '另開視窗',
                                lang
                            )})`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="xl:text-[24px] xl:font-bold">
                                <I18N>111年花況</I18N>
                            </div>
                        </a>
                    </div>
                    {/* {!isJA && ( */}
                    <div className="xl:mb-5 last:mb-0 border-b xl:border-b-0">
                        <Link
                            className="flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                            to={`/${lang}/${ROUTES_CONST.NEWS}`}
                            title={`${translate('客家新鮮事', lang)}`}
                        >
                            <div className="xl:text-[24px] xl:font-bold">
                                <I18N>客家新鮮事</I18N>
                            </div>
                        </Link>
                    </div>
                    {/* )} */}
                    {isTW && (
                        <div className="xl:mb-5 last:mb-0 border-b xl:border-b-0">
                            <Link
                                className="flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                                to={`/zh-tw/${ROUTES_CONST.SOCIAL_MEDIAS}`}
                                title="社群講客家"
                            >
                                <div className="xl:text-[24px] xl:font-bold">
                                    社群講客家
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default React.memo(SubMenuNews)
