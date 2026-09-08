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
            className={`nav-sub-list justify-content-start pt-7 pt-xl-0 bg-white ${
                isCurrent ? 'current-lv' : ''
            }`}
            onClick={onClose}
        >
            {isDesktopLayout && (
                <div className="flex-shrink-0 w-50 position-relative">
                    <ThumbFrame
                        src="/assets/images/global/menu-cover-01.jpg"
                        alt={translate('苗栗南庄老街', lang)}
                        className="fill-parent"
                    />
                    <div className="ml-2 mb-2 px-12px py-4px bg-black-80 text-white absolute-bottom-left rounded">
                        <I18N>苗栗南庄老街</I18N>
                    </div>
                </div>
            )}
            <div className="d-xl-flex flex-fill menu-blk">
                <div className="menu-group">
                    <div className="mb-xl-5 mb-0-last border-bottom border-xl-0">
                        <a
                            className="d-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                            href={`https://tung.romantichakka.com/home?lang=${BLOSSOM_LANG_MAP[lang]}`}
                            title={`${translate('111年花況', lang)}(${translate(
                                '另開視窗',
                                lang
                            )})`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="fz-xl-24px font-weight-xl-bold">
                                <I18N>111年花況</I18N>
                            </div>
                        </a>
                    </div>
                    {/* {!isJA && ( */}
                    <div className="mb-xl-5 mb-0-last border-bottom border-xl-0">
                        <Link
                            className="d-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                            to={`/${lang}/${ROUTES_CONST.NEWS}`}
                            title={`${translate('客家新鮮事', lang)}`}
                        >
                            <div className="fz-xl-24px font-weight-xl-bold">
                                <I18N>客家新鮮事</I18N>
                            </div>
                        </Link>
                    </div>
                    {/* )} */}
                    {isTW && (
                        <div className="mb-xl-5 mb-0-last border-bottom border-xl-0">
                            <Link
                                className="d-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                                to={`/zh-tw/${ROUTES_CONST.SOCIAL_MEDIAS}`}
                                title="社群講客家"
                            >
                                <div className="fz-xl-24px font-weight-xl-bold">
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
