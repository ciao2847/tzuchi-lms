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
            } d-flex align-items-end justify-content-lg-center align-items-lg-center pt-7 pt-xl-13 w-100 h-100 trs-all ${className}`}
        >
            <div
                className={`${
                    isShow ? '' : 'translate-y-100 op-0'
                } map-advance-panel d-flex flex-column w-100 position-relative z-100 bg-white rounded-lg-top trs-all`}
            >
                <button
                    className="btn btn-ghost w-5 h-5 mt-2 mr-2 flex-shrink-0 rounded z-100 absolute-top-right"
                    onClick={() => {
                        onClose()
                        setZipcode(currentZipcode)
                    }}
                >
                    <i className="icon icon-close" aria-hidden="true"></i>
                    <div className="sr-only">關閉</div>
                </button>
                <div className="scroll-blk flex-fill w-100 px-2 py-3">
                    <div className="mb-2 fz-18px font-weight-bold">
                        <I18N>行政區</I18N>
                    </div>
                    <ul className="row g-1">
                        {region.map((r) => (
                            <li
                                className={`col-3 ${isEN ? '' : 'col-md-2'}`}
                                key={r.id}
                            >
                                <button
                                    className={`${
                                        zipcode.includes(r.zipcode * 1)
                                            ? 'btn-secondary'
                                            : ''
                                    } btn w-100 h-5 px-1 rounded`}
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
                <div className="d-flex justify-content-between justify-content-md-end flex-shrink-0 p-2 border-top bg-white">
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
                    isShow ? '' : 'op-0'
                } fill-parent bg-black-50 trs-all`}
                onClick={() => {
                    onClose()
                    setZipcode(currentZipcode)
                }}
            ></div>
        </div>
    )
}

export default React.memo(AdvancePanel)
