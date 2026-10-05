export const MENU_CONFIG = [
    {
        id: 'learning-history',
        title: '我的學習歷程',
        url: '/calendar',
        mobileIcon: 'doc',
        indicator: 'right'
    },
    {
        id: 'quick-course',
        title: '快速選課',
        url: '/pick',
        mobileIcon: 'pencil',
        indicator: 'right'
    },
    {
        id: 'learning-service',
        title: '學習服務',
        url: '/tree',
        mobileIcon: 'doc',
        indicator: 'down',
        submenuWidth: 280,
        children: [
            {
                id: 'learning-history-group',
                title: '學習歷程',
                isSectionTitle: true
            },
            {
                id: 'resident-learning-history',
                title: '住院醫師學習歷程',
                url: 'https://nlms.tzuchi.com.tw/eportfolio/login.php'
            },
            {
                id: 'medical-staff-learning-history',
                title: '醫事職類學習歷程',
                url: 'https://nlms.tzuchi.com.tw/portfolio/index.html'
            },
            {
                id: 'intern-learning-history',
                title: '實習醫學生學習歷程',
                url: 'https://hldme.tzuchi-healthcare.org.tw/',
                isLinkOut: true
            },
            {
                id: 'medical-student-learning-history',
                title: '醫學生學習歷程(新)',
                url: 'https://hldme.tzuchi-healthcare.org.tw/',
                isLinkOut: true
            },
            {
                id: 'cbme-group',
                title: 'CBME',
                isSectionTitle: true
            },
            {
                id: 'medical-education',
                title: '醫療科',
                url: 'https://nlms.tzuchi.com.tw/eportfolio/login.php'
            },
            {
                id: 'medical-profession',
                title: '醫事職類',
                url: 'https://nlms.tzuchi.com.tw/epcbme/login.php'
            },
            {
                id: 'external-training-group',
                title: '外訓計畫',
                isSectionTitle: true
            },
            {
                id: 'external-training-data',
                title: '外訓資料',
                url: '/external-training-data'
            },
            {
                id: 'external-training-form',
                title: '填寫外訓資料',
                url: '/tree#external-training-form'
            }
        ]
    },
    {
        id: 'teaching-service',
        title: '教學服務',
        url: '/edu-service',
        mobileIcon: 'pencil',
        indicator: 'down',
        submenuWidth: 340,
        children: [
            {
                id: 'course-management-group',
                title: '課程管理',
                isSectionTitle: true
            },
            {
                id: 'program-planning',
                title: '學程規劃',
                url: 'http://10.2.10.236:8064/tzuchi/edurd/program_manage/'
            },
            {
                id: 'course-opening',
                title: '開課',
                url: 'http://10.2.10.236:8064/tzuchi/edurd/course/'
            },
            {
                id: 'teaching-history',
                title: '教學歷程',
                url: 'http://10.2.10.236:8064/tzuchi/edurd/teach_history/'
            },
            {
                id: 'cfd-teacher-review',
                title: 'CFD教師評核',
                url: 'http://10.2.10.236:8064/tzuchi/edurd/teacher_judge/'
            },
            {
                id: 'application-service-group',
                title: '申請服務',
                isSectionTitle: true
            },
            {
                id: 'digital-course-application',
                title: '數位課程申請',
                url: 'http://10.2.10.236:8064/tzuchi/edurd/extjs/app/ui/usr/'
            },
            {
                id: 'colleague-teaching-reward-review',
                title: '同仁教學獎勵審核 - 大林',
                url: 'http://10.2.10.236:8064/tzuchi/edurd/extjs/app/ui/usr/'
            },
            {
                id: 'equipment-reservation',
                title: '設備預借 - 大林',
                url: 'http://10.2.10.236/device/autologin.php?sid=76af0cf00d96a2b60b2c9af288128739',
                isLinkOut: true
            },
            {
                id: 'teaching-resource-application',
                title: '教學資源申請 - 大林',
                url: 'http://10.2.10.236/afms/',
                isLinkOut: true
            },
            {
                id: 'teacher-appointment-application',
                title: '教師聘任申請',
                url: '/edurd/cfd-hire/'
            }
        ]
    },
    {
        id: 'management-service',
        title: '管理服務',
        url: '/edu-service-country',
        mobileIcon: 'adv',
        indicator: 'down',
        submenuWidth: 320,
        children: [
            {
                id: 'supervisor-reports-group',
                title: '主管報表',
                mobileIcon: 'grid',
                isSectionTitle: true
            },
            {
                id: 'new-management-reports',
                title: '新增管理報表(部分報表)',
                url: '/edu-service-country#new-management-reports',
                mobileIcon: 'category'
            },
            {
                id: 'attendance-inquiry',
                title: '簽到退查詢',
                url: '/edu-service-country#attendance-inquiry',
                mobileIcon: 'square-clock'
            },
            {
                id: 'management-functions-group',
                title: '管理功能',
                mobileIcon: 'adv',
                isSectionTitle: true
            },
            {
                id: 'permissions',
                title: '權限設定',
                url: '/edu-service-country#permissions',
                mobileIcon: 'lock'
            },
            {
                id: 'other-reports',
                title: '其他報表',
                url: '/edu-service-country#other-reports',
                mobileIcon: 'list'
            },
            {
                id: 'announcements',
                title: '公告管理',
                url: '/edu-service-country#announcements',
                mobileIcon: 'speaker'
            },
            {
                id: 'teaching-rewards',
                title: '教學獎勵管理',
                url: '/edu-service-country#teaching-rewards',
                mobileIcon: 'gift'
            }
        ]
    },
    {
        id: 'knowledge-management',
        title: '知識管理',
        url: 'http://10.2.10.236:8064/tzuchi/index/km.php',
        mobileIcon: 'bulb',
        indicator: 'right'
    },
    {
        id: 'other-platforms',
        title: '其他平台',
        url: '/edu-service-country',
        mobileIcon: 'grid',
        desktopIndicator: 'down',
        indicator: 'right',
        submenuWidth: 240,
        children: [
            {
                id: 'health-ok',
                title: '健康OK棒',
                url: 'https://www.youtube.com/@dltzuchi/videos',
                isLinkOut: true
            },
            {
                id: 'academic-lectures',
                title: '學術演講',
                url: 'https://nlms.tzuchi.com.tw/speech/',
                isLinkOut: true
            },
            {
                id: 'material-library',
                title: '素材圖庫',
                url: 'http://10.2.10.236:8064/tzuchi/lmsresource/index.php?type=ppts',
                isLinkOut: true
            },
            {
                id: 'qa',
                title: 'Q&A',
                url: 'https://cms.tzuchi.com.tw/dl/2024/elearning_qa/index.html',
                isLinkOut: true
            },
            {
                id: 'feedback',
                title: '問題反饋',
                url: 'https://www.surveycake.com/s/z9Agx',
                isLinkOut: true
            },
            {
                id: 'cbme',
                title: 'CBME',
                url: 'https://nlms.tzuchi.com.tw/cbme/',
                isLinkOut: true
            }
        ]
    }
]
export const SOCIAL_LINKS_CONFIG = [
    {
        id: 1,
        title: 'Facebook',
        url: 'https://www.facebook.com/EzgoFunClub/',
        icon: 'facebook',
        isLinkOut: true,
        color: 'text-[#fff]'
    },
    {
        id: 2,
        title: 'YouTube',
        url: 'https://www.youtube.com/channel/UClhfEFcETEMLdHhzfAVltWw',
        icon: 'youtube',
        isLinkOut: true,
        color: 'text-[#fff]'
    },
    {
        id: 3,
        title: 'Instagram',
        url: 'https://www.instagram.com/agriezgo/',
        icon: 'instagram',
        color: 'text-[#fff]',
        isLinkOut: true
    }
]

