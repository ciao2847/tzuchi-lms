import React, { useEffect, useRef, useState } from 'react'
import Spinner from 'components/Spinner'
import { useNavigate } from 'react-router-dom'
import { registerCourse } from 'api/courseInfo'
import MobilePhoneField from 'components/MobilePhoneField'
import { FIELD_LABEL_CLASS, INPUT_CLASS } from 'components/external-training/formConfig'
import { buildRegistrationPayload, DEPENDENT_ROWS, UNIFORM_ITEMS } from 'lib/courseRegistration'

const sectionClass = 'rounded-[8px] border border-solid border-[#dce5f0] bg-[#f7faff] p-3 md:p-4'
const actionClass = 'inline-flex min-h-11 items-center justify-center rounded-[6px] px-4 text-center text-[14px] font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary'

const Field = ({ label, children }) => (
    <label className="block min-w-0">
        <span className={FIELD_LABEL_CLASS}>{label}</span>
        {children}
    </label>
)

const ChoiceGroup = ({ name, title, choices, value, onChange }) => (
    <fieldset className="min-w-0">
        <legend className={FIELD_LABEL_CLASS}>{title}</legend>
        <div className="flex flex-wrap gap-2">
            {choices.map(choice => (
                <label key={choice} className="relative cursor-pointer">
                    <input type="radio" name={name} value={choice}
                        checked={onChange ? value === choice : undefined}
                        onChange={onChange ? () => onChange(choice) : undefined} className="peer absolute inset-0 m-0 h-full w-full cursor-pointer opacity-0" />
                    <span className="inline-flex min-h-10 items-center rounded-[6px] border border-solid border-[#cfdbea] bg-white px-3 py-1 text-[13px] text-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-secondary">
                        {choice}
                    </span>
                </label>
            ))}
        </div>
    </fieldset>
)

const DependentsFields = () => (
    <section aria-labelledby="dependents-heading">
        <h2 id="dependents-heading" className={FIELD_LABEL_CLASS}>眷屬資料</h2>
        <div className="space-y-3">
            {DEPENDENT_ROWS.map(number => (
                <fieldset key={number} className={sectionClass}>
                    <legend className="px-1 text-[13px] font-bold text-secondary">眷屬 {number}</legend>
                    <div className="grid gap-3 min-[380px]:grid-cols-2 md:grid-cols-4">
                        <Field label="姓名"><input name={`dependent-${number}-name`} className={INPUT_CLASS} placeholder="請輸入姓名" /></Field>
                        <Field label="關係"><input name={`dependent-${number}-relationship`} className={INPUT_CLASS} placeholder="例如配偶、子女" /></Field>
                        <Field label="身分證號"><input name={`dependent-${number}-identity`} className={INPUT_CLASS} autoCapitalize="characters" spellCheck={false} placeholder="請輸入身分證號" /></Field>
                        <Field label="西元生日"><input name={`dependent-${number}-birthday`} className={INPUT_CLASS} type="date" /></Field>
                    </div>
                </fieldset>
            ))}
        </div>
    </section>
)

const UniformFields = () => {
    const [purchase, setPurchase] = useState('協請代購')
    return (
        <>
            <ChoiceGroup name="uniform-purchase" title="制服處理方式" choices={['協請代購', '自行處理']} value={purchase} onChange={setPurchase} />
            <fieldset hidden={purchase !== '協請代購'} disabled={purchase !== '協請代購'} className={sectionClass}>
                <legend className="px-1 text-[13px] font-bold text-secondary">代購品項</legend>
                <div className="divide-y divide-solid divide-[#dce5f0]">
                    {UNIFORM_ITEMS.map(({ id, label, price, sizes }) => (
                        <div key={id} className="grid grid-cols-2 items-end gap-3 py-3 first:pt-0 md:grid-cols-[minmax(0,1fr)_7rem_10rem]">
                            <p className="col-span-2 text-[14px] font-bold md:col-span-1 md:self-center">{label} <span className="font-normal text-[#486785]">{price} 元／件</span></p>
                            <Field label={`${label}數量`}><input name={`${id}-quantity`} type="number" min="0" step="1" className={INPUT_CLASS} placeholder="0" /></Field>
                            <Field label={`${label}尺寸`}>
                                <select name={`${id}-size`} className={INPUT_CLASS}>
                                    <option value="">不購買</option>
                                    {sizes.map(size => <option key={size} value={size}>{id === 'grey_cloth' ? size : `${size[0] === 'f' ? '女' : '男'} ${size.slice(1)}`}</option>)}
                                </select>
                            </Field>
                        </div>
                    ))}
                    <div className="grid grid-cols-2 items-end gap-3 pt-3 md:grid-cols-[minmax(0,1fr)_7rem_10rem]">
                        <p className="col-span-2 text-[14px] font-bold md:col-span-1 md:self-center">皮帶（含皮帶、皮帶頭） <span className="font-normal text-[#486785]">150 元／條</span></p>
                        <Field label="皮帶數量"><input name="belt-quantity" type="number" min="0" step="1" className={INPUT_CLASS} placeholder="0" /></Field>
                    </div>
                </div>
            </fieldset>
            {purchase === '協請代購' && <ChoiceGroup name="identity" title="身分" choices={['委員', '慈誠', '培訓', '見習', '一般同仁']} />}
        </>
    )
}

