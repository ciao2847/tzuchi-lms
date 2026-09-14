import React from 'react'
import LanguageSelector from './LanguageSelector'
import AutoSwitchLink from 'components/AutoSwitchLink'
import GoogleTranslateWidget from './GoogleTranslateWidget'
import { SOCIAL_LINKS_CONFIG } from 'constants'
import MainNav from './MainNav'

const SiteFuncBlk = () => {
    return (
        <div className="flex items-center">
            <ul className="flex justify-center items-center">
                {SOCIAL_LINKS_CONFIG.map(
                    ({ id, title, url, icon, isLinkOut, color }) => (
                        <li key={id}>
                            <AutoSwitchLink
                                className="block p-1 text-secondary hover:text-primary transition-all duration-300"
                                href={url}
                                isLinkOut={isLinkOut}
                            >
                                <i
                                    className={`icon icon-${icon} text-[24px] ${color}`}
                                    aria-hidden="true"
                                    // style={{ color }}
                                ></i>
                                <div className="sr-only">{title}</div>
                            </AutoSwitchLink>
                        </li>
                    )
                )}
            </ul>
            {/*<i
                className="icon w-1px h-3 bg-[#c3c3c3] ml-2 mr-3"
                aria-hidden="true"
            ></i>*/}
            {/*<LanguageSelector className="text-secondary" theme="dark" />
            <i
                className="icon w-1px h-3 bg-[#c3c3c3] mx-20px"
                aria-hidden="true"
            ></i>*/}
        </div>
    )
}

export default React.memo(SiteFuncBlk)
