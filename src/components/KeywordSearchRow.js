import React from 'react'
import I18N from 'components/I18N'

const KeywordSearchRow = ({
    className = '',
    id,
    label,
    onChange,
    onClear,
    placeholder,
    value
}) => (
    <div
        className={`grid gap-2 md:gap-3 xl:grid-cols-[minmax(0,1fr)_280px] xl:items-end xl:gap-6 ${className}`}
    >
        <label className="block min-w-0" htmlFor={id}>
            <span className="mb-1 block text-[12px] font-bold leading-4 text-primary md:mb-2 md:text-[13px] md:leading-5 xl:text-[15px] xl:leading-6">
                <I18N>{label}</I18N>
            </span>
            <input
                id={id}
                type="search"
                className="h-8 w-full rounded-[5px] border border-solid border-[#d8e1ee] bg-white px-3 text-[12px] text-primary outline-none placeholder:text-[#a9b4c1] focus:border-secondary md:h-10 md:px-4 md:text-[13px] xl:text-[15px]"
                placeholder={placeholder}
                value={value}
                onChange={({ target: { value: nextValue } }) =>
                    onChange(nextValue)
                }
            />
        </label>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-2">
            <button
                type="submit"
                className="inline-flex h-8 w-full items-center justify-center gap-2 rounded-[5px] bg-main px-3 text-[12px] font-bold text-white transition-colors hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:h-10 md:px-5 md:text-[13px] xl:text-[15px]"
            >
                <i
                    className="icon icon-search h-4 w-4 text-[14px]"
                    aria-hidden="true"
                />
                <I18N>開始查詢</I18N>
            </button>
            <button
                type="button"
                className="inline-flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-[5px] border border-solid border-primary bg-white px-3 text-[12px] font-bold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:h-10 md:px-4 md:text-[13px] xl:text-[15px]"
                onClick={onClear}
            >
                <I18N>清除條件</I18N>
            </button>
        </div>
    </div>
)

export default React.memo(KeywordSearchRow)
