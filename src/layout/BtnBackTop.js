import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

const BtnBackTop = () => {
    const [isBtnTopShow, toggleBtnTop] = useState(false)
    const seonsorRef = useRef(null)
    const { pathname } = useLocation()
    const isPickDetailPage = /^\/pick\/[^/]+$/.test(pathname)
    useEffect(() => {
        const sensor = seonsorRef.current
        const observer = new IntersectionObserver((entries, observer) => {
            toggleBtnTop(!entries[0].isIntersecting)
        })

        observer.observe(sensor)
        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <>
            <button
                className={`${
                    !isBtnTopShow
                        ? 'opacity-0 pointer-events-none'
                        : 'opacity-100 pointer-events-auto'
                } ${
                    isPickDetailPage ? 'max-xl:hidden' : ''
                } fixed bottom-5 right-2 btn flex flex-col items-center justify-center w-12 h-12 z-[99999] rounded-full transition-all duration-300 shadow border-0`}
                onClick={() => {
                    document
                        .querySelector('#top')
                        .scrollIntoView({ behavior: 'smooth' })
                    // document.querySelector('#btn-main-content').focus()
                }}
            >
                <i
                    className="icon icon-arrow-up text-[#82BE66] text-[16px] leading-normal"
                    aria-hidden="true"
                ></i>
                <div className="text-[13px] leading-normal font-bold">Top</div>
            </button>
            <div
                className="absolute top-0 left-0 w-1 h-1 z-[99999] mt-10 xl:mt-16 pointer-events-none"
                ref={seonsorRef}
            ></div>
        </>
    )
}

export default React.memo(BtnBackTop)
