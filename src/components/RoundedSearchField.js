import React, { useId } from 'react'

const RoundedSearchField = ({ value, onChange, label = '搜尋課程名稱', placeholder = '請輸入課程名稱' }) => {
    const id = useId()
    return <div role="search" aria-label={label} className="flex h-10 w-full items-center gap-2 rounded-full border border-solid border-[#dce5f0] bg-white px-4 text-[13px] text-[#486785] focus-within:border-secondary focus-within:ring-2 focus-within:ring-blue/15 xl:text-[14px]">
        <label htmlFor={id} className="sr-only">{label}</label>
        <i className="icon icon-search shrink-0 text-secondary" aria-hidden="true" />
        <input id={id} type="search" value={value} onChange={event => onChange(event.target.value)}
            placeholder={placeholder} className="h-full min-w-0 flex-1 bg-transparent outline-none placeholder:text-[#8292a7]" />
    </div>
}

export default RoundedSearchField
