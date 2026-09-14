import React from 'react'
import ThumbFrame from 'components/ThumbFrame'
const MapSpotCard = ({ data, onClick }) => {
    const { name, title, cover, shop } = data
    return (
        <button
            className="flex items-stretch w-full h-12 p-1 text-left"
            onClick={onClick}
        >
            <ThumbFrame
                src={cover}
                alt=""
                ratio="1by1"
                className="w-10 shrink-0"
                isRounded={true}
            />
            <div className="flex flex-col flex-1 px-1 py-[4px] min-w-0">
                <div className="text-[15px] font-bold leading-normal line-clamp-2">
                    {name || title}
                </div>

                <div className="flex items-center mt-auto text-[12px] xl:text-[13px] truncate">
                    {shop}
                </div>
            </div>
        </button>
    )
}

export default React.memo(MapSpotCard)
