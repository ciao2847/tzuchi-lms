import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchShopsData } from 'store/shopsSlice'

const useShopsData = ({ lang }) => {
	const dispatch = useDispatch()
	const data = useSelector((state) => state.shopsData?.[lang], shallowEqual)
	useEffect(() => {
		if (!data) {
			dispatch(fetchShopsData(lang))
		}
	}, [data, lang])
	return data
}

export default useShopsData
