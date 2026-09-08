import { useState, useEffect } from 'react'
import { set } from 'react-hook-form'

const makeSpotTypes = (value) => {
    const SPOT_TYPE_MAP = {
        0: '農遊點',
        1: '休閒農場',
        2: '田媽媽'
    }
    const arr = []
    if (value === 0) {
        return [0]
    }
    Object.keys(SPOT_TYPE_MAP).forEach((k) => {
        k *= 1
        if ((value & k) == k) {
            arr.push(k)
        }
    })
    return arr
}

const useSpotsData = ({ lang }) => {
    const [data, setData] = useState(null)
    const [fruit, setFruit] = useState(null)
    const [county, setCounty] = useState(null)
    const [allSpot, setAllSpot] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const dataArea = await fetch(
                '/_api/zh-tw/leisure-agriculture-area',
                {
                    headers: { 'X-Requested-With': 'XMLHttpRequest' }
                }
            )
                .then((resp) => resp.json())
                .then(({ success, data }) => data)

            const spotsResponse = await fetch('/_api/zh-tw/agri-spots', {
                headers: { 'X-Requested-With': 'XMLHttpRequest' }
            }).then((resp) => resp.json())

            const fruitsResponse = await fetch('/_api/zh-tw/souvenirs', {
                headers: { 'X-Requested-With': 'XMLHttpRequest' }
            }).then((resp) => resp.json())

            const dataSpots = spotsResponse.data
            const fetchedCounty = spotsResponse.county
            const fetchedFruit = fruitsResponse.fruit

            const AllSpot = [...dataArea, ...dataSpots]
            setAllSpot(AllSpot)

            if (AllSpot) {
                AllSpot.forEach((item) => {
                    item.cover =
                        item.images?.find((item) => item.images)?.url ||
                        item.images?.[0]?.url ||
                        `${process.env.BASE_PATH}/images/not-found/miss.jpg`

                    item.typeIds = makeSpotTypes(item.type)
                    if (item.typeIds.includes(0)) {
                        item.url = `https://ezgo.ardswc.gov.tw/zh-tw/leisure-area/${item.id}`
                    }
                    if (item.typeIds.includes(1)) {
                        item.url = `https://ezgo.ardswc.gov.tw/zh-tw/farms/${item.id}`
                    }
                    if (item.typeIds.includes(2)) {
                        item.url = `https://ezgo.ardswc.gov.tw/zh-tw/tianmama/${item.id}`
                    }
                })
            }

            //console.log(AllSpot)
            setData(AllSpot) // 更新 data
            setCounty(fetchedCounty)
            setFruit(fetchedFruit)
        }

        fetchData()
    }, [])
    return { data, county, fruit }
}

export default useSpotsData
