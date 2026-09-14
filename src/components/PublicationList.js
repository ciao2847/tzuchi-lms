import React from 'react'
import PublicationCard from './PublicationCard'
const PublicationList = ({ data, currentIdx, className }) => {
    return (
        <ul className="grid grid-cols-1 gap-2">
            {data
                .filter((item, idx) => idx < currentIdx)
                .map((item) => {
                    return (
                        <li className="w-full" key={item.id}>
                            <PublicationCard data={item} />
                        </li>
                    )
                })}
        </ul>
    )
}

export default React.memo(PublicationList)
