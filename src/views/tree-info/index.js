import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from 'components/Spinner'
import TreeInfo from './TreeInfo'
import FruitTitle from '../../components/FruitTitle'

const Page = () => {
    const [data, setData] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch(`/_api/zh-tw/fruit-trees?id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((resp) => resp.json())
            .then(({ success, data, category }) => {
                if (success) {
                    data.categoryName = data.categories.map(
                        (categoryId) =>
                            category.find((c) => c.id === categoryId)?.name
                    )

                    setData(data)
                }
            })
            .catch(console.error)
    }, [])
    if (!data) {
        return (
            <div className="flex justify-center p-10">
                <Spinner size={18} color={'black'} />
            </div>
        )
    }
    return (
        <div className="w-full">
            {!!data && <FruitTitle data={data} />}
            {!!data && <TreeInfo data={data} />}
        </div>
    )
}

export default React.memo(Page)
