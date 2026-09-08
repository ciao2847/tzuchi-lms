import React, { useState, useEffect } from 'react'

export const CollectionContext = React.createContext()

const CollectionProvider = ({ children }) => {
    const [collectionData, setCollectionData] = useState(
        localStorage.getItem('collectionData')
            ? JSON.parse(localStorage.getItem('collectionData'))
            : []
    )
    const changeCollectionData = (payload) => {
        let result
        if (collectionData.includes(payload)) {
            result = collectionData.filter((id) => id !== payload)
        } else {
            result = [...collectionData, payload]
        }
        localStorage.setItem('collectionData', JSON.stringify(result))
        setCollectionData(result)
    }
    const replaceCollectionDataAll = (payload) => {
        localStorage.setItem('collectionData', JSON.stringify(payload))
        setCollectionData(payload)
    }
    const defaultValue = {
        collectionData,
        setCollectionData,
        changeCollectionData,
        replaceCollectionDataAll
    }

    useEffect(() => {}, [])

    return (
        <CollectionContext.Provider value={defaultValue}>
            {children}
        </CollectionContext.Provider>
    )
}

export default CollectionProvider
