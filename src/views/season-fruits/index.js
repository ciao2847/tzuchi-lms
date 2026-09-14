import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BannerTitle from 'components/bannerTitle'
import Spinner from 'components/Spinner'
import SeasonNav from './SeasonNav'
import SeasonList from './SeasonList'
import swal from 'sweetalert'
import { MONTHS_MAP, SEASON_MAP } from 'constants/utils'

const makeMonthNames = (value) => {
    return Object.keys(MONTHS_MAP) //取得所有鍵（字串型態的數字） 輸出: ["1", "2", "4", "8", "16", "32", "64", "128", "256", "512", "1024", "2048"]
        .map(Number) //將字串轉換為數字 輸出: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]
        .filter((k) => (value & k) === k) //篩選出符合條件的鍵 假設 value = 20 ， 20 & 4 = 4，20 & 16 = 16 ， 輸出: [4, 16]
        .map((k) => MONTHS_MAP[k]) //根據篩選後的鍵，取得對應的月份值 [4, 16] 對應 3 和 5 月，輸出: [3, 5]
}

const Page = () => {
    const { season } = useParams()
    const [data, setData] = useState(null)
    const [filteredData, setFilteredData] = useState(null)

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
                            item.images?.find((img) => img.isCover)?.url ||
                            item.images?.[0]?.url ||
                            `${process.env.BASE_PATH}/images/not-found/miss.jpg`

                        item.months = makeMonthNames(item.months)
                    })

                    setData(data)
                    filterData(data, season) // 初始載入時過濾數據
                } else {
                    swal({ title: data.toString(), icon: 'info' })
                }
            })
            .catch(console.error)
    }, [])

    useEffect(() => {
        if (data) {
            filterData(data, season) // 當 `season` 改變時，過濾數據
        }
    }, [season, data])

    const filterData = (data, season) => {
        const filterMonths = SEASON_MAP[season] || 'all'

        if (filterMonths === 'all') {
            setFilteredData(data)
        } else {
            setFilteredData(
                data.filter((item) =>
                    item.months.some((month) => filterMonths.includes(month))
                )
            )
        }
    }

    return (
        <div className="w-full">
            <BannerTitle
                title={'品嚐最鮮美的原味'}
                sub={`四季水果`}
                content={`臺灣水果依季節分成春、夏、秋、冬與全年產期的水果 歡迎大家來認識臺灣水果！`}
                img={`season-fruit.jpg`}
            />
            <section>
                <SeasonNav className="py-5 xl:py-10 max-w-[768px] mx-auto" />
                {!filteredData ? (
                    <div className="flex justify-center p-10">
                        <Spinner size={18} color={'black'} />
                    </div>
                ) : (
                    <SeasonList
                        className="max-w-[1280px] mx-auto"
                        data={filteredData}
                    />
                )}
            </section>
        </div>
    )
}

export default React.memo(Page)
