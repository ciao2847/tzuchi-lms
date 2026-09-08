import { useContext } from 'react'
import { LoadingContext } from 'contexts/LoadingProvider'

const useLoading = () => {
	const { isLoading, toggleLoading } = useContext(LoadingContext)

	return [isLoading, toggleLoading]
}

export default useLoading
