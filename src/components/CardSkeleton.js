import React from 'react'
import ContentLoader from 'react-content-loader'
import { useMedia } from 'hooks'

const CardSkeleton = () => {
    const isLayoutXL = useMedia('(min-width: 1200px)')
    return (
        <div className="flex md:flex-col w-full xl:p-[12px] min-w-0 overflow-hidden bg-white rounded">
            <ContentLoader
                className="shrink-0 w-[150px] md:w-full rounded-l md:rounded-t md:rounded-b-none"
                viewBox="0 0 160 120"
                speed={2}
            >
                <rect x="0" y="0" width="100%" height="100%" />
            </ContentLoader>
            <div className="flex-1 px-2 py-[12px] xl:pt-2">
                <ContentLoader className="block w-full h-4" speed={2}>
                    <rect x="0" y="0" width="100%" height="100%" />
                </ContentLoader>
            </div>
        </div>
    )
}

export default React.memo(CardSkeleton)
