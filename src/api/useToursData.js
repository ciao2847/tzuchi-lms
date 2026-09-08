import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchToursData } from 'store/toursSlice'

const useToursData = ({ lang }) => {
	const dispatch = useDispatch()
	const data = useSelector((state) => state.toursData?.[lang], shallowEqual)
	useEffect(() => {
		if (!data) {
			dispatch(fetchToursData(lang))
		}
	}, [data, lang])
	return data
}

export default useToursData
