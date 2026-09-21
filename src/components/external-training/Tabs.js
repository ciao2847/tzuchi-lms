import React, { useRef } from 'react'
import I18N from 'components/I18N'

const Tabs = ({ options, activeId, onChange }) => {
    const tabRefs = useRef([])
    const { length: tabCount } = options

    const handleKeyDown = (event, index) => {
        const { key } = event
        let nextIndex

        if (key === 'ArrowRight') {
            nextIndex = (index + 1) % tabCount
        } else if (key === 'ArrowLeft') {
            nextIndex = (index - 1 + tabCount) % tabCount
        } else if (key === 'Home') {
            nextIndex = 0
        } else if (key === 'End') {
            nextIndex = tabCount - 1
        } else {
            return
        }

        event.preventDefault()
        const { id } = options[nextIndex]
        const { current } = tabRefs
        onChange(id)
        current[nextIndex]?.focus()
    }

    return (
        <ul
            className="grid w-full min-w-0 flex-1 grid-cols-4 border-b border-solid border-[#dce5f0] xl:border-o"
            role="tablist"
            aria-label="外訓資料分類"
        >
            {options.map(({ id, title, mobileTitle }, index) => {
                const isActive = activeId === id

                return (
                    <li key={id} className="min-w-0">
                        <button
                            id={`external-training-tab-${id}`}
                            type="button"
                            role="tab"
                            className={`relative flex h-[52px] w-full items-center justify-center px-1 text-[13px] md:text-[15px] font-bold leading-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary md:h-[66px] xl:text-[17px] xl:leading-6 ${
                                isActive
                                    ? 'text-main after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:rounded-full after:bg-main'
                                    : 'text-[#3d5572] hover:text-secondary'
                            }`}
                            aria-selected={isActive}
                            aria-controls="external-training-panel"
                            tabIndex={isActive ? 0 : -1}
                            ref={(node) => {
                                const { current } = tabRefs
                                current[index] = node
                            }}
                            onClick={() => onChange(id)}
                            onKeyDown={(event) => handleKeyDown(event, index)}
                        >
                            <span className="min-w-0 truncate">
                                {mobileTitle ? (
                                    <>
                                        <span className="md:hidden">
                                            <I18N>{mobileTitle}</I18N>
                                        </span>
                                        <span className="hidden md:inline">
                                            <I18N>{title}</I18N>
                                        </span>
                                    </>
                                ) : (
                                    <I18N>{title}</I18N>
                                )}
                            </span>
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

export default React.memo(Tabs)
