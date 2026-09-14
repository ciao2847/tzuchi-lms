import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ROUTES_CONST } from 'constants/'
import ThumbFrame from 'components/ThumbFrame'
import I18N, { translate } from 'components/I18N'
import useMedia from 'hooks/useMedia'
const isProd = process.env.NODE_ENV === 'production' && !process.env.IS_STAGING

const SubMenuGuide = ({ isCurrent, onClose }) => {
    const isDesktopLayout = useMedia('(min-width: 1200px)')
    const { lang = 'zh-tw' } = useParams()
    const isJA = lang === 'ja'
    const isEN = lang === 'en'
    const isTW = lang === 'zh-tw'
    const isForeign = lang !== 'zh-tw'
    const MENU_SECTION_01 = [
        { title: '大眾運輸', url: `/${lang}/${ROUTES_CONST.TRANSPORT}` },
        // {
        //     title: '客庄美拍',
        //     url: `/zh-tw/${ROUTES_CONST.GALLERIES}`,
        //     hideAtForeign: true,
        //     hideAtProd: true
        // },
        {
            title: '影片專區',
            url: `/${lang}/${ROUTES_CONST.VIDEOS}`
        },
        {
            title: '好站連結',
            url: `/${lang}/${ROUTES_CONST.LINKS}`
        },
        { title: '常見問題', url: `/${lang}/${ROUTES_CONST.FAQS}` },
        { title: '旅遊服務', url: `/${lang}/${ROUTES_CONST.SERVICE}` },
        {
            title: '意見調查',
            url: `${isTW ? 'https://forms.gle/dCxwyGCdJf8ZMREW8' : ''} ${
                isJA ? 'https://forms.gle/EtRDxknQUH5qJ6P6A' : ''
            } ${isEN ? 'https://forms.gle/2eZ4fq6VTAj1zyJ77' : ''}`,
            isLinkOut: true
        }
    ]
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
                        src="/assets/images/global/menu-cover-05.jpg"
                        alt={translate('苗栗銅鑼臺灣客家文化館', lang)}
                        className="fill-parent"
                    />
                    <div className="ml-2 mb-2 px-[12px] py-[4px] bg-black/80 text-white absolute bottom-0 left-0 rounded">
                        <I18N>苗栗銅鑼臺灣客家文化館</I18N>
                    </div>
                </div>
            )}
            <div className="xl:flex flex-1 menu-blk">
                <div className="xl:flex flex-wrap w-full xl:max-w-[480px]">
                    <div className="xl:w-1/2">
                        {MENU_SECTION_01.filter((config) =>
                            isProd ? !config.hideAtProd : true
                        )
                            .filter((config) =>
                                isForeign ? !config.hideAtForeign : true
                            )
                            .map((config, i) => (
                                <div
                                    className="xl:mb-5 last:mb-0 border-b xl:border-b-0"
                                    key={i}
                                >
                                    {config.isLinkOut ? (
                                        <a
                                            href={config.url}
                                            className="flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                                            title={`${translate(
                                                config.title,
                                                lang
                                            )}(${translate('另開視窗', lang)})`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div className="xl:text-[24px] xl:font-bold">
                                                <I18N>{config.title}</I18N>
                                            </div>
                                            <i
                                                className="icon icon-link-out ml-1 text-info text-[13px] leading-normal"
                                                aria-hidden="true"
                                            ></i>
                                        </a>
                                    ) : (
                                        <Link
                                            to={config.url}
                                            className="flex items-center h-6 xl:h-auto px-2 xl:px-0 no-underline text-primary text-[18px] leading-normal hover:text-secondary transition-all duration-300"
                                            title={translate(
                                                config.title,
                                                lang
                                            )}
                                        >
                                            <div className="xl:text-[24px] xl:font-bold">
                                                <I18N>{config.title}</I18N>
                                            </div>
                                        </Link>
                                    )}
                                </div>
                            ))}
                    </div>
                    {/*<div className="w-xl-50">
                        {MENU_SECTION_02.map((config, i) => (
                            <div
                                className="mb-xl-5 mb-0-last border-bottom border-xl-0"
                                key={i}
                            >
                                {config.isLinkOut ? (
                                    <a
                                        href={config.url}
                                        className="d-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                                        title={`${config.title}(另開視窗)`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className="fz-xl-24px font-weight-xl-bold">
                                            {config.title}
                                        </div>
                                        <i
                                            className="icon icon-link-out ml-1 text-info fz-13px lh-initial"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                ) : (
                                    <Link
                                        to={config.url}
                                        className="d-flex align-items-center h-6 h-xl-auto px-2 px-xl-0 text-decoration-none text-primary fz-18px lh-initial hover-secondary trs-all"
                                    >
                                        <div className="fz-xl-24px font-weight-xl-bold">
                                            {config.title}
                                        </div>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>*/}
                </div>
            </div>
        </div>
    )
}

export default React.memo(SubMenuGuide)
