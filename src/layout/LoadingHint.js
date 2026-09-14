import React, { useContext } from 'react'
import Spinner from 'components/Spinner'
import { LoadingContext } from 'contexts/LoadingProvider'

const LoadingHint = (props) => {
    const { isLoading } = useContext(LoadingContext)

    return (
        <div
            className={`loading-overlay fixed inset-0 w-full h-full flex flex-col flex-wrap justify-center items-center z-[9999] transition-opacity duration-300 ${
                isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            <div className="flex justify-center items-center p-2 bg-black/20 rounded-lg">
                <Spinner color="#eee" size="20"></Spinner>
            </div>
        </div>
    )
}

export default React.memo(LoadingHint)
