import React from 'react'
import TitleLine from '../../components/TitleLine'
import TreeCard from '../../components/TreeCard'
import AnchorFix from '../../components/AnchorFix'

const TREE_AREA = [
    {
        title: '北區',
        city: '基隆市',
        color: 'text-[#d12727] bg-[#ffeeef]',
        fill: '#ff8a8a',
        cardClassName: 'hover:border-[#ff8a8a] hover:ring-[#ff8a8a]',
        iconClassName: 'text-[#ff8a8a]',
        areaName: 'north',
        area: 1
    },
    {
        title: '中區',
        city: '基隆市',
        color: 'text-[#2d7316] bg-[#e4f4dd]',
        fill: '#82be66',
        cardClassName: 'hover:border-[#82be66] hover:ring-[#82be66]',
        iconClassName: 'text-[#82be66]',
        areaName: 'central',
        area: 2
    },
    {
        title: '南區',
        city: '基隆市',
        color: 'text-[#106fa2] bg-[#e7f7ff]',
        fill: '#6ebde6',
        cardClassName: 'hover:border-[#6ebde6] hover:ring-[#6ebde6]',
        iconClassName: 'text-[#6ebde6]',
        areaName: 'south',
        area: 3
    },
    {
        title: '東區',
        city: '基隆市',
        color: 'text-[#bd4f00] bg-[#fff6de]',
        fill: '#fbce4c',
        cardClassName: 'hover:border-[#fbce4c] hover:ring-[#fbce4c]',
        iconClassName: 'text-[#fbce4c]',
        areaName: 'east',
        area: 4
    }
]

const TreeList = ({ data }) => {
    /*    //根據 aera_id 分組
    const aeraData = [
        data.filter((item) => item.aera_id === 1), // aeraData[0]
        data.filter((item) => item.aera_id === 2), // aeraData[1]
        data.filter((item) => item.aera_id === 3), // aeraData[2]
        data.filter((item) => item.aera_id === 4) // aeraData[3]
    ]
 */
    return (
        <ul className="mx-auto mb-[56px] md:mb-[96px] px-[16px] max-w-[1280px]">
            {TREE_AREA.map((area, i) => (
                <li
                    className="py-[24px] md:py-[40px] xl:py-[64px] relative"
                    key={i}
                >
                    <AnchorFix id={`anchor-${area.areaName}`} />
                    <TitleLine title={area.title} fill={area.fill} />
                    <div className="pt-[40px]">
                        <ul className="grid gap-[16px] md:gap-[24px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                            {data
                                .filter((item) => item.area_id === area.area) //aeraData[area.area - 1] 根據aeraData陣列給的分區跑迴圈
                                .map((item, j) => (
                                    <li key={j} className="grid">
                                        <TreeCard
                                            config={area}
                                            data={item}
                                            category={item}
                                        />
                                    </li>
                                ))}
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default React.memo(TreeList)
