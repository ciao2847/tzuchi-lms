import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchColumnsData } from 'store/columnsSlice'

const useColumnsData = ({ lang }) => {
	const dispatch = useDispatch()
	const data = useSelector((state) => state.columnsData?.[lang], shallowEqual)
	useEffect(() => {
		if (!data) {
			dispatch(fetchColumnsData(lang))
		}
	}, [data, lang])
	return data
}

export default useColumnsData
