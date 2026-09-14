import React from 'react'
const SubContent = ({ sub, content }) => {
    return (
        <div className="mx-auto max-w-[880px]">
            {!!sub && (
                <div className="pb-[16px] text-left text-[20px] text-[#2d7316] font-bold">
                    {sub}
                </div>
            )}
            <p className="text-justify text-[18px] text-[#3c3c3c]">{content}</p>
        </div>
    )
}

export default React.memo(SubContent)