export const OTHER_CONFIG = [
    {
        title: '各院教學部',
        links: [
            {
                id: 1,
                title: '花蓮醫學中心教學部',
                url: 'https://hlm.tzuchi.com.tw/tch/',
                isLinkOut: true
            },
            {
                id: 2,
                title: '台北慈院教學部',
                url: 'https://taipei.tzuchi.com.tw/%e6%95%99%e5%ad%b8%e9%83%a8/',
                isLinkOut: true
            },
            {
                id: 3,
                title: '台中慈院教學部',
                url: 'https://taichung.tzuchi.com.tw/index.php/dan-wei-jian-jie-302',
                isLinkOut: true
            },
            {
                id: 4,
                title: '大林慈院教學部',
                url: 'https://dalin.tzuchi-healthcare.org.tw/index.php/mededu',
                isLinkOut: true
            }
        ]
    },
    {
        title: '各院圖書館',
        links: [
            {
                id: 1,
                title: '花蓮慈院圖書館',
                url: 'https://sites.google.com/view/hltzuchilib?pli=1&authuser=0',
                isLinkOut: true
            },
            {
                id: 2,
                title: '台北慈院圖書館',
                url: 'https://taipei.tzuchi.com.tw/%E5%9C%96%E6%9B%B8%E9%A4%A8%E9%A6%96%E9%A0%81/',
                isLinkOut: true
            },
            {
                id: 3,
                title: '台中慈院圖書館',
                url: 'https://taichung.tzuchi.com.tw/index.php/library',
                isLinkOut: true
            },
            {
                id: 4,
                title: '大林慈院圖書館',
                url: 'https://dalin.tzuchi-healthcare.org.tw/index.php/library',
                isLinkOut: true
            }
        ]
    },
    {
        title: '慈院研討會',
        links: [
            {
                id: 1,
                title: '院外報名系統',
                url: 'https://app.tzuchi.com.tw/tchw/onlineregister/act.aspx',
                isLinkOut: true
            }
        ]
    },
    {
        title: '專業學習社群',
        links: [
            {
                id: 1,
                title: '膝關節健康促進方案',
                url: 'https://dl.tzuchi.com.tw/jointcenter',
                isLinkOut: true
            }
        ]
    },
    {
        title: '其他',
        links: [
            {
                id: 1,
                title: '法人資訊教育訓練',
                url: 'https://nlms.tzuchi.com.tw/mfit/',
                isLinkOut: true
            },
            {
                id: 2,
                title: '防疫不停學',
                url: 'https://dltzuchi4.wixsite.com/dalin-learning',
                isLinkOut: true
            },
            {
                id: 3,
                title: '醫院簡介影片',
                url: 'https://cms.tzuchi.com.tw/tzucms/view.php?file=46de3760b1702bd1219bce99241090ef',
                isLinkOut: true
            }
        ]
    }
]

export const FORM_COLUMN_TYPE_MAP = {
    TEXT: 1,
    TEXTAREA: 2,
    NUMBER: 3,
    DATE: 4,
    RADIO: 6,
    CHECKBOX: 7,
    TIME_RANGE: 'time',
    HIDDEN: 'hidden',
    ACCEPT: 'accept',
    COORDINATE: 'coordinate',
    FILE: 'file'
}
