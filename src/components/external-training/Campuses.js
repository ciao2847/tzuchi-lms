import React from 'react'
import I18N from 'components/I18N'

const Campuses = ({ options, name, value, onChange }) => (
    <fieldset className="my-3 min-w-0 md:mt-4">
        <legend className="sr-only">
            <I18N>院區篩選</I18N>
        </legend>
        <div className="flex min-w-0 items-center gap-4">
            <span
                className="hidden shrink-0 text-[14px] font-bold text-primary md:block xl:text-[16px]"
                aria-hidden="true"
            >
                <I18N>院區篩選</I18N>
            </span>
            <div className="min-w-0 flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex min-w-max gap-2 pr-4 md:gap-3 md:pr-6">
                    {options.map(({ id, title }) => {
                        const inputId = `${name}-${id}`
                        const isActive = value === id

                        return (
                            <label
                                key={id}
                                htmlFor={inputId}
                                className="relative cursor-pointer"
                            >
                                <input
                                    id={inputId}
                                    type="radio"
                                    name={name}
                                    value={id}
                                    checked={isActive}
                                    className="peer sr-only"
                                    onChange={({
                                        target: { value: nextValue }
                                    }) => onChange(nextValue)}
                                />
                                <span
                                    className={`inline-flex h-8 min-w-[56px] items-center justify-center whitespace-nowrap rounded-[6px] border border-solid px-3 text-[12px] font-medium transition-colors peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-secondary md:h-9 md:min-w-[64px] md:text-[13px] xl:text-[14px] ${
                                        isActive
                                            ? 'border-success bg-success text-white'
                                            : 'border-[#d8e1ee] bg-white text-primary hover:border-secondary hover:text-secondary'
                                    }`}
                                >
                                    <I18N>{title}</I18N>
                                </span>
                            </label>
                        )
                    })}
                </div>
            </div>
        </div>
    </fieldset>
)

export default React.memo(Campuses)
