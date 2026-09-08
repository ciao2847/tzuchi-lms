import React, { useState } from 'react'

const CONFIG_TREE = [
    {
        title: '北區',
        Color: 'border-[#ff8a8a]',
        actClassName:
            'hover:border-[#ff8a8a] hover:bg-[#ff8a8a] hover:text-[#fff]',
        act: true,
        area: 'north'
    },
    {
        title: '中區',
        Color: 'border-[#82be66]',
        actClassName:
            'hover:border-[#82be66] hover:bg-[#82be66] hover:text-[#fff]',
        area: 'central'
    },
    {
        title: '南區',
        Color: 'border-[#6ebde6]',
        actClassName:
            'hover:border-[#6ebde6] hover:bg-[#6ebde6] hover:text-[#fff]',
        area: 'south'
    },
    {
        title: '東區',
        Color: 'border-[#fbce4c]',
        actClassName:
            'hover:border-[#fbce4c] hover:bg-[#fbce4c] hover:text-[#fff]',
        area: 'east'
    }
]

const TreeNav = ({ className }) => {
    return (
        <div
            className={`py-[24px] md:py-[40px] xl:pt-[80px] px-[16px] ${className}`}
        >
            <ul className="grid grid-cols-2 md:grid-cols-4 justify-center items-center flex-wrap gap-[16px] md:gap-[24px]">
                {CONFIG_TREE.map((item, i) => (
                    <li
                        className={`${item.Color} ${item.actClassName} py-[8px] text-center text-[22px] font-bold border-[2px] rounded-pill border-solid trs-all`}
                        key={i}
                    >
                        <button
                            onClick={() => {
                                className = 'd-block md:w-[100%] w-[100px]'
                                const target = document.querySelector(
                                    //查找符合指定 CSS 選擇器的第一個元素
                                    `#anchor-${item.area}`
                                )
                                if (target) {
                                    target.scrollIntoView({
                                        behavior: 'smooth'
                                    })
                                } else {
                                    console.error(
                                        `Target not found: #anchor-${item.area}`
                                    )
                                }
                            }}
                        >
                            {item.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default React.memo(TreeNav)
