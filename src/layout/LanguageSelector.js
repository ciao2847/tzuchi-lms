import React from 'react'
import { useLocale } from 'hooks/'
const LANG_LINK_CONFIG = [
    {
        id: 1,
        title: '中文',
        lang: 'zh-tw',
        url: '/zh-tw'
    },
    {
        id: 2,
        title: 'English',
        lang: 'en',
        url: '/en'
    },
    {
        id: 3,
        title: '日本語',
        lang: 'ja',
        url: '/ja'
    },
    {
        id: 4,
        title: '한국어',
        lang: 'ko',
        url: '/ko'
    }
]

const LanguageSelector = ({ className }) => {
    const lang = useLocale()
    return (
        <div className={`group position-relative z-9999 ${className}`}>
            <a
                className="d-flex justify-content-center align-items-center h-5 mr-4px mr-0-last text-inherit text-decoration-none hover-light trs-all"
                href="#"
                title="language"
                onClick={(e) => e.preventDefault()}
            >
                <i className="icon icon-global fz-20px" aria-hidden="true"></i>
                <div className="flex-shrink-0 ml-1 fz-13px">
                    {LANG_LINK_CONFIG.find((c) => c.lang === lang).title}
                </div>
                <i
                    className="icon icon-triangle ml-1 fz-12px"
                    aria-hidden="true"
                ></i>
            </a>
            <div className="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto mt-4 pt-2 mr-n10px absolute-top-right drop-shadow-black-50 z-2000 trs-all">
                <i
                    className="icon icon-triangle mr-2 rotate-[180deg] absolute-top-right mt-4px text-white"
                    aria-hidden="true"
                ></i>
                <ul className="w-17 p-12px rounded bg-white fz-15px">
                    {LANG_LINK_CONFIG.filter(
                        (config) => config.lang !== lang
                    ).map((config) => (
                        <li className="mb-1 mb-0-last" key={config.id}>
                            <a
                                className="d-block w-100 px-2 text-decoration-none text-default hover-secondary"
                                href={`${process.env.BASE_PATH}${config.url}`}
                                title={config.title}
                            >
                                {config.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default React.memo(LanguageSelector)
