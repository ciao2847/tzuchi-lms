import React, { useState, useEffect } from 'react'

export const PhotographersContext = React.createContext()

const PhotographersProvider = ({ children }) => {
    const [photographersData, setPhotographersData] = useState(null)

    const defaultValue = {
        photographersData,
        setPhotographersData
    }

    useEffect(() => {
        fetch('/_api/zh-tw/photographers', {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                if (!data.success) {
                    console.error('fetch photographers data fail.')
                }
                data.data.sort((a, b) => {
                    return a.priority - b.priority
                })
                setPhotographersData(data)
            })
            .catch(console.error)
        //setPhotographersData(123)
    }, [])

    return (
        <PhotographersContext.Provider value={defaultValue}>
            {children}
        </PhotographersContext.Provider>
    )
}

export default PhotographersProvider
