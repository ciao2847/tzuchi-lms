import React, { useContext, useId, useMemo, useState } from 'react'
import I18N from 'components/I18N'
import KeywordSearchRow from 'components/KeywordSearchRow'
import PaginatedList from 'components/PaginatedList'
import TitleBlk from 'components/TitleBlk'
import ViewModeToggle from 'components/ViewModeToggle'
import { LoginContext } from 'contexts/LoginProvider'
import Tabs from 'components/external-training/Tabs'
import Campuses from 'components/external-training/Campuses'
import Results from 'components/external-training/Results'
import CreateDialog from 'components/external-training/CreateDialog'
import ReflectionDialog from 'components/external-training/ReflectionDialog'

const TRAINING_TABS = [
    { id: 'latest', title: '最新活動心得' },
    { id: 'ranking', title: '推薦排行榜' },
    { id: 'personal', title: '個人外訓紀錄' },
    {
        id: 'review',
        title: '學程學分認證審核',
        mobileTitle: '學程認證'
    }
]

const CAMPUS_OPTIONS = [
    { id: 'all', title: '全部' },
    { id: 'hualien', title: '花蓮' },
    { id: 'yuli', title: '玉里' },
    { id: 'guanshan', title: '關山' },
    { id: 'dalin', title: '大林' },
    { id: 'taipei', title: '台北' },
    { id: 'taichung', title: '台中' },
    { id: 'douliu', title: '斗六' },
    { id: 'foundation', title: '基金會' },
    { id: 'corporation', title: '法人' },
    { id: 'sanyi', title: '三義' }
]

const TRAINING_RECORDS = [
    {
        id: 1,
        campus: 'dalin',
        title: 'Teat',
        department: '大林分院營養治療科營養組',
        attendee: '戴千慈',
        date: '2026/09/03',
        dateTime: '2026-09-03',
        views: 0,
        reflection:
            '參與本次外訓後，對課程主題與實務應用有更清楚的認識。後續會整理課程重點，並與單位同仁分享。'
    },
    {
        id: 2,
        campus: 'dalin',
        title: 'TEST',
        department: '大林分院營養治療科營養組',
        attendee: '戴千慈',
        date: '2026/09/02',
        dateTime: '2026-09-02',
        views: 4,
        reflection:
            '這次學習讓我重新檢視日常工作流程，也獲得不同的處理觀點。將把課堂討論的做法帶回單位實際運用。'
    },
    {
        id: 3,
        campus: 'dalin',
        title: '敗血性休克專業照護工作坊',
        department: '大林分院護理部臨床專業照護組',
        attendee: '湯右昌',
        date: '2026/08/30',
        dateTime: '2026-08-30',
        views: 0,
        reflection:
            '透過案例討論與情境演練，重新梳理敗血性休克的早期辨識、評估與團隊溝通流程。返院後會整理重點，協助臨床照護。'
    },
    {
        id: 4,
        campus: 'dalin',
        title: '115年度酒癮治療專業人員繼續教育訓練課程',
        department: '大林分院藥學部藥物調劑科藥物管理組',
        attendee: '陳怡柔',
        date: '2026/08/28',
        dateTime: '2026-08-28',
        views: 0,
        reflection:
            '課程讓我了解酒癮治療的跨專業合作方式，以及持續追蹤的重要性。未來會將所學用於病人衛教與照護溝通。'
    },
    {
        id: 5,
        campus: 'dalin',
        title: '強化糖尿病鏡檢之專業知能與經驗傳承',
        department: '大林分院病理檢驗醫學科抽血醫事組',
        attendee: '黃婉霖',
        date: '2026/08/27',
        dateTime: '2026-08-27',
        views: 0,
        reflection:
            '透過鏡檢案例與經驗交流，對檢體判讀和品質控管有更具體的認識。接下來會與同仁分享課程中的實作技巧。'
    },
    {
        id: 6,
        campus: 'dalin',
        title: '毒性及關注性化學物質地區聯防組織第Q00001組聯防組織管理訓練',
        department: '大林分院職業安全衛生室',
        attendee: '郭宣淇',
        date: '2026/08/25',
        dateTime: '2026-08-25',
        views: 0,
        reflection:
            '本次訓練幫助我釐清化學物質事件的通報程序與聯防分工。未來會依照課程重點檢視現有應變流程。'
    }
]

