import React, { useContext, useEffect, useRef, useState } from 'react'
import { getQuickCourses, getCourseCategories } from 'api/quickCourses'
import { LoginContext } from 'contexts/LoginProvider'
import DashboardStatus from 'components/DashboardStatus'
import I18N from 'components/I18N'
import PaginatedList from 'components/PaginatedList'
import Select from 'components/Select'
import Spinner from 'components/Spinner'
import TitleBlk from 'components/TitleBlk'
import KeywordSearchRow from 'components/KeywordSearchRow'
import ViewModeToggle from 'components/ViewModeToggle'
import FilterButtons from 'components/pick/FilterButtons'
import Results from 'components/pick/Results'
import useMedia from 'hooks/useMedia'

const CAMPUS_OPTIONS = [
    { id: 'all', title: '全部' },
    { id: 'n2', title: '志業中心' },
    { id: 'fd', title: '基金會' },
    { id: 'mf', title: '法人' },
    { id: 'sy', title: '三義' },
    { id: 'dl', title: '大林' },
    { id: 'hl', title: '花蓮' },
    { id: 'xd', title: '台北' },
    { id: 'tc', title: '台中' }
]

const TYPE_OPTIONS = [
    { id: 'all', title: '全部' },
    { id: '2', title: '實體' },
    { id: '1', title: '數位' }
]

const PROGRAM_OPTIONS = [
    { id: 'all', title: '全部' },
    { id: 'my', title: '我的學程' }
]

const normalizeCampus = branch => typeof branch === 'string' ? branch.trim().toLowerCase() : ''

const readSearchState = () => {
    const params = new URLSearchParams(typeof window === 'undefined' ? '' : window.location?.search || '')
    const branch = normalizeCampus(params.get('branch'))
    return {
        branch: CAMPUS_OPTIONS.some(option => option.id === branch) ? branch : null,
        type: TYPE_OPTIONS.some(option => option.id === params.get('type')) ? params.get('type') : 'all',
        program: params.get('program') === 'my' ? 'my' : 'all',
        category: params.get('category') || '', keyword: params.get('keyword') || '',
        oldcourse: params.get('oldcourse') === '1' ? 1 : 0,
        page: Math.max(1, Math.trunc(Number(params.get('page')) || 1)),
        pagesize: [10, 20, 50].includes(Number(params.get('pagesize'))) ? Number(params.get('pagesize')) : 20
    }
}

