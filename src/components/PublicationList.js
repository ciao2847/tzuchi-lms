import React from 'react'
import PublicationCard from './PublicationCard'
const PublicationList = ({ data, currentIdx, className }) => {
    return (
        <ul className="row g-2">
            {data
                .filter((item, idx) => idx < currentIdx)
                .map((item) => {
                    return (
                        <li className="col-12" key={item.id}>
                            <PublicationCard data={item} />
                        </li>
                    )
                })}
        </ul>
    )
}

export default React.memo(PublicationList)
