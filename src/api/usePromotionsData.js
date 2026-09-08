import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchPromotionsData } from 'store/promotionsSlice'

const usePromotionsData = ({ lang }) => {
	const dispatch = useDispatch()
	const data = useSelector(
		(state) => state.promotionsData?.[lang],
		shallowEqual
	)
	useEffect(() => {
		if (!data) {
			dispatch(fetchPromotionsData(lang))
		}
	}, [data, lang])
	return data
}

export default usePromotionsData
