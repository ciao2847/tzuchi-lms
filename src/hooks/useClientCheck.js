import { useState, useEffect } from 'react'

const useClientCheck = () => {
	const [isClient, isClientSet] = useState(false)
	useEffect(() => {
		isClientSet(true)
	}, [])
	return isClient
}
export default useClientCheck
