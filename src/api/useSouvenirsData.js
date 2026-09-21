import { useState, useEffect } from 'react'
import swal from 'sweetalert'

const useSouvenirsData = ({ lang }) => {
    const [data, setData] = useState(null)
    const [fruit, setFruit] = useState(null)
    const [county, setCounty] = useState(null)
    useEffect(() => {
        fetch('/_api/zh-tw/edu-service', {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((resp) => resp.json())
            .then(({ success, data, fruit, county }) => {
                if (success) {
                    //const fruitIds = new Set(fruit.map((f) => f.id)) //map() 會遍歷 fruit 陣列的每一個物件，提取 id 值，形成一個新的陣列[345, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359]
                    const fruitIds = fruit.map((f) => f.id)
                    const filteredData = data.filter((item) =>
                        item.categories.some((cat) => fruitIds.includes(cat))
                    )
                    // 篩選 data，確保 categories 至少包含一個 fruit ID
                    //const filteredData = data.filter((item) =>
                    //item.categories.some((cat) => fruitIds.has(cat))
                    //)

                    filteredData.forEach((item) => {
                        item.tel =
                            (item.phone1?.trim() && item.phone1) ||
                            (item.phone2?.trim() && item.phone2) ||
                            '無電話號碼'
                        item.cover =
                            item.images?.find((images) => images.url)?.url ||
                            item.images?.[0]?.url ||
                            `${process.env.BASE_PATH}/images/not-found/miss.jpg`
                    })
                    setData(filteredData)
                    setFruit(fruit)
                    setCounty(county)
                } else {
                    swal({
                        title: data.toString(),
                        icon: 'info'
                    })
                }
            })
            .catch((error) => {
                swal({
                    title: '錯誤',
                    text: error.message,
                    icon: 'error'
                })
            })
    }, [])
    return { data, fruit, county }
}

export default useSouvenirsData
