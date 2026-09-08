import React from 'react'
import ThumbFrame from 'components/ThumbFrame'

const PhotoSelect = ({ data, isSelected, className, onClick }) => {
	const { id, title, src, photographer } = data
	return (
		<button className="w-100 position-relative" onClick={onClick}>
			<ThumbFrame src={src} alt="圖說" ratio="1by1" isRounded={true} />
			<div className={`w-5 h-5 absolute-top-right trs-all ${className}`}>
				<div
					className={`absolute-center w-3 h-3 rounded-circle shadow bg-gray-300 hover-bg-primary-20 trs-all overflow-hidden`}
				>
					<i
						className={`${
							isSelected ? '' : 'op-0'
						} icon icon-checked fill-parent bg-primary text-white trs-all fz-13px`}
						aria-hidden="true"
					></i>
				</div>
			</div>
		</button>
	)
}

export default React.memo(PhotoSelect)
