import React, { useState, useEffect } from 'react'

export const LoadingContext = React.createContext()

const LoadingProvider = ({ children }) => {
    const [isLoading, toggleLoading] = useState(false)

    const defaultValue = {
        isLoading,
        toggleLoading
    }

    return (
        <LoadingContext.Provider value={defaultValue}>
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingProvider
