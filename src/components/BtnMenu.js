import React from 'react'
import I18N from 'components/I18N'

const BtnMenu = ({ className = '', controlsId, isOpen, toggle }) => {
    return (
        <button
            type="button"
            className={`btn-open-menu inline-flex w-8 h-8 shrink-0 top-4 items-center justify-center border-0 bg-transparent p-0 text-primary transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-primary ${className}`}
            aria-controls={controlsId}
            aria-expanded={isOpen}
            onClick={() => {
                toggle((prev) => !prev)
            }}
        >
            <svg
                fill="currentColor"
                className="block w-full h-full"
                viewBox="0 0 100 100"
                aria-hidden="true"
                focusable="false"
            >
                <rect
                    className={`line top origin-center transition-transform duration-300 ${
                        isOpen ? 'rotate-[42deg]' : '-translate-y-[18px]'
                    }`}
                    width="80"
                    height="10"
                    x="10"
                    y="45"
                    rx="5"
                ></rect>

                <rect
                    className={`line bottom origin-center transition-transform duration-300 ${
                        isOpen ? '-rotate-[42deg]' : 'translate-y-[18px]'
                    }`}
                    width="80"
                    height="10"
                    x="10"
                    y="45"
                    rx="5"
                ></rect>
            </svg>
            <div className="sr-only">
                <I18N>{isOpen ? '關閉選單' : '開啟選單'}</I18N>
            </div>
        </button>
    )
}

export default React.memo(BtnMenu)
