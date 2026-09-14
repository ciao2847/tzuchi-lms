import React, { useState } from 'react'
import Link from 'components/Link'
import { useParams } from 'react-router-dom'

const CONFIG = [
    {
        title: '春季',
        month: '3-5月',
        actClassName:
            'text-[#d12727] border-[#ff8a8a] border-[2px] ring-[1px] ring-[#ff8a8a]',
        hoverClassName:
            'hover:text-[#d12727] hover:border-[#ff8a8a] hover:border-[2px] hover:ring-[1px] hover:ring-[#ff8a8a]',
        url: 'spring'
    },
    {
        title: '夏季',
        month: '6-8月',
        actClassName:
            'text-[#2d7316] border-[#82be66] border-[2px] ring-[1px] ring-[#82be66]',
        hoverClassName:
            'hover:text-[#2d7316] hover:border-[#82be66] hover:border-[2px] hover:ring-[1px] hover:ring-[#82be66]',
        url: 'summer'
    },
    {
        title: '秋季',
        month: '9-11月',
        actClassName:
            'text-[#bd4f00] border-[#fbce4c] border-[2px] ring-[1px] ring-[#fbce4c]',
        hoverClassName:
            'hover:text-[#bd4f00] hover:border-[#fbce4c] hover:border-[2px] hover:ring-[1px] hover:ring-[#fbce4c]',
        url: 'autumn'
    },
    {
        title: '冬季',
        month: '12-2月',
        actClassName:
            'text-[#0f6fa2] border-[#6ebde6] border-[2px] ring-[1px] ring-[#6ebde6]',
        hoverClassName:
            'hover:text-[#0f6fa2] hover:border-[#6ebde6] hover:border-[2px] hover:ring-[1px] hover:ring-[#6ebde6]',
        url: 'winter'
    },
    {
        title: '全年',
        month: '1-12月',
        actClassName:
            'text-[#bd4f00] border-[#f39306] border-[2px] ring-[1px] ring-[#f39306]',
        hoverClassName:
            'hover:text-[#bd4f00] hover:border-[#f39306] hover:border-[2px] hover:ring-[1px] hover:ring-[#f39306]',
        url: 'all'
    },
    {
        title: '全季',
        month: '水果',
        actClassName:
            'text-[#bc146f] border-[#ffa5cb] border-[2px] ring-[1px] ring-[#ffa5cb]',
        hoverClassName:
            'hover:text-[#bc146f] hover:border-[#ffa5cb] hover:border-[2px] hover:ring-[1px] hover:ring-[#ffa5cb]',
        url: 'fruits'
    }
]

const SeasonNav = ({ className }) => {
    const { season } = useParams()
    const activeSeason = season || 'all' //確保預設情況下 "all" 被選中
    return (
        <div className={`px-[24px] ${className}`}>
            <ul className="flex items-center md:justify-center gap-[16px] -mx-3 pl-[4px] overflow-x-auto md:overflow-visible">
                {CONFIG.map((item, i) => (
                    <li key={i}>
                        <Link
                            rel="noopener noreferrer"
                            href={`/season-fruits/${item.url}`}
                            className={`${
                                item.url === activeSeason //連結等於預設的all
                                     ? item.actClassName
                                     : `border-[2px] border-[#c4c4c4] transition-all duration-300 ${item.hoverClassName}`
                            } flex flex-col flex-shrink-0 justify-center items-center py-[12px] px-[16px] w-[104px] h-[88px] space-y-2 rounded-[16px] md:rounded-[24px] border-solid transition-all duration-300`}
                            onClick={() =>
                                //瀏覽器的 history API，允許改變瀏覽歷史，而不會真的重新整理頁面
                                window.history.pushState(
                                    null, //State
                                    '', //title忽略可用空字串
                                    `/season-fruits/${item.url}` //想要更新的url
                                )
                            }
                        >
                            <div className="text-[22px] font-bold">
                                {item.title}
                            </div>
                            <div className="text-[16px] text-[#767676] font-normal">
                                {item.month}
                            </div>
                        </Link>
                    </li>
                ))}
                <li></li>
            </ul>
        </div>
    )
}

export default React.memo(SeasonNav)
