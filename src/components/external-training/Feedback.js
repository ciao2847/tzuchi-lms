import React, { useState } from 'react'
import I18N from 'components/I18N'
import {
    ATTRIBUTE_OPTIONS,
    MORE_ATTRIBUTE_GROUPS,
    SATISFACTION_QUESTIONS,
    SATISFACTION_OPTIONS,
    INPUT_CLASS,
    FIELD_LABEL_CLASS
} from './formConfig'

const AttributeCheckbox = ({ checked, onChange, title }) => (
    <label className="inline-flex min-h-9 cursor-pointer items-center gap-2 text-[12px] font-medium text-primary md:text-[13px]">
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="peer sr-only"
        />
        <span className="flex size-4 shrink-0 items-center justify-center rounded-[3px] border border-solid border-[#9db0c7] bg-white text-[10px] text-white peer-checked:border-primary peer-checked:bg-primary peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-secondary">
            {checked && <i className="icon icon-checked" aria-hidden="true" />}
        </span>
        <I18N>{title}</I18N>
    </label>
)

const Feedback = ({
    formId,
    form,
    onToggleAttribute,
    onUpdateField,
    onUpdateSatisfaction
}) => {
    const [isMoreOpen, setIsMoreOpen] = useState(false)
    const [openAttributeGroup, setOpenAttributeGroup] = useState(null)

    return (
        <>
            <fieldset className="border-t border-solid border-[#e2e9f2] pt-4">
                <legend className="sr-only">
                    <I18N>課程屬性</I18N>
                </legend>
                <h3 className={FIELD_LABEL_CLASS}>
                    <I18N>課程屬性</I18N>
                </h3>
                <div className="grid grid-cols-2 gap-x-4 md:grid-cols-3">
                    {ATTRIBUTE_OPTIONS.map((attribute) => (
                        <AttributeCheckbox
                            key={attribute}
                            title={attribute}
                            checked={form.attributes.includes(attribute)}
                            onChange={() => onToggleAttribute(attribute)}
                        />
                    ))}
                </div>
                <button
                    type="button"
                    className="mt-2 inline-flex min-h-9 items-center gap-2 text-[12px] font-bold text-secondary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
                    aria-expanded={isMoreOpen}
                    aria-controls={formId + '-more-attributes'}
                    onClick={() => setIsMoreOpen((current) => !current)}
                >
                    <i
                        className={
                            'icon icon-arrow-down text-[10px] transition-transform ' +
                            (isMoreOpen ? 'rotate-180' : '')
                        }
                        aria-hidden="true"
                    />
                    <I18N>
                        {isMoreOpen ? '收合更多屬性選項' : '展開更多屬性選項'}
                    </I18N>
                </button>
                {isMoreOpen && (
                    <div
                        id={formId + '-more-attributes'}
                        className="mt-1 divide-y divide-[#e3eaf3] border-y border-solid border-[#e3eaf3]"
                    >
                        {MORE_ATTRIBUTE_GROUPS.map(({ title, options }) => {
                            const isOpen = openAttributeGroup === title
                            return (
                                <div key={title}>
                                    <div className="flex min-h-11 items-center justify-between gap-2">
                                        <AttributeCheckbox
                                            title={title}
                                            checked={form.attributes.includes(
                                                title
                                            )}
                                            onChange={() =>
                                                onToggleAttribute(title)
                                            }
                                        />
                                        <button
                                            type="button"
                                            className="flex size-9 items-center justify-center text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
                                            aria-label={
                                                (isOpen ? '收合' : '展開') +
                                                title +
                                                '選項'
                                            }
                                            aria-expanded={isOpen}
                                            onClick={() =>
                                                setOpenAttributeGroup(
                                                    isOpen ? null : title
                                                )
                                            }
                                        >
                                            <i
                                                className={
                                                    'icon icon-arrow-down text-[10px] transition-transform ' +
                                                    (isOpen ? 'rotate-180' : '')
                                                }
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                    {isOpen && (
                                        <div className="grid grid-cols-2 gap-x-4 bg-[#f5f8fd] px-3 py-2">
                                            {options.map((option) => (
                                                <AttributeCheckbox
                                                    key={option}
                                                    title={option}
                                                    checked={form.attributes.includes(
                                                        option
                                                    )}
                                                    onChange={() =>
                                                        onToggleAttribute(
                                                            option
                                                        )
                                                    }
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                )}
            </fieldset>

            <div className="border-t border-solid border-[#e2e9f2] pt-4">
                <h3 className={FIELD_LABEL_CLASS}>
                    <I18N>滿意度</I18N>
                </h3>
                <div className="space-y-4">
                    {SATISFACTION_QUESTIONS.map((question, index) => (
                        <fieldset key={question}>
                            <legend className="mb-1 text-[12px] font-bold text-primary md:text-[13px]">
                                {index + 1}. <I18N>{question}</I18N>
                            </legend>
                            <div className="grid grid-cols-5 gap-1">
                                {SATISFACTION_OPTIONS.map(
                                    ({ value, title }) => (
                                        <label
                                            key={value}
                                            className="flex min-w-0 cursor-pointer flex-col items-center gap-1 text-center text-[10px] leading-4 text-[#506985] md:text-[12px]"
                                        >
                                            <input
                                                type="radio"
                                                name={
                                                    formId + '-rating-' + index
                                                }
                                                value={value}
                                                checked={
                                                    form.satisfaction[
                                                        question
                                                    ] === value
                                                }
                                                className="peer sr-only"
                                                onChange={() =>
                                                    onUpdateSatisfaction(
                                                        question,
                                                        value
                                                    )
                                                }
                                            />
                                            <span className="flex size-4 items-center justify-center rounded-full border border-solid border-[#9db0c7] bg-white peer-checked:border-primary peer-checked:before:size-2 peer-checked:before:rounded-full peer-checked:before:bg-primary peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-secondary" />
                                            <I18N>{title}</I18N>
                                        </label>
                                    )
                                )}
                            </div>
                        </fieldset>
                    ))}
                </div>
            </div>

            <div>
                <label
                    className={FIELD_LABEL_CLASS}
                    htmlFor={formId + '-reflection'}
                >
                    <I18N>心得</I18N>
                </label>
                <textarea
                    id={formId + '-reflection'}
                    className={INPUT_CLASS + ' min-h-[110px] resize-y py-3'}
                    value={form.reflection}
                    placeholder="請分享你的學習心得…"
                    onChange={({ target: { value } }) =>
                        onUpdateField('reflection', value)
                    }
                />
            </div>
        </>
    )
}

export default Feedback
