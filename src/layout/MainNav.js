import React, { useEffect, useState } from 'react'
import useMedia from 'hooks/useMedia'
import { useLocation, useParams } from 'react-router-dom'
import I18N from 'components/I18N'
import Link from 'components/Link'
import BtnMenu from 'components/BtnMenu'
import { MENU_CONFIG, SOCIAL_LINKS_CONFIG, OTHER_CONFIG } from 'constants'
import AutoSwitchLink from 'components/AutoSwitchLink'
import { translate } from 'components/I18N'

const IS_STAGING = process.env.IS_STAGING

const MainNav = ({}) => {
    const isLayoutXL = useMedia('(min-width: 1200px)')
    const [isMenuOpen, toggleMenu] = useState(false)
    const location = useLocation()
    const { lang = 'zh-tw' } = useParams()
    const isTW = lang === 'zh-tw'

    useEffect(() => {
        const closeMenuOnEscape = (e) => {
            const _charCode = e.which ? e.which : e.keyCode
            if (_charCode === 27) {
                toggleMenu(false)
            }
        }
        document.addEventListener('keyup', closeMenuOnEscape)
        return () => document.removeEventListener('keyup', closeMenuOnEscape)
    }, [])

    return (
        <>
            <BtnMenu
                className="xl:hidden absolute top-[4px] right-2 z-[2000]"
                isOpen={isMenuOpen}
                toggle={toggleMenu}
            />
            <div className="relative flex flex-row-reverse">
                {/*!isLayoutXL && (
                <LanguageSelector className="z-1000 text-secondary" />
            )*/}
                <div
                    className={`${
                        isMenuOpen
                            ? 'is-open max-xl:visible max-xl:translate-x-0'
                            : 'max-xl:invisible max-xl:-translate-x-full'
                    } main-nav-wrapper fixed inset-x-0 top-[56px] bottom-0 z-[1000] bg-white transition-[transform,visibility] duration-300 xl:static xl:ml-auto`}
                    aria-hidden={!isLayoutXL && !isMenuOpen}
                >
                    <div className="mobile-scroll-wrapper h-full w-full overflow-hidden xl:h-auto xl:w-auto xl:overflow-visible">
                        <nav className="main-nav flex h-full w-full flex-col justify-start overflow-y-auto overscroll-contain pt-6 pb-8 xl:h-auto xl:w-auto xl:flex-row xl:overflow-visible xl:overscroll-auto xl:py-0">
                            <ul className="main-nav-title-list xl:flex gap-10 items-center relative">
                                {MENU_CONFIG.filter(
                                    (item) => IS_STAGING || !item.stagOnly
                                )
                                    .filter((item) => {
                                        const now = new Date()
                                        return (
                                            !item.start ||
                                            now.getTime() >
                                                new Date(
                                                    `${item.start}.000+08:00`
                                                ).getTime()
                                        )
                                    })
                                    .map(
                                        (
                                            {
                                                id,
                                                title,
                                                url,
                                                unitStr,
                                                color,
                                                icon
                                            },
                                            index
                                        ) => {
                                            const isCurrent =
                                                location.pathname.includes(
                                                    unitStr
                                                )
                                            return (
                                                <li
                                                    className={`grid justify-center items-center xl:mb-0 last:mb-0 h-16 xl:h-8 menu-title border-b border-[#f0f0f0] xl:border-none ${
                                                        index === 0
                                                            ? 'border-t xl:border-none'
                                                            : ''
                                                    }`}
                                                    key={id}
                                                >
                                                    <div className="w-full group relative">
                                                        <Link
                                                            className={`${
                                                                isCurrent
                                                                    ? ''
                                                                    : 'text-default'
                                                            } ${
                                                                isTW
                                                                    ? 'xl:text-[20px]'
                                                                    : 'xl:max-w-[200px] xl:text-[20px] lg:leading-[100%] lg:text-center'
                                                            } flex gap-2 xl:gap-1 items-center h-10 xl:h-5 text-[24px] font-bold transition-all duration-300`}
                                                            href={url.replace(
                                                                'zh-tw',
                                                                lang
                                                            )}
                                                            onClick={() => {
                                                                toggleMenu(
                                                                    false
                                                                )
                                                            }}
                                                        >
                                                            {/* <i
                                                                className="icon w-10 h-10 shrink-0 xl:w-5 xl:h-5 ml-[4px]"
                                                                aria-hidden="true"
                                                                style={{
                                                                    backgroundImage: `url(/images/icon/${icon})`,
                                                                    backgroundSize:
                                                                        'contain',
                                                                    backgroundPosition:
                                                                        'center',
                                                                    backgroundRepeat:
                                                                        'no-repeat'
                                                                }}
                                                            ></i> */}

                                                            <I18N>{title}</I18N>
                                                        </Link>
                                                    </div>
                                                </li>
                                            )
                                        }
                                    )}
                            </ul>
                            {/* 社群連結 */}
                            <ul
                                className="
                                max-xl:flex max-xl:flex-wrap
                                max-xl:mt-[293px] 
                                xl:hidden
                                 justify-center
                                 text-[28px] gap-12
                            "
                            >
                                {SOCIAL_LINKS_CONFIG.map((item, i) => (
                                    <li key={i} className="inline-block group">
                                        <AutoSwitchLink
                                            href={item.url}
                                            title={translate(item.title, lang)}
                                            isLinkOut={item.isLinkOut}
                                        >
                                            <i
                                                className={`icon icon-${item.icon}  group-hover:text-[#82be66] transition-all duration-300`}
                                                aria-hidden="true"
                                            ></i>
                                        </AutoSwitchLink>
                                    </li>
                                ))}
                            </ul>
                            {/* 其他連結 */}
                            <ul className="mt-7 flex flex-wrap justify-center gap-6 px-4 xl:hidden">
                                {OTHER_CONFIG.map((group) => (
                                    <li
                                        className="flex flex-col items-center gap-4"
                                        key={group.title}
                                    >
                                        <h2 className="text-primary font-bold">
                                            <I18N>{group.title}</I18N>
                                        </h2>
                                        <ul className="flex flex-col items-center gap-3">
                                            {group.links.map((link) => (
                                                <li key={link.id}>
                                                    <AutoSwitchLink
                                                        className="block hover:text-secondary transition-colors duration-300"
                                                        href={link.url}
                                                        title={translate(link.title, lang)}
                                                        isLinkOut={link.isLinkOut}
                                                    >
                                                        <I18N>{link.title}</I18N>
                                                    </AutoSwitchLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(MainNav)
