import React from 'react'
import I18N from 'components/I18N'

const BtnMenu = ({ className, isOpen, toggle }) => {
    return (
        <button
            className={`btn btn-open-menu w-6 h-6 border-0 bg-none ${className}`}
            aria-expanded={isOpen.toString()}
            onClick={() => {
                toggle((prev) => !prev)
            }}
        >
            <svg
                fill="var(--button-color)"
                className="w-100 h-100"
                viewBox="0 0 100 100"
            >
                <rect
                    className="line top"
                    width="80"
                    height="10"
                    x="10"
                    y="27"
                    rx="5"
                ></rect>

                <rect
                    className="line bottom"
                    width="80"
                    height="10"
                    x="10"
                    y="63"
                    rx="5"
                ></rect>
            </svg>
            <div className="sr-only">
                <I18N>開啟</I18N>
            </div>
        </button>
    )
}

export default React.memo(BtnMenu)
