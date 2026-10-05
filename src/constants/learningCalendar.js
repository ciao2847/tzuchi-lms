export const MESSAGE_LIST = [
    {
        id: 'message-1',
        type: 'message',
        title: '【大林】115年全院通識學程通知信',
        date: '2026/08/11',
        publishedAt: '2026-08-11 12:00:03',
        isUnread: true,
        sender: '大林分院教學部教學研發組 文姿蓉',
        content: [
            '您好：',
            '截至 2026-08-11 12:00:03 為止，您在【大林】115年全院通識學程的修課詳細如下：'
        ],
        detail: {
            kind: 'course-progress',
            title: '修課學程',
            rows: [
                { label: '健康促進', statuses: ['incomplete'] },
                { label: '醫院年度發展', statuses: ['incomplete'] },
                {
                    label: 'CPR/BLS/ACLS(術科)',
                    statuses: ['incomplete']
                },
                {
                    label: '消防安全暨緊急應變(學科)',
                    statuses: ['complete', 'complete']
                },
                { label: '消防安全(術科)', statuses: ['incomplete'] },
                {
                    label: '病人安全與權利',
                    statuses: ['incomplete', 'incomplete']
                },
                {
                    label: '(醫學/醫事/護理)倫理',
                    statuses: ['complete']
                },
                { label: '醫事法律', statuses: ['complete'] },
                {
                    label: '安寧療護/生命末期照護',
                    statuses: ['incomplete']
                },
                { label: '感染管制(數位)', statuses: ['complete'] },
                {
                    label: '感染管制(實體)',
                    statuses: ['incomplete', 'incomplete']
                },
                {
                    label: '資通安全',
                    statuses: ['complete', 'complete', 'complete']
                },
                { label: '職業安全', statuses: ['incomplete'] },
                { label: '永續發展', statuses: ['incomplete'] }
            ]
        },
        sections: [
            {
                title: '學程說明',
                content:
                    '請進入「我的學習行事曆」查看各類別已完成與待完成的課程。'
            },
            {
                title: '其他資訊',
                content: '如對學分認列或課程紀錄有疑問，請與課程承辦單位聯繫。'
            }
        ],
        notes: [
            '相關問題請至首頁「最新消息」查看各類別的承辦分機。',
            '學程相關問題請洽教學部教學研發組，分機 3348。'
        ],
        action: {
            label: '前往我的學習行事曆',
            href: '/calendar'
        }
    },
    {
        id: 'message-2',
        type: 'message',
        title: '【課程推薦】感染管制實體課程新增場次',
        date: '2026/05/12',
        publishedAt: '2026-05-12 09:30:00',
        isUnread: true,
        content: [
            '感染管制實體課程已新增報名場次，請至快速選課查看開課時間與名額。',
            '各場次名額有限，額滿即停止受理報名。'
        ],
        action: { label: '前往快速選課', href: '/pick' }
    },
    {
        id: 'message-3',
        type: 'message',
        title: '【提醒】志工體驗課程即將開課，請確認報名',
        date: '2026/05/08',
        publishedAt: '2026-05-08 14:10:00',
        isUnread: true,
        content: [
            '您報名的志工體驗課程即將開課，請再次確認上課時間、地點與注意事項。',
            '如無法參加，請於報名截止前完成取消。'
        ]
    },
    {
        id: 'message-4',
        type: 'message',
        title: '【系統維護】5/20 02:00–04:00 系統維護公告',
        date: '2026/05/05',
        publishedAt: '2026-05-05 10:00:00',
        isUnread: true,
        content: [
            '學習平台將於 2026/05/20 02:00–04:00 進行系統維護，期間將暫停登入、選課與學習紀錄更新服務。',
            '若提前完成維護，將不另行公告即恢復服務。'
        ]
    },
    {
        id: 'message-5',
        type: 'message',
        title: '【課程通知】精實技能認證課程內容更新',
        date: '2026/04/30',
        publishedAt: '2026-04-30 16:20:00',
        isUnread: false,
        content: [
            '精實技能認證課程已更新單元內容與學習教材，已選課同仁可直接進入原課程繼續學習。',
            '已完成的單元與學習時數不受影響。'
        ]
    }
]

