import React from 'react'
import I18N from 'components/I18N'

const KeywordSearchRow = ({
    className = '',
    rounded = false,
    inline = false,
    desktopSearch = false,
    id,
    label,
    onChange,
    onClear,
    placeholder,
    value
}) => (
    <div
        className={`grid gap-2 ${inline ? 'grid-cols-[minmax(0,1fr)_auto] items-center' : 'md:gap-3 xl:grid-cols-[minmax(0,1fr)_280px] xl:items-end xl:gap-6'} ${desktopSearch ? 'xl:[&_label>span]:text-[12px] xl:[&_label>span]:font-normal xl:[&_label>span]:leading-4 xl:[&_input]:h-[42px] xl:[&_input]:rounded-[8px] xl:[&_input]:text-[13px] xl:[&_input]:placeholder:text-[#708399] xl:[&_button]:h-[42px] xl:[&_button]:rounded-[8px] xl:[&_button]:text-[13px] xl:[&_button[type=submit]]:bg-[#ff7938] xl:[&_button[type=submit]:hover]:bg-secondary xl:[&_button[type=button]]:px-6 xl:[&>div]:gap-3' : ''} ${className}`}
    >
        <label className="block min-w-0" htmlFor={id}>
            <span className={inline ? 'sr-only' : 'mb-1 block text-[12px] font-bold leading-4 text-primary md:mb-2 md:text-[13px] md:leading-5 xl:text-[15px] xl:leading-6'}>
                <I18N>{label}</I18N>
            </span>
            <input
                id={id}
                type="search"
                className={`${rounded ? 'rounded-full' : 'rounded-[5px]'} ${inline ? 'h-[42px] px-3 text-[13px] placeholder:text-[#708399] md:px-5' : 'h-8 px-3 text-[12px] placeholder:text-[#a9b4c1] md:h-10 md:px-4 md:text-[13px] xl:text-[15px]'} w-full min-w-0 border border-solid border-[#d8e1ee] bg-white text-primary outline-none focus:border-secondary`}
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
                className={`${rounded ? 'rounded-full' : 'rounded-[5px]'} ${inline ? 'h-[42px] whitespace-nowrap bg-[#fa7637] px-3 text-[13px] md:px-6' : 'h-8 bg-main px-3 text-[12px] md:h-10 md:px-5 md:text-[13px] xl:text-[15px]'} inline-flex w-full items-center justify-center gap-2 font-bold text-white transition-colors hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
            >
                <i
                    className="icon icon-search h-4 w-4 text-[14px]"
                    aria-hidden="true"
                />
                <I18N>開始查詢</I18N>
            </button>
            <button
                type="button"
                className={`${rounded ? 'rounded-full' : 'rounded-[5px]'} ${inline ? 'h-[42px] border-[#073b91] px-3 text-[13px] text-[#073b91] md:px-5' : 'h-8 border-primary px-3 text-[12px] text-primary md:h-10 md:px-4 md:text-[13px] xl:text-[15px]'} inline-flex shrink-0 items-center justify-center whitespace-nowrap border border-solid bg-white font-bold transition-colors hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
                onClick={onClear}
            >
                <I18N>清除條件</I18N>
            </button>
        </div>
    </div>
)

export default React.memo(KeywordSearchRow)
