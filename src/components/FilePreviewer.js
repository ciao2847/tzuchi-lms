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
		<div className={`flex items-center min-w-0 ${className}`}>
			<div className="shrink-0 w-6 h-6 rounded overflow-hidden relative bg-white">
				{isImg && data && (
					<img
						className="block absolute inset-0 w-full h-full object-cover"
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
						className="icon icon-file absolute inset-0 w-full h-full text-[40px] text-primary flex items-center justify-center"
						aria-hidden="true"
					></i>
				)}
			</div>
			<div className="flex-1 px-1 min-w-0">
				<div className="w-full truncate font-bold">
					{name}
				</div>
				<div className="flex text-[13px] leading-normal">
					{/*<div>{!!width && !!height && `${width} x ${height}`}</div>*/}
					<div>{formatSize(size)}</div>
				</div>
			</div>
		</div>
	)
}

export default React.memo(FilePreviewer)