export const CourseRegistrationDialog = ({ kind, courseId, userkey, onSessionExpired, onClose }) => {
    const [feedback, setFeedback] = useState(null)
    const [submitting, setSubmitting] = useState(false)
    const dialogRef = useRef(null)
    const requestRef = useRef(null)
    const preview = courseId == null
    const plain = kind === 'standard'
    const uniform = kind === 'uniform'
    const title = plain ? '課程報名' : kind === 'both' ? '眷屬報名與制服申請' : uniform ? '制服申請' : '眷屬報名'

    useEffect(() => {
        const dialog = dialogRef.current
        dialog.showModal()
        return () => {
            requestRef.current?.abort()
            dialog.close()
        }
    }, [])

    const close = () => {
        if (!requestRef.current) onClose(false)
    }

    const handleSubmit = async event => {
        event.preventDefault()
        if (requestRef.current) return
        let controller
        try {
            const fields = new FormData(event.currentTarget)
            const info = plain ? undefined : buildRegistrationPayload(kind, fields)
            if (preview) {
                setFeedback({ message: '表單資料格式已確認。' })
                return
            }
            controller = new AbortController()
            requestRef.current = controller
            setFeedback(null)
            setSubmitting(true)
            const note = String(fields.get('comments') ?? '').trim() || undefined
            const { message } = await registerCourse(courseId, { note, info }, controller.signal, userkey)
            if (controller.signal.aborted) return
            window.alert(`報名狀態：${message}`)
            onClose(true)
        } catch (error) {
            if (controller?.signal.aborted) return
            const message = error instanceof TypeError ? '無法連線至報名服務，請確認課程報名狀態後再試。' : error.message
            if (controller) {
                window.alert(`報名失敗：${message}`)
                if (error.status === 409 && error.fields?.type === 'already') {
                    onClose(true)
                    return
                }
            }
            if (error.status === 401) onSessionExpired?.()
            setFeedback({ message, error: true })
        } finally {
            if (controller && !controller.signal.aborted) {
                requestRef.current = null
                setSubmitting(false)
            }
        }
    }

    return (
        <dialog ref={dialogRef} aria-labelledby="registration-heading" onCancel={event => { event.preventDefault(); close() }}
            className="fixed inset-0 m-auto h-[100dvh] max-h-none w-full max-w-none overflow-clip bg-white p-0 text-primary backdrop:bg-[#061f42]/65 md:h-auto md:max-h-[calc(100dvh-48px)] md:w-[calc(100%-48px)] md:max-w-[840px] md:rounded-[12px] md:border md:border-solid md:border-[#cfdbea] md:shadow-2xl">
            <div className="flex h-full max-h-[inherit] flex-col">
                <header className="flex shrink-0 items-start justify-between gap-4 bg-[#e4f1f3] px-4 py-4 md:px-6">
                    <h1 id="registration-heading" className="text-[18px] font-bold md:text-[22px]">{title}</h1>
                    <button type="button" aria-label={`關閉${title}視窗`} onClick={close} disabled={submitting}
                        className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-[17px] hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary">
                        <i className="icon icon-close" aria-hidden="true" />
                    </button>
                </header>
                <form className="flex min-h-0 flex-1 flex-col" onChange={() => setFeedback(null)} onSubmit={handleSubmit}>
                    <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 md:px-6 md:py-5">
                        <fieldset disabled={submitting} className="min-w-0 space-y-5">
                            {preview && <p className="rounded-[6px] border border-solid border-[#cfdbea] bg-[#f3f8ff] px-3 py-2 text-[13px] text-[#486785]">表單預覽。請使用測試資料，送出預覽不會建立報名或申請。</p>}
                            {!plain && <div className="w-full md:max-w-xs">
                                <MobilePhoneField inputClassName={INPUT_CLASS} labelClassName={FIELD_LABEL_CLASS} />
                            </div>}
                            {!plain && !uniform && <DependentsFields />}
                            {(uniform || kind === 'both') && <UniformFields />}
                            <Field label="意見填寫">
                                <textarea name="comments" rows={3} className={`${INPUT_CLASS} h-auto min-h-24 py-2`} placeholder="若有簡碼、分機或其他補充資訊，請填在這裡" />
                            </Field>
                        </fieldset>
                    </div>
                    <footer className="shrink-0 border-t border-solid border-[#dce5f0] px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 md:px-6 md:py-4">
                        {feedback && <p role={feedback.error ? 'alert' : 'status'} className={`mb-3 text-center text-[13px] font-bold ${feedback.error ? 'text-danger' : 'text-primary'}`}>{feedback.message}</p>}
                        <div className="grid grid-cols-2 gap-2">
                            <button type="button" onClick={close} disabled={submitting} className={`${actionClass} border border-solid border-[#b8c9df] bg-white hover:bg-[#f3f8ff]`}>取消</button>
                            <button type="submit" disabled={submitting} aria-busy={submitting} aria-label={submitting ? '報名處理中' : undefined} className={`${actionClass} bg-main text-white hover:opacity-90 disabled:opacity-60`}>{submitting ? <Spinner color="#fff" /> : preview ? '送出預覽' : '確認報名'}</button>
                        </div>
                    </footer>
                </form>
            </div>
        </dialog>
    )
}

const CourseRegistration = ({ kind }) => {
    const navigate = useNavigate()
    return <CourseRegistrationDialog kind={kind} onClose={() => navigate('/course', { replace: true })} />
}

export default CourseRegistration