const RECORDS_STORAGE_KEY = 'tzuchi-external-training-records'

const getSavedRecords = () => {
    if (typeof window === 'undefined') return []

    try {
        const records = JSON.parse(
            window.localStorage.getItem(RECORDS_STORAGE_KEY)
        )
        return Array.isArray(records) ? records : []
    } catch {
        return []
    }
}

const saveTrainingRecords = (records) => {
    window.localStorage.setItem(RECORDS_STORAGE_KEY, JSON.stringify(records))
}

const createTrainingRecord = (form, intent, attendee) => {
    const dateTime = new Date().toLocaleDateString('sv-SE')
    return {
        id: Date.now(),
        campus: 'dalin',
        title: form.title.trim(),
        department: form.organization.trim(),
        attendee: attendee || '王小明',
        date: dateTime.replace(/-/g, '/'),
        dateTime,
        views: 0,
        applicationRequested: intent === 'apply',
        details: form
    }
}

const filterTrainingRecords = (records, selectedCampus, keyword) => {
    const query = keyword.trim().toLocaleLowerCase()
    return records.filter((record) => {
        if (selectedCampus !== 'all' && record.campus !== selectedCampus) {
            return false
        }
        if (!query) return true

        return [
            record.title,
            record.department,
            record.attendee,
            record.date,
            record.details?.reflection ?? record.reflection
        ].some((value) =>
            String(value ?? '')
                .toLocaleLowerCase()
                .includes(query)
        )
    })
}
const Page = () => {
    const sectionId = useId()
    const { user } = useContext(LoginContext)
    const [activeTab, setActiveTab] = useState('latest')
    const [selectedCampus, setSelectedCampus] = useState('all')
    const [keyword, setKeyword] = useState('')
    const [searchedKeyword, setSearchedKeyword] = useState('')
    const [searchVersion, setSearchVersion] = useState(0)
    const [viewMode, setViewMode] = useState('card')
    const [createdRecords, setCreatedRecords] = useState(getSavedRecords)
    const [isCreateOpen, setIsCreateOpen] = useState(false)
    const [selectedRecord, setSelectedRecord] = useState(null)
    const [statusMessage, setStatusMessage] = useState('')
    const filteredRecords = useMemo(
        () =>
            filterTrainingRecords(
                [...createdRecords, ...TRAINING_RECORDS],
                selectedCampus,
                searchedKeyword
            ),
        [createdRecords, searchedKeyword, selectedCampus]
    )

    const changeTab = (id) => {
        setActiveTab(id)
    }

    const changeCampus = (id) => {
        setSelectedCampus(id)
    }

    const submitSearch = (event) => {
        event.preventDefault()
        setSearchedKeyword(keyword.trim())
        setSearchVersion((version) => version + 1)
    }

    const clearFilters = () => {
        setSelectedCampus('all')
        setKeyword('')
        setSearchedKeyword('')
        setSearchVersion((version) => version + 1)
    }

    const createRecord = (form, intent) => {
        const record = createTrainingRecord(form, intent, user?.name)
        const nextRecords = [record, ...createdRecords]

        setCreatedRecords(nextRecords)
        saveTrainingRecords(nextRecords)
        setSelectedCampus('all')
        setKeyword('')
        setSearchedKeyword('')
        setActiveTab(intent === 'apply' ? 'review' : 'personal')
        setStatusMessage(
            intent === 'apply'
                ? '外訓資料已建立，學程學分申請已加入草稿'
                : '外訓資料已建立'
        )
        setIsCreateOpen(false)
    }

    return (
        <div className="min-h-[calc(100dvh-48px)] bg-[#f4f7fd] pt-[56px] text-primary xl:pt-[80px]">
            <TitleBlk
                title="外訓資料"
                icon="adv"
                breadcrumbs={[
                    { title: '學習服務' },
                    { title: '外訓計畫' },
                    { title: '外訓資料' }
                ]}
                rightContent={
                    <button
                        type="button"
                        aria-label="填寫外訓資料"
                        className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[6px] bg-primary px-5 text-[13px] font-bold text-white transition-colors hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:text-[14px]"
                        aria-haspopup="dialog"
                        onClick={() => {
                            setStatusMessage('')
                            setIsCreateOpen(true)
                        }}
                    >
                        <i
                            className="icon icon-pencil text-[13px]"
                            aria-hidden="true"
                        />
                        <span className="hidden md:block">
                            <I18N>填寫外訓資料</I18N>
                        </span>
                    </button>
                }
            />
            <section className="mx-auto w-full px-4 py-5 md:px-6 md:py-7 xl:max-w-[1200px] xl:px-8 xl:py-9 2xl:px-0 2xl:max-w-[1400px]">
                {statusMessage && (
                    <p
                        className="mb-3 rounded-[6px] border border-solid border-[#cde4d7] bg-[#eef9f2] px-3 py-2 text-[12px] font-bold text-success md:text-[13px]"
                        role="status"
                    >
                        <I18N>{statusMessage}</I18N>
                    </p>
                )}
                <div className="border-0 xl:border-b border-solid border-[#d8e1ee] md:flex md:items-end md:justify-between md:gap-8 ">
                    <Tabs
                        options={TRAINING_TABS}
                        activeId={activeTab}
                        onChange={changeTab}
                    />
                </div>

                <Campuses
                    options={CAMPUS_OPTIONS}
                    name={`${sectionId}-campus`}
                    value={selectedCampus}
                    onChange={changeCampus}
                />

                <form
                    role="search"
                    aria-label="外訓資料關鍵字查詢"
                    className="mb-3 rounded-[8px] border border-solid border-[#dce5f0] bg-white p-3 md:mb-4 md:p-4"
                    onSubmit={submitSearch}
                >
                    <KeywordSearchRow
                        id={`${sectionId}-keyword`}
                        label="關鍵字"
                        placeholder="請輸入活動名稱、單位或姓名"
                        value={keyword}
                        onChange={setKeyword}
                        onClear={clearFilters}
                    />
                </form>

                <div
                    id="external-training-panel"
                    role="tabpanel"
                    aria-labelledby={`external-training-tab-${activeTab}`}
                    tabIndex={0}
                    className="mt-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary md:mt-4"
                >
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-3 md:mb-4">
                        <p className="flex items-center gap-2 text-[12px] font-medium text-[#536d89] md:text-[13px] xl:text-[14px]">
                            <i
                                className="icon icon-view text-[12px] text-secondary"
                                aria-hidden="true"
                            />
                            <I18N>瀏覽人次</I18N>：
                            <strong className="font-bold text-primary">
                                18535
                            </strong>
                        </p>
                        <div className="ml-auto">
                            <ViewModeToggle
                                ariaLabel="外訓資料顯示方式"
                                value={viewMode}
                                onChange={setViewMode}
                            />
                        </div>
                    </div>
                    <PaginatedList
                        data={filteredRecords}
                        component={Results}
                        componentProps={{ viewMode, onOpen: setSelectedRecord }}
                        emptyText="目前沒有符合篩選條件的外訓資料"
                        emptyClassName="flex min-h-[260px] items-center justify-center rounded-[9px] border border-dashed border-[#cfd9e6] bg-white px-4 text-center text-[14px] text-[#6f8299]"
                        resetKey={`${activeTab}:${selectedCampus}:${searchedKeyword}:${searchVersion}:${createdRecords.length}`}
                    />
                </div>
            </section>
            {isCreateOpen && (
                <CreateDialog
                    onClose={() => setIsCreateOpen(false)}
                    onCreate={createRecord}
                />
            )}
            {selectedRecord && (
                <ReflectionDialog
                    record={selectedRecord}
                    onClose={() => setSelectedRecord(null)}
                />
            )}
        </div>
    )
}

export default React.memo(Page)
