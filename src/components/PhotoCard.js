import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import ThumbFrame from 'components/ThumbFrame'
import BtnCollection from 'components/BtnCollection'

const PhotoCard = ({ data }) => {
	const { conditions, id: photoId, photographerId } = useParams()
	const { pathname } = useLocation()
	const { id, title, src, photographer } = data
	let urlPrefix = '/zh-tw/photo/'
	if (pathname.includes('/explore')) {
		urlPrefix = `/zh-tw/explore/photo/`
	}
	if (conditions) {
		urlPrefix = `/zh-tw/explore/${conditions}/photo/`
	}
	if (photoId || photographerId) {
		urlPrefix = `/zh-tw/photographer/${photographer.id}/photo/`
	}

	return (
		<div className="w-100 position-relative">
			<Link
				className="d-block w-100 position-relative hover-shadow rounded trs-all"
				to={`${urlPrefix}${id}`}
			>
				<ThumbFrame
					src={src}
					alt="圖說"
					ratio="1by1"
					isRounded={true}
				/>
			</Link>
			<BtnCollection className="m-4px absolute-top-right" data={id} />
		</div>
	)
}

export default React.memo(PhotoCard)
