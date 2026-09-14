import React, { useState, useEffect } from 'react'
import PhotoCard from './PhotoCard'
const PhotoList = ({ data, currentIdx, className }) => {
	return (
		<ul className={`grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3 ${className || ''}`}>
			{data
				.filter((item, idx) => idx < currentIdx)
				.map((item) => {
					return (
						<li
							className="flex"
							key={`${item.id}`}
						>
							<PhotoCard data={item} />
						</li>
					)
				})}
		</ul>
	)
}

export default React.memo(PhotoList)
