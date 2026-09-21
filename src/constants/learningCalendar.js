export const MESSAGE_LIST = [
    {
        id: 1,
        title: '【系統公告】115年第二學季學習活動已上線',
        date: '2026/05/14',
        isUnread: true
    },
    {
        id: 2,
        title: '【課程推薦】感染管制實體課程新增場次',
        date: '2026/05/12',
        isUnread: true
    },
    {
        id: 3,
        title: '【提醒】志工體驗課程即將開課，請確認報名',
        date: '2026/05/08',
        isUnread: true
    },
    {
        id: 4,
        title: '【系統維護】5/20 02:00–04:00 系統維護公告',
        date: '2026/05/05',
        isUnread: true
    },
    {
        id: 5,
        title: '【課程通知】精實技能認證課程內容更新',
        date: '2026/04/30',
        isUnread: false
    }
]

export const ANNOUNCEMENT_LIST = [
    {
        id: 1,
        title: '115年新進同仁通識課程–非醫師類課程說明',
        date: '2026/05/01',
        isUnread: true
    },
    {
        id: 2,
        title: '圖書館電子資源使用說明會',
        date: '2026/04/25',
        isUnread: true
    },
    {
        id: 3,
        title: '資訊安全宣導：防範釣魚郵件與資安意識',
        date: '2026/04/20',
        isUnread: false
    },
    {
        id: 4,
        title: '人事異動公告',
        date: '2026/04/15',
        isUnread: false
    },
    {
        id: 5,
        title: '院內停車場管理新制公告',
        date: '2026/04/10',
        isUnread: false
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
            'https://nlms.tzuchi.com.tw/tzuchi/edurd/register_course/course_opration.php?id=84540'
    },
    {
        id: '85257',
        title: '[實體]115年10月01日醫學倫理通識課程-困難病人',
        category: '醫事倫理與法律',
        status: '可選課',
        originalUrl:
            'https://nlms.tzuchi.com.tw/tzuchi/edurd/register_course/course_opration.php?id=85257'
    },
    {
        id: '84946',
        title: '[數位]115年數位課程：醫學倫理概論',
        category: '醫事倫理與法律',
        status: '可選課',
        originalUrl:
            'https://nlms.tzuchi.com.tw/tzuchi/edurd/register_course/course_opration.php?id=84946'
    }
]

export const COURSE_PROGRESS = [
    { id: 1, title: '醫院簡介', states: ['complete'] },
    { id: 2, title: '職業安全', states: ['complete', 'complete'] },
    { id: 3, title: '人事規章', states: ['complete'] },
    {
        id: 4,
        title: '感染管制',
        states: ['complete', 'complete', 'complete', 'complete']
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
