import React, { useEffect, useState } from 'react'
import useMedia from 'hooks/useMedia'
import { useLocation, useParams } from 'react-router-dom'
import I18N from 'components/I18N'
import Link from 'components/Link'
import BtnMenu from 'components/BtnMenu'
import { MENU_CONFIG, SOCIAL_LINKS_CONFIG, FRIEND_SITE_CONFIG } from 'constants'
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
        document.addEventListener('keyup', (e) => {
            const _charCode = e.which ? e.which : e.keyCode
            if (_charCode === 27) {
                toggleMenu(false)
            }
        })
    }, [])

    return (
        <>
            <BtnMenu
                className="d-xl-none absolute-top-right mt-4px mr-1 z-2000"
                isOpen={isMenuOpen}
                toggle={toggleMenu}
            />
            <div className="position-relative d-flex flex-row-reverse">
                {/*!isLayoutXL && (
                <LanguageSelector className="z-1000 text-secondary" />
            )*/}
                <div
                    className={`${
                        isMenuOpen && 'is-open'
                    } main-nav-wrapper justify-content-end ml-xl-auto`}
                >
                    <div className={`mobile-scroll-wrapper`}>
                        <nav className="main-nav d-flex flex-column flex-xl-row justify-content-start justify-content-xl-start pt-3 pt-xl-0">
                            <ul className="main-nav-title-list d-xl-flex gap-10 align-items-start-center position-relative">
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
                                                    className={`grid justify-center items-center mb-xl-0 mb-0-last h-8 menu-title border-bottom border-[#f0f0f0] xl:border-none ${
                                                        index === 0
                                                            ? 'border-top xl:border-none'
                                                            : ''
                                                    }`}
                                                    key={id}
                                                >
                                                    <div className="w-100 group position-relative ">
                                                        <Link
                                                            className={`${
                                                                isCurrent
                                                                    ? ''
                                                                    : 'text-default'
                                                            } ${
                                                                isTW
                                                                    ? 'fz-xl-20px'
                                                                    : 'xl:max-w-[200px] fz-xl-20px lg:leading-[100%] lg:text-center'
                                                            } flex gap-1 align-items-center h-5 fz-24px font-weight-bold trs-all`}
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
                                                            <i
                                                                className={`icon w-5 h-5 ml-4px`}
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
                                                            ></i>

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
                                 fz-28px gap-12
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
                                                className={`icon icon-${item.icon}  group-hover:text-[#82be66] trs-all`}
                                                aria-hidden="true"
                                            ></i>
                                        </AutoSwitchLink>
                                    </li>
                                ))}
                            </ul>
                            {/* 友站連結 */}
                            <ul
                                className="
                                max-xl:flex max-xl:flex-wrap
                                max-xl:mt-[28px]
                                xl:hidden
                                 justify-center
                            "
                            >
                                {FRIEND_SITE_CONFIG[1] && (
                                    <li className="block group">
                                        <AutoSwitchLink
                                            className="block group-hover:opacity-50 trs-all"
                                            href={FRIEND_SITE_CONFIG[1].url}
                                            title={translate(
                                                FRIEND_SITE_CONFIG[1].title,
                                                lang
                                            )}
                                            isLinkOut={
                                                FRIEND_SITE_CONFIG[1].isLinkOut
                                            }
                                        >
                                            <img
                                                src={`${process.env.BASE_PATH}/images/global/${FRIEND_SITE_CONFIG[1].img}`}
                                                className="h-[40px]"
                                                alt=""
                                                aria-hidden="true"
                                            />
                                        </AutoSwitchLink>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(MainNav)
