import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchTipsData } from 'store/tipsSlice'

const useTipsData = ({ lang }) => {
	const dispatch = useDispatch()
	const data = useSelector((state) => state.tipsData?.[lang], shallowEqual)
	useEffect(() => {
		if (!data) {
			dispatch(fetchTipsData(lang))
		}
	}, [data, lang])
	return data
}

export default useTipsData
