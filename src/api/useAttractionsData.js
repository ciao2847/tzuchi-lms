import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchAttractionsData } from 'store/attractionsSlice'

const useAttractionsData = ({ lang }) => {
	const dispatch = useDispatch()
	const data = useSelector(
		(state) => state.attractionsData?.[lang],
		shallowEqual
	)
	useEffect(() => {
		if (!data) {
			dispatch(fetchAttractionsData(lang))
		}
	}, [data, lang])
	return data
}

export default useAttractionsData
