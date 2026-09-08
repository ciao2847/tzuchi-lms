import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchEventsData } from 'store/eventsSlice'

const useEventsData = ({ lang }) => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.eventsData?.[lang], shallowEqual)
    useEffect(() => {
        if (!data) {
            dispatch(fetchEventsData(lang))
        }
    }, [data, lang])
    return data
}

export default useEventsData
