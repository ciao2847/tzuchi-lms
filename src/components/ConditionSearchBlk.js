import React, { useState, useEffect, useRef } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import CInput from 'react-composition-input'
import { filterWithQuery } from 'constants/utils'
import { makeParams } from 'constants/utils'
import '/styles/condition-search.scss'
import I18N, { translate } from 'components/I18N'

const DAY_MAP = [
    { value: 1, name: '一日遊' },
    { value: 2, name: '二日遊' },
    { value: 0, name: '多日遊' }
]
const AREA_CONFIG = [
    { id: 1, title: '花蓮', zipcodeMin: 970, zipcodeMax: 983 },
    { id: 2, title: '台東', zipcodeMin: 950, zipcodeMax: 966 }
]
const ConditionSearchBlk = ({
    data,
    query,
    zipcodeData,
    categoryData,
    transportData,
    countyData,
    tourismBrandData,
    options = {},
    className
}) => {
    const { lang = 'zh-tw' } = useParams()
    const [keyword, setKeyword] = useState(query?.keyword)
    const [category, setCategory] = useState(
        query.category ? query.category.split(',').map((cate) => cate * 1) : []
    )
    const [transport, setTransport] = useState(
        query.transport
            ? query.transport.split(',').map((tran) => tran * 1)
            : []
    )
    const [zipcode, setZipcode] = useState(
        query.zipcode ? query.zipcode.split(',').map((zip) => zip * 1) : []
    )
    const [county, setCounty] = useState(
        query.county ? query.county.split(',').map((c) => c * 1) : []
    )
    const [days, setDay] = useState(
        query.days ? query.days.split(',').map((d) => d * 1) : []
    )
    const [brand, setBrand] = useState(
        query.brand ? query.brand.split(',').map((cate) => cate * 1) : []
    )
    const preQueryData =
        filterWithQuery(data, {
            keyword,
            category,
            transport,
            zipcode,
            county,
            days,
            brand
        }) || []

    const [isExpand, toggleExpand] = useState(false)
    const scrollRef = useRef(null)
    const keywordRef = useRef(null)

    const [searchParams, setSearchParams] = useSearchParams()

    const isIos = /iphone|ipad/.test(navigator.userAgent.toLowerCase())

    const onSearch = () => {
        setSearchParams(
            makeParams(query, {
                keyword,
                category,
                zipcode,
                days,
                county,
                transport,
                brand
            })
        )
        toggleExpand(false)
        keywordRef.current.input.blur()
    }
    const resetToDefault = () => {
        setKeyword(query?.keyword || '')

        setCategory(
            query.category
                ? query.category.split(',').map((cate) => cate * 1)
                : []
        )
        setTransport(
            query.transport
                ? query.transport.split(',').map((tran) => tran * 1)
                : []
        )
        setZipcode(
            query.zipcode ? query.zipcode.split(',').map((zip) => zip * 1) : []
        )
        setDay(query.days ? query.days.split(',').map((d) => d * 1) : [])
        setBrand(
            query.brand ? query.brand.split(',').map((cate) => cate * 1) : []
        )
    }
    const preQueryWithCategory = (id) => {
        let idx = category.indexOf(id)
        if (idx > -1) {
            setCategory([...category.slice(0, idx), ...category.slice(idx + 1)])
        } else {
            setCategory([...category, id])
        }
    }

    const preQueryWithTransport = (id) => {
        let idx = transport.indexOf(id)
        if (idx > -1) {
            setTransport([
                ...transport.slice(0, idx),
                ...transport.slice(idx + 1)
            ])
        } else {
            setTransport([...transport, id])
        }
    }
    const preQueryWithZipcode = (id) => {
        let idx = zipcode.indexOf(id)
        if (idx > -1) {
            setZipcode([...zipcode.slice(0, idx), ...zipcode.slice(idx + 1)])
        } else {
            setZipcode([...zipcode, id])
        }
    }
    const preQueryWithCounty = (id) => {
        let idx = county.indexOf(id)
        if (idx > -1) {
            setCounty([...county.slice(0, idx), ...county.slice(idx + 1)])
        } else {
            setCounty([...county, id])
        }
    }

    const preQueryWithDay = (d) => {
        let idx = days.indexOf(d)
        if (idx > -1) {
            setDay([...days.slice(0, idx), ...days.slice(idx + 1)])
        } else {
            setDay([...days, d])
        }
    }
    const preQueryWithBrand = (id) => {
        let idx = brand.indexOf(id)
        if (idx > -1) {
            setBrand([...brand.slice(0, idx), ...brand.slice(idx + 1)])
        } else {
            setBrand([...brand, id])
        }
    }

    useEffect(() => {
        if (isExpand && scrollRef.current) {
            scrollRef.current.scrollTop = 0
        }
        if (isExpand && keywordRef.current) {
            keywordRef.current.input.focus()
        }
    }, [isExpand])

    useEffect(() => {
        resetToDefault()
    }, [query])

    useEffect(() => {
        document.addEventListener('keyup', (e) => {
            const charCode = e.which ? e.which : e.keyCode
            if (charCode === 27) {
                toggleExpand(false)
            }
        })
    }, [])

    return (
        <>
            <form
                className={`condition-search-blk flex-fill flex-shrink-0 ${
                    isExpand
                        ? 'show fixed-top h-100 z-2000 p-2 pt-7 pb-8 scroll-blk border-[transparent]'
                        : 'position-relative rounded-pill overflow-hidden'
                } bg-white border ${className}`}
                onSubmit={(e) => {
                    e.preventDefault()
                    onSearch()
                }}
                ref={scrollRef}
            >
                {isExpand && (
                    <div className="d-md-none mb-1 font-weight-bold">
                        關鍵字
                    </div>
                )}
                <div className="d-flex overflow-hidden trs-all">
                    <div
                        className={`d-flex flex-fill position-relative focus-within:bg-[#f4f8f9] rounded-pill ${
                            isExpand ? 'mr-md-6' : ''
                        }`}
                    >
                        <label className="sr-only" htmlFor="keyword">
                            關鍵字
                        </label>
                        <CInput
                            type="search"
                            className={`${
                                !isExpand && ' border-[transparent]'
                            } ipt ipt-keyword px-3 rounded-pill focus:bg-[transparent]`}
                            placeholder={translate('請輸入關鍵字', lang)}
                            value={keyword}
                            maxLength="50"
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    toggleExpand(false)
                                }
                            }}
                            onKeyUp={(e) => {
                                const reg =
                                    /[`~!@#$%^&*()+=|{}':;',/\/\[\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]/g
                                const text = keyword.replace(reg, '')

                                setKeyword(text)
                            }}
                            onInputChange={(e) => {
                                setKeyword(e.target.value)
                            }}
                            onFocus={() => {
                                if (!options.noAdvance) {
                                    toggleExpand(true)
                                }
                            }}
                            ref={keywordRef}
                            autoComplete="off"
                            id="keyword"
                        />
                        <div
                            className={`ipt-focus-show d-flex align-items-center h-100 pr-20px absolute-top-right pointer-events-none text-info fz-13px trs-all mr-3`}
                        >
                            <I18N params={[preQueryData.length]}>
                                {!!preQueryData.length
                                    ? `共有{0}個結果`
                                    : '暫無資料'}
                            </I18N>
                        </div>
                    </div>
                    {isExpand && (
                        <div className="fixed top-0 right-0 d-flex d-md-block justify-content-end p-2 p-md-0 pointer-events-none">
                            <button
                                className="btn btn-ghost w-5 h-5 rounded pointer-events-auto rounded-circle"
                                type="button"
                                onClick={() => {
                                    /* setPreQueryKeyword(keyword)
                                    setPreQueryCategorySelected(
                                        categorySelected
                                    )*/
                                    resetToDefault()
                                    toggleExpand(false)
                                }}
                            >
                                <i
                                    className="icon icon-close fz-24px fz-md-16px"
                                    aria-hidden="true"
                                ></i>
                                <span className="sr-only">關閉</span>
                            </button>
                        </div>
                    )}
                    {options.noAdvance && (
                        <button className="btn btn-secondary d-none d-md-flex h-5 px-20px ml-1 rounded-pill">
                            <I18N>查詢</I18N>
                        </button>
                    )}
                    {!options.noAdvance && (
                        <button
                            className={`${
                                isExpand && 'op-0 pointer-events-none d-none'
                            } btn btn-secondary flex-shrink-0 h-5 px-20px ml-1 rounded-pill trs-all position-relative`}
                            type="button"
                            onClick={() => {
                                toggleExpand(true)
                            }}
                        >
                            <i className="icon icon-adv" aria-hidden="true"></i>
                            <span className="d-none d-md-block pl-1">
                                <I18N>進階搜尋</I18N>
                            </span>
                            {(!!category.length ||
                                !!zipcode.length ||
                                !!county.length ||
                                !!transport.length ||
                                !!days.length ||
                                !!brand.length) && (
                                <div className="w-6px h-6px mt-1 mr-10px bg-danger absolute-top-right rounded-circle"></div>
                            )}
                        </button>
                    )}
                </div>
                {isExpand && (
                    <>
                        {/*<div className="close-blk fixed-top d-flex justify-content-end p-2 p-md-2px mt-md-6 pointer-events-none">
                            <button
                                type="button"
                                className="btn btn-ghost w-5 h-5 rounded pointer-events-auto mx-md-3"
                                onClick={() => {
                                   
                                    resetToDefault()
                                    toggleExpand(false)
                                }}
                            >
                                <i
                                    className="icon icon-close fz-24px fz-md-16px"
                                    aria-hidden="true"
                                ></i>
                                <span className="sr-only">關閉</span>
                            </button>
                        </div>*/}
                        <div className="condition-blk d-xl-flex flex-column bg-white">
                            <div className="condition-scroll-blk pt-2 pb-md-1 px-md-1">
                                {options.category && !!categoryData?.length && (
                                    <div className="position-relative mb-3 mb-0-last">
                                        <div className="mb-12px font-weight-bold">
                                            <I18N>類型</I18N>
                                        </div>
                                        <ul className="d-flex flex-wrap">
                                            {categoryData.map((cate) => (
                                                <li
                                                    className="mr-12px mb-12px"
                                                    key={cate.id}
                                                >
                                                    <button
                                                        type="button"
                                                        className={`btn h-5 px-20px fz-15px ${
                                                            category.includes(
                                                                cate.id
                                                            )
                                                                ? 'btn-secondary'
                                                                : ''
                                                        } rounded`}
                                                        onClick={() => {
                                                            preQueryWithCategory(
                                                                cate.id
                                                            )
                                                        }}
                                                    >
                                                        {cate.name}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {options.county && !!countyData?.length && (
                                    <div className="position-relative mb-3 mb-0-last">
                                        <div className="mb-12px font-weight-bold">
                                            <I18N>縣市</I18N>
                                        </div>
                                        <ul className="d-flex flex-wrap">
                                            {countyData.map((c) => (
                                                <li
                                                    className="mr-12px mb-12px"
                                                    key={c.id}
                                                >
                                                    <button
                                                        type="button"
                                                        className={`btn h-5 px-20px fz-15px ${
                                                            county.includes(
                                                                c.id
                                                            )
                                                                ? 'btn-secondary'
                                                                : ''
                                                        } rounded`}
                                                        onClick={() => {
                                                            preQueryWithCounty(
                                                                c.id
                                                            )
                                                        }}
                                                    >
                                                        {c.name}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {options.brand &&
                                    !!tourismBrandData?.length && (
                                        <div className="position-relative mb-3 mb-0-last">
                                            <div className="mb-12px font-weight-bold">
                                                <I18N>觀光圈分類</I18N>
                                            </div>
                                            <ul className="d-flex flex-wrap">
                                                {tourismBrandData.map(
                                                    (cate) => (
                                                        <li
                                                            className="mr-12px mb-12px"
                                                            key={cate.id}
                                                        >
                                                            <button
                                                                type="button"
                                                                className={`btn h-5 px-20px fz-15px ${
                                                                    brand.includes(
                                                                        cate.tourismBrandTag
                                                                    )
                                                                        ? 'btn-secondary'
                                                                        : ''
                                                                } rounded`}
                                                                onClick={() => {
                                                                    preQueryWithBrand(
                                                                        cate.tourismBrandTag
                                                                    )
                                                                }}
                                                            >
                                                                {cate.title}
                                                            </button>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    )}

                                {options.days && (
                                    <div className="position-relative mb-3 mb-0-last">
                                        <div className="mb-12px font-weight-bold">
                                            旅遊天數
                                        </div>
                                        <ul className="d-flex flex-wrap">
                                            {DAY_MAP.map((d) => (
                                                <li
                                                    className="mr-12px mb-12px"
                                                    key={d.value}
                                                >
                                                    <button
                                                        type="button"
                                                        className={`btn h-5 px-20px fz-15px ${
                                                            days.includes(
                                                                d.value
                                                            )
                                                                ? 'btn-secondary'
                                                                : ''
                                                        } rounded`}
                                                        onClick={() => {
                                                            preQueryWithDay(
                                                                d.value
                                                            )
                                                        }}
                                                    >
                                                        {`${d.name}`}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {options.transport &&
                                    !!transportData?.length && (
                                        <div className="position-relative mb-3 mb-0-last">
                                            <div className="mb-12px font-weight-bold">
                                                <I18N>交通工具</I18N>
                                            </div>
                                            <ul className="d-flex flex-wrap">
                                                {transportData.map((tran) => (
                                                    <li
                                                        className="mr-12px mb-12px"
                                                        key={tran.id}
                                                    >
                                                        <button
                                                            type="button"
                                                            className={`btn h-5 px-20px fz-15px ${
                                                                transport.includes(
                                                                    tran.id
                                                                )
                                                                    ? 'btn-secondary'
                                                                    : ''
                                                            } rounded`}
                                                            onClick={() => {
                                                                preQueryWithTransport(
                                                                    tran.id
                                                                )
                                                            }}
                                                        >
                                                            {tran.name}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                {options.zipcode && zipcodeData && (
                                    <div className="position-relative mb-3 mb-0-last">
                                        <div className="mb-12px font-weight-bold">
                                            <I18N>行政區</I18N>
                                        </div>
                                        <ul className="d-flex flex-wrap">
                                            {zipcodeData.map((region) => (
                                                <li
                                                    className="mr-12px mb-12px"
                                                    key={region.zipcode}
                                                >
                                                    <button
                                                        type="button"
                                                        className={`btn h-6 px-20px fz-15px rounded ${
                                                            zipcode.includes(
                                                                region.zipcode *
                                                                    1
                                                            )
                                                                ? 'btn-secondary'
                                                                : ''
                                                        }`}
                                                        onClick={() => {
                                                            preQueryWithZipcode(
                                                                region.zipcode *
                                                                    1
                                                            )
                                                        }}
                                                    >
                                                        {region.name}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="button-blk fixed-bottom w-100 p-2 border-top bg-white z-100">
                                <div className="d-flex justify-content-between pb-safe-area">
                                    <button
                                        type="button"
                                        className="btn btn-ghost px-2 rounded fz-xl-16px text-info"
                                        onClick={() => {
                                            setKeyword('')
                                            setCategory([])
                                            setZipcode([])
                                            setCounty([])
                                            setDay([])
                                            setTransport([])
                                            setBrand([])
                                        }}
                                    >
                                        <I18N>清除</I18N>
                                    </button>
                                    <button className="btn btn-secondary w-240px px-2 py-1 rounded">
                                        <I18N params={[preQueryData.length]}>
                                            {!!preQueryData.length
                                                ? `共有 {0} 個結果`
                                                : '暫無資料'}
                                        </I18N>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </form>
            {isExpand && (
                <div
                    className="d-none d-md-block fixed-top z-10 w-100 h-100 bg-white-50"
                    onClick={() => {
                        resetToDefault()
                        toggleExpand(false)
                    }}
                ></div>
            )}
        </>
    )
}

export default React.memo(ConditionSearchBlk)
