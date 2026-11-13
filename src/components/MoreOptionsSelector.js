import React from 'react'

const buttonClass = selected => `flex h-10 w-full min-w-0 items-center justify-center gap-2 rounded-full border border-solid px-4 text-[13px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary xl:text-[14px] ${selected ? 'border-blue bg-[#eaf3ff] text-blue ring-2 ring-blue/15' : 'border-[#dce5f0] bg-white text-[#708399] hover:border-secondary hover:bg-[#f3f7fd]'}`

const MoreOptionsSelector = ({ options, value, onChange, ariaLabel, moreLabel, emptyText, className = 'grid' }) => {
    const more = options.slice(2)
    const selectedMore = more.find(option => option.value === value)
    return <div className={`grid-cols-3 gap-2 ${className}`} role="group" aria-label={ariaLabel}>
            {options.slice(0, 2).map(option => <button key={option.value} type="button" title={option.label}
                className={buttonClass(option.value === value)} aria-pressed={option.value === value}
                onClick={() => onChange(option.value)}><span className="truncate">{option.label}</span></button>)}
            <details className="relative col-start-3"
                onBlur={({ currentTarget, relatedTarget }) => { if (!currentTarget.contains(relatedTarget)) currentTarget.open = false }}
                onKeyDown={event => { if (event.key === 'Escape') { event.currentTarget.open = false; event.currentTarget.querySelector('summary')?.focus() } }}>
                <summary title={selectedMore?.label || moreLabel} className={`${buttonClass(Boolean(selectedMore))} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>
                    <span className="truncate">{selectedMore ? `更多：${selectedMore.label}` : '更多'}</span>
                    <i className="icon icon-arrow-down shrink-0 text-[9px]" aria-hidden="true" />
                </summary>
                <div className="absolute right-0 top-full z-20 mt-2 max-h-60 w-[min(320px,calc(100vw-3rem))] overflow-y-auto overscroll-contain rounded-[8px] border border-solid border-[#d8e1ee] bg-white py-1 shadow-lg" role="group" aria-label={moreLabel}>
                    {more.length ? more.map(option => <button key={option.value} type="button" aria-pressed={option.value === value}
                        className={`block w-full break-words px-4 py-2 text-left text-[13px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary xl:text-[14px] ${option.value === value ? 'bg-[#eaf3ff] font-bold text-blue' : 'text-primary hover:bg-[#f3f7fd]'}`}
                        onClick={event => { onChange(option.value); event.currentTarget.closest('details').open = false }}>
                        {option.label}
                    </button>) : <p className="px-4 py-2 text-[13px] text-[#8292a7]">{emptyText}</p>}
                </div>
            </details>
        </div>
}

export default MoreOptionsSelector
