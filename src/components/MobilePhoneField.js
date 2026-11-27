import React, { useId, useState } from 'react'

const PHONE_PATTERN = '09[0-9]{2}-[0-9]{6}'
const FORMAT_HINT = '格式範例：0911-123456'
const FORMAT_ERROR = '請輸入 09 開頭的 10 碼手機號碼，例如 0911-123456。'

const validationMessage = ({ validity }) => {
    if (validity.valueMissing) return '請輸入手機號碼。'
    if (validity.patternMismatch) return FORMAT_ERROR
    return ''
}

const MobilePhoneField = ({ name = 'phone', label = '我的手機', inputClassName = '', labelClassName = '' }) => {
    const id = useId()
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const handleChange = event => {
        const digits = event.currentTarget.value.normalize('NFKC').replace(/[^0-9]/g, '').slice(0, 10)
        if (digits && !digits.startsWith('09'.slice(0, Math.min(digits.length, 2)))) {
            setError(FORMAT_ERROR)
            return
        }

        setValue(digits.length > 4 ? `${digits.slice(0, 4)}-${digits.slice(4)}` : digits)
        setError('')
    }

    return (
        <div>
            <label className={labelClassName} htmlFor={id}>{label}</label>
            <input id={id} name={name} type="tel" inputMode="numeric" autoComplete="tel-national" value={value}
                className={`${inputClassName} aria-[invalid=true]:border-danger`}
                placeholder="例如 0911-123456" pattern={PHONE_PATTERN} required
                aria-invalid={Boolean(error)} aria-describedby={`${id}-message`}
                onChange={handleChange}
                onBlur={event => setError(validationMessage(event.currentTarget))}
                onInvalid={event => {
                    event.preventDefault()
                    setError(validationMessage(event.currentTarget))
                    event.currentTarget.focus()
                }} />
            <p id={`${id}-message`} aria-live="polite"
                className={`mt-1.5 text-[13px] leading-5 ${error ? 'text-danger' : 'text-[#486785]'}`}>
                {error || FORMAT_HINT}
            </p>
        </div>
    )
}

export default MobilePhoneField
