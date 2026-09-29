import React, { useState } from 'react'
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
    { id: 'dalin', title: '大林' },
    { id: 'hualien', title: '花蓮' },
    { id: 'taipei', title: '台北' },
    { id: 'taichung', title: '台中' }
]

const TYPE_OPTIONS = [
    { id: 'all', title: '全部' },
    { id: 'physical', title: '實體' },
    { id: 'online', title: '數位' }
]

const PROGRAM_OPTIONS = [
    { id: 'all', title: '全部' },
    { id: 'mine', title: '我的學程' }
]

const RECOGNIZED_PROGRAMS = [
    '115年度(下)檢驗實習生(輔英、慈大) - 生化檢驗：1學分',
    '115年度(下)檢驗實習生(輔英、慈大) - 生化翻轉9堂：1學分',
    '115年度(下)檢驗實習生(輔英、慈大) - 血液檢驗：1學分',
    '115年度(下)檢驗實習生(輔英、慈大) - 微生物檢驗：1學分',
    '115年度(下)檢驗實習生(輔英、慈大) - 免疫血清檢驗：1學分',
    '115年度(下)檢驗實習生(輔英、慈大) - 臨床鏡檢：1學分',
    '115年度(下)檢驗實習生(輔英、慈大) - 輸血醫學：1學分',
    '115年度(下)檢驗實習生(輔英、慈大) - 分子診斷：1學分'
]

const COURSE_LIST = [
    {
        id: 1,
        campus: '大林',
        type: '實體',
        isToday: true,
        title: '護理部_PI/NOR_專科主題課程_嬰兒足底採血情境式模擬演練_1150807-8',
        date: '2026-08-07（星期五）07:50–08:50',
        lecturer: '戴佳璇',
        enrollment: '0/0',
        programs: RECOGNIZED_PROGRAMS
    },
    {
        id: 2,
        campus: '大林',
        type: '實體',
        isToday: true,
        title: '2026-08-07營養診斷及介入照護流程',
        date: '2026-08-07（星期五）',
        lecturer: '張雅芳',
        programs: RECOGNIZED_PROGRAMS
    },
    {
        id: 3,
        campus: '大林',
        type: '實體',
        isToday: true,
        title: '感染管制_實體課程(第一場) 防護裝備(PPE)教育訓練與口罩密合度測試',
        date: '2026-08-18（星期二）',
        lecturer: '感染管制中心',
        programs: RECOGNIZED_PROGRAMS
    },
    {
        id: 4,
        campus: '大林',
        type: '實體',
        title: '醫院簡介',
        date: '2026-08-21（星期五）',
        lecturer: '人力資源室',
        programs: RECOGNIZED_PROGRAMS
    },
    {
        id: 5,
        campus: '大林',
        type: '實體',
        title: '病人安全',
        date: '2026-08-22（星期六）',
        lecturer: '品質中心',
        programs: RECOGNIZED_PROGRAMS
    },
    {
        id: 6,
        campus: '大林',
        type: '實體',
        title: '消防安全_實體課程',
        date: '2026-08-20（星期四）',
        lecturer: '總務室',
        programs: RECOGNIZED_PROGRAMS
    }
]

const Page = () => {
    const isDesktopLayout = useMedia('(min-width: 1200px)')
    const [campus, setCampus] = useState('dalin')
    const [type, setType] = useState('physical')
    const [program, setProgram] = useState('all')
    const [attribute, setAttribute] = useState('labor')
    const [keyword, setKeyword] = useState('')
    const [listResetKey, setListResetKey] = useState(0)
    const [selectedViewMode, setSelectedViewMode] = useState(null)
    const viewMode = selectedViewMode || (isDesktopLayout ? 'list' : 'card')

    const submitSearch = (event) => {
        event.preventDefault()
        setListResetKey((currentKey) => currentKey + 1)
    }

    const clearFilters = () => {
        setCampus('dalin')
        setType('physical')
        setProgram('all')
        setAttribute('labor')
        setKeyword('')
        setListResetKey((currentKey) => currentKey + 1)
    }

    return (
        <div className="min-h-[calc(100dvh-48px)] bg-[#f7f9fd] pt-[56px] xl:pt-[80px]">
            <TitleBlk
                title="快速選課"
                icon="pencil"
                breadcrumbs={[{ title: '快速選課' }]}
            />
            <section className="mx-auto w-full px-4 py-4 md:px-6 md:py-5 xl:max-w-[1200px] xl:p-10 2xl:px-0 2xl:max-w-[1400px]">
                <div className="overflow-hidden rounded-[8px] border border-solid border-[#dce5f0] bg-white">
                    <form
                        className="p-3 md:p-6"
                        aria-describedby="course-filter-keyboard-help"
                        onSubmit={submitSearch}
                    >
                        <p id="course-filter-keyboard-help" className="sr-only">
                            使用 Tab
                            鍵在篩選欄位間移動，在選項群組內使用方向鍵切換選項。
                        </p>
                        <div className="grid gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-[0.6fr_1.4fr_1fr_1fr] xl:gap-6">
                            <div className="min-w-0">
                                <label
                                    htmlFor="campus-filter"
                                    className="mb-1 block text-[12px] font-bold leading-4 text-primary md:mb-2 md:text-[13px] md:leading-5 xl:text-[15px] xl:leading-6"
                                >
                                    <I18N>院區</I18N>
                                </label>
                                <Select
                                    id="campus-filter"
                                    name="campus"
                                    value={campus}
                                    onChange={({ target: { value } }) =>
                                        setCampus(value)
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
                                    className="mb-1 block text-[12px] font-bold leading-4 text-primary md:mb-2 md:text-[13px] md:leading-5 xl:text-[15px] xl:leading-6"
                                >
                                    <I18N>屬性</I18N>
                                </label>
                                <Select
                                    id="attribute-filter"
                                    value={attribute}
                                    onChange={({ target: { value } }) =>
                                        setAttribute(value)
                                    }
                                >
                                    <option value="labor">
                                        政府相關法令 &gt; 勞
                                    </option>
                                    <option value="medical">醫療專業</option>
                                    <option value="management">管理知能</option>
                                </Select>
                            </div>

                            <FilterButtons
                                label="類型"
                                name="course-type"
                                options={TYPE_OPTIONS}
                                value={type}
                                onChange={setType}
                            />

                            <FilterButtons
                                label="認列學程"
                                name="recognized-program"
                                options={PROGRAM_OPTIONS}
                                value={program}
                                onChange={setProgram}
                                tone="green"
                            />
                        </div>

                        <KeywordSearchRow
                            className="mt-3 md:mt-4"
                            id="course-keyword"
                            label="課程名稱"
                            placeholder="想找什麼課程呢？"
                            value={keyword}
                            onChange={setKeyword}
                            onClear={clearFilters}
                        />
                    </form>
                </div>

                <div className="mb-3 mt-4 flex flex-wrap items-center justify-between gap-3 md:mb-4 md:mt-5">
                    <h2 className="text-[13px] font-bold leading-5 text-primary md:text-[15px] xl:text-[17px] xl:leading-6">
                        <I18N>課程數</I18N>：{COURSE_LIST.length}{' '}
                        <I18N>筆</I18N>
                    </h2>
                    <ViewModeToggle
                        ariaLabel="課程顯示方式"
                        value={viewMode}
                        onChange={setSelectedViewMode}
                    />
                </div>

                <PaginatedList
                    data={COURSE_LIST}
                    component={Results}
                    componentProps={{ viewMode }}
                    resetKey={listResetKey}
                />
            </section>
        </div>
    )
}

export default React.memo(Page)
