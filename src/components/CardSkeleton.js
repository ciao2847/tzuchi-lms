import React from 'react'
import ContentLoader from 'react-content-loader'
import { useMedia } from 'hooks'

const CardSkeleton = () => {
    const isLayoutXL = useMedia('(min-width: 1200px)')
    return (
        <div className="d-flex flex-md-column w-100 p-xl-12px miw-0 overflow-hidden bg-white rounded">
            <ContentLoader
                className="flex-shrink-0 w-[150px] md:w-[100%] rounded-l md:rounded-t md:rounded-b-none"
                viewBox="0 0 160 120"
                speed={2}
            >
                <rect x="0" y="0" width="100%" height="100%" />
            </ContentLoader>
            <div className="flex-fill px-2 px-md-2 py-12px pt-xl-2">
                <ContentLoader className="d-block w-100 h-4" speed={2}>
                    <rect x="0" y="0" width="100%" height="100%" />
                </ContentLoader>
            </div>
        </div>
    )
}

export default React.memo(CardSkeleton)
