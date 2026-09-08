import React from 'react'
import { useSearchParams } from 'react-router-dom'

const useQueryObject = () => {
	const [search, setSearch] = useSearchParams()
	const makeQueryObject = (search) => {
		const params = new URLSearchParams(search)
		const obj = {}
		Array.from(params.entries()).forEach((pair) => (obj[pair[0]] = pair[1]))
		return obj
	}
	return React.useMemo(() => makeQueryObject(search), [search])
}

export default useQueryObject
