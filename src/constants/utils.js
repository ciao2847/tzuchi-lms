import React from 'react'
import ThumbFrame from 'components/ThumbFrame'
import ReactGA_4 from 'react-ga4'

const isDev = process.env.NODE_ENV === 'development'
export const sendGA = ({ path, title, isListPage = false }) => {
    if (isDev) {
        console.info(`${isListPage ? 'list-page ' : ''}${title} ${path}`)
    }
    ReactGA_4.send({
        hitType: 'pageview',
        page: path,
        page_title: title
    })
}
export const distance = (latStart, lngStart, latEnd, lngEnd) => {
    const R = 6371 // Radius of the earth in km
    const dLat = toRad(latEnd - latStart) // Javascript functions in radians
    const dLon = toRad(lngEnd - lngStart)
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(latStart)) *
            Math.cos(toRad(latEnd)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const d = R * c // Distance in km
    return d
}
const toRad = (num) => {
    return (num * Math.PI) / 180
}
export const formatTime = (date) => {
    return `${date.getFullYear().toString()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date
        .getHours()
        .toString()
        .padStart(2, '0')}:${date
        .getMinutes()
        .toString()
        .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
}
export const loadScripts = async (scripts) => {
    const get = (src) => {
        return new Promise(function (resolve, reject) {
            var el = document.createElement('script')
            el.async = true
            el.addEventListener(
                'load',
                function () {
                    resolve(src)
                },
                false
            )
            el.addEventListener(
                'error',
                function () {
                    reject(src)
                },
                false
            )
            el.src = src
            ;(
                document.getElementsByTagName('head')[0] ||
                document.getElementsByTagName('body')[0]
            ).appendChild(el)
        })
    }

    const myPromises = scripts.map(async function (script, index) {
        return await get(script)
    })

    return await Promise.all(myPromises)
}
export const isInApp = () => {
    const useragent = navigator.userAgent
    const rules = [
        'WebView',
        '(iPhone|iPod|iPad)(?!.*Safari/)',
        'Android.*(wv|.0.0.0)'
    ]
    const regex = new RegExp(`(${rules.join('|')})`, 'ig')
    return Boolean(useragent.match(regex))
}
export const makeParams = (query, params) => {
    const merge = { ...query, ...params }
    const queryString = Object.keys(merge)
        .filter((key) => !!merge[key] && merge[key]?.length > 0)
        .map((key) => `${key}=${merge[key]}`)
        .join('&')
    return queryString
}
export const filterWithQuery = (data, query) => {
    if (!data) return data
    let filteredData = data
    let {
        keyword = '',
        category = [],
        transport = [],
        zipcode = [],
        days = [],
        county = [],
        color = []
    } = query
    let strArr

    category =
        typeof query.category === 'string'
            ? query.category.split(',').map((cate) => cate * 1)
            : category
    transport =
        typeof query.transport === 'string'
            ? query.transport.split(',').map((tran) => tran * 1)
            : transport
    zipcode =
        typeof query.zipcode === 'string'
            ? query.zipcode.split(',').map((zip) => zip * 1)
            : zipcode

    county =
        typeof query.county === 'string'
            ? query.county.split(',').map((c) => c * 1)
            : county

    days =
        typeof query.days === 'string'
            ? query.days.split(',').map((d) => d * 1)
            : days

    color =
        typeof query.color === 'string'
            ? query.color.split(',').map((c) => c * 1)
            : color

    if (keyword) {
        strArr = keyword.trim().split(' ')

        filteredData = filteredData.filter(
            (item) =>
                strArr.some(
                    (str) =>
                        item.title?.toLowerCase().includes(str.toLowerCase()) ||
                        item.name?.toLowerCase().includes(str.toLowerCase()) ||
                        item.summary?.toLowerCase().includes(str.toLowerCase())
                ) ||
                strArr.some((str) =>
                    item.attractions?.name
                        ?.toLowerCase()
                        .includes(str.toLowerCase())
                ) ||
                strArr.some(
                    (str) =>
                        str.length > 1 &&
                        (item.attractions?.address
                            ?.toLowerCase()
                            .includes(str.toLowerCase()) ||
                            item.attractions?.district
                                ?.toLowerCase()
                                .includes(str.toLowerCase()))
                )
        )
    }
    if (category.length > 0) {
        filteredData = filteredData.filter((item) =>
            item.categories?.some((c) => category.includes(c))
        )
    }
    if (transport.length > 0) {
        filteredData = filteredData.filter((item) =>
            item.transport?.some((c) => transport.includes(c))
        )
    }
    if (zipcode.length > 0) {
        filteredData = filteredData.filter((item) =>
            zipcode.includes(item.zipcode * 1)
        )
    }
    if (county.length > 0) {
        filteredData = filteredData.filter((item) =>
            item.county?.some((c) => county.includes(c))
        )
    }

    if (days.length > 0) {
        filteredData = filteredData.filter((item) =>
            days.includes(item.days * 1)
        )
    }

    if (color.length > 0) {
        filteredData = filteredData.filter((item) =>
            item.category?.some((c) => color.includes(c))
        )
    }

    return filteredData
}
export const isRangeOverlap = (startA, endA, startB, endB) =>
    startA <= endB && endA >= startB

export const formatCalendarDate = (dateStr) =>
    dateStr.split('T')[0].replace(/\:|\-/g, '')

export const makeCover = (data, className) => {
    if (!data) return null
    return (
        <ThumbFrame
            className={className}
            src={data.src.replace('640x480', '1024x768')}
            alt={data.subject || data.title}
            isRounded={true}
            roundedSize="lg"
            style={{
                paddingTop: `${(data.height / data.width) * 100}%`
            }}
        />
    )
}
export const isInViewport = (element) => {
    return (
        element.getBoundingClientRect().top <= window.innerHeight &&
        element.getBoundingClientRect().bottom >= 0
    )
}
export const getUserGeolocation = (dispatch, isHint = true) => {
    const p = new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude
                const lng = position.coords.longitude
                localStorage.setItem('isAllowGetUserGeolocation', true)
                resolve({ lat: lat, lng: lng })
            },
            (error) => {
                const el = document.createElement('div')
                // el.innerHTML =
                //     '<div className=" mb-2 font-weight-bold fz-22px text-primary">請授權存取您的位置資訊</div><div className="text-default text-left fz-20px font-weight-bold">1. 請打開GPS定位服務</div><div className="mt-4px text-info fz-16px text-left">如果沒有打開定位服務，我們無法提供相關服務喔！</div><div className="text-default text-left fz-20px font-weight-bold mt-2">2. 曾經拒絕該網站存取權限</div><div className="mt-4px text-info fz-16px text-left">如果曾經拒絕存取權限的話，請清除瀏覽器快取，再允許我們網站存取位置，就可以繼續使用服務囉~</div>'
                // swal({
                //     title: '',
                //     content: el
                // })
                resolve({ lat: 24.433103, lng: 118.320123, error: error })
            }
        )
    })
    return p
}
export const removeAllTags = (html) => html.replace(/<[^>]*>?/gm, '')
export const getUserZipcodeAndCounty = async (lat, lng) => {
    const geocodeObj = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.GOOGLE_MAP_KEY}`
    )
        .then((resp) => resp.json())
        .then(({ results }) => {
            const zipcode = results?.[0]?.address_components?.find((c) =>
                c.types.includes('postal_code')
            ).short_name
            const county = results?.[0]?.address_components?.find(
                (c) =>
                    c.types.includes('administrative_area_level_1') ||
                    c.types.includes('administrative_area_level_2')
            ).short_name

            return { zipcode, county }
        })

    return geocodeObj
}

