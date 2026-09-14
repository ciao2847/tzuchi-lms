import React, { useState, useEffect } from 'react'
import { useLocale } from 'hooks'
import I18N, { translate } from 'components/I18N'
import { filterWithQuery } from 'constants/utils'
const AdvancePanel = ({
    isShow,
    data,
    region,
    currentZipcode,
    keyword,
    className,
    onClose,
    onSubmit
}) => {
    const [zipcode, setZipcode] = useState(currentZipcode)
    const [preQueryData, setPreQueryData] = useState(data)
    const lang = useLocale()
    const isEN = lang === 'en'
    useEffect(() => {
        setPreQueryData(
            filterWithQuery(data, {
                keyword,
                zipcode
            })
        )
    }, [data, keyword, zipcode])

    return (
        <div
            className={`${
                isShow ? '' : 'pointer-events-none'
            } flex items-end lg:justify-center lg:items-center pt-7 xl:pt-13 w-full h-full transition-all duration-300 ${className || ''}`}
        >
            <div
                className={`${
                    isShow ? '' : 'translate-y-full opacity-0'
                } map-advance-panel flex flex-col w-full relative z-[100] bg-white lg:rounded-t transition-all duration-300`}
            >
                <button
                    className="btn btn-ghost w-5 h-5 mt-2 mr-2 shrink-0 rounded z-[100] absolute top-0 right-0"
                    onClick={() => {
                        onClose()
                        setZipcode(currentZipcode)
                    }}
                >
                    <i className="icon icon-close" aria-hidden="true"></i>
                    <div className="sr-only">關閉</div>
                </button>
                <div className="overflow-y-auto flex-1 w-full px-2 py-3">
                    <div className="mb-2 text-[18px] font-bold">
                        <I18N>行政區</I18N>
                    </div>
                    <ul className={`grid ${isEN ? 'grid-cols-4' : 'grid-cols-4 md:grid-cols-6'} gap-1`}>
                        {region.map((r) => (
                            <li
                                key={r.id}
                            >
                                <button
                                    className={`${
                                        zipcode.includes(r.zipcode * 1)
                                            ? 'btn-secondary'
                                            : ''
                                    } btn w-full h-5 px-1 rounded`}
                                    onClick={() => {
                                        if (zipcode.includes(r.zipcode * 1)) {
                                            setZipcode(
                                                zipcode.filter(
                                                    (z) => z !== r.zipcode * 1
                                                )
                                            )
                                        } else {
                                            setZipcode([
                                                ...zipcode,
                                                r.zipcode * 1
                                            ])
                                        }
                                    }}
                                >
                                    {r.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-between md:justify-end shrink-0 p-2 border-t bg-white">
                    <button
                        className="btn border-0 px-3 mr-2 rounded"
                        onClick={() => {
                            setZipcode([])
                        }}
                    >
                        <I18N>清除</I18N>
                    </button>
                    <button
                        className="btn btn-secondary h-5 px-5 rounded"
                        onClick={() => {
                            onSubmit(zipcode)
                            onClose()
                        }}
                    >
                        {!!preQueryData.length ? (
                            translate('共有 {0} 筆結果', lang, [
                                preQueryData.length
                            ])
                        ) : (
                            <I18N>暫無資料</I18N>
                        )}
                    </button>
                </div>
            </div>
            <div
                className={`${
                    isShow ? '' : 'opacity-0'
                } fixed inset-0 bg-black/50 transition-all duration-300`}
                onClick={() => {
                    onClose()
                    setZipcode(currentZipcode)
                }}
            ></div>
        </div>
    )
}

export default React.memo(AdvancePanel)
