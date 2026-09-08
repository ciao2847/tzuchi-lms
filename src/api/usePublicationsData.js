import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchPublicationsData } from 'store/publicationsSlice'

const usePublicationsData = ({ lang }) => {
	const dispatch = useDispatch()
	const data = useSelector(
		(state) => state.publicationsData?.[lang],
		shallowEqual
	)
	useEffect(() => {
		if (!data) {
			dispatch(fetchPublicationsData(lang))
		}
	}, [data, lang])
	return data
}

export default usePublicationsData
