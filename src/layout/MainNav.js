import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import I18N from 'components/I18N'
import AutoSwitchLink from 'components/AutoSwitchLink'
import BtnMenu from 'components/BtnMenu'
import { LoginContext } from 'contexts/LoginProvider'
import useMedia from 'hooks/useMedia'
import useBodyScrollLock from 'hooks/useBodyScrollLock'
import { MENU_CONFIG } from 'constants'
import swal from 'sweetalert'

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

const LogoutIcon = () => (
    <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
    </svg>
)

const DesktopMenuItem = ({ item, pathname, openMenuId, setOpenMenuId }) => {
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
    const isOpen = childCount > 0 && openMenuId === id
    const closeMenu = () => setOpenMenuId(current => current === id ? null : current)
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
        <li
            key={id}
            className="relative flex h-full items-center"
            onMouseEnter={() => setOpenMenuId(childCount > 0 ? id : null)}
            onMouseLeave={closeMenu}
            onFocus={() => setOpenMenuId(childCount > 0 ? id : null)}
            onBlur={({ currentTarget, relatedTarget }) => {
                if (!currentTarget.contains(relatedTarget)) closeMenu()
            }}
            onKeyDown={event => {
                if (event.key === 'Escape') {
                    event.preventDefault()
                    event.currentTarget.querySelector('button')?.focus()
                    closeMenu()
                }
            }}
        >
            {childCount > 0 ? (
                <button
                    type="button"
                    className={`${triggerClassName} cursor-default bg-transparent p-0`}
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                    aria-controls={`desktop-menu-${id}`}
                    onClick={() => setOpenMenuId(id)}
                >
                    {triggerContent}
                </button>
            ) : (
                <AutoSwitchLink href={url} className={triggerClassName}>
                    {triggerContent}
                </AutoSwitchLink>
            )}

            {childCount > 0 && (
                <ul
                    id={`desktop-menu-${id}`}
                    className={`absolute left-1/2 top-full z-20 -translate-x-1/2 overflow-hidden rounded-[8px] bg-white drop-shadow ${isOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-1 opacity-0'}`}
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
                                    <AutoSwitchLink
                                        href={url}
                                        className="block  px-5 py-3 text-[16px] leading-6 text-primary transition-colors last:border-b-0 hover:bg-primary/5 hover:text-main focus-visible:bg-primary/5 focus-visible:text-main focus-visible:outline-none"
                                        role="menuitem"
                                        onClick={closeMenu}
                                        isLinkOut={isLinkOut}
                                    >
                                        <I18N>{title}</I18N>
                                    </AutoSwitchLink>
                                )}
                            </li>
                        )
                    )}
                </ul>
            )}
        </li>
    )
}

const MemberIdentity = ({ user }) => (
    <>
        <strong className="block break-words text-[14px] font-bold leading-6 text-primary">
            {[user.department, user.name].filter(Boolean).join('-')}
        </strong>
        {user.mail && (
            <span className="block break-all text-[12px] leading-5 text-[#708399]">
                {user.mail}
            </span>
        )}
    </>
)

export const ChangePasswordItem = ({ mobile = false, onNavigate }) => (
    <AutoSwitchLink
        href="/change-password"
        onClick={onNavigate}
        role={mobile ? undefined : 'menuitem'}
        className={`flex min-h-10 w-full items-center bg-white py-2 pr-4 text-left text-[13px] font-medium text-primary hover:bg-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary ${mobile ? 'pl-8' : 'pl-4'}`}
    >
        <I18N>修改密碼</I18N>
    </AutoSwitchLink>
)

