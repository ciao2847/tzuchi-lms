import React from 'react'

const ReturnBtn = () => {
    const handleBack = () => {
        window.history.back()
    }

    return (
        <div className=" group">
            <button
                onClick={handleBack}
                className="py-[8px] px-[24px] text-[18px] text-[#767676] border-[2px] border-solid border-[#f0f0f0] rounded-pill trs-all hover:bg-[#767676] hover:text-[#fff]"
            >
                回上一頁
            </button>
        </div>
    )
}
export default React.memo(ReturnBtn)
