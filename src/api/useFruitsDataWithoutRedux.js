import { useState, useEffect } from 'react'
import { MONTHS_MAP } from 'constants/utils'

const makeMonthNames = (value) => {
    const arr = []
    Object.keys(MONTHS_MAP).forEach((k) => {
        k *= 1 // 將 k 字串轉換成數字
        if ((value & k) === k) {
            arr.push(MONTHS_MAP[k])
        }
    })
    return arr
}

const useFruitsDataWithoutRedux = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('/_api/zh-tw/fruit', {
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((resp) => resp.json())
            .then(({ success, data }) => {
                if (success) {
                    data.forEach((item) => {
                        item.cover =
                            (item.images &&
                                item.images.find((item) => item.isCover) &&
                                item.images.find((item) => item.isCover).url) ||
                            (item.images &&
                                item.images.length > 0 &&
                                item.images[0].url) ||
                            `${process.env.BASE_PATH}/images/not-found/miss.jpg`

                        item.months = makeMonthNames(item.months)
                    })

                    setData(data)
                }
            })
            .catch(console.error)
    }, [])
    return data
}

export default useFruitsDataWithoutRedux
