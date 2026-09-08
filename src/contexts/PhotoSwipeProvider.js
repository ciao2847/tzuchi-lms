import React, { useState } from 'react'

export const PhotoSwipeContext = React.createContext()

const PhotoSwipeProvider = ({ children }) => {
    const [photoSwipeData, setPhotoSwipeData] = useState({
        data: [],
        index: 0,
        visible: false
    })

    const defaultValue = {
        photoSwipeData,
        setPhotoSwipeData
    }

    return (
        <PhotoSwipeContext.Provider value={defaultValue}>
            {children}
        </PhotoSwipeContext.Provider>
    )
}

export default PhotoSwipeProvider
