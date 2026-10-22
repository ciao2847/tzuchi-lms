import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import I18N from 'components/I18N'
import NotificationDetailDialog from 'components/NotificationDetailDialog'
import useBodyScrollLock from 'hooks/useBodyScrollLock'
import { DashboardContext } from 'contexts/DashboardProvider'
import { LoginContext } from 'contexts/LoginProvider'
import DashboardStatus from 'components/DashboardStatus'

const NoticeSection = ({ items, onSelect, title, tone }) => (
    <section className="overflow-hidden rounded-[8px] border border-solid border-[#dfe7f1] bg-white [box-shadow:0_2px_10px_rgba(9,58,123,0.06)]">
        <header className="flex h-12 items-center justify-between border-b border-solid border-[#e6ecf4] px-4">
            <h2 className="text-[16px] font-bold text-primary">
                <I18N>{title}</I18N>
            </h2>
            {/* <button
                type="button"
                className="inline-flex items-center gap-1 text-[12px] font-medium text-[#71849b] transition-colors hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
            >
                <I18N>更多</I18N>
                <i
                    className="icon icon-arrow-right text-[8px]"
                    aria-hidden="true"
                />
            </button> */}
        </header>

        <ul className="divide-y divide-[#edf1f6] px-4 md:max-h-[380px] md:overflow-y-auto md:overscroll-contain">
            {!items.length && <li className="py-4 text-[13px] text-gray-500">目前沒有資料</li>}
            {items.map((item, index) => (
                <li key={item.id} className={`h-[76px] ${index >= 3 ? 'hidden md:block' : ''}`}>
                    <button
                        type="button"
                        className="flex h-full w-full items-start gap-3 rounded-[4px] py-3 text-left transition-colors hover:bg-[#f7f9fd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
                        aria-haspopup="dialog"
                        aria-label={`查看${item.title}`}
                        onClick={() => onSelect(item)}
                    >
                        <span
                            className={`mt-[7px] h-2 w-2 shrink-0 rounded-full ${
                                tone === 'red' ? 'bg-danger' : 'bg-blue'
                            } ${item.isUnread ? '' : 'opacity-45'}`}
                            aria-hidden="true"
                        />
                        <span className="min-w-0 flex-1">
                            <span title={item.title} className="block truncate text-[13px] font-medium leading-5 text-primary">
                                {item.title}
                            </span>
                            <time className="mt-1 block text-[11px] leading-4 text-[#7d8fa5]">
                                {item.date}
                            </time>
                        </span>
                    </button>
                </li>
            ))}
        </ul>
    </section>
)

const MobileNotifications = () => {
    const { pathname, search } = useLocation()
    const { isLogin } = useContext(LoginContext)
    const { data } = useContext(DashboardContext)
    const [isOpen, setIsOpen] = useState(false)
    const hasUnread = data.messages.some(item => item.isUnread)
    const [isNavigationOpen, setIsNavigationOpen] = useState(false)
    const [selectedNotice, setSelectedNotice] = useState(null)
    useBodyScrollLock(isOpen, `${pathname}${search}`)

    const closeNotifications = () => {
        setSelectedNotice(null)
        setIsOpen(false)
    }
    const toggleNotifications = () => {
        setIsOpen((currentValue) => {
            const nextValue = !currentValue

            if (nextValue) {
                window.dispatchEvent(
                    new CustomEvent('tzuchi:notifications-open')
                )
            }

            return nextValue
        })
    }

    useEffect(() => {
        closeNotifications()
    }, [pathname, search, data])

    useEffect(() => {
        const closeOnEscape = ({ key }) => {
            const hasOpenDialog = document.querySelector(
                '[role="dialog"][aria-modal="true"]'
            )
            if (key === 'Escape' && !hasOpenDialog) closeNotifications()
        }
        const handleNavigationChange = ({ detail }) => {
            const { isOpen: nextIsNavigationOpen = false } = detail || {}
            setIsNavigationOpen(nextIsNavigationOpen)
            if (nextIsNavigationOpen) closeNotifications()
        }

        document.addEventListener('keydown', closeOnEscape)
        window.addEventListener(
            'tzuchi:mobile-navigation-change',
            handleNavigationChange
        )

        return () => {
            document.removeEventListener('keydown', closeOnEscape)
            window.removeEventListener(
                'tzuchi:mobile-navigation-change',
                handleNavigationChange
            )
        }
    }, [])

    if (!isLogin) return null
    return (
        <>
            <div className="xl:hidden">
                <button
                    type="button"
                    className={`absolute right-12 md:right-16 top-[12px] z-[2000] inline-flex size-8 items-center justify-center border-0 bg-transparent p-0 text-primary transition-opacity focus-visible:ring-2 focus-visible:ring-primary ${
                        isNavigationOpen
                            ? 'pointer-events-none opacity-0'
                            : 'opacity-100'
                    }`}
                    aria-label="查看通知信與系統公告"
                    aria-controls="mobile-notifications-panel"
                    aria-expanded={isOpen}
                    onClick={toggleNotifications}
                >
                    <i
                        className="icon icon-bell size-6 text-[20px]"
                        aria-hidden="true"
                    />
                    {hasUnread && (
                        <span
                            className="absolute right-[2px] top-[1px] h-[7px] w-[7px] rounded-full bg-[#ef3131] ring-2 ring-white"
                            aria-label="有未讀訊息"
                        />
                    )}
                </button>

                <div
                    id="mobile-notifications-panel"
                    className={`fixed inset-x-0 bottom-0 top-[56px] z-[1200] bg-[#f5f8fd] transition-[visibility,opacity,transform] duration-300 ${
                        isOpen
                            ? 'visible translate-y-0 opacity-100'
                            : 'invisible -translate-y-2 opacity-0'
                    }`}
                    aria-hidden={!isOpen}
                >
                    <div className="flex h-full flex-col">
                        <div className="flex h-12 shrink-0 items-center justify-between border-y border-solid border-[#dfe7f1] bg-white px-4">
                            <h1 className="text-[17px] font-bold text-primary">
                                <I18N>通知信與系統公告</I18N>
                            </h1>
                            <button
                                type="button"
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-primary focus-visible:ring-2 focus-visible:ring-primary"
                                aria-label="關閉通知信與系統公告"
                                onClick={closeNotifications}
                            >
                                <i
                                    className="icon icon-close size-4 text-[14px]"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>

                        <div className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain p-3 pb-[calc(env(safe-area-inset-bottom)+16px)]">
                            <DashboardStatus />
                            <NoticeSection
                                title="通知信"
                                items={data.messages}
                                tone="blue"
                                onSelect={setSelectedNotice}
                            />
                            <NoticeSection
                                title="系統公告"
                                items={data.announcements}
                                tone="red"
                                onSelect={setSelectedNotice}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {selectedNotice && (
                <NotificationDetailDialog
                    notice={selectedNotice}
                    onClose={() => setSelectedNotice(null)}
                />
            )}
        </>
    )
}

export default React.memo(MobileNotifications)
