import React from 'react'
import Link from 'components/Link'

const TreeCard = ({ data, config }) => {
    const { color, cardClassName, iconClassName } = config
    const { id, duration, countyName, categoryName } = data
    if (!data) {
        return null // 如果 data 為 null 或未定義，返回 null
    }

    return (
        <Link
            href={`/tree-info/${id}`}
            className={`${cardClassName} flex justify-between py-[16px] px-[24px] border border-solid border-[#f0f0f0] rounded-[16px] md:rounded-[32px] hover:ring-[1px] transition-all duration-300`}
        >
            <div>
                <div className="flex justify-start items-center">
                    <div className="text-[#3c3c3c] text-[18px] font-bold">
                        {categoryName}
                    </div>
                    <div
                        className={`${color} flex justify-center items-center ml-[8px] w-[55px] h-[20px] text-[13px] font-bold rounded-[32px]`}
                    >
                        {countyName}
                    </div>
                </div>
                <div className="mt-[8px] text-[#767676] text-[13px]">
                    登記認養期間
                </div>
                <div className="text-[#3c3c3c] text-[16px] font-bold">
                    {duration}
                </div>
            </div>
            <i
                className={`${iconClassName} icon icon-arrow-right text-[24px]`}
            ></i>
        </Link>
    )
}

export default React.memo(TreeCard)
