import React from 'react'
const ThumbFrame = ({
	src,
	alt,
	ratio,
	className,
	style,
	isRounded,
	roundedSize,
	lazy = true
}) => (
	<div
		className={`thumb-frame embed-responsive ${
			ratio !== '' ? 'embed-responsive-' + ratio : ''
		} ${className} ${
			isRounded || roundedSize
				? `rounded${roundedSize ? `-${roundedSize}` : ''}`
				: ''
		}`}
		style={style}
	>
		<img
			src={
				lazy ? `${process.env.BASE_PATH}/images/global/blank.gif` : src
			}
			data-src={src}
			alt={alt}
			className={`thumb embed-responsive-item pointer-events-none ${
				lazy ? 'lazy' : 'lazyloaded'
			} ${
				isRounded || roundedSize
					? `rounded${roundedSize ? `-${roundedSize}` : ''}`
					: ''
			}`}
		/>
	</div>
)

export default React.memo(ThumbFrame)
