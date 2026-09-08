import React, { useEffect, useRef, useState } from 'react'
import { useLocale } from 'hooks'
import useMedia from 'hooks/useMedia'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import I18N, { translate } from 'components/I18N'
import Link from 'components/Link'
import { changeHeaderTheme } from 'store/style/headerThemeSlice'
import MainNav from './MainNav'

const Header = () => {
    const lang = useLocale()
    const isLayoutXL = useMedia('(min-width: 1200px)')
    const [isWhiteBg, toggleWhiteBg] = useState(false)
    const seonsorRef = useRef(null)
    const location = useLocation()
    const [isMenuOpen, toggleMenu] = useState(false)
    const headerTheme = useSelector((state) => state.headerTheme, shallowEqual)

    const dispatch = useDispatch()

    const isIndexPage =
        location.pathname === '/' || location.pathname === '/zh-tw'
    const MainComp = isIndexPage ? 'h1' : 'div'

    useEffect(() => {
        dispatch(changeHeaderTheme('clear'))
    }, [location.pathname, location.search])

    useEffect(() => {
        const sensor = seonsorRef.current

        const observer = new IntersectionObserver((entries, observer) => {
            toggleWhiteBg(!entries[0].isIntersecting)
        })

        observer.observe(sensor)
        return () => {
            observer.disconnect()
        }
    }, [])
    return (
        <>
            <header
                className={`header-wrapper fixed-top w-100 border-bottom bg-white trs-all`}
            >
                <div className="header d-flex justify-between align-items-center w-100 h-7 h-xl-13 max-w-[1920px] px-2 px-xl-3 mx-md-auto">
                    <MainComp className={`mr-auto z-100 position-relative`}>
                        <Link className="main-logo d-block" to={`/`}>
                            <div className="sr-only">
                                <I18N>台灣水果旅行</I18N>
                            </div>
                        </Link>
                    </MainComp>

                    <div className="flex flex-col items-end gap-2">
                        {isLayoutXL && (
                            <ul className="text-[#767676] fz-15px flex gap-4">
                                <li>
                                    <Link
                                        href="#"
                                        title={translate('農遊易遊網', lang)}
                                        target="_blank"
                                    >
                                        <I18N>農遊易遊網</I18N>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        title="Leaflet Download"
                                        target="_blank"
                                    >
                                        Leaflet Download
                                    </Link>
                                </li>
                            </ul>
                        )}
                        <MainNav />
                    </div>
                </div>
            </header>
            <div
                className="absolute-top-left w-1 h-1 z-99999 mt-0 mt-xl-10 pointer-events-none"
                ref={seonsorRef}
            ></div>
        </>
    )
}

export default React.memo(Header)
