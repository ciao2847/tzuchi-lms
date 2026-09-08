import { useParams } from 'react-router-dom'
const useLocale = () => {
	const { lang: locale = 'zh-tw' } = useParams()
	return locale
}

export default useLocale
