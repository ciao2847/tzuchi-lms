import React, { useState } from 'react'
import TitleBlk from 'components/TitleBlk'
import Tabs from 'components/external-training/Tabs'
import ExternalHistory from '../calendar/ExternalHistory'

const TRAINING_TABS = [
    { id: 'latest', title: '最新活動心得' },
    { id: 'ranking', title: '推薦排行榜' },
    { id: 'personal', title: '個人外訓紀錄' },
    { id: 'review', title: '學程學分認證審核', mobileTitle: '學程認證' }
]

const Page = () => {
    const [activeTab, setActiveTab] = useState('personal')
    return <div className="min-h-[calc(100dvh-48px)] bg-[#f4f7fd] pt-[var(--header-height)] text-primary">
        <TitleBlk title="外訓資料" icon="adv" breadcrumbs={[
            { title: '學習服務' }, { title: '外訓計畫' }, { title: '外訓資料' }
        ]} />
        <section className="mx-auto w-full px-4 py-5 md:px-6 md:py-7 xl:max-w-[1200px] xl:px-8 xl:py-9 2xl:max-w-[1400px] 2xl:px-0">
            <Tabs options={TRAINING_TABS} activeId={activeTab} onChange={setActiveTab} />
            <div id="external-training-panel" role="tabpanel" aria-labelledby={`external-training-tab-${activeTab}`} tabIndex={0}
                className="mt-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary">
                {activeTab === 'personal' ? <ExternalHistory /> : <p role="status" className="rounded-[9px] border border-solid border-[#dce5f0] bg-white px-4 py-10 text-center text-[14px] text-[#536d89]">此分類資料尚未開放。</p>}
            </div>
        </section>
    </div>
}

export default React.memo(Page)
