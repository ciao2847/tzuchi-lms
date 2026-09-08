import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useScrollReset = () => {
	const location = useLocation()

	useEffect(() => {
		if (!window.noScrollReset) {
			window.scrollTo(0, 0)
			document.querySelector('#root').focus()
		}
		window.noScrollReset = false
	}, [location.pathname])

	return null
}

export default useScrollReset
