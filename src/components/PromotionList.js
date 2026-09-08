import React from 'react'
import Card from './Card'
const PromotionList = ({ data, currentIdx, className }) => {
    return (
        <ul className="row gy-2 gy-md-3 g-xl-2">
            {data
                .filter((item, idx) => idx < currentIdx)
                .map((item) => {
                    return (
                        <li
                            className="d-flex col-12 col-md-6 col-xl-3"
                            key={item.id}
                        >
                            <Card data={item} />
                        </li>
                    )
                })}
        </ul>
    )
}

export default React.memo(PromotionList)