export const ANNOUNCEMENT_LIST = [
    {
        id: 'announcement-1',
        type: 'announcement',
        title: '【大林】114年全院（非醫師）通識學程學分數一覽表通知信',
        date: '2024/11/27',
        publishedAt: '2024-11-27 08:56:13',
        isUnread: true,
        subject: '114年全院（非醫師）通識學程學分數一覽表',
        content: [
            '114年度全院（非醫師）通識學程各類別學分、課程專責單位與聯繫方式如下。'
        ],
        detail: {
            kind: 'credit-overview',
            title: '114年全院（非醫師）通識學程學分數一覽表',
            columns: ['類別', '課程項目', '學分', '課程專責單位', '聯繫分機'],
            rows: [
                ['醫院年度發展', '醫院年度發展', '1', '企劃室', '5024'],
                ['臨床照護基礎', '健康促進', '1', '社區醫療部', '5283'],
                ['臨床照護基礎', '永續發展', '1', '院長室', '5019'],
                ['緊急災害應變', 'CPR/BLS/ACLS(術科)', '1', '急診部', '3323'],
                [
                    '緊急災害應變',
                    '消防安全暨緊急應變(學科)',
                    '2',
                    '職業安全室',
                    '5088'
                ],
                ['緊急災害應變', '消防安全(術科)', '2', '職業安全室', '5088'],
                ['病人照護', '病人安全與權利', '2', '品管中心', '5338'],
                [
                    '全人醫療與溝通',
                    '(醫學/醫事/護理)倫理',
                    '1',
                    '醫學倫理委員會',
                    '5016'
                ],
                ['全人醫療與溝通', '醫事法律', '1', '法務中心', '5014'],
                [
                    '全人醫療與溝通',
                    '安寧療護/生命末期照護',
                    '1',
                    '家庭醫學部',
                    '3535'
                ],
                ['臨床安全', '感染管制(數位)', '1', '感染管制中心', '5907'],
                ['臨床安全', '感染管制(實體)', '2', '感染管制中心', '5907'],
                ['工作安全', '資通安全', '3', '法人資訊室', '5151'],
                ['工作安全', '職業安全', '1', '職業安全室', '5088']
            ]
        },
        notes: [
            '通識學程修課日期為 113 年 11 月 01 日至 114 年 10 月 31 日。',
            '完成學程所需學分合計為 19 學分。',
            '如有學分認列問題，請聯繫表中的課程專責單位。'
        ]
    },
    {
        id: 'announcement-2',
        type: 'announcement',
        title: '圖書館電子資源使用說明會',
        date: '2026/04/25',
        publishedAt: '2026-04-25 11:00:00',
        isUnread: true,
        content: [
            '圖書館將舉辦電子資源使用說明會，介紹院內外連線、資料庫查詢與全文下載方式。',
            '歡迎有需要的同仁報名參加。'
        ]
    },
    {
        id: 'announcement-3',
        type: 'announcement',
        title: '資訊安全宣導：防範釣魚郵件與資安意識',
        date: '2026/04/20',
        publishedAt: '2026-04-20 09:00:00',
        isUnread: false,
        content: [
            '近期釣魚郵件與惡意連結案例增加，請勿點擊來源不明的連結或下載附件。',
            '如發現異常郵件，請保留郵件並立即通知資訊室。'
        ]
    },
    {
        id: 'announcement-4',
        type: 'announcement',
        title: '人事異動公告',
        date: '2026/04/15',
        publishedAt: '2026-04-15 15:30:00',
        isUnread: false,
        content: [
            '最新人事異動資訊已公告，請同仁點閱內容並留意相關業務聯繫窗口調整。'
        ]
    },
    {
        id: 'announcement-5',
        type: 'announcement',
        title: '院內停車場管理新制公告',
        date: '2026/04/10',
        publishedAt: '2026-04-10 08:40:00',
        isUnread: false,
        content: [
            '院內停車場管理新制自 2026/05/01 起實施，請同仁留意出入動線、停放區域與證件申請規定。'
        ]
    }
]

export const HAS_UNREAD_NOTICE = [...MESSAGE_LIST, ...ANNOUNCEMENT_LIST].some(
    ({ isUnread }) => isUnread
)

const MEDICAL_ETHICS_COURSES = [
    {
        id: '84540',
        title: '115年8月6日醫學倫理通識課程-性騷擾暨相關法規',
        category: '醫事倫理與法律',
        status: '通過',
        originalUrl:
            'http://10.2.10.236:8064/tzuchi/edurd/register_course/course_opration.php?id=84540'
    },
    {
        id: '85257',
        title: '[實體]115年10月01日醫學倫理通識課程-困難病人',
        category: '醫事倫理與法律',
        status: '可選課',
        originalUrl:
            'http://10.2.10.236:8064/tzuchi/edurd/register_course/course_opration.php?id=85257'
    },
    {
        id: '84946',
        title: '[數位]115年數位課程：醫學倫理概論',
        category: '醫事倫理與法律',
        status: '可選課',
        originalUrl:
            'http://10.2.10.236:8064/tzuchi/edurd/register_course/course_opration.php?id=84946'
    }
]

export const COURSE_PROGRESS = [
    { id: 1, title: '醫院簡介', states: ['complete'] },
    { id: 2, title: '職業安全', states: ['complete', 'complete'] },
    { id: 3, title: '人事規章', states: ['complete'] },
    {
        id: 4,
        title: '感染管制',
        states: [
            'complete',
            'complete',
            'complete',
            'complete',
            'inProgress',
            'inProgress',
            'inProgress',
            'inProgress',
            'notStarted',
            'notStarted',
            'notStarted',
            'notStarted',
            'failed',
            'failed',
            'failed',
            'failed',
            'overdueComplete',
            'overdueComplete',
            'overdueComplete',
            'overdueComplete'
        ]
    },
    { id: 5, title: '醫事倫理與法律', states: ['complete'] },
    { id: 6, title: '廢棄物分類與資源回收', states: ['failed'] },
    { id: 7, title: '病人安全', states: ['complete'] },
    { id: 8, title: '志工體驗(主治醫師選修)', states: ['notStarted'] },
    { id: 9, title: '體適能檢測', states: ['notStarted'] },
    {
        id: 10,
        title: '服務管制_實體課程',
        states: ['inProgress', 'notStarted']
    },
    { id: 11, title: '消防安全_實體課程', states: ['inProgress'] }
]

const PROGRAM_COURSES = COURSE_PROGRESS.filter(({ id }) => id !== 5).map(
    ({ id, title, states }) => ({
        id: `program-${id}`,
        title,
        category: title,
        status: states.includes('complete')
            ? '通過'
            : states.includes('failed')
            ? '未通過'
            : states.includes('inProgress')
            ? '修課中'
            : '尚未開始'
    })
)

export const CALENDAR_COURSES = [...PROGRAM_COURSES, ...MEDICAL_ETHICS_COURSES]

export const getCalendarCourseById = (courseId) =>
    CALENDAR_COURSES.find(({ id }) => id === courseId)
