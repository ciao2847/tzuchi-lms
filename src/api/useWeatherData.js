import { useState, useEffect } from 'react'
import { API_ROUTES } from 'constants/'
const isDev = process.env.NODE_ENV === 'development'
const useWeatherData = ({ lat, lng }) => {
	const [data, setData] = useState(null)
	const fetchData = async () => {
		const result = await fetch(
			`${API_ROUTES.getWeatherByLocation}?lat=${lat}&long=${lng}`
		)
			.then((resp) => resp.json())
			.then(({ data, aqi }) => ({ data, aqi }))
			.catch(console.error)
		setData(result)
	}
	useEffect(() => {
		fetchData()
	}, [])
	return data
}

export default useWeatherData
