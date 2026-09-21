import React from 'react'
import I18N from 'components/I18N'

const FilterButtons = ({
    label,
    name,
    options,
    value,
    onChange,
    tone = 'blue'
}) => (
    <fieldset className="min-w-0">
        <legend className="mb-1 text-[12px] font-bold leading-4 text-primary md:mb-2 md:text-[13px] md:leading-5 xl:text-[15px] xl:leading-6">
            <I18N>{label}</I18N>
        </legend>
        <div className="flex gap-2">
            {options.map(({ id, title }) => {
                const isActive = value === id
                const inputId = `${name}-${id}`

                return (
                    <label
                        key={id}
                        htmlFor={inputId}
                        className="min-w-0 flex-1 cursor-pointer"
                    >
                        <input
                            id={inputId}
                            type="radio"
                            name={name}
                            value={id}
                            checked={isActive}
                            className="peer sr-only"
                            onChange={({ target: { value: nextValue } }) =>
                                onChange(nextValue)
                            }
                        />
                        <span
                            className={`flex h-7 min-w-0 items-center justify-center rounded-[5px] border border-solid px-2 text-[11px] font-medium transition-colors peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-secondary md:h-9 md:text-[12px] xl:text-[14px] ${
                                isActive
                                    ? tone === 'green'
                                        ? 'border-success bg-success text-white'
                                        : 'border-primary bg-primary text-white'
                                    : 'border-[#d8e1ee] bg-white text-primary hover:border-secondary hover:bg-[#f3f7fd]'
                            }`}
                        >
                            <I18N>{title}</I18N>
                        </span>
                    </label>
                )
            })}
        </div>
    </fieldset>
)

export default React.memo(FilterButtons)
