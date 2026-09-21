import React from 'react'
import I18N from 'components/I18N'
import {
    APPLICABILITY_OPTIONS,
    INPUT_CLASS,
    FIELD_LABEL_CLASS
} from './formConfig'

const Details = ({ formId, form, onUpdateField }) => (
    <>
        <fieldset>
            <legend className={FIELD_LABEL_CLASS}>
                <I18N>適用</I18N>
            </legend>
            <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {APPLICABILITY_OPTIONS.map((option) => (
                    <label key={option} className="shrink-0 cursor-pointer">
                        <input
                            type="radio"
                            name={formId + '-applicability'}
                            value={option}
                            checked={form.applicability === option}
                            className="peer sr-only"
                            onChange={() =>
                                onUpdateField('applicability', option)
                            }
                        />
                        <span className="inline-flex min-h-9 items-center justify-center rounded-[6px] border border-solid border-[#cfdbea] bg-white px-3 text-[12px] font-medium text-primary transition-colors peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-secondary md:text-[13px]">
                            <I18N>{option}</I18N>
                        </span>
                    </label>
                ))}
            </div>
        </fieldset>

        <div>
            <label className={FIELD_LABEL_CLASS} htmlFor={formId + '-name'}>
                <I18N>名稱</I18N>
            </label>
            <input
                id={formId + '-name'}
                className={INPUT_CLASS}
                value={form.title}
                placeholder="請寫參與課程之「主題」…"
                required
                onChange={({ target: { value } }) =>
                    onUpdateField('title', value)
                }
            />
        </div>

        <div>
            <label
                className={FIELD_LABEL_CLASS}
                htmlFor={formId + '-organization'}
            >
                <I18N>訓練機構</I18N>
            </label>
            <input
                id={formId + '-organization'}
                className={INPUT_CLASS}
                value={form.organization}
                placeholder="請輸入訓練機構名稱"
                required
                onChange={({ target: { value } }) =>
                    onUpdateField('organization', value)
                }
            />
        </div>

        {[
            { key: 'start', title: '開始時間' },
            { key: 'end', title: '結束時間' }
        ].map(({ key, title }) => (
            <fieldset key={key}>
                <legend className={FIELD_LABEL_CLASS}>
                    <I18N>{title}</I18N>
                </legend>
                <div className="grid grid-cols-[minmax(0,1fr)_110px] gap-2">
                    <label
                        className="sr-only"
                        htmlFor={formId + '-' + key + '-date'}
                    >
                        {title}日期
                    </label>
                    <input
                        id={formId + '-' + key + '-date'}
                        type="date"
                        className={INPUT_CLASS}
                        value={form[key + 'Date']}
                        required
                        onChange={({ target: { value } }) =>
                            onUpdateField(key + 'Date', value)
                        }
                    />
                    <label
                        className="sr-only"
                        htmlFor={formId + '-' + key + '-time'}
                    >
                        {title}時刻
                    </label>
                    <input
                        id={formId + '-' + key + '-time'}
                        type="time"
                        className={INPUT_CLASS + ' px-2'}
                        value={form[key + 'Time']}
                        required
                        onChange={({ target: { value } }) =>
                            onUpdateField(key + 'Time', value)
                        }
                    />
                </div>
            </fieldset>
        ))}

        <fieldset>
            <legend className={FIELD_LABEL_CLASS}>
                <I18N>共計時數</I18N>
            </legend>
            <div className="flex items-center gap-2 text-[12px] text-primary md:text-[13px]">
                <input
                    type="number"
                    min="0"
                    max="999"
                    inputMode="numeric"
                    aria-label="小時"
                    className={INPUT_CLASS + ' !w-20'}
                    value={form.hours}
                    required
                    onChange={({ target: { value } }) =>
                        onUpdateField('hours', value)
                    }
                />
                <I18N>小時</I18N>
                <input
                    type="number"
                    min="0"
                    max="59"
                    inputMode="numeric"
                    aria-label="分鐘"
                    className={INPUT_CLASS + ' !w-20'}
                    value={form.minutes}
                    required
                    onChange={({ target: { value } }) =>
                        onUpdateField('minutes', value)
                    }
                />
                <I18N>分</I18N>
            </div>
        </fieldset>
    </>
)

export default Details
