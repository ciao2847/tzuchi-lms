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
export const isRangeOverlap = (startA, endA, startB, endB) =>
    startA <= endB && endA >= startB

export const formatCalendarDate = (dateStr) =>
    dateStr.split('T')[0].replace(/\:|\-/g, '')

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

