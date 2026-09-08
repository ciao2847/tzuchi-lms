import React, { useContext } from 'react'
import Spinner from 'components/Spinner'
import { LoadingContext } from 'contexts/LoadingProvider'

const LoadingHint = (props) => {
    const { isLoading } = useContext(LoadingContext)

    return (
        <div
            className={`loading-overlay fixed-top w-100 h-100 d-flex flex-column flex-wrap justify-content-center align-items-center ${
                isLoading ? '' : 'op-0 pointer-events-none'
            }`}
        >
            <div className="d-flex justify-content-center align-items-center py-2 px-2 bg-black-20 rounded-lg">
                <Spinner color="#eee" size="20"></Spinner>
            </div>
        </div>
    )
}

export default React.memo(LoadingHint)
