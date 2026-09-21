const APPLICABILITY_OPTIONS = [
    '自主外訓',
    '醫師學會發表',
    '進修學術報告',
    '其他'
]
const ATTRIBUTE_OPTIONS = [
    '醫學人文',
    '感染管制',
    '服務禮儀',
    '危機管理',
    '醫學倫理',
    '全人醫療'
]
const MORE_ATTRIBUTE_GROUPS = [
    {
        title: '衛生醫療法規',
        options: ['醫療法規', '病人安全', '個人資料保護']
    },
    {
        title: '政府相關法令',
        options: ['職業安全衛生', '性別平等', '消防安全']
    },
    {
        title: '護理',
        options: ['臨床照護', '護理管理', '護理教育']
    }
]
const SATISFACTION_QUESTIONS = [
    '課程評價',
    '課程內容',
    '講師表現',
    '課程收穫',
    '符合期待'
]
const SATISFACTION_OPTIONS = [
    { value: '5', title: '非常滿意' },
    { value: '4', title: '滿意' },
    { value: '3', title: '普通' },
    { value: '2', title: '不滿意' },
    { value: '1', title: '非常不滿意' }
]
const INPUT_CLASS =
    'h-11 w-full min-w-0 rounded-[6px] border border-solid border-[#cfdbea] bg-white px-3 text-[13px] text-primary outline-none placeholder:text-[#8a9bb0] focus:border-secondary focus:ring-2 focus:ring-secondary/20 md:text-[14px]'
const FIELD_LABEL_CLASS =
    'mb-1.5 block text-[13px] font-bold text-primary md:text-[14px]'

export {
    APPLICABILITY_OPTIONS,
    ATTRIBUTE_OPTIONS,
    MORE_ATTRIBUTE_GROUPS,
    SATISFACTION_QUESTIONS,
    SATISFACTION_OPTIONS,
    INPUT_CLASS,
    FIELD_LABEL_CLASS
}