export const getParkingToken = async (url) => {
    let token = JSON.parse(localStorage.getItem('autopass_for_map'))
    if (token && token.expires > new Date().getTime()) return token
    token = await fetch(url, {
        method: 'GET',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
        .then((resp) => resp.json())
        .then(({ data, apiUrl }) => {
            const result = { ...data, apiUrl }
            localStorage.setItem('autopass_for_map', JSON.stringify(result))
            return result
        })
        .catch(console.error)
    return token
}

export const queryToCondition = (query) =>
    query
        ?.replaceAll('keyword=', 'k:')
        .replaceAll('category=', 'c:')
        .replaceAll('zipcode=', 'z:')
        .replaceAll('color=', 'co:')

export const conditionToQuery = (condition) =>
    condition
        ?.replaceAll('k:', 'keyword=')
        .replaceAll('c:', 'category=')
        .replaceAll('z:', 'zipcode=')
        .replaceAll('co:', 'color=')

export const makeIsCover = (data) => {
    return data.forEach((item) => {
        item.cover =
            item.images?.find((img) => img.isCover)?.src ||
            item.images?.[0]?.src ||
            '/images/not-found/miss.jpg'
    })
}
export const numberWithCommas = (num) => {
    const parts = num.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.')
}
export const formatPriceWithLocale = (price, lang) => {
    const isTW = lang === 'zh-tw'
    const isEN = lang === 'en'
    return isEN
        ? `from TWD ${numberWithCommas(price)}`
        : `NT$ ${numberWithCommas(price)}${isTW ? ' 起' : ''}`
}
export const formatSize = (byte) => {
    let size = `${Math.floor((byte / 1024) * 100) / 100} kb`
    if (byte > 1024 * 1024)
        size = `${Math.floor((byte / 1024 / 1024) * 100) / 100} mb`
    return size
}
export const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0,
            v = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}
export const keysToCamelCase = (obj) => {
    if (Array.isArray(obj)) {
        return obj.map((v) => keysToCamelCase(v))
    } else if (obj !== null && obj.constructor === Object) {
        return Object.keys(obj).reduce((result, key) => {
            const newKey = key.charAt(0).toLowerCase() + key.slice(1)
            result[newKey] = keysToCamelCase(obj[key])
            return result
        }, {})
    }
    return obj
}

export const MONTHS_MAP = {
    1: 1,
    2: 2,
    4: 3,
    8: 4,
    16: 5,
    32: 6,
    64: 7,
    128: 8,
    256: 9,
    512: 10,
    1024: 11,
    2048: 12
}

export const SEASON_MAP = {
    spring: [3, 4, 5],
    summer: [6, 7, 8],
    autumn: [9, 10, 11],
    winter: [12, 1, 2],
    all: 'all',
    fruits: 'all'
}
