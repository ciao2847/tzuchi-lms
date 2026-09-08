import { useState, useEffect } from 'react'
import swal from 'sweetalert'

const useFruitDataReduxVer = ({ lang, id }) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        if (!id) return
        fetch(`/_api/zh-tw/fruit?id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((resp) => resp.json())
            .then(({ success, data }) => {
                if (success) {
                    setData(data)
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
    }, [id])
    return { data }
}
export default useFruitDataReduxVer

/*import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchFruitData } from 'store/fruitSliceReduxVer'
import { useParams } from 'react-router-dom'

const useFruitDataReduxVer = ({ lang }) => {
    const { id } = useParams()
    const data = useSelector(
        (state) => state.fruitSliceReduxVer?.[lang],
        shallowEqual
    )
    const dispatch = useDispatch()
    useEffect(() => {
        if (!data) {
            dispatch(fetchFruitData({ lang, id }))
        }
    }, [lang, id])
    return { data }
}

export default useFruitDataReduxVer*/
