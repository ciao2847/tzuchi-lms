import React, { useState, useEffect } from 'react'
import { formatSize } from 'constants/utils'

const FilePreviewer = ({ file, className }) => {
	const { name, type, size } = file
	const [data, setData] = useState(null)
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)
	const isImg = type.includes('image/')
	useEffect(() => {
		if (!isImg) return
		const reader = new FileReader()
		reader.onloadend = (e) => {
			setData(e.target.result)
		}
		reader.readAsDataURL(file)
	}, [isImg, file])
	return (
		<div className={`d-flex align-items-center miw-0 ${className}`}>
			<div className="flex-shrink-0 w-6 h-6 rounded overflow-hidden position-relative bg-white">
				{isImg && data && (
					<img
						className="d-block fill-parent fit-cover"
						src={data}
						alt=""
						onLoad={(e) => {
							const { naturalWidth, naturalHeight } = e.target
							setWidth(naturalWidth)
							setHeight(naturalHeight)
						}}
					/>
				)}
				{!isImg && (
					<i
						className="icon icon-file fill-parent fz-40px text-primary"
						aria-hidden="true"
					></i>
				)}
			</div>
			<div className="flex-fill px-1 miw-0">
				<div className="w-100 text-truncate font-weight-bold">
					{name}
				</div>
				<div className="d-flex fz-13px lh-initial">
					{/*<div>{!!width && !!height && `${width} x ${height}`}</div>*/}
					<div>{formatSize(size)}</div>
				</div>
			</div>
		</div>
	)
}

export default React.memo(FilePreviewer)
