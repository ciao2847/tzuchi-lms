import React, { useState, useEffect } from 'react'
import PhotoCard from './PhotoCard'
const PhotoList = ({ data, currentIdx, className }) => {
	return (
		<ul className={`row g-2 g-md-3 ${className}`}>
			{data
				.filter((item, idx) => idx < currentIdx)
				.map((item) => {
					return (
						<li
							className="col-6 col-md-4 col-xl-3 d-flex"
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
