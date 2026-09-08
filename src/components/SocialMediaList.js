import React from 'react'
import SocialMediaCard from './SocialMediaCard'
const SocialMediaList = ({ data, currentIdx }) => {
    return (
        <ul className="row g-4px">
            {data
                .filter((item, idx) => idx < currentIdx)
                .map((item) => {
                    return (
                        <li
                            className="d-flex col-12 col-md-6 col-xl-3"
                            key={item.id}
                        >
                            <SocialMediaCard data={item} />
                        </li>
                    )
                })}
        </ul>
    )
}

export default React.memo(SocialMediaList)
