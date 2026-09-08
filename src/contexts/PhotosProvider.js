import React, { useState, useEffect } from 'react'

export const PhotosContext = React.createContext()

const PhotosProvider = ({ children }) => {
    const [photosData, setPhotosData] = useState(null)

    const defaultValue = {
        photosData,
        setPhotosData
    }

    useEffect(() => {
        fetch('/_api/zh-tw/photos', {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                if (!data.success) {
                    console.error('fetch photos data fail.')
                }
                data.data = [
                    ...data.data
                        .filter((photo) => photo.priority !== 999)
                        .sort((a, b) => {
                            return a.priority - b.priority
                        }),
                    ...data.data.filter((photo) => photo.priority === 999)
                ]
                data.district = data.district.filter((d) => d.zipcode !== '896')
                setPhotosData(data)
            })
            .catch(console.error)
    }, [])

    return (
        <PhotosContext.Provider value={defaultValue}>
            {children}
        </PhotosContext.Provider>
    )
}

export default PhotosProvider
