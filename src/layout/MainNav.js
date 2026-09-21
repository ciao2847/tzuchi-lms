import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import I18N from 'components/I18N'
import Link from 'components/Link'
import BtnMenu from 'components/BtnMenu'
import { LoginContext } from 'contexts/LoginProvider'
import useMedia from 'hooks/useMedia'
import useBodyScrollLock from 'hooks/useBodyScrollLock'
import { MENU_CONFIG } from 'constants'

const IS_STAGING = process.env.IS_STAGING === 'true'

const isMenuVisible = ({ stagOnly, start }) => {
    if (stagOnly && !IS_STAGING) return false
    if (!start) return true

    return Date.now() > new Date(`${start}.000+08:00`).getTime()
}

const NavIndicator = ({ direction = 'right', isOpen = false }) => (
    <i
        className={`icon icon-arrow-right size-4 shrink-0 text-[14px] transition-transform xl:size-5 xl:text-[20px] ${
            direction === 'down' ? (isOpen ? '-rotate-90' : 'rotate-90') : ''
        }`}
        aria-hidden="true"
    />
)

const MobileMenuIcon = ({ name }) => (
    <i
        className={`icon icon-${name} size-4 shrink-0 text-[14px] text-secondary`}
        aria-hidden="true"
    />
)

const DesktopMenuItem = ({ item, pathname }) => {
    const {
        id,
        title,
        url,
        desktopIndicator,
        indicator,
        submenuWidth,
        children = []
    } = item
    const { length: childCount } = children
    const isCurrent = url !== '/edu-service-country' && pathname === url
    const indicatorDirection =
        desktopIndicator || (indicator === 'down' ? indicator : null)
    const triggerClassName = `flex h-full items-center gap-1 whitespace-nowrap border-b-2 border-transparent text-[16px] font-medium transition-colors hover:border-main hover:text-main focus-visible:border-main focus-visible:text-main focus-visible:outline-none ${
        isCurrent ? 'text-main' : 'text-primary'
    }`
    const triggerContent = (
        <>
            <I18N>{title}</I18N>
            {indicatorDirection && (
                <NavIndicator direction={indicatorDirection} />
            )}
        </>
    )

    return (
        <li key={id} className="group relative flex h-full items-center">
            {childCount > 0 ? (
                <button
                    type="button"
                    className={`${triggerClassName} cursor-default bg-transparent p-0`}
                    aria-haspopup="menu"
                >
                    {triggerContent}
                </button>
            ) : (
                <Link href={url} className={triggerClassName}>
                    {triggerContent}
                </Link>
            )}

            {childCount > 0 && (
                <ul
                    className="invisible absolute left-1/2 top-full z-20 -translate-x-1/2 translate-y-1 overflow-hidden rounded-[8px] bg-white opacity-0 drop-shadow transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
                    style={{ width: submenuWidth || 220 }}
                    role="menu"
                >
                    {children.map(
                        ({ id, title, url, isSectionTitle, isLinkOut }) => (
                            <li key={id} role="none">
                                {isSectionTitle ? (
                                    <div className=" bg-[#eef4ff] px-4 py-3 text-center text-[17px] font-bold leading-6 text-primary">
                                        <I18N>{title}</I18N>
                                    </div>
                                ) : (
                                    <Link
                                        href={url}
                                        className="block  px-5 py-3 text-[16px] leading-6 text-primary transition-colors last:border-b-0 hover:bg-primary/5 hover:text-main focus-visible:bg-primary/5 focus-visible:text-main focus-visible:outline-none"
                                        role="menuitem"
                                        {...(isLinkOut
                                            ? {
                                                  target: '_blank',
                                                  rel: 'noopener noreferrer'
                                              }
                                            : null)}
                                    >
                                        <I18N>{title}</I18N>
                                    </Link>
                                )}
                            </li>
                        )
                    )}
                </ul>
            )}
        </li>
    )
}

