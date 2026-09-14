import React, { useEffect, useState } from 'react'
import BannerTitle from 'components/bannerTitle'
import TreeNav from './TreeNav'
import TreeList from './TreeList'

export const AREA_CONFIG = [
    {
        id: 1,
        title: '北部',
        counties: [1, 2, 3, 5, 6, 7, 8]
    },
    {
        id: 2,
        title: '中部',
        counties: [9, 11, 10, 14, 12, 13]
    },
    {
        id: 3,
        title: '南部',
        counties: [15, 16, 17]
    },
    {
        id: 4,
        title: '東部',
        counties: [4, 19, 18]
    }
]

const Page = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('/_api/zh-tw/fruit-trees', {
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((resp) => resp.json())
            .then(({ success, data, county, category }) => {
                if (success) {
                    data.forEach((item) => {
                        // 對 data 陣列的每個項目 (item) 執行以下操作
                        //item新增.area_id屬性，並尋找第一個符合條件的元素
                        item.area_id = AREA_CONFIG.find(
                            (area) => area.counties.includes(item.region_id) // 判斷 AREA_CONFIG 的 counties 屬性是否包含當前 item 的 region_id
                        )?.id // 如果找到符合條件的元素，取該元素的 id，否則 area_id 設為 undefined
                        item.countyName = county.find(
                            (c) => c.id === item.region_id
                        )?.name
                        item.categoryName = item.categories.map(
                            //item.categories 是一個陣列[314]，使用map對陣列中的每個元素，例如[314]進行遍歷
                            // 這裡的 categoryId 是 item.categories 陣列中的每個值
                            (categoryId) =>
                                category.find((c) => c.id === categoryId)?.name
                        )
                    })

                    setData(data) // 更新資料到 state
                } else {
                    swal({
                        title: data.toString(),
                        icon: 'info'
                    })
                }
            })
    }, [])
    return (
        <div className="w-full">
            <div className="">
                <BannerTitle
                    title={'共同分享採收的樂趣'}
                    sub={`果樹認養`}
                    content={`透過果樹認養了解農作物栽培的過程，實際參與農有在田間作業、管理與採收的辛勤， 讓各多人體會一顆水果從無到有的成長故事`}
                    img={`tree.jpg`}
                />
                <section className="">
                    <TreeNav className="mx-auto max-w-[600px]" />
                    {!!data && <TreeList data={data} />}
                </section>
            </div>
        </div>
    )
}

export default React.memo(Page)
