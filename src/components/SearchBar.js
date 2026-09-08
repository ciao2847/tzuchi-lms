import React from 'react'

const SearchBar = () => {
    return (
        <div className="flex justify-between my-[32px] md:my-[64px] mx-auto max-w-[800px] rounded-pill border-[1px] border-solid border-[#f0f0f0]">
            <div className="flex justify-center items-center p-[12px]">
                <i className="icon icon-search text-[24px]"></i>
            </div>
            <div className="flex-fill">
                <input
                    className="w-100 h-100"
                    type="text"
                    name="search"
                    placeholder="請輸入關鍵字"
                />
            </div>
            <button className="flex justify-center items-center py-[12px] px-[24px] rounded-pill border-[2px] border-solid border-[#82be66] trs-all hover:bg-[#E4F4DD]">
                <i className="icon icon-adv-fill text-[24px] text-[#82be66]"></i>
                <div className="hidden md:block ml-[4px] font-bold text-[#2d7316] text-[18px]">
                    進階搜尋
                </div>
            </button>
        </div>
    )
}

export default React.memo(SearchBar)
