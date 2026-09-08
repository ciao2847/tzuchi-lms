import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchThemesData } from 'store/themesSlice'

const useThemesData = ({ lang }) => {
	const dispatch = useDispatch()
	const data = useSelector((state) => state.themesData?.[lang], shallowEqual)
	useEffect(() => {
		if (!data) {
			dispatch(fetchThemesData(lang))
		}
	}, [data, lang])
	return data
}

export default useThemesData
