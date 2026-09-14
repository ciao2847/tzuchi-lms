import React, { useState, useRef } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Captcha from 'components/Captcha'
import BtnCaptchaVoice from 'components/BtnCaptchaVoice'
import NumericStepper from 'components/NumericStepper'
import TimeRangePicker from 'components/TimeRangePicker'
import FileSelector from 'components/FileSelector'
import AddressInputBlk from 'components/AddressInputBlk'
import I18N from 'components/I18N'
import { FORM_COLUMN_TYPE_MAP } from 'constants/'
import { getUserGeolocation, uuidv4 } from 'constants/utils'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
//import zhTW from 'date-fns/locale/zh-tw'
import { zhTW } from 'date-fns/locale'
registerLocale('zh-tw', zhTW)
const OptionItem = ({
    title,
    needComment,
    id,
    type,
    name,
    idx,
    callback,
    register,
    watch
}) => (
    <div className="flex relative">
        <input
            className="hide-switch"
            type={type === FORM_COLUMN_TYPE_MAP.RADIO ? 'radio' : 'checkbox'}
            name={name}
            value={id}
            id={`${name}-${idx}`}
            {...register(name, {
                onChange: (e) => {
                    callback?.(e.target.value)
                },
                required: '此欄位為必填'
            })}
        />
        <label
            className={`option flex pl-[12px] pr-2 py-1 border rounded bg-white transition-all focus-hint ${
                type === FORM_COLUMN_TYPE_MAP.RADIO ? 'radio' : ''
            }`}
            htmlFor={`${name}-${idx}`}
        >
            {title}
            {needComment && (
                <>
                    <input
                        className="ml-1 border-t-0 border-l-0 border-r-0 border-b outline-none"
                        type="text"
                        {...register(`${name}_comment`, {
                            required:
                                watch(name) !== null &&
                                watch(name) !== undefined &&
                                watch(name) * 1 === id &&
                                '此欄位為必填'
                        })}
                    />
                </>
            )}
        </label>
    </div>
)
const SchemaForm = ({ data, children, onSubmit, className }) => {
    const captchaRef = useRef()
    const [token] = useState(uuidv4())
    const {
        setValue,
        watch,
        control,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    return (
        <form className={className || ''} onSubmit={handleSubmit(onSubmit)}>
            {data.map(
                (
                    {
                        title,
                        name,
                        type,
                        value,
                        defaultValue,
                        options,
                        items,
                        hint,
                        hintClassName,
                        label,
                        filterDate,
                        minDate,
                        maxDate,
                        minTime,
                        maxTime,
                        min = { value: 1 },
                        max = { value: 9999 },
                        accept = '',
                        multiple = false,
                        maxFileNums = 10,
                        maxFileSize = 20,
                        callback,
                        noAddress,
                        orderByGroup
                    },
                    i
                ) => {
                    const isSelectType =
                        type === FORM_COLUMN_TYPE_MAP.RADIO ||
                        type === FORM_COLUMN_TYPE_MAP.CHECKBOX ||
                        type === FORM_COLUMN_TYPE_MAP.ADDRESS
                    const WrapComp = isSelectType ? 'fieldset' : React.Fragment
                    const TitleComp = isSelectType ? 'legend' : 'label'
                    if (type === FORM_COLUMN_TYPE_MAP.HIDDEN) {
                        return (
                            <input
                                type="hidden"
                                name={name}
                                value={value}
                                key={i}
                                {...register(name)}
                            />
                        )
                    }
                    if (type === FORM_COLUMN_TYPE_MAP.ACCEPT) {
                        return (
                            <div className="block pb-3" key={i}>
                                <input
                                    className="hide-switch"
                                    type="checkbox"
                                    name={name}
                                    id={name}
                                    value={value}
                                    {...register(name, options || {})}
                                />
                                <label
                                    className="option flex"
                                    htmlFor={name}
                                >
                                    <div>
                                        我已詳閱「
                                        <a
                                            className="inline-block text-primary"
                                            href="/zh-tw/privacy"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="隱私權政策及個人資料使用宣告(另開視窗)"
                                        >
                                            隱私權政策及個人資料使用宣告
                                        </a>
                                        」文件內容，並完全同意其中各項規定
                                    </div>
                                </label>
                                {errors[name] && (
                                    <div className="mt-[4px] text-danger text-[13px]">
                                        {errors[name].message}
                                    </div>
                                )}
                            </div>
                        )
                    }

                    return (
                        <div className="block pb-3" key={i}>
                            <WrapComp>
                                <TitleComp
                                    className={`inline-flex items-baseline mb-1 text-[18px] xl:text-[20px] font-bold`}
                                    {...(!isSelectType
                                        ? { htmlFor: name }
                                        : null)}
                                >
                                    <I18N>{title}</I18N>
                                    {/*!!options?.required && (
                                        <div className="ml-2 text-primary text-[15px] font-bold">
                                            (<I18N>必填</I18N>)
                                        </div>
                                    )*/}
                                    {/*!options?.required && (
                                        <div className="ml-2 text-info text-[15px] font-normal">
                                            (<I18N>非必填</I18N>)
                                        </div>
                                    )*/}
                                </TitleComp>
                                {type === FORM_COLUMN_TYPE_MAP.FILE && (
                                    <Controller
                                        control={control}
                                        name={name}
                                        rules={{
                                            required: options?.required
                                        }}
                                        render={({
                                            field: { onChange, name, ref },
                                            formState: { errors }
                                        }) => (
                                            <>
                                                <FileSelector
                                                    className="mb-1"
                                                    name={name}
                                                    onChange={(files) =>
                                                        onChange(files)
                                                    }
                                                    accept={accept}
                                                    multiple={multiple}
                                                    label={label || '選取檔案'}
                                                    ref={ref}
                                                    maxFileNums={maxFileNums}
                                                    maxFileSize={maxFileSize}
                                                />
                                            </>
                                        )}
                                    />
                                )}
                                {type === FORM_COLUMN_TYPE_MAP.TEXT && (
                                    <>
                                        <input
                                            type="text"
                                            className={`ipt block px-1 rounded text-[16px] ${
                                                errors[name] ? '!border-danger' : ''
                                            }`}
                                            name={name}
                                            id={name}
                                            autoComplete="off"
                                            {...register(name, options || {})}
                                        />
                                    </>
                                )}
                                {type === FORM_COLUMN_TYPE_MAP.COORDINATE && (
                                    <div className="flex">
                                        <input
                                            type="text"
                                            className={`ipt block px-1 rounded text-[16px] ${
                                                errors[name] ? '!border-danger' : ''
                                            }`}
                                            name={name}
                                            id={name}
                                            autoComplete="off"
                                            {...register(name, options || {})}
                                            style={{ maxWidth: 400 }}
                                        />
                                        <button
                                            className="btn btn-outline-primary shrink-0 ml-1 rounded text-primary"
                                            type="button"
                                            onClick={() => {
                                                getUserGeolocation().then(
                                                    (latlng) => {
                                                        setValue(
                                                            name,
                                                            `${latlng.lat},${latlng.lng}`
                                                        )
                                                    }
                                                )
                                            }}
                                        >
                                            <i
                                                className="icon icon-location mr-[4px]"
                                                aria-hidden="true"
                                            ></i>
                                            取得當前座標
                                        </button>
                                    </div>
                                )}
                                {type === FORM_COLUMN_TYPE_MAP.TEXTAREA && (
                                    <textarea
                                        type="text"
                                        className={`ipt block h-12 p-1 rounded text-[16px] ${
                                            errors[name] ? '!border-danger' : ''
                                        }`}
                                        name={name}
                                        id={name}
                                        autoComplete="off"
                                        {...register(name, options || {})}
                                    ></textarea>
                                )}
                                {(type === FORM_COLUMN_TYPE_MAP.RADIO ||
                                    type === FORM_COLUMN_TYPE_MAP.CHECKBOX) &&
                                    (orderByGroup ? (
                                        <div>
                                            {items
                                                .reduce((acc, current) => {
                                                    if (
                                                        acc.includes(
                                                            current.group
                                                        )
                                                    ) {
                                                        return acc
                                                    } else {
                                                        return [
                                                            ...acc,
                                                            ...[current.group]
                                                        ]
                                                    }
                                                }, [])
                                                .map((item, i) => (
                                                    <div
                                                        className="mb-2 last:mb-0"
                                                        key={i}
                                                    >
                                                        <div className="font-bold md:text-[18px] text-primary">
                                                            {item}
                                                        </div>
                                                        <ul className="flex flex-wrap mt-2">
                                                            {items
                                                                ?.filter(
                                                                    ({
                                                                        group
                                                                    }) =>
                                                                        group ===
                                                                        item
                                                                )
                                                                .map(
                                                                    (
                                                                        {
                                                                            title,
                                                                            id,
                                                                            needComment
                                                                        },
                                                                        j
                                                                    ) => (
                                                                        <li
                                                                            className="mb-2 mr-2"
                                                                            key={
                                                                                id
                                                                            }
                                                                        >
                                                                            <OptionItem
                                                                                {...{
                                                                                    title,
                                                                                    needComment,
                                                                                    id,
                                                                                    type,
                                                                                    name,
                                                                                    idx: `${i}-${j}`,
                                                                                    callback,
                                                                                    register,
                                                                                    watch
                                                                                }}
                                                                            />
                                                                        </li>
                                                                    )
                                                                )}
                                                        </ul>
                                                    </div>
                                                ))}
                                        </div>
                                    ) : (
                                        <ul className="flex flex-wrap">
                                            {items?.map(
                                                (
                                                    { title, id, needComment },
                                                    i
                                                ) => (
                                                    <li
                                                        className="mb-2 mr-2"
                                                        key={id}
                                                    >
                                                        <OptionItem
                                                            {...{
                                                                title,
                                                                needComment,
                                                                id,
                                                                type,
                                                                name,
                                                                idx: i,
                                                                callback,
                                                                register,
                                                                watch
                                                            }}
                                                        />
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    ))}
                                {type === FORM_COLUMN_TYPE_MAP.TIME_RANGE && (
                                    <Controller
                                        control={control}
                                        name={name}
                                        rules={{
                                            required: options?.required
                                        }}
                                        defaultValue={defaultValue}
                                        render={({
                                            field: { onChange, value, ref }
                                        }) => {
                                            return (
                                                <div className="flex">
                                                    <TimeRangePicker
                                                        value={value}
                                                        onChange={(v) => {
                                                            onChange(v)
                                                        }}
                                                        minTime={minTime}
                                                        maxTime={maxTime}
                                                        ref={ref}
                                                    />
                                                </div>
                                            )
                                        }}
                                    />
                                )}
                                {type === FORM_COLUMN_TYPE_MAP.ADDRESS && (
                                    <Controller
                                        control={control}
                                        name={name}
                                        rules={{
                                            required: options?.required
                                        }}
                                        defaultValue={defaultValue}
                                        render={({
                                            field: { onChange, value, ref }
                                        }) => {
                                            return (
                                                <div className="w-full">
                                                    <AddressInputBlk
                                                        onChange={onChange}
                                                        noAddress={!!noAddress}
                                                    />
                                                </div>
                                            )
                                        }}
                                    />
                                )}

                                {type === FORM_COLUMN_TYPE_MAP.DATE && (
                                    <Controller
                                        control={control}
                                        name={name}
                                        rules={{ required: '此欄位為必填' }}
                                        render={({
                                            field: {
                                                onChange,
                                                name,
                                                value,
                                                ref
                                            },
                                            formState: { errors }
                                        }) => (
                                            <div
                                                className="relative"
                                                style={{ maxWidth: 180 }}
                                            >
                                                <DatePicker
                                                    selected={value}
                                                    onChange={(date) => {
                                                        onChange(date)
                                                    }}
                                                    dateFormat="yyyy-MM-dd"
                                                    locale="zh-tw"
                                                    peekNextMonth
                                                    dropdownMode="select"
                                                    placeholderText={`範例：2023-01-01`}
                                                    className={`${
                                                        errors[name] ? '!border-danger ' : ''
                                                    }ipt block flex-1 px-1 rounded text-[16px]`}
                                                    ref={(elem) => {
                                                        elem && ref(elem.input)
                                                    }}
                                                    id={name}
                                                    {...(filterDate
                                                        ? { filterDate }
                                                        : null)}
                                                    {...(minDate
                                                        ? { minDate }
                                                        : null)}
                                                    {...(maxDate
                                                        ? { maxDate }
                                                        : null)}
                                                />
                                                <i
                                                    className="icon icon-calendar h-5 w-5 text-info absolute top-2 right-2 pointer-events-none text-[20px]"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                        )}
                                    />
                                )}
                                {type === FORM_COLUMN_TYPE_MAP.NUMBER && (
                                    <Controller
                                        control={control}
                                        name={name}
                                        rules={{
                                            required: options?.required,
                                            min,
                                            max
                                        }}
                                        defaultValue={defaultValue}
                                        render={({
                                            field: { onChange, value, ref }
                                        }) => {
                                            return (
                                                <div className="flex">
                                                    <NumericStepper
                                                        value={value}
                                                        onChange={(v) => {
                                                            onChange(v)
                                                        }}
                                                        min={min.value}
                                                        max={max.value}
                                                        ref={ref}
                                                    />
                                                </div>
                                            )
                                        }}
                                    />
                                )}
                                {hint && (
                                    <>
                                        {Array.isArray(hint) ? (
                                            hint.map((h, i) => (
                                                <div
                                                    className={
                                                        hintClassName ||
                                                        'mt-[4px] text-secondary text-[13px]'
                                                    }
                                                    key={i}
                                                >
                                                    {h}
                                                </div>
                                            ))
                                        ) : (
                                            <div
                                                className={
                                                    hintClassName ||
                                                    'mt-[4px] text-secondary text-[13px]'
                                                }
                                            >
                                                <I18N>{hint}</I18N>
                                            </div>
                                        )}
                                    </>
                                )}
                                {errors[name] && (
                                    <div className="mt-[4px] text-danger text-[13px]">
                                        <I18N>{errors[name].message}</I18N>
                                    </div>
                                )}
                                {errors[`${name}_comment`] && (
                                    <div className="mt-[4px] text-danger text-[13px]">
                                        {errors[`${name}_comment`].message}
                                    </div>
                                )}
                            </WrapComp>
                        </div>
                    )
                }
            )}
            <div className="py-3 border-b">
                <label
                    className={`inline-flex mb-1 text-[18px] xl:text-[20px] font-bold`}
                    htmlFor="ipt-captcha"
                >
                    <I18N>驗證碼</I18N>
                </label>
                <div className="flex items-center">
                    <input
                        type="text"
                        className={`ipt block px-1 rounded text-[16px] ${
                            errors.captcha ? '!border-danger' : ''
                        }`}
                        name="Captcha"
                        id="ipt-captcha"
                        autoComplete="off"
                        {...register('captcha', {
                            required: '此欄位為必填'
                        })}
                        style={{ maxWidth: 120 }}
                    />
                    <Captcha className="ml-1" ref={captchaRef} />
                    {/*<BtnCaptchaVoice className="ml-1" />*/}
                    <button
                        className="btn shrink-0 ml-1 rounded"
                        type="button"
                        style={{ width: 42, height: 42 }}
                        onClick={() => {
                            captchaRef.current.reload()
                        }}
                    >
                        <i className="icon icon-reload" aria-hidden="true"></i>
                        <div className="sr-only">更新驗證碼圖片</div>
                    </button>
                </div>
                {errors.captcha && (
                    <div className="mt-[4px] text-danger text-[12px]">
                        <I18N>{errors.captcha.message}</I18N>
                    </div>
                )}
            </div>
            <input
                name="__RequestVerificationToken"
                type="hidden"
                value={token}
            />
            {children}
        </form>
    )
}

export default React.memo(SchemaForm)
