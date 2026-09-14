import React from 'react'
import SocialMediaCard from './SocialMediaCard'
const SocialMediaList = ({ data, currentIdx }) => {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1">
            {data
                .filter((item, idx) => idx < currentIdx)
                .map((item) => {
                    return (
                        <li
                            className="flex"
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
