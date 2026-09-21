import React from 'react'
import I18N from 'components/I18N'

const VIEW_MODES = [
    { id: 'card', title: '卡片', icon: 'grid' },
    { id: 'list', title: '列表', icon: 'list' }
]

const ViewModeToggle = ({ ariaLabel, value, onChange }) => (
    <div
        role="group"
        aria-label={ariaLabel}
        className="inline-flex overflow-hidden rounded-[6px] border border-solid border-[#d8e1ee] bg-white"
    >
        {VIEW_MODES.map(({ id, title, icon }) => (
            <button
                key={id}
                type="button"
                aria-pressed={value === id}
                onClick={() => onChange(id)}
                className={`inline-flex min-h-9 items-center justify-center gap-1.5 px-3 text-[12px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-secondary md:min-h-10 md:text-[13px] ${
                    value === id
                        ? 'bg-primary text-white'
                        : 'text-primary hover:bg-[#f3f7fd]'
                }`}
            >
                <i
                    className={`icon icon-${icon} text-[14px]`}
                    aria-hidden="true"
                />
                <I18N>{title}</I18N>
            </button>
        ))}
    </div>
)

export default React.memo(ViewModeToggle)
