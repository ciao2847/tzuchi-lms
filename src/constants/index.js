export const API_ROUTES = {
    sendRegistrationCode: '/api/zh-tw/mineCraft/lottery',
    getFruits: '/_api/zh-tw/fruit'
}
export const MENU_CONFIG = [
    {
        id: 1,
        title: '我的學習歷程',
        url: `/season-fruits`,
        icon: 'fruit.svg',
        color: 'text-[#FF8A8A]'
    },
    {
        id: 2,
        title: '快速選課',
        url: `/pick`,
        icon: 'pick.svg',
        color: 'text-[#82BE66]'
    },
    {
        id: 3,
        title: '學習服務',
        url: '/tree',
        icon: 'tree.svg',
        color: 'text-[#FBCE4C]'
    },
    {
        id: 4,
        title: '教學服務',
        url: '/souvenirs',
        icon: 'souvenirs.svg',
        color: 'text-[#6FBDE6]'
    },
    {
        id: 5,
        title: '管理服務',
        url: '/souvenirs-country',
        icon: 'fruit-travel.svg',
        color: 'text-[#F39305]'
    },
      {
        id: 6,
        title: '知識管理',
        url: '/souvenirs-country',
        icon: 'fruit-travel.svg',
        color: 'text-[#F39305]'
    },
      {
        id: 7,
        title: '其他平台',
        url: '/souvenirs-country',
        icon: 'fruit-travel.svg',
        color: 'text-[#F39305]'
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
},{
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
},
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
