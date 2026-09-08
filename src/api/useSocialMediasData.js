import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchSocialMediasData } from 'store/socialMediasSlice'

const useSocialMediasData = ({ lang }) => {
	const dispatch = useDispatch()
	const data = useSelector(
		(state) => state.socialMediasData?.[lang],
		shallowEqual
	)
	useEffect(() => {
		if (!data) {
			dispatch(fetchSocialMediasData(lang))
		}
	}, [data, lang])
	return data
}

export default useSocialMediasData
