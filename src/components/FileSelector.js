import React, { useState, useEffect, useRef, forwardRef } from 'react'
import FilePreviewer from 'components/FilePreviewer'
import I18N from 'components/I18N'
import swal from 'sweetalert'

const fileTypeValidate = (acceptTypes, type) => {
    return acceptTypes.indexOf(type.toLowerCase()) > -1
}
const totalSizeValidate = (files, limit = 20) => {
    const size = files.reduce((acc, file) => acc + file.size, 0)
    return size / 1024 / 1024 <= limit
}
// eslint-disable-next-line react/display-name
const FileSelector = forwardRef(
    (
        {
            name,
            label,
            onChange,
            accept,
            multiple,
            maxFileNums = 10,
            maxFileSize = 20,
            className
        },
        ref
    ) => {
        const fileIptRef = useRef()
        const [data, setData] = useState([])
        const clearIptFile = () => {
            fileIptRef.current.value = ''
        }
        ref = ref(fileIptRef.current)

        const previewFile = (e) => {
            const files = e.target.files

            if (files.length + data.length > maxFileNums) {
                swal({
                    title: 'Tips',
                    text:
                        '選取照片數量上限為' + maxFileNums + '張，請重新選擇。',
                    icon: 'info'
                })
                clearIptFile()
                return false
            }
            if (
                accept &&
                Array.from(files).some(
                    (f) => !fileTypeValidate(accept, f.name.split('.').pop())
                )
            ) {
                swal({
                    title: 'Tips',
                    text: `可上傳的檔案類型為 ${accept}，請重新選擇。`,
                    icon: 'info'
                })
                clearIptFile()
                return false
            }
            if (!totalSizeValidate([...data, ...files], maxFileSize)) {
                swal({
                    title: 'Tips',
                    text: '選取照片超過' + maxFileSize + 'mb，請重新選擇。',
                    icon: 'info'
                })
                clearIptFile()
                return false
            }

            setData((prev) => {
                return [...prev, ...files]
            })
            //clearIptFile()
        }
        const onDelete = (idx) => {
            setData((prev) => [...prev.slice(0, idx), ...prev.slice(idx + 1)])
        }
        useEffect(() => {
            onChange(data)
        }, [data])
        return (
            <div className={`${className}`}>
                {!!data?.length && (
                    <ul className="mb-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                        {data.map((file, i) => (
                            <li className="last:mb-0" key={i}>
                                <div className="flex items-center p-1 border rounded bg-white">
                                    <FilePreviewer
                                        className="flex-1"
                                        file={file}
                                    />
                                    <button
                                        className="btn shrink-0 w-5 h-5"
                                        onClick={() => onDelete(i)}
                                        type="button"
                                    >
                                        <i
                                            className="icon icon-delete text-danger text-[15px]"
                                            aria-hidden="true"
                                        ></i>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                <input
                    className="hide-switch"
                    type="file"
                    multiple={multiple}
                    accept={accept}
                    onChange={previewFile}
                    ref={fileIptRef}
                    id={`${name}-file-selector-ipt`}
                />

                <label
                    className={`${
                        !multiple && !!data.length && 'hidden'
                    } btn btn-outline-primary h-5 rounded focus-hint`}
                    htmlFor={`${name}-file-selector-ipt`}
                >
                    <i
                        className="icon icon-upload mr-[4px] text-[13px]"
                        aria-hidden="true"
                    ></i>
                    <I18N>{label}</I18N>
                </label>
            </div>
        )
    }
)

export default React.memo(FileSelector)
