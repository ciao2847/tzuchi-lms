import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchTicketsData } from 'store/ticketsSlice'

const useTicketsData = ({ lang }) => {
	const dispatch = useDispatch()
	const data = useSelector((state) => state.ticketsData?.[lang], shallowEqual)
	useEffect(() => {
		if (!data) {
			dispatch(fetchTicketsData(lang))
		}
	}, [data, lang])
	return data
}

export default useTicketsData
