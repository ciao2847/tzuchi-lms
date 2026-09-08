import React, { useContext } from 'react'
import PhotoSwipe from 'components/PhotoSwipe'
import { PhotoSwipeContext } from 'contexts/PhotoSwipeProvider'

const PhotoSwipeComponent = () => {
	const { photoSwipeData } = useContext(PhotoSwipeContext)

	return (
		<>
			<PhotoSwipe
				data={JSON.parse(JSON.stringify(photoSwipeData.data))}
				index={photoSwipeData.index}
			/>
		</>
	)
}

export default React.memo(PhotoSwipeComponent)
