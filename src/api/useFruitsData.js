import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchFruitsData } from 'store/fruitsSlice'

const useFruitsData = ({ lang }) => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.fruitsData?.[lang], shallowEqual)
    useEffect(() => {
        if (!data) {
            dispatch(fetchFruitsData(lang))
        }
    }, [data, lang])
    return data
}

export default useFruitsData
