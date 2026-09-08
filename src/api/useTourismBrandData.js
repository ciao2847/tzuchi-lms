import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchTourismBrandData } from 'store/tourismBrandSlice'

const useTourismBrandData = ({ lang }) => {
	const dispatch = useDispatch()
	const data = useSelector(
		(state) => state.tourismBrandData?.[lang],
		shallowEqual
	)
	useEffect(() => {
		if (!data) {
			dispatch(fetchTourismBrandData(lang))
		}
	}, [data, lang])
	return data
}

export default useTourismBrandData
