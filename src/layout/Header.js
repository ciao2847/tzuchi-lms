import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { changeHeaderTheme } from 'store/style/headerThemeSlice'
import MainNav from './MainNav'
import MobileNotifications from './MobileNotifications'
import SiteLogo from './SiteLogo'

const Header = () => {
    const sensorRef = useRef(null)
    const { pathname, search } = useLocation()
    const headerTheme = useSelector(({ headerTheme }) => headerTheme)
    const dispatch = useDispatch()

    const isIndexPage = pathname === '/' || pathname === '/zh-tw'
    const MainComp = isIndexPage ? 'h1' : 'div'

    useEffect(() => {
        const sensor = sensorRef.current

        const observer = new IntersectionObserver(([{ isIntersecting }]) => {
            dispatch(changeHeaderTheme(isIntersecting ? 'clear' : 'shadow'))
        })

        observer.observe(sensor)
        return () => {
            observer.disconnect()
        }
    }, [dispatch, pathname, search])
    return (
        <>
            <header
                className={`top-navbar header-wrapper fixed left-0 right-0 top-0 z-50 box-border h-[var(--header-height)] w-full border-b border-[#e0e0e0] bg-white transition-all duration-300 ${
                    headerTheme === 'shadow'
                        ? '[box-shadow:0_4px_12px_rgba(9,58,123,0.14)]'
                        : 'shadow-none'
                }`}
            >
                <div className="header flex h-full w-full items-center justify-between px-5 md:px-10">
                    <MainComp className="mr-auto z-10 relative shrink-0">
                        <SiteLogo />
                    </MainComp>

                    <MobileNotifications />

                    <div className="flex h-full min-w-0 flex-col items-end gap-2">
                        <MainNav />
                    </div>
                </div>
            </header>
            <div
                className="pointer-events-none absolute left-0 top-0 z-[99999] h-px w-px"
                ref={sensorRef}
            ></div>
        </>
    )
}

export default React.memo(Header)
