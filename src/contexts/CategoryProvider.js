import React, { useState, useEffect } from 'react'

export const CategoryContext = React.createContext()

const CategoryProvider = ({ children }) => {
    const [categoryData, setCategoryData] = useState(null)

    const defaultValue = {
        categoryData,
        setCategoryData
    }

    useEffect(() => {
        fetch('/_api/zh-tw/categories', {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((resp) => resp.json())
            .then(({ success, data }) => {
                if (!success) {
                    console.error('fetch catetory data fail.')
                }
                setCategoryData(data)
            })
            .catch(console.error)
        //setCategoryData(123)
    }, [])

    return (
        <CategoryContext.Provider value={defaultValue}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider
