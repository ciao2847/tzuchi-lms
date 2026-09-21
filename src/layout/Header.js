import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import I18N from 'components/I18N'
import Link from 'components/Link'
import { changeHeaderTheme } from 'store/style/headerThemeSlice'
import MainNav from './MainNav'
import MobileNotifications from './MobileNotifications'

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
                className={`header-wrapper fixed left-0 right-0 top-0 z-50 w-full border-b bg-white transition-all duration-300 ${
                    headerTheme === 'shadow'
                        ? '[box-shadow:0_4px_12px_rgba(9,58,123,0.14)]'
                        : 'shadow-none'
                }`}
            >
                <div className="header flex h-[56px] w-full items-center justify-between px-2 md:mx-auto xl:h-[80px] xl:max-w-[1200px] md:px-6 xl:px-10 2xl:px-0 2xl:max-w-[1400px]">
                    <MainComp className="mr-auto z-10 relative shrink-0">
                        <Link
                            className="main-logo block h-12 w-[176px] bg-contain bg-center bg-no-repeat xl:h-16 xl:w-[235px]"
                            href="/"
                            style={{
                                backgroundImage: `url('${process.env.BASE_PATH}/images/global/main-logo.png')`
                            }}
                        >
                            <div className="sr-only">
                                <I18N>慈濟醫療志業學習網</I18N>
                            </div>
                        </Link>
                    </MainComp>

                    <MobileNotifications />

                    <div className="flex flex-col items-end gap-2">
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