const DesktopMemberMenu = ({ onLogout, isLoggingOut, user = {} }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { name = '' } = user

    const handleLogout = async () => {
        if (await onLogout()) setIsOpen(false)
    }

    return (
        <div
            className="relative"
            onBlur={({ currentTarget, relatedTarget }) => {
                if (relatedTarget && !currentTarget.contains(relatedTarget)) setIsOpen(false)
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
            </button>

            {isOpen && (
                <div
                    id="desktop-member-menu"
                    className="absolute right-0 top-full z-30 mt-2 w-[320px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-[8px] border border-solid border-[#dfe7f1] bg-white drop-shadow"
                    role="menu"
                >
                    <div
                        className="border-b border-solid border-[#e6ecf4] bg-[#f8fbff] px-4 py-3"
                        role="presentation"
                    >
                        <MemberIdentity user={user} />
                    </div>
                    <ChangePasswordItem onNavigate={() => setIsOpen(false)} />
                    <button
                        type="button"
                        className="flex min-h-10 w-full items-center gap-2 border-x-0 border-b-0 border-t border-solid border-[#e6ecf4] px-4 py-2 text-left text-[13px] font-medium text-primary transition-colors hover:bg-[#fff5f5] hover:text-danger focus-visible:bg-[#fff5f5] focus-visible:text-danger focus-visible:outline-none"
                        role="menuitem"
                        onClick={handleLogout}
                        disabled={isLoggingOut}
                        aria-busy={isLoggingOut}
                    >
                        <LogoutIcon />
                        <I18N>{isLoggingOut ? '登出中…' : '登出'}</I18N>
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
                <AutoSwitchLink href={url} className={className} onClick={onClose}>
                    {content}
                </AutoSwitchLink>
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
                                    <AutoSwitchLink
                                        href={url}
                                        className={`flex min-h-[44px] items-center gap-3 border-b border-solid border-gray-200 bg-white py-2 text-[13px] leading-5 text-primary transition-colors active:bg-[#f8fafc] focus-visible:bg-[#f8fafc] focus-visible:text-primary focus-visible:outline-none ${
                                            hasSectionTitles
                                                ? 'pl-12 pr-4'
                                                : 'pl-8 pr-4'
                                        }`}
                                        onClick={onClose}
                                        isLinkOut={isLinkOut}
                                    >
                                        {mobileIcon && (
                                            <MobileMenuIcon name={mobileIcon} />
                                        )}
                                        <span className="min-w-0 flex-1">
                                            <I18N>{title}</I18N>
                                        </span>
                                        <NavIndicator />
                                    </AutoSwitchLink>
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
    const { isLogin, logout, user, isLoggingOut } = useContext(LoginContext)
    const { name = '' } = user
    const visibleMenus = MENU_CONFIG.filter(isMenuVisible)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobileMemberOpen, setIsMobileMemberOpen] = useState(false)
    const [activeMenuId, setActiveMenuId] = useState(null)
    const [desktopMenuId, setDesktopMenuId] = useState(null)
    useBodyScrollLock(
        isMenuOpen && !isLayoutXL,
        `${pathname}${search}:${isLayoutXL}`
    )

    const closeMenu = () => {
        setIsMenuOpen(false)
        setIsMobileMemberOpen(false)
    }
    const handleLogout = async () => {
        if (isLoggingOut) return false
        try {
            await logout()
            closeMenu()
            return true
        } catch (error) {
            await swal('登出失敗',
                error?.data?.error?.message || error?.data?.errorMessage ||
                (error instanceof TypeError ? '無法連線至登出服務，請稍後再試。' : error?.message) ||
                '請稍後再試。', 'error')
            return false
        }
    }
    const toggleSubmenu = (id) => {
        setActiveMenuId((currentId) => (currentId === id ? null : id))
    }

    useEffect(() => {
        setIsMenuOpen(false)
        setIsMobileMemberOpen(false)
        setDesktopMenuId(null)
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
                className="absolute right-5 top-[14px] z-[2000] md:right-10 md:top-[33px] xl:hidden"
                controlsId="mobile-main-navigation"
                isOpen={isMenuOpen}
                toggle={setIsMenuOpen}
            />

            <nav
                className="hidden h-full items-center xl:flex"
                aria-label="主選單"
            >
                <ul className="flex h-full w-[800px] items-center justify-between">
                    {visibleMenus.map((item) => (
                        <DesktopMenuItem
                            key={item.id}
                            item={item}
                            pathname={pathname}
                            openMenuId={desktopMenuId}
                            setOpenMenuId={setDesktopMenuId}
                        />
                    ))}
                </ul>
                <div className="ml-5 shrink-0">
                    {isLogin ? (
                        <DesktopMemberMenu
                            user={user}
                            onLogout={handleLogout}
                            isLoggingOut={isLoggingOut}
                        />
                    ) : (
                        <AutoSwitchLink
                            href="/#login"
                            className="inline-flex h-8 items-center justify-center rounded-full bg-secondary px-4 text-[13px] font-bold text-white transition-colors hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            <I18N>登入</I18N>
                        </AutoSwitchLink>
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
                    <div className="flex h-[var(--header-height)] shrink-0 items-center border-b border-solid border-gray-200 px-5 pr-16 md:px-10 md:pr-20">
                        <AutoSwitchLink
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
                        </AutoSwitchLink>
                    </div>

                    {isLogin ? (
                        <div className="shrink-0 border-b border-solid border-gray-200">
                            <button
                                type="button"
                                className="flex min-h-[48px] w-full items-center gap-3 px-3 py-2 text-left focus-visible:bg-[#f8fafc] focus-visible:outline-none"
                                aria-expanded={isMobileMemberOpen}
                                aria-controls="mobile-member-menu"
                                aria-label={`${name}，會員選單`}
                                onClick={() =>
                                    setIsMobileMemberOpen(
                                        (currentValue) => !currentValue
                                    )
                                }
                            >
                                <span className="inline-flex h-7 items-center justify-center rounded-full bg-secondary px-4 text-[11px] font-bold text-white">
                                    {name}
                                </span>
                            </button>

                            {isMobileMemberOpen && (
                                <div
                                    id="mobile-member-menu"
                                    className="border-t border-solid border-[#e6ecf4] bg-[#f8fbff]"
                                >
                                    <div className="border-b border-solid border-[#e6ecf4] px-8 py-3">
                                        <MemberIdentity user={user} />
                                    </div>
                                    <ChangePasswordItem mobile onNavigate={closeMenu} />
                                    <button
                                        type="button"
                                        className="flex min-h-[44px] w-full items-center gap-3 border-x-0 border-b-0 border-t-0 bg-white py-2 pl-8 pr-4 text-left text-[13px] font-medium text-primary transition-colors active:bg-[#fff5f5] focus-visible:bg-[#fff5f5] focus-visible:text-danger focus-visible:outline-none"
                                        onClick={handleLogout}
                                        disabled={isLoggingOut}
                                        aria-busy={isLoggingOut}
                                    >
                                        <LogoutIcon />
                                        <span className="min-w-0 flex-1">
                                            <I18N>{isLoggingOut ? '登出中…' : '登出'}</I18N>
                                        </span>
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="shrink-0 border-b border-solid border-gray-200 px-3 py-2">
                            <AutoSwitchLink
                                href="/#login"
                                className="inline-flex h-7 items-center justify-center rounded-full bg-main px-4 text-[11px] font-bold text-white transition-colors hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                                onClick={closeMenu}
                            >
                                <I18N>登入</I18N>
                            </AutoSwitchLink>
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
