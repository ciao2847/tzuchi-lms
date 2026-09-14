import React from 'react'
import ThumbFrame from 'components/ThumbFrame'

const PhotoSelect = ({ data, isSelected, className, onClick }) => {
	const { id, title, src, photographer } = data
	return (
		<button className="w-full relative" onClick={onClick}>
			<ThumbFrame src={src} alt="圖說" ratio="1by1" isRounded={true} />
			<div className={`w-5 h-5 absolute top-0 right-0 transition-all ${className || ''}`}>
				<div
					className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full shadow bg-gray-300 hover:bg-primary/20 transition-all overflow-hidden`}
				>
					<i
						className={`${
							isSelected ? '' : 'opacity-0'
						} icon icon-checked flex items-center justify-center w-full h-full bg-primary text-white transition-all text-[13px]`}
						aria-hidden="true"
					></i>
				</div>
			</div>
		</button>
	)
}

export default React.memo(PhotoSelect)
