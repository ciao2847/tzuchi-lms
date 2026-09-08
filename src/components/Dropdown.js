import React, { useState, useEffect } from 'react'
const Dropdown = ({ label, children, className }) => {
    const [isShow, toggleShow] = useState(false)
    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.js-dropdown')) {
                toggleShow(false)
            }
        })
    }, [])
    return (
        <div className={`d-flex z-100 position-relative ${className}`}>
            <button
                className="js-dropdown btn justify-content-center w-100 h-5 px-1 fz-16px lh-initial border rounded pointer-events-auto"
                type="button"
                onClick={() => {
                    toggleShow(!isShow)
                }}
            >
                {label}
                <i
                    className="icon icon-triangle fz-13px text-secondary"
                    aria-hidden="true"
                ></i>
            </button>
            <div
                className={`${
                    isShow ? '' : 'op-0 pointer-events-none'
                } trs-all mt-7 absolute-top-right drop-shadow-black-50 triangle-deco`}
            >
                <div className="scroll-blk w-320px h-100 p-2 mah-480px rounded bg-white">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default React.memo(Dropdown)
