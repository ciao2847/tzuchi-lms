import React from 'react'
import FarmCard from '../../components/FarmCard'

const SearchList = ({ data }) => {
    return (
        <div className="px-md-[24px] mb-[56px] md:mb-[120px]">
            <div className="mx-auto px-[16px] md:px-[24px] py-[24px] md:py-[40px] max-w-[1280px] text-left ">
                {!!data && (
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[16px] md:gap-[24px]">
                        {data.map((item, i) => (
                            <li key={i} className="flex">
                                <FarmCard data={item} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default React.memo(SearchList)
