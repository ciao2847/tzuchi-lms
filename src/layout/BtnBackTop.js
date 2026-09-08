import React, { useEffect, useRef, useState } from 'react'

const BtnBackTop = () => {
    const [isBtnTopShow, toggleBtnTop] = useState(false)
    const seonsorRef = useRef(null)
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
                    !isBtnTopShow && 'op-0 pointer-events-none'
                } fixed-bottom btn flex-column w-6 h-6 ml-auto mr-2 mb-5 pointer-events-auto z-99999 rounded-circle trs-all shadow border-0`}
                onClick={() => {
                    document
                        .querySelector('#top')
                        .scrollIntoView({ behavior: 'smooth' })
                    // document.querySelector('#btn-main-content').focus()
                }}
            >
                <i
                    className="icon icon-arrow-up text-[#82BE66] fz-16px lh-initial"
                    aria-hidden="true"
                ></i>
                <div className="fz-13px lh-initial font-weight-bold">Top</div>
            </button>
            <div
                className="absolute-top-left w-1 h-1 z-99999 mt-10 mt-xl-15 pointer-events-none"
                ref={seonsorRef}
            ></div>
        </>
    )
}

export default React.memo(BtnBackTop)
