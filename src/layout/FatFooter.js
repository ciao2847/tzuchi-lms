import React from 'react'
import { Link, useParams } from 'react-router-dom'
import I18N, { translate } from 'components/I18N'
import { ROUTES_CONST, BLOSSOM_LANG_MAP } from 'constants/'
const isProd = process.env.NODE_ENV === 'production' && !process.env.IS_STAGING
const FatFooter = () => {
    const { lang = 'zh-tw' } = useParams()
    const isJA = lang === 'ja'
    const isEN = lang === 'en'
    const isTW = lang === 'zh-tw'
    const isForeign = lang !== 'zh-tw'
    const LINKS_CONFIG = [
        {
            id: 1,
            title: '新鮮事',
            links: [
                {
                    title: '111年花況',
                    url: `https://tung.romantichakka.com/home?lang=${BLOSSOM_LANG_MAP[lang]}`,
                    isLinkOut: true
                },
                // { title: '客庄活動', url: `/zh-tw/${ROUTES_CONST.EVENTS}` },
                {
                    title: '客家新鮮事',
                    url: `/${lang}/${ROUTES_CONST.NEWS}`
                },
                {
                    title: '社群講客家',
                    url: `/zh-tw/${ROUTES_CONST.SOCIAL_MEDIAS}`,
                    hideAtForeign: true
                }
            ]
        },
        {
            id: 2,
            title: '漫遊客庄',
            links: [
                {
                    title: '認識好客庄',
                    url: `/${lang}/${ROUTES_CONST.REGIONS}`
                },
                {
                    title: '好客夯玩法',
                    url: `/${lang}/${ROUTES_CONST.TRAVEL_GUIDE}`
                },
                {
                    title: '心動客家味',
                    url: `/${lang}/${ROUTES_CONST.GOURMET}`
                },
                {
                    title: '買客家等路',
                    url: `/${lang}/${ROUTES_CONST.SOUVENIR}`
                },
                {
                    title: '好玩景點',
                    url: `/${lang}/${ROUTES_CONST.ATTRACTIONS}`
                },
                {
                    title: '好遊地圖',
                    url: `/${lang}/${ROUTES_CONST.MAP}`
                },
                {
                    title: '虛擬旅客',
                    url: `/${lang}/${ROUTES_CONST.IMMERSIVE}`
                    // isLinkOut: isForeign ? true : false
                }
            ]
        },
        {
            id: 3,
            title: '樟之細路',
            links: [
                { title: '走訪細路', url: `/${lang}/${ROUTES_CONST.TRAILS}` },
                {
                    title: '小粗坑古道',
                    url: `/${lang}/${ROUTES_CONST.TRAIL}/${
                        lang === 'zh-tw' ? '3' : lang === 'ja' ? '11' : '13'
                    }`
                },
                {
                    title: '渡南古道&飛鳳古道',
                    url: `/${lang}/${ROUTES_CONST.TRAIL}/${
                        lang === 'zh-tw' ? '10' : lang === 'ja' ? '19' : '15'
                    }`
                },
                {
                    title: '石峎古道',
                    url: `/${lang}/${ROUTES_CONST.TRAIL}/${
                        lang === 'zh-tw' ? '6' : lang === 'ja' ? '20' : '16'
                    }`
                },
                {
                    title: '鳴鳳古道',
                    url: `/${lang}/${ROUTES_CONST.TRAIL}/${
                        lang === 'zh-tw' ? '7' : lang === 'ja' ? '12' : '14'
                    }`
                },
                {
                    title: '老官道(路)',
                    url: `/${lang}/${ROUTES_CONST.TRAIL}/${
                        lang === 'zh-tw' ? '8' : lang === 'ja' ? '21' : '17'
                    }`
                },
                {
                    title: '出關古道',
                    url: `/${lang}/${ROUTES_CONST.TRAIL}/${
                        lang === 'zh-tw' ? '9' : lang === 'ja' ? '22' : '18'
                    }`
                }
            ]
        },
        {
            id: 4,
            title: '行程推薦',
            links: [
                { title: '在地小旅行', url: `/zh-tw/${ROUTES_CONST.TOURS}` },
                {
                    title: '111年桐花小旅行',
                    url: `/zh-tw/${ROUTES_CONST.TOURCATEGORYS}`
                },
                {
                    title: '其他推薦行程',
                    url: `/zh-tw/${ROUTES_CONST.TOUROTHERCATEGORYS}`,
                    hideAtProd: true
                }
                // {
                //     title: '自訂行程',
                //     url: `/zh-tw/${ROUTES_CONST.TRIP_EDITOR}`,
                //     hideAtProd: true
                // }
            ],
            hideAtForeign: true
        },
        {
            id: 5,
            title: '行程推薦',
            links: [
                { title: '111年桐花小旅行', url: `/${lang}/tour-category` }
            ],
            hideAtTW: true
        },
        {
            id: 6,
            title: '旅遊指南',
            links: [
                {
                    title: '大眾運輸',
                    url: `/${lang}/${ROUTES_CONST.TRANSPORT}`
                },
                // {
                //     title: '客庄美拍',
                //     url: `/zh-tw/${ROUTES_CONST.GALLERIES}`,
                //     hideAtForeign: true,
                //     hideAtProd: true
                // },
                /* {
                title: 'YouBike',
                url: `https://www.youbike.com.tw/`,
                isLinkOut: true
            }, */
                {
                    title: '影片專區',
                    url: `/${lang}/${ROUTES_CONST.VIDEOS}`
                },
                /* {
                title: '台灣好行',
                url: `https://www.taiwantrip.com.tw/`,
                isLinkOut: true
            }, */
                {
                    title: '好站連結',
                    url: `/${lang}/${ROUTES_CONST.LINKS}`
                },
                /* {
                title: '台灣觀巴',
                url: `https://www.taiwantourbus.com.tw/C/tw/home`,
                isLinkOut: true
            }, */
                { title: '常見問題', url: `/${lang}/${ROUTES_CONST.FAQS}` },
                { title: '旅遊服務', url: `/${lang}/${ROUTES_CONST.SERVICE}` },
                {
                    title: '意見調查',
                    url: `${
                        isTW ? 'https://forms.gle/dCxwyGCdJf8ZMREW8' : ''
                    } ${isJA ? 'https://forms.gle/EtRDxknQUH5qJ6P6A' : ''} ${
                        isEN ? 'https://forms.gle/2eZ4fq6VTAj1zyJ77' : ''
                    }`,
                    isLinkOut: true
                }
            ]
        }
    ]
    return (
        <div className="d-none d-xl-block border-bottom border-white py-7 mb-5 mx-n3">
            <div className="d-flex justify-content-between maw-920px mx-auto">
                {LINKS_CONFIG.filter((config) =>
                    isForeign ? !config.hideAtForeign : true
                )
                    .filter((config) => (isTW ? !config.hideAtTW : true))
                    .map((config) => {
                        const isTwoColumns = config.columns === 2
                        return (
                            <div key={config.id}>
                                <div className="text-primary fz-18px font-weight-bold">
                                    <I18N>{config.title}</I18N>
                                </div>
                                <ul
                                    className={`${
                                        isTwoColumns && 'row maw-224px'
                                    }
                                    ${isEN ? 'fz-16px mr-2 ' : ''}
                                    mt-2 
                                `}
                                >
                                    {config.links
                                        .filter((config) =>
                                            isProd ? !config.hideAtProd : true
                                        )
                                        .filter((config) =>
                                            isJA ? !config.hideAtJA : true
                                        )
                                        .filter((link) =>
                                            isForeign
                                                ? !link.hideAtForeign
                                                : true
                                        )
                                        .map((link, i) => (
                                            <li
                                                className={`${
                                                    isTwoColumns && 'col-6'
                                                } mb-1 mb-0-last`}
                                                key={i}
                                            >
                                                {link.isLinkOut ? (
                                                    <a
                                                        className="text-default hover-link"
                                                        href={link.url}
                                                        title={`${translate(
                                                            link.title,
                                                            lang
                                                        )}(${translate(
                                                            '另開視窗',
                                                            lang
                                                        )})`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <I18N>
                                                            {link.title}
                                                        </I18N>
                                                    </a>
                                                ) : (
                                                    <Link
                                                        className="text-default hover-link"
                                                        to={link.url}
                                                        title={translate(
                                                            link.title,
                                                            lang
                                                        )}
                                                    >
                                                        <I18N>
                                                            {link.title}
                                                        </I18N>
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default React.memo(FatFooter)
