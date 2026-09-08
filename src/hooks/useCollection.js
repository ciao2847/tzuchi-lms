import React, { useContext } from 'react'
import { CollectionContext } from 'contexts/CollectionProvider'

const useCollection = (data) => {
	const { collectionData, changeCollectionData, replaceCollectionDataAll } =
		useContext(CollectionContext)
	const isCollected = collectionData.includes(data)
	return {
		isCollected,
		collectionData,
		changeCollectionData,
		replaceCollectionDataAll
	}
}

export default useCollection
