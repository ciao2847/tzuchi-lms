import React from 'react'
import TitleLine from '../../components/TitleLine'
import TravelCard from '../../components/TravelCard'

const FruitsTravel = () => {
    /* 為react添加className的設定 */
    return (
        <div className="mx-auto px-[16px] md:px-[24px] max-w-[960px]">
            <div className="pt-[24px] pb-[40px] md:pb-[80px] xl:pb-[104px]">
                <TitleLine title={'可以這樣玩'} fill={'#fbce4c'} />
                <ul className="pt-[8px] md:pt-[32px]">
                    {[...new Array(2)].map((_, i) => (
                        <li className="mt-[16px] md:mt-[24px]" key={i}>
                            <TravelCard />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default React.memo(FruitsTravel)
