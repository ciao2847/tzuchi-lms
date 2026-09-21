import React, { useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import I18N from 'components/I18N'
import Select from 'components/Select'
import useDialogInteraction from 'hooks/useDialogInteraction'
import Details from './Details'
import Feedback from './Feedback'
import Upload from './Upload'
import {
    clearTrainingDraft,
    createInitialForm,
    getTrainingDateError,
    saveTrainingDraft
} from './draft'

const CreateDialog = ({ onClose, onCreate }) => {
    const formId = useId()
    const dialogRef = useRef(null)
    const closeButtonRef = useRef(null)
    const [form, setForm] = useState(createInitialForm)
    const [files, setFiles] = useState([])
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    useDialogInteraction({
        dialogId: formId,
        dialogRef,
        initialFocusRef: closeButtonRef,
        onClose
    })

    const updateField = (key, value) => {
        setForm((current) => ({ ...current, [key]: value }))
        setError('')
        setMessage('')
    }

    const toggleAttribute = (attribute) => {
        setForm((current) => ({
            ...current,
            attributes: current.attributes.includes(attribute)
                ? current.attributes.filter((item) => item !== attribute)
                : [...current.attributes, attribute]
        }))
    }

    const updateSatisfaction = (question, value) => {
        setForm((current) => ({
            ...current,
            satisfaction: { ...current.satisfaction, [question]: value }
        }))
    }

    const saveDraft = () => {
        saveTrainingDraft(form)
        setMessage(
            files.length > 0
                ? '備忘錄已儲存；檔案請於下次開啟時重新選擇'
                : '備忘錄已儲存'
        )
        setError('')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const dateError = getTrainingDateError(form)
        if (dateError) {
            setError(dateError)
            return
        }

        const intent = event.nativeEvent.submitter?.value || 'create'
        clearTrainingDraft()
        onCreate(
            {
                ...form,
                fileNames: files.map(({ name }) => name)
            },
            intent
        )
    }

    const handleFiles = (selectedFiles) => {
        const incomingFiles = Array.from(selectedFiles)
        setFiles((current) => [
            ...current,
            ...incomingFiles.filter(
                ({ name }) => !current.some((file) => file.name === name)
            )
        ])
        setMessage('')
    }

    const removeFile = (name) => {
        setFiles((current) => current.filter((file) => file.name !== name))
    }

    return createPortal(
        <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-[#061f42]/65 md:p-6">
            <section
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={formId + '-title'}
                className="flex h-[100dvh] w-full flex-col overflow-hidden bg-white text-primary md:h-auto md:max-h-[calc(100dvh-48px)] md:max-w-[720px] md:rounded-[12px] md:border md:border-solid md:border-[#cfdbea] md:shadow-2xl"
            >
                <header className="flex shrink-0 items-start justify-between gap-4 bg-[#e4f1f3] px-4 py-4 text-primary md:px-6">
                    <div>
                        <h2
                            id={formId + '-title'}
                            className="text-[18px] font-bold md:text-[22px]"
                        >
                            <I18N>建立外訓資料</I18N>
                        </h2>
                        <div className="mt-2 flex items-center gap-2 text-[12px] md:text-[13px]">
                            <label
                                className="sr-only"
                                htmlFor={formId + '-year'}
                            >
                                <I18N>年度</I18N>
                            </label>
                            <Select
                                id={formId + '-year'}
                                wrapperClassName="w-24 shrink-0"
                                className="font-bold"
                                value={form.year}
                                onChange={({ target: { value } }) =>
                                    updateField('year', value)
                                }
                            >
                                <option value="116">116</option>
                                <option value="115">115</option>
                                <option value="114">114</option>
                            </Select>
                            <span>
                                <I18N>年度－外訓課程</I18N>
                            </span>
                        </div>
                    </div>
                    <button
                        ref={closeButtonRef}
                        type="button"
                        aria-label="關閉建立外訓資料視窗"
                        className="flex size-9 shrink-0 items-center justify-center rounded-full text-[17px] text-primary transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                        onClick={onClose}
                    >
                        <i className="icon icon-close" aria-hidden="true" />
                    </button>
                </header>

                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 md:px-6 md:py-5">
                    <div className="rounded-[6px] border border-solid border-danger bg-[#ffdfe4] px-3 py-2.5 text-[12px] font-medium leading-5 text-[#a95119] md:text-[13px]">
                        <I18N>
                            請注意！你所建立的外訓資料將會帶入你的學習歷程中
                        </I18N>
                    </div>

                    {error && (
                        <p
                            className="mt-3 rounded-[6px] bg-[#fff0f2] px-3 py-2 text-[12px] font-bold text-danger"
                            role="alert"
                        >
                            {error}
                        </p>
                    )}

                    <form
                        id={formId}
                        className="mt-4 space-y-4 md:space-y-5"
                        onSubmit={handleSubmit}
                    >
                        <Details
                            formId={formId}
                            form={form}
                            onUpdateField={updateField}
                        />
                        <Feedback
                            formId={formId}
                            form={form}
                            onToggleAttribute={toggleAttribute}
                            onUpdateField={updateField}
                            onUpdateSatisfaction={updateSatisfaction}
                        />
                        <Upload
                            formId={formId}
                            files={files}
                            onAddFiles={handleFiles}
                            onRemoveFile={removeFile}
                        />
                    </form>
                </div>

                <footer className="shrink-0 border-t border-solid border-[#dce5f0] bg-white px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 md:px-6 md:pb-4">
                    {message && (
                        <p
                            className="mb-2 text-center text-[12px] font-bold text-success"
                            role="status"
                        >
                            <I18N>{message}</I18N>
                        </p>
                    )}
                    <div className="grid grid-cols-2 gap-2">
                        <button
                            type="submit"
                            form={formId}
                            name="intent"
                            value="apply"
                            className="col-span-2 min-h-11 rounded-[6px] bg-primary px-3 text-[13px] font-bold text-white transition-colors hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:text-[14px]"
                        >
                            <I18N>建立並申請學程學分</I18N>
                        </button>
                        <button
                            type="button"
                            className="min-h-10 rounded-[6px] border border-solid border-[#b8c9df] bg-white px-3 text-[13px] font-bold text-primary transition-colors hover:bg-[#f3f8ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                            onClick={saveDraft}
                        >
                            <I18N>取消</I18N>
                        </button>
                        <button
                            type="submit"
                            form={formId}
                            name="intent"
                            value="create"
                            className="min-h-10 rounded-[6px] bg-main px-3 text-[13px] font-bold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main"
                        >
                            <I18N>建立</I18N>
                        </button>
                    </div>
                </footer>
            </section>
        </div>,
        document.body
    )
}

export default React.memo(CreateDialog)