const Page = () => {
    const { isLogin, user, expireSession, sessionStatus } = useContext(LoginContext)
    const isVerified = isLogin && sessionStatus === 'success'
    const loginCampus = normalizeCampus(user.branch)
    const userCampus = loginCampus !== 'all' && CAMPUS_OPTIONS.some(option => option.id === loginCampus) ? loginCampus : ''
    const [apiCampus, setApiCampus] = useState(null)
    const defaultCampus = apiCampus && apiCampus.owner === user.id ? apiCampus.branch : userCampus
    const [savedSearch] = useState(readSearchState)
    const searchOwner = useRef(null)
    const initialCampusApplied = useRef(Boolean(savedSearch.branch))
    const isDesktopLayout = useMedia('(min-width: 1200px)')
    const [campus, setCampus] = useState(savedSearch.branch || defaultCampus)
    const [type, setType] = useState(savedSearch.type)
    const [program, setProgram] = useState(savedSearch.program)
    const [attribute, setAttribute] = useState(savedSearch.category)
    const [keyword, setKeyword] = useState(savedSearch.keyword)
    const [oldcourse, setOldcourse] = useState(savedSearch.oldcourse === 1)
    const [page, setPage] = useState(savedSearch.page)
    const [pageSize, setPageSize] = useState(savedSearch.pagesize)
    const [filters, setFilters] = useState({ branch: savedSearch.branch || defaultCampus, type: savedSearch.type, program: savedSearch.program, oldcourse: savedSearch.oldcourse, category: savedSearch.category, keyword: savedSearch.keyword })
    const [revision, setRevision] = useState(0)
    const [result, setResult] = useState({ status: 'loading', courses: [], total: 0 })
    const [categories, setCategories] = useState({ status: 'idle', items: [], owner: null })
    const [categoryRevision, setCategoryRevision] = useState(0)
    const visibleCategories = categories.owner === user.id
        ? categories.items.filter(item => campus === 'all' || item.branch === campus) : []
    useEffect(() => {
        if (!isVerified) {
            setCategories({ status: 'idle', items: [], owner: null })
            return undefined
        }
        const controller = new AbortController()
        setCategories({ status: 'loading', items: [], owner: user.id })
        getCourseCategories(controller.signal, user.userkey).then(items => {
            if (!controller.signal.aborted) setCategories({ status: 'success', items, owner: user.id })
        }).catch(error => {
            if (controller.signal.aborted) return
            if (error.status === 401) expireSession()
            setCategories({ status: 'error', items: [], owner: user.id,
                message: error instanceof TypeError ? '無法連線至課程屬性服務。' : error.message })
        })
        return () => controller.abort()
    }, [isVerified, user.id, user.userkey, expireSession, categoryRevision])
    useEffect(() => {
        if (!isVerified) return
        if (searchOwner.current === null) {
            searchOwner.current = user.id
            if (!savedSearch.branch) {
                setCampus(userCampus)
                setFilters(current => current.branch === userCampus ? current : { ...current, branch: userCampus })
            }
            return
        }
        if (searchOwner.current === user.id) return
        searchOwner.current = user.id
        initialCampusApplied.current = false
        setApiCampus(null)
        setCampus(userCampus)
        setAttribute('')
        setFilters(current => ({ ...current, branch: userCampus, category: '' }))
        setPage(1)
    }, [isVerified, userCampus, user.id, savedSearch])
    useEffect(() => {
        if (!isVerified || typeof window === 'undefined' || !window.history?.replaceState) return
        const url = new URL(window.location.href)
        Object.entries({ ...filters, page, pagesize: pageSize }).forEach(([key, value]) => url.searchParams.set(key, String(value)))
        window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`)
    }, [isVerified, filters, page, pageSize])
    useEffect(() => {
        if (!isVerified) {
            setResult({ status: 'idle', courses: [], total: 0 })
            return undefined
        }
        const controller = new AbortController()
        setResult({ status: 'loading', owner: user.id, courses: [], total: 0 })
        getQuickCourses({ ...filters, page, pagesize: pageSize }, controller.signal, user.userkey).then(data => {
            if (controller.signal.aborted) return
            const apiBranch = normalizeCampus(data.branch)
            if (!initialCampusApplied.current && CAMPUS_OPTIONS.some(option => option.id === apiBranch) && !(apiBranch === 'all' && userCampus)) {
                initialCampusApplied.current = true
                setApiCampus({ owner: user.id, branch: apiBranch })
                setCampus(apiBranch)
                setAttribute('')
                setFilters(current => current.branch === apiBranch ? current : { ...current, branch: apiBranch, category: '' })
            }
            setResult({ status: 'success', owner: user.id, ...data })
        }).catch(error => {
            if (controller.signal.aborted) return
            if (error.status === 401) expireSession()
            setResult({ status: 'error', owner: user.id, courses: [], total: 0, message: error.status === 401 ? '登入時效已過期，請重新登入。' : error instanceof TypeError ? '無法連線至快速選課服務，請稍後重試。' : error.message })
        })
        return () => controller.abort()
    }, [isVerified, filters, page, pageSize, revision, user.id, user.userkey, userCampus, expireSession])
    const [selectedViewMode, setSelectedViewMode] = useState(null)
    const viewMode = selectedViewMode || (isDesktopLayout ? 'list' : 'card')
    const isLoadingCourses = sessionStatus === 'checking' || (isVerified &&
        (result.owner !== user.id || result.status === 'loading' || result.status === 'idle'))

    const changeFilter = (key, value, updateField) => {
        updateField(value)
        setPage(1)
        setFilters(current => ({ ...current, [key]: value }))
    }

    const submitSearch = (event) => {
        event.preventDefault()
        if (!isVerified) return
        setPage(1)
        setFilters({ branch: campus, type, program, category: attribute, keyword: keyword.trim(), oldcourse: oldcourse ? 1 : 0 })
    }

    const clearFilters = () => {
        setCampus(defaultCampus)
        setType('all')
        setProgram('all')
        setAttribute('')
        setKeyword('')
        setOldcourse(false)
        setPage(1)
        setFilters({ branch: defaultCampus, type: 'all', program: 'all', category: '', keyword: '', oldcourse: 0 })
    }
    return (
        <div className="min-h-[calc(100dvh-48px)] bg-[#f7f9fd] pt-[var(--header-height)]">
            <TitleBlk
                title="快速選課"
                icon="pencil"
                breadcrumbs={[{ title: '快速選課' }]}
            />
            <div className="px-4 md:px-6 xl:px-10">
            <section className="mx-auto w-full py-4 md:py-5 xl:max-w-[1200px] xl:py-10 2xl:max-w-[1400px]">
                <div className="overflow-hidden rounded-[8px] border border-solid border-[#dce5f0] bg-white xl:rounded-[12px]">
                    <form
                        className="p-3 md:p-6"
                        aria-describedby="course-filter-keyboard-help"
                        onSubmit={submitSearch}
                    >
                        <fieldset disabled={!isVerified} aria-busy={!isVerified} className={`min-w-0 border-0 p-0 ${!isVerified ? 'animate-pulse motion-reduce:animate-none' : ''}`}>
                        <p id="course-filter-keyboard-help" className="sr-only">
                            使用 Tab
                            鍵在篩選欄位間移動，在選項群組內使用方向鍵切換選項。
                        </p>
                        <label className="mb-5 flex cursor-pointer items-center justify-end gap-2 text-[13px] text-primary">
                            <input
                                type="checkbox"
                                role="switch"
                                checked={oldcourse}
                                onChange={event => changeFilter('oldcourse', event.target.checked ? 1 : 0, value => setOldcourse(value === 1))}
                                className="peer sr-only"
                            />
                            <span aria-hidden="true" className="relative h-5 w-[34px] shrink-0 rounded-full bg-[#8190a2] transition-colors after:absolute after:left-[2px] after:top-[2px] after:size-4 after:rounded-full after:bg-white after:transition-transform peer-checked:bg-primary peer-checked:after:translate-x-[14px] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary" />
                            <span>查詢包含舊課程（{oldcourse ? '開啟' : '關閉'}）</span>
                        </label>
                        <div className="grid gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-[minmax(0,200fr)_minmax(0,206fr)_minmax(0,292fr)_280px] xl:gap-6 xl:[&_label]:text-[13px] xl:[&_label]:font-normal">
                            <div className="min-w-0">
                                <label
                                    htmlFor="campus-filter"
                                    className="mb-1 block text-[12px] font-bold leading-4 text-primary md:mb-2 md:text-[13px] md:leading-5 xl:text-[12px] xl:font-normal xl:leading-4"
                                >
                                    <I18N>院區</I18N>
                                </label>
                                <Select
                                    id="campus-filter"
                                    name="campus"
                                    value={campus}
                                    onChange={({ target: { value } }) =>
                                        {
                                            initialCampusApplied.current = true
                                            setCampus(value)
                                            setAttribute('')
                                            setPage(1)
                                            setFilters(current => ({ ...current, branch: value, category: '' }))
                                        }
                                    }
                                >
                                    <option value="" disabled>請選擇院區</option>
                                    {CAMPUS_OPTIONS.map(({ id, title }) => (
                                        <option key={id} value={id}>
                                            {title}
                                        </option>
                                    ))}
                                </Select>
                            </div>

                            <div className="block min-w-0">
                                <label
                                    htmlFor="attribute-filter"
                                    className="mb-1 block text-[12px] font-bold leading-4 text-primary md:mb-2 md:text-[13px] md:leading-5 xl:text-[12px] xl:font-normal xl:leading-4"
                                >
                                    <I18N>屬性</I18N>
                                </label>
                                <Select
                                    id="attribute-filter"
                                    value={attribute}
                                    disabled={!isLogin || categories.owner !== user.id || categories.status !== 'success'}
                                    onChange={({ target: { value } }) =>
                                        changeFilter('category', value, setAttribute)
                                    }
                                >
                                    <option value="">全部</option>
                                    {visibleCategories.map(item => <option key={`${item.branch}-${item.id}`} value={item.id}>{item.name}</option>)}
                                </Select>
                                {isVerified && categories.owner === user.id && categories.status === 'error' && <div role="alert" className="mt-2 text-[13px] text-primary">
                                    {categories.message}<button type="button" className="ml-2 underline" onClick={() => setCategoryRevision(value => value + 1)}>重新載入</button>
                                </div>}
                            </div>

                            <FilterButtons
                                desktopSearch
                                label="類型"
                                name="course-type"
                                options={TYPE_OPTIONS}
                                value={type}
                                onChange={value => changeFilter('type', value, setType)}
                            />

                            <FilterButtons
                                desktopSearch
                                label="認列學程"
                                name="recognized-program"
                                options={PROGRAM_OPTIONS}
                                value={program}
                                onChange={value => changeFilter('program', value, setProgram)}
                                tone="green"
                            />
                        </div>

                        <KeywordSearchRow
                            desktopSearch
                            className="mt-3 md:mt-4 xl:mt-6"
                            id="course-keyword"
                            label="課程名稱"
                            placeholder={isDesktopLayout ? '想找什麼課程呢？可用空格分隔多個關鍵字' : '想找什麼課程呢？'}
                            value={keyword}
                            onChange={setKeyword}
                            onClear={clearFilters}
                        />
                        </fieldset>
                    </form>
                </div>

                <div className="mb-3 mt-4 flex flex-wrap items-center justify-between gap-3 md:mb-4 md:mt-5">
                    <h2 className="text-[13px] font-bold leading-5 text-primary md:text-[15px] xl:text-[17px] xl:leading-6">
                        <I18N>課程數</I18N>：{result.total}{' '}
                        <I18N>筆</I18N>
                    </h2>
                    <ViewModeToggle
                        ariaLabel="課程顯示方式"
                        value={viewMode}
                        onChange={setSelectedViewMode}
                    />
                </div>

                {!isVerified && sessionStatus !== 'checking' && <DashboardStatus />}
                {isLoadingCourses && <div role="status" aria-busy="true" aria-label="讀取資料" className="flex items-center justify-center py-6">
                    <span aria-hidden="true"><Spinner size={12} color="#093a7b" /></span>
                </div>}
                {isVerified && !isLoadingCourses && result.status === 'error' && <div role="alert" className="py-6 text-primary"><p>{result.message}</p><button type="button" className="mt-2 underline" onClick={() => setRevision(value => value + 1)}>重新載入</button></div>}
                {isVerified && !isLoadingCourses && result.status === 'success' && <PaginatedList
                    data={result.courses}
                    component={Results}
                    componentProps={{ viewMode }}
                    pagination={{ page, pageSize, total: result.total, onPageChange: setPage, onPageSizeChange: size => { setPageSize(size); setPage(1) } }}
                />}
            </section>
            </div>
        </div>
    )
}

export default React.memo(Page)
