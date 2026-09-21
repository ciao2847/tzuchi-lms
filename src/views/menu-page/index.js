import React from 'react'
import { useLocation } from 'react-router-dom'
import TitleBlk from 'components/TitleBlk'

const createPage = ({ group, icon, section, title }) => ({
    breadcrumbs: [
        { title: section },
        ...(group ? [{ title: group }] : []),
        ...(title === section ? [] : [{ title }])
    ],
    icon,
    title
})

const MENU_PAGES = {
    '/tree': {
        default: createPage({
            section: '學習服務',
            title: '學習服務',
            icon: 'doc'
        }),
        // 'external-training-form': createPage({
        //     section: '學習服務',
        //     group: '外訓計畫',
        //     title: '填寫外訓資料',
        //     icon: 'adv'
        // })
    },
    '/edu-service': {
        default: createPage({
            section: '教學服務',
            title: '教學服務',
            icon: 'pencil'
        }),
        'program-planning': createPage({
            section: '教學服務',
            group: '課程管理',
            title: '學程規劃',
            icon: 'pencil'
        }),
        'course-opening': createPage({
            section: '教學服務',
            group: '課程管理',
            title: '開課',
            icon: 'pencil'
        }),
        'digital-course-application': createPage({
            section: '教學服務',
            group: '申請服務',
            title: '數位課程申請',
            icon: 'pencil'
        }),
        'colleague-teaching-reward-review': createPage({
            section: '教學服務',
            group: '申請服務',
            title: '同仁教學獎勵審核 - 大林',
            icon: 'gift'
        }),
        'equipment-reservation': createPage({
            section: '教學服務',
            group: '申請服務',
            title: '設備預借 - 大林',
            icon: 'calendar'
        }),
        'teaching-resource-application': createPage({
            section: '教學服務',
            group: '申請服務',
            title: '教學資源申請 - 大林',
            icon: 'doc'
        }),
        'teacher-appointment-application': createPage({
            section: '教學服務',
            group: '申請服務',
            title: '教師聘任申請',
            icon: 'avatar'
        })
    },
    '/edu-service-country': {
        default: createPage({
            section: '知識管理',
            title: '知識管理',
            icon: 'bulb'
        }),
        'new-management-reports': createPage({
            section: '管理服務',
            group: '主管報表',
            title: '新增管理報表(部分報表)',
            icon: 'category'
        }),
        'attendance-inquiry': createPage({
            section: '管理服務',
            group: '主管報表',
            title: '簽到退查詢',
            icon: 'square-clock'
        }),
        permissions: createPage({
            section: '管理服務',
            group: '管理功能',
            title: '權限設定',
            icon: 'lock'
        }),
        'other-reports': createPage({
            section: '管理服務',
            group: '管理功能',
            title: '其他報表',
            icon: 'list'
        }),
        announcements: createPage({
            section: '管理服務',
            group: '管理功能',
            title: '公告管理',
            icon: 'speaker'
        }),
        'teaching-rewards': createPage({
            section: '管理服務',
            group: '管理功能',
            title: '教學獎勵管理',
            icon: 'gift'
        })
    }
}

const Page = () => {
    const { hash, pathname } = useLocation()
    const pageGroup = MENU_PAGES[pathname] || MENU_PAGES['/tree']
    const pageId = decodeURIComponent(hash.replace(/^#/, ''))
    const { breadcrumbs, icon, title } = pageGroup[pageId] || pageGroup.default

    return (
        <div className="min-h-[calc(100dvh-48px)] bg-[#f4f7fd] pt-[56px] xl:pt-[80px]">
            <TitleBlk title={title} icon={icon} breadcrumbs={breadcrumbs} />
        </div>
    )
}

export default React.memo(Page)
