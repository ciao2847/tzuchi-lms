import React from 'react'
import Card from './Card'
const PromotionList = ({ data, currentIdx, className }) => {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-y-3 xl:gap-2">
            {data
                .filter((item, idx) => idx < currentIdx)
                .map((item) => {
                    return (
                        <li
                            className="flex"
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
