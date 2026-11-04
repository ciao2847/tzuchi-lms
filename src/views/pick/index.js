import React, { useContext, useEffect, useState } from 'react'
import { getQuickCourses } from 'api/quickCourses'
import { LoginContext } from 'contexts/LoginProvider'
import DashboardStatus from 'components/DashboardStatus'
import I18N from 'components/I18N'
import PaginatedList from 'components/PaginatedList'
import Select from 'components/Select'
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

const Page = () => {
    const { isLogin, user, expireSession, sessionStatus } = useContext(LoginContext)
    const defaultCampus = CAMPUS_OPTIONS.some(option => option.id === user.branch) ? user.branch : 'all'
    const isDesktopLayout = useMedia('(min-width: 1200px)')
    const [campus, setCampus] = useState(defaultCampus)
    const [type, setType] = useState('all')
    const [program, setProgram] = useState('all')
    const [attribute, setAttribute] = useState('')
    const [keyword, setKeyword] = useState('')
    const [oldcourse, setOldcourse] = useState(false)
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(20)
    const [filters, setFilters] = useState({ branch: defaultCampus, type: 'all', program: 'all', oldcourse: 0, category: '', keyword: '' })
    const [revision, setRevision] = useState(0)
    const [result, setResult] = useState({ status: 'loading', courses: [], total: 0 })
    useEffect(() => {
        setCampus(defaultCampus)
        setFilters(current => ({ ...current, branch: defaultCampus }))
        setPage(1)
    }, [defaultCampus, user.id])
    useEffect(() => {
        if (!isLogin) {
            setResult({ status: 'idle', courses: [], total: 0 })
            return undefined
        }
        const controller = new AbortController()
        setResult({ status: 'loading', courses: [], total: 0 })
        getQuickCourses({ ...filters, page, pagesize: pageSize }, controller.signal).then(data => {
            if (!controller.signal.aborted) setResult({ status: 'success', ...data })
        }).catch(error => {
            if (controller.signal.aborted) return
            if (error.status === 401) expireSession()
            setResult({ status: 'error', courses: [], total: 0, message: error.status === 401 ? '登入時效已過期，請重新登入。' : error instanceof TypeError ? '無法連線至快速選課服務，請稍後重試。' : error.message })
        })
        return () => controller.abort()
    }, [isLogin, filters, page, pageSize, revision, user.id, expireSession])
    const [selectedViewMode, setSelectedViewMode] = useState(null)
    const viewMode = selectedViewMode || (isDesktopLayout ? 'list' : 'card')

    const changeFilter = (key, value, updateField) => {
        updateField(value)
        setPage(1)
        setFilters(current => ({ ...current, [key]: value }))
    }

    const submitSearch = (event) => {
        event.preventDefault()
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
            <section className="mx-auto w-full px-4 py-4 md:px-6 md:py-5 xl:max-w-[1200px] xl:p-10 2xl:px-0 2xl:max-w-[1400px]">
                <div className="overflow-hidden rounded-[8px] border border-solid border-[#dce5f0] bg-white xl:rounded-[12px]">
                    <form
                        className="p-3 md:p-6"
                        aria-describedby="course-filter-keyboard-help"
                        onSubmit={submitSearch}
                    >
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
                                        changeFilter('branch', value, setCampus)
                                    }
                                >
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
                                    onChange={({ target: { value } }) =>
                                        changeFilter('category', value, setAttribute)
                                    }
                                >
                                    <option value="">全部</option>
                                </Select>
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

                {(!isLogin || sessionStatus === 'checking' || sessionStatus === 'error') && <DashboardStatus />}
                {isLogin && result.status === 'loading' && <p role="status" aria-busy="true" className="py-6 text-primary">課程載入中…</p>}
                {isLogin && result.status === 'error' && <div role="alert" className="py-6 text-primary"><p>{result.message}</p><button type="button" className="mt-2 underline" onClick={() => setRevision(value => value + 1)}>重新載入</button></div>}
                {isLogin && result.status === 'success' && <PaginatedList
                    data={result.courses}
                    component={Results}
                    componentProps={{ viewMode }}
                    pagination={{ page, pageSize, total: result.total, onPageChange: setPage, onPageSizeChange: size => { setPageSize(size); setPage(1) } }}
                />}
            </section>
        </div>
    )
}

export default React.memo(Page)
