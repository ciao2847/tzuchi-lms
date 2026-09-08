import React from 'react'
const SubContent = ({ sub, content }) => {
    return (
        <div className="mx-auto max-w-[880px]">
            {!!sub && (
                <div className="md:[32px] pb-[16px] md:pb-[16px] text-left fz-20px text-[#2d7316] font-bold">
                    {sub}
                </div>
            )}
            <p className="text-justify fz-18px text-[#3c3c3c]">{content}</p>
        </div>
    )
}

export default React.memo(SubContent)
