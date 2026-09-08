import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchOtaData } from 'store/otaSlice'

const useOtaData = ({ lang }) => {
	const dispatch = useDispatch()
	const data = useSelector((state) => state.otaData?.[lang], shallowEqual)
	useEffect(() => {
		if (!data) {
			dispatch(fetchOtaData(lang))
		}
	}, [data, lang])
	return data
}

export default useOtaData
