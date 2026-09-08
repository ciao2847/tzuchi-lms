export const API_ROUTES = {
    sendRegistrationCode: '/api/zh-tw/mineCraft/lottery',
    getFruits: '/_api/zh-tw/fruit'
}
export const MENU_CONFIG = [
    {
        id: 1,
        title: '四季水果',
        url: `/season-fruits`,
        icon: 'fruit.svg',
        color: 'text-[#FF8A8A]'
    },
    {
        id: 2,
        title: '採果何處去',
        url: `/pick`,
        icon: 'pick.svg',
        color: 'text-[#82BE66]'
    },
    {
        id: 3,
        title: '果樹認養',
        url: '/tree',
        icon: 'tree.svg',
        color: 'text-[#FBCE4C]'
    },
    {
        id: 4,
        title: '水果伴手禮',
        url: '/souvenirs',
        icon: 'souvenirs.svg',
        color: 'text-[#6FBDE6]'
    },
    {
        id: 5,
        title: '出境伴手禮',
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

export const FRIEND_SITE_CONFIG = [
    {
        id: 1,
        title: '農業部農村發展及水土保持署',
        url: 'https://www.ardswc.gov.tw/',
        img: 'unit-1.png',
        isLinkOut: true
    },

    {
        id: 2,
        title: '農業易遊網',
        url: 'https://ezgo.ardswc.gov.tw/',
        img: 'unit-2.svg'
    },
    {
        id: 3,
        title: '農遊超市 Farmtour Market',
        url: 'http://www.taiwanfarm.com.tw/',
        img: 'unit-3.png',
        isLinkOut: true
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