const DesktopMemberMenu = ({ onLogout, user = {} }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { name = '王小明' } = user

    const handleLogout = () => {
        setIsOpen(false)
        onLogout()
    }

    return (
        <div
            className="relative"
            onBlur={({ currentTarget, relatedTarget }) => {
                if (!currentTarget.contains(relatedTarget)) setIsOpen(false)
            }}
            onKeyDown={({ key }) => {
                if (key === 'Escape') setIsOpen(false)
            }}
        >
            <button
                type="button"
                className="inline-flex h-8 items-center justify-center gap-1 rounded-full bg-secondary px-4 text-[13px] font-bold text-white transition-colors hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-haspopup="menu"
                aria-expanded={isOpen}
                aria-controls="desktop-member-menu"
                onClick={() => setIsOpen((currentValue) => !currentValue)}
            >
                {name}
                <i
                    className={`icon icon-arrow-down h-3 w-3 text-[9px] transition-transform ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                />
            </button>

            {isOpen && (
                <div
                    id="desktop-member-menu"
                    className="absolute right-0 top-full z-30 mt-2 w-[240px] overflow-hidden rounded-[8px] border border-solid border-[#dfe7f1] bg-white drop-shadow"
                    role="menu"
                >
                    <div
                        className="border-b border-solid border-[#e6ecf4] bg-[#f8fbff] px-4 py-3"
                        role="presentation"
                    >
                        <span className="block text-[12px] font-medium leading-5 text-[#708399]">
                            <I18N>會員資料</I18N>
                        </span>
                        <strong className="mt-0.5 block text-[15px] font-bold leading-6 text-primary">
                            {name}
                        </strong>
                        <span className="block text-[11px] leading-5 text-[#708399]">
                            <I18N>慈濟醫療學習平台會員</I18N>
                        </span>
                    </div>
                    <Link
                        href="/calendar"
                        className="flex min-h-10 items-center gap-2 px-4 py-2 text-[13px] font-medium text-primary transition-colors hover:bg-[#f3f7fd] hover:text-secondary focus-visible:bg-[#f3f7fd] focus-visible:text-secondary focus-visible:outline-none"
                        role="menuitem"
                        onClick={() => setIsOpen(false)}
                    >
                        <i
                            className="icon icon-calendar text-[14px] text-secondary"
                            aria-hidden="true"
                        />
                        <I18N>我的學習行事曆</I18N>
                    </Link>
                    <button
                        type="button"
                        className="flex min-h-10 w-full items-center gap-2 border-x-0 border-b-0 border-t border-solid border-[#e6ecf4] px-4 py-2 text-left text-[13px] font-medium text-primary transition-colors hover:bg-[#fff5f5] hover:text-danger focus-visible:bg-[#fff5f5] focus-visible:text-danger focus-visible:outline-none"
                        role="menuitem"
                        onClick={handleLogout}
                    >
                        <i
                            className="icon icon-arrow-forward text-[14px]"
                            aria-hidden="true"
                        />
                        <I18N>登出</I18N>
                    </button>
                </div>
            )}
        </div>
    )
}

const MobileMenuItem = ({ item, isActive, onClose, onToggle }) => {
    const { id, title, url, mobileIcon, indicator, children = [] } = item
    const hasChildren = children.length > 0
    const hasSectionTitles = children.some(
        ({ isSectionTitle }) => isSectionTitle
    )
    const className =
        'flex h-[48px] w-full items-center gap-3 border-x-0 border-t-0 border-b border-solid border-gray-200 bg-white px-4 text-left text-[14px] leading-5 text-primary transition-colors active:bg-[#f8fafc] focus-visible:bg-[#f8fafc] focus-visible:text-primary focus-visible:outline-none'
    const content = (
        <>
            {mobileIcon && <MobileMenuIcon name={mobileIcon} />}
            <span className="min-w-0 flex-1 truncate">
                <I18N>{title}</I18N>
            </span>
            {(hasChildren || indicator) && (
                <NavIndicator
                    direction={hasChildren ? 'down' : indicator}
                    isOpen={hasChildren && isActive}
                />
            )}
        </>
    )

    return (
        <li key={id}>
            {hasChildren ? (
                <button
                    type="button"
                    className={className}
                    aria-expanded={isActive}
                    aria-controls={`mobile-submenu-${id}`}
                    onClick={() => onToggle(id)}
                >
                    {content}
                </button>
            ) : (
                <Link href={url} className={className} onClick={onClose}>
                    {content}
                </Link>
            )}
            {hasChildren && isActive && (
                <ul
                    id={`mobile-submenu-${id}`}
                    className="bg-[#f8fafc]"
                    aria-label={`${title}子選單`}
                >
                    {children.map(
                        ({
                            id,
                            title,
                            url,
                            mobileIcon,
                            isSectionTitle,
                            isLinkOut
                        }) => (
                            <li key={id}>
                                {isSectionTitle ? (
                                    <div className="flex min-h-[44px] items-center justify-start gap-3 border-b border-solid border-gray-200 bg-[#eef4ff] py-2 pl-8 pr-4 text-left text-[14px] font-bold leading-5 text-primary">
                                        {mobileIcon && (
                                            <MobileMenuIcon name={mobileIcon} />
                                        )}
                                        <I18N>{title}</I18N>
                                    </div>
                                ) : (
                                    <Link
                                        href={url}
                                        className={`flex min-h-[44px] items-center gap-3 border-b border-solid border-gray-200 bg-white py-2 text-[13px] leading-5 text-primary transition-colors active:bg-[#f8fafc] focus-visible:bg-[#f8fafc] focus-visible:text-primary focus-visible:outline-none ${
                                            hasSectionTitles
                                                ? 'pl-12 pr-4'
                                                : 'pl-8 pr-4'
                                        }`}
                                        onClick={onClose}
                                        {...(isLinkOut
                                            ? {
                                                  target: '_blank',
                                                  rel: 'noopener noreferrer'
                                              }
                                            : null)}
                                    >
                                        {mobileIcon && (
                                            <MobileMenuIcon name={mobileIcon} />
                                        )}
                                        <span className="min-w-0 flex-1">
                                            <I18N>{title}</I18N>
                                        </span>
                                        <NavIndicator />
                                    </Link>
                                )}
                            </li>
                        )
                    )}
                </ul>
            )}
        </li>
    )
}

const MainNav = () => {
    const isLayoutXL = useMedia('(min-width: 1200px)')
    const { pathname, search } = useLocation()
    const { isLogin, logout, user } = useContext(LoginContext)
    const { name = '王小明' } = user
    const visibleMenus = MENU_CONFIG.filter(isMenuVisible)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobileMemberOpen, setIsMobileMemberOpen] = useState(false)
    const [activeMenuId, setActiveMenuId] = useState(null)
    useBodyScrollLock(
        isMenuOpen && !isLayoutXL,
        `${pathname}${search}:${isLayoutXL}`
    )

    const closeMenu = () => {
        setIsMenuOpen(false)
        setIsMobileMemberOpen(false)
    }
    const handleLogout = () => {
        logout()
        closeMenu()
    }
    const toggleSubmenu = (id) => {
        setActiveMenuId((currentId) => (currentId === id ? null : id))
    }

    useEffect(() => {
        setIsMenuOpen(false)
        setIsMobileMemberOpen(false)
    }, [pathname, search])

    useEffect(() => {
        if (!isMenuOpen) setIsMobileMemberOpen(false)
    }, [isMenuOpen])

    useEffect(() => {
        window.dispatchEvent(
            new CustomEvent('tzuchi:mobile-navigation-change', {
                detail: { isOpen: isMenuOpen }
            })
        )
    }, [isMenuOpen])

    useEffect(() => {
        const closeForNotifications = () => closeMenu()

        window.addEventListener(
            'tzuchi:notifications-open',
            closeForNotifications
        )
        return () =>
            window.removeEventListener(
                'tzuchi:notifications-open',
                closeForNotifications
            )
    }, [])

    useEffect(() => {
        const closeMenuOnEscape = ({ key }) => {
            if (key === 'Escape') closeMenu()
        }

        document.addEventListener('keyup', closeMenuOnEscape)
        return () => document.removeEventListener('keyup', closeMenuOnEscape)
    }, [])

    return (
        <>
            <BtnMenu
                className="absolute right-2 md:right-6 top-[12px] z-[2000] xl:hidden"
                controlsId="mobile-main-navigation"
                isOpen={isMenuOpen}
                toggle={setIsMenuOpen}
            />

            <nav
                className="hidden h-[80px] items-center xl:flex"
                aria-label="主選單"
            >
                <ul className="flex h-full w-[800px] items-center justify-between">
                    {visibleMenus.map((item) => (
                        <DesktopMenuItem
                            key={item.id}
                            item={item}
                            pathname={pathname}
                        />
                    ))}
                </ul>
                <div className="ml-5 shrink-0">
                    {isLogin ? (
                        <DesktopMemberMenu
                            user={user}
                            onLogout={handleLogout}
                        />
                    ) : (
                        <Link
                            href="/#login"
                            className="inline-flex h-8 items-center justify-center rounded-full bg-secondary px-4 text-[13px] font-bold text-white transition-colors hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            <I18N>登入</I18N>
                        </Link>
                    )}
                </div>
            </nav>

            <div
                className={`${
                    isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
                } main-nav-wrapper fixed inset-0 z-[1000] bg-black/30 transition-[visibility,opacity] duration-300 xl:hidden`}
                aria-hidden={!isMenuOpen}
            >
                <button
                    type="button"
                    className="absolute inset-0 cursor-default"
                    aria-label="關閉選單"
                    tabIndex={-1}
                    onClick={closeMenu}
                />

                <div
                    id="mobile-main-navigation"
                    className={`${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } mobile-scroll-wrapper absolute inset-0 z-10 flex h-full w-full flex-col bg-white transition-transform duration-300`}
                >
                    <div className="flex h-14 shrink-0 items-center border-b border-solid border-gray-200 px-3 pr-12">
                        <Link
                            href="/"
                            className="block h-[40px] w-[147px] max-w-full bg-contain bg-left bg-no-repeat"
                            style={{
                                backgroundImage: `url('${process.env.BASE_PATH}/images/global/main-logo.png')`
                            }}
                            onClick={closeMenu}
                        >
                            <span className="sr-only">
                                <I18N>慈濟醫療志業學習網</I18N>
                            </span>
                        </Link>
                    </div>

                    {isLogin ? (
                        <div className="shrink-0 border-b border-solid border-gray-200">
                            <button
                                type="button"
                                className="flex min-h-[48px] w-full items-center gap-3 px-3 py-2 text-left focus-visible:bg-[#f8fafc] focus-visible:outline-none"
                                aria-expanded={isMobileMemberOpen}
                                aria-controls="mobile-member-menu"
                                onClick={() =>
                                    setIsMobileMemberOpen(
                                        (currentValue) => !currentValue
                                    )
                                }
                            >
                                <span className="inline-flex h-7 items-center justify-center rounded-full bg-secondary px-4 text-[11px] font-bold text-white">
                                    {name}
                                </span>
                                <span className="min-w-0 flex-1 text-[12px] font-medium text-[#708399]">
                                    <I18N>會員資料</I18N>
                                </span>
                                <i
                                    className={`icon icon-arrow-down size-4 shrink-0 text-[14px] transition-transform ${
                                        isMobileMemberOpen ? 'rotate-180' : ''
                                    }`}
                                    aria-hidden="true"
                                />
                            </button>

                            {isMobileMemberOpen && (
                                <div
                                    id="mobile-member-menu"
                                    className="border-t border-solid border-[#e6ecf4] bg-[#f8fbff]"
                                >
                                    <div className="border-b border-solid border-[#e6ecf4] px-8 py-3">
                                        <strong className="block text-[14px] font-bold leading-5 text-primary">
                                            {name}
                                        </strong>
                                        <span className="block text-[11px] leading-5 text-[#708399]">
                                            <I18N>慈濟醫療學習平台會員</I18N>
                                        </span>
                                    </div>
                                    <Link
                                        href="/calendar"
                                        className="flex min-h-[44px] items-center gap-3 border-b border-solid border-[#e6ecf4] bg-white py-2 pl-8 pr-4 text-[13px] font-medium text-primary transition-colors active:bg-[#f8fafc] focus-visible:bg-[#f8fafc] focus-visible:outline-none"
                                        onClick={closeMenu}
                                    >
                                        <MobileMenuIcon name="doc" />
                                        <span className="min-w-0 flex-1">
                                            <I18N>我的學習行事曆</I18N>
                                        </span>
                                        <NavIndicator />
                                    </Link>
                                    <button
                                        type="button"
                                        className="flex min-h-[44px] w-full items-center gap-3 border-x-0 border-b-0 border-t-0 bg-white py-2 pl-8 pr-4 text-left text-[13px] font-medium text-primary transition-colors active:bg-[#fff5f5] focus-visible:bg-[#fff5f5] focus-visible:text-danger focus-visible:outline-none"
                                        onClick={handleLogout}
                                    >
                                        <MobileMenuIcon name="arrow-forward" />
                                        <span className="min-w-0 flex-1">
                                            <I18N>登出</I18N>
                                        </span>
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="shrink-0 border-b border-solid border-gray-200 px-3 py-2">
                            <Link
                                href="/#login"
                                className="inline-flex h-7 items-center justify-center rounded-full bg-main px-4 text-[11px] font-bold text-white transition-colors hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                                onClick={closeMenu}
                            >
                                <I18N>登入</I18N>
                            </Link>
                        </div>
                    )}

                    <nav
                        className="main-nav min-h-0 flex-1 overflow-y-auto overscroll-contain pb-6"
                        aria-label="行動版主選單"
                    >
                        <ul>
                            {visibleMenus.map((item) => (
                                <MobileMenuItem
                                    key={item.id}
                                    item={item}
                                    isActive={activeMenuId === item.id}
                                    onClose={closeMenu}
                                    onToggle={toggleSubmenu}
                                />
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default React.memo(MainNav)
