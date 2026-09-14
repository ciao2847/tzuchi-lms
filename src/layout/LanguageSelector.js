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
        <div className={`group relative z-[9999] ${className || ''}`}>
            <a
                className="flex justify-center items-center h-5 mr-[4px] last:mr-0 text-inherit no-underline hover:opacity-80 transition-all duration-300"
                href="#"
                title="language"
                onClick={(e) => e.preventDefault()}
            >
                <i className="icon icon-global text-[20px]" aria-hidden="true"></i>
                <div className="shrink-0 ml-1 text-[13px]">
                    {LANG_LINK_CONFIG.find((c) => c.lang === lang).title}
                </div>
                <i
                    className="icon icon-triangle ml-1 text-[12px]"
                    aria-hidden="true"
                ></i>
            </a>
            <div className="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto mt-4 pt-2 -mr-[10px] absolute top-0 right-0 shadow-lg z-[2000] transition-all duration-300">
                <i
                    className="icon icon-triangle mr-2 rotate-[180deg] absolute top-0 right-0 mt-[4px] text-white"
                    aria-hidden="true"
                ></i>
                <ul className="w-[136px] p-[12px] rounded bg-white text-[15px]">
                    {LANG_LINK_CONFIG.filter(
                        (config) => config.lang !== lang
                    ).map((config) => (
                        <li className="mb-1 last:mb-0" key={config.id}>
                            <a
                                className="block w-full px-2 no-underline text-default hover:text-secondary"
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
