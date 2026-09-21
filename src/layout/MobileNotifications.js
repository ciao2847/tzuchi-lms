import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import I18N from 'components/I18N'
import useBodyScrollLock from 'hooks/useBodyScrollLock'
import {
    ANNOUNCEMENT_LIST,
    HAS_UNREAD_NOTICE,
    MESSAGE_LIST
} from 'constants/learningCalendar'

const NoticeSection = ({ items, title, tone }) => (
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

        <ul className="divide-y divide-[#edf1f6] px-4">
            {items.map(({ date, id, isUnread, title }) => (
                <li key={id}>
                    <button
                        type="button"
                        className="flex w-full items-start gap-3 py-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
                    >
                        <span
                            className={`mt-[7px] h-2 w-2 shrink-0 rounded-full ${
                                tone === 'red' ? 'bg-danger' : 'bg-blue'
                            } ${isUnread ? '' : 'opacity-45'}`}
                            aria-hidden="true"
                        />
                        <span className="min-w-0 flex-1">
                            <span className="block text-[13px] font-medium leading-5 text-primary">
                                {title}
                            </span>
                            <time className="mt-1 block text-[11px] leading-4 text-[#7d8fa5]">
                                {date}
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
    const [isOpen, setIsOpen] = useState(false)
    const [hasUnread, setHasUnread] = useState(HAS_UNREAD_NOTICE)
    const [isNavigationOpen, setIsNavigationOpen] = useState(false)
    useBodyScrollLock(isOpen, `${pathname}${search}`)

    const closeNotifications = () => setIsOpen(false)
    const toggleNotifications = () => {
        setIsOpen((currentValue) => {
            const nextValue = !currentValue

            if (nextValue) {
                setHasUnread(false)
                window.dispatchEvent(
                    new CustomEvent('tzuchi:notifications-open')
                )
            }

            return nextValue
        })
    }

    useEffect(() => {
        closeNotifications()
    }, [pathname, search])

    useEffect(() => {
        const closeOnEscape = ({ key }) => {
            if (key === 'Escape') closeNotifications()
        }
        const handleNavigationChange = ({ detail }) => {
            const { isOpen: nextIsNavigationOpen = false } = detail || {}
            setIsNavigationOpen(nextIsNavigationOpen)
            if (nextIsNavigationOpen) closeNotifications()
        }

        document.addEventListener('keyup', closeOnEscape)
        window.addEventListener(
            'tzuchi:mobile-navigation-change',
            handleNavigationChange
        )

        return () => {
            document.removeEventListener('keyup', closeOnEscape)
            window.removeEventListener(
                'tzuchi:mobile-navigation-change',
                handleNavigationChange
            )
        }
    }, [])

    return (
        <div className="xl:hidden">
            <button
                type="button"
                className={`absolute right-12 md:right-16 top-[12px] z-[2000] inline-flex size-8 items-center justify-center border-0 bg-transparent p-0 text-primary transition-opacity focus-visible:ring-2 focus-visible:ring-primary ${
                    isNavigationOpen
                        ? 'pointer-events-none opacity-0'
                        : 'opacity-100'
                }`}
                aria-label="查看消息與公告"
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
                            <I18N>消息與公告</I18N>
                        </h1>
                        <button
                            type="button"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-primary focus-visible:ring-2 focus-visible:ring-primary"
                            aria-label="關閉消息與公告"
                            onClick={closeNotifications}
                        >
                            <i
                                className="icon icon-close size-4 text-[14px]"
                                aria-hidden="true"
                            />
                        </button>
                    </div>

                    <div className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain p-3 pb-[calc(env(safe-area-inset-bottom)+16px)]">
                        <NoticeSection
                            title="消息"
                            items={MESSAGE_LIST}
                            tone="blue"
                        />
                        <NoticeSection
                            title="最新公告"
                            items={ANNOUNCEMENT_LIST}
                            tone="red"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(MobileNotifications)
