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
        <div className={`flex z-[100] relative ${className || ''}`}>
            <button
                className="js-dropdown btn justify-center w-full h-5 px-1 text-[16px] leading-normal border rounded pointer-events-auto"
                type="button"
                onClick={() => {
                    toggleShow(!isShow)
                }}
            >
                {label}
                <i
                    className="icon icon-triangle text-[13px] text-secondary"
                    aria-hidden="true"
                ></i>
            </button>
            <div
                className={`${
                    isShow ? '' : 'opacity-0 pointer-events-none'
                } transition-all duration-300 mt-7 absolute top-0 right-0 drop-shadow-[0_0_4px_rgba(0,0,0,0.5)]`}
            >
                <div className="overflow-y-auto w-[320px] h-full p-2 max-h-[480px] rounded bg-white">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default React.memo(Dropdown)
