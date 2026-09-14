import React from 'react'
import SouvenirsCard from '../../components/SouvenirsCard'

const SouvenirsList = ({ data }) => {
    return (
        <div className="mx-auto px-[16px] md:px-[24px] max-w-[1280px]">
            <div className="pt-[24px] pb-[40px] md:pb-[80px]">
                {data?.length > 0 && (
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[16px] md:gap-[24px] pt-[8px] md:pt-[32px]">
                        {data.map((item, i) => (
                            <li key={i}>
                                <SouvenirsCard data={item} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default React.memo(SouvenirsList)
