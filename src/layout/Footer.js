import React from 'react'
import { useLocale } from 'hooks'
import useMedia from 'hooks/useMedia'
import I18N, { translate } from 'components/I18N'
import Link from 'components/Link'
import AutoSwitchLink from 'components/AutoSwitchLink'
import { FRIEND_SITE_CONFIG, MENU_CONFIG, SOCIAL_LINKS_CONFIG } from 'constants'

const Footer = () => {
    const lang = useLocale()

    return (
        <footer className="position-relative z-1">
            <div className="w-100 border border-[0px] border-t-[2px] lg:pt-[64px] lg:pb-[200px] pt-[48px] pb-[160px]">
                <ul className="flex flex-wrap justify-center lg:gap-[5rem] gap-8">
                    {FRIEND_SITE_CONFIG.map((item, i) => (
                        <li key={i} className="block group">
                            <AutoSwitchLink
                                className="block group-hover:opacity-50 trs-all"
                                href={item.url}
                                title={translate(item.title, lang)}
                                isLinkOut={item.isLinkOut}
                            >
                                <img
                                    src={`${process.env.BASE_PATH}/images/global/${item.img}`}
                                    className={`lg:h-[64px] h-[48px]`}
                                    alt=""
                                    aria-hidden="true"
                                />
                            </AutoSwitchLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="relative">
                <img
                    src={`${process.env.BASE_PATH}/images/global/bear.png`}
                    className="absolute inset-x-1/2 -translate-x-1/2 bottom-[-100%] md:bottom-[-25%] lg:bottom-[5%] xl:bottom-[20%] md:w-[35%] lg:w-[20%] max-w-[200px] lg:max-w-[280px]"
                    alt=""
                    aria-hidden="true"
                ></img>
                <img
                    src={`${process.env.BASE_PATH}/images/global/footer-wave.svg`}
                    className="w-100"
                    alt=""
                    aria-hidden="true"
                ></img>
            </div>
            <div className="flex flex-col items-center bg-[#FBCE4C] text-center pt-5 pb-3 px-3 px-md-0 gap-12">
                <div className="flex lg:flex-row flex-col lg:justify-between items-center lg:gap-[5rem] gap-12">
                    <Link
                        href="/"
                        title={translate('台灣水果旅行', lang)}
                        className={`w-[256px] h-[64px] hover:opacity-40 trs-all`}
                        style={{
                            backgroundImage: `url('${process.env.BASE_PATH}/images/global/logo-white.svg')`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    ></Link>
                    <ul className="flex flex-wrap justify-center gap-6 md:gap-12">
                        {MENU_CONFIG.map((item, i) => (
                            <li
                                className="inline-block align-self-center hover:text-[#82BE66]"
                                key={i}
                            >
                                <Link
                                    href={item.url}
                                    title={translate(item.title, lang)}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <ul className="flex fz-32px gap-6">
                    {SOCIAL_LINKS_CONFIG.map((item, i) => (
                        <li key={i} className="inline-block group">
                            <AutoSwitchLink
                                href={item.url}
                                title={translate(item.title, lang)}
                                isLinkOut={item.isLinkOut}
                            >
                                <i
                                    className={`icon icon-${item.icon} ${item.color} group-hover:text-[#82BE66] trs-all`}
                                    aria-hidden="true"
                                ></i>
                            </AutoSwitchLink>
                        </li>
                    ))}
                </ul>

                <div>
                    <I18N>農業易遊網</I18N> © {new Date().getFullYear()} All
                    rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default React.memo(Footer)
