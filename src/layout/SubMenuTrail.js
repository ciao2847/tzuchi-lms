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
            className={`nav-sub-list justify-content-start pt-7 pt-xl-0 bg-white ${
                isCurrent ? 'current-lv' : ''
            }`}
            onClick={onClose}
        >
            {isDesktopLayout && (
                <div className="flex-shrink-0 w-50 position-relative">
                    <ThumbFrame
                        src="/assets/images/global/menu-cover-03.jpg"
                        alt={translate('桃園龍潭小粗坑古道', lang)}
                        className="fill-parent"
                    />
                    <div className="ml-2 mb-2 px-12px py-4px bg-black-80 text-white absolute-bottom-left rounded">
                        <I18N>桃園龍潭小粗坑古道</I18N>
                    </div>
                </div>
            )}
            <div className="d-xl-flex align-items-start flex-fill menu-blk">
                <div className="d-xl-flex flex-wrap w-100 maw-xl-640px">
                    <div className="w-xl-50">
                        <div className="mb-xl-5 mb-0-last border-bottom border-xl-0">
                            <Link
                                className="d-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                                to={`/${lang}/${ROUTES_CONST.TRAILS}`}
                                title={translate('走訪細路', lang)}
                            >
                                <div className="fz-xl-24px font-weight-xl-bold">
                                    <I18N>走訪細路</I18N>
                                </div>
                            </Link>
                        </div>
                        <div className="mb-xl-5 mb-0-last border-bottom border-xl-0">
                            <Link
                                className="d-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                                to={`/${lang}/${ROUTES_CONST.TRAIL}/${
                                    lang === 'zh-tw'
                                        ? '3'
                                        : lang === 'ja'
                                        ? '11'
                                        : '13'
                                }`}
                                title={translate('小粗坑古道', lang)}
                            >
                                <div className="fz-xl-24px font-weight-xl-bold">
                                    <I18N>小粗坑古道</I18N>
                                </div>
                            </Link>
                        </div>

                        <div className="mb-xl-5 mb-0-last border-bottom border-xl-0">
                            <Link
                                className="d-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                                to={`/${lang}/${ROUTES_CONST.TRAIL}/${
                                    lang === 'zh-tw'
                                        ? '10'
                                        : lang === 'ja'
                                        ? '19'
                                        : '15'
                                }`}
                                title={translate('渡南古道&飛鳳古道', lang)}
                            >
                                <div className="fz-xl-24px font-weight-xl-bold">
                                    <I18N>渡南古道&飛鳳古道</I18N>
                                </div>
                            </Link>
                        </div>
                        <div className="mb-xl-5 mb-0-last border-bottom border-xl-0">
                            <Link
                                className="d-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                                to={`/${lang}/${ROUTES_CONST.TRAIL}/${
                                    lang === 'zh-tw'
                                        ? '6'
                                        : lang === 'ja'
                                        ? '20'
                                        : '16'
                                }`}
                                title={translate('石峎古道', lang)}
                            >
                                <div className="fz-xl-24px font-weight-xl-bold">
                                    <I18N>石峎古道</I18N>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="w-xl-50">
                        <div className="mb-xl-5 mb-0-last border-bottom border-xl-0">
                            <Link
                                className="d-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                                to={`/${lang}/${ROUTES_CONST.TRAIL}/${
                                    lang === 'zh-tw'
                                        ? '7'
                                        : lang === 'ja'
                                        ? '12'
                                        : '14'
                                }`}
                                title={translate('鳴鳳古道', lang)}
                            >
                                <div className="fz-xl-24px font-weight-xl-bold">
                                    <I18N>鳴鳳古道</I18N>
                                </div>
                            </Link>
                        </div>
                        <div className="mb-xl-5 mb-0-last border-bottom border-xl-0">
                            <Link
                                className="d-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                                to={`/${lang}/${ROUTES_CONST.TRAIL}/${
                                    lang === 'zh-tw'
                                        ? '8'
                                        : lang === 'ja'
                                        ? '21'
                                        : '17'
                                }`}
                                title={translate('老官道(路)', lang)}
                            >
                                <div className="fz-xl-24px font-weight-xl-bold">
                                    <I18N>老官道(路)</I18N>
                                </div>
                            </Link>
                        </div>
                        <div className="mb-xl-5 mb-0-last border-bottom border-xl-0">
                            <Link
                                className="d-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                                to={`/${lang}/${ROUTES_CONST.TRAIL}/${
                                    lang === 'zh-tw'
                                        ? '9'
                                        : lang === 'ja'
                                        ? '22'
                                        : '18'
                                }`}
                                title={translate('出關古道', lang)}
                            >
                                <div className="fz-xl-24px font-weight-xl-bold">
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
