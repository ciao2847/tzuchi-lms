import { useState, useEffect } from 'react'
const useFetch = (
	url,
	options = {},
	dependencies = [],
	skip = false,
	afterFetchProcess
) => {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [hasError, setHasError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			if (skip) return
			setIsLoading(true)
			try {
				const response = await fetch(`${url}`, options)
				const result = await response.json()
				if (response.ok) {
					if (afterFetchProcess) {
						setData(afterFetchProcess(result))
					} else {
						setData(result)
					}
				} else {
					setHasError(true)
					setErrorMessage(result)
				}
			} catch (err) {
				setHasError(true)
				setErrorMessage(err.message)
			} finally {
				setIsLoading(false)
			}
		}
		fetchData()
	}, [url, ...dependencies])
	return {
		data,
		isLoading,
		hasError,
		errorMessage
	}
}
export default useFetch
