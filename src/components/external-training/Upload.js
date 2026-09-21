import React, { useRef, useState } from 'react'
import I18N from 'components/I18N'
import { FIELD_LABEL_CLASS } from './formConfig'

const Upload = ({ formId, files, onAddFiles, onRemoveFile }) => {
    const fileInputRef = useRef(null)
    const [isDragActive, setIsDragActive] = useState(false)

    return (
        <div>
            <h3 className={FIELD_LABEL_CLASS}>
                <I18N>檔案上傳</I18N>
            </h3>
            <div
                className={
                    'rounded-[8px] border-2 border-dashed px-4 py-5 text-center transition-colors ' +
                    (isDragActive
                        ? 'border-secondary bg-[#eaf3ff]'
                        : 'border-[#cad9eb] bg-[#f8fbff]')
                }
                onDragOver={(event) => {
                    event.preventDefault()
                    setIsDragActive(true)
                }}
                onDragLeave={() => setIsDragActive(false)}
                onDrop={(event) => {
                    event.preventDefault()
                    setIsDragActive(false)
                    onAddFiles(event.dataTransfer.files)
                }}
            >
                <i
                    className="icon icon-upload mx-auto size-7 text-[25px] text-secondary"
                    aria-hidden="true"
                />
                <p className="mt-1 text-[12px] font-medium text-[#60748c]">
                    <I18N>點擊或拖曳選擇檔案</I18N>
                </p>
                <label
                    htmlFor={formId + '-files'}
                    className="relative mt-2 inline-flex min-h-9 cursor-pointer items-center justify-center rounded-[6px] border border-solid border-secondary bg-white px-4 text-[12px] font-bold text-secondary transition-colors hover:bg-[#eaf3ff] focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-secondary"
                >
                    <input
                        ref={fileInputRef}
                        id={formId + '-files'}
                        type="file"
                        multiple
                        className="absolute inset-0 size-full cursor-pointer opacity-0"
                        onChange={({ target: { files: nextFiles } }) => {
                            onAddFiles(nextFiles)
                            if (fileInputRef.current) {
                                fileInputRef.current.value = ''
                            }
                        }}
                    />
                    <span>
                        <I18N>選擇檔案</I18N>
                    </span>
                </label>
            </div>
            {files.length > 0 && (
                <ul className="mt-2 space-y-1">
                    {files.map(({ name }) => (
                        <li
                            key={name}
                            className="flex items-center justify-between gap-2 rounded-[5px] bg-[#f4f7fd] px-3 py-1.5 text-[12px] text-primary"
                        >
                            <span className="min-w-0 truncate">{name}</span>
                            <button
                                type="button"
                                className="shrink-0 text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
                                aria-label={'移除檔案 ' + name}
                                onClick={() => onRemoveFile(name)}
                            >
                                <i
                                    className="icon icon-close text-[11px]"
                                    aria-hidden="true"
                                />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Upload
