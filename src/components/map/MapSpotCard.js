import React from 'react'
import ThumbFrame from 'components/ThumbFrame'
const MapSpotCard = ({ data, onClick }) => {
    const { name, title, cover, shop } = data
    return (
        <button
            className="d-flex align-items-stretch w-100 h-12 p-1 text-left"
            onClick={onClick}
        >
            <ThumbFrame
                src={cover}
                alt=""
                ratio="1by1"
                className="w-10 flex-shrink-0"
                isRounded={true}
            />
            <div className="d-flex flex-column flex-fill px-1 py-4px miw-0">
                <div className="fz-15px font-weight-bold lh-initial line-clamp-2">
                    {name || title}
                </div>

                <div className="d-flex align-items-center mt-auto fz-12px fz-xl-13px text-truncate">
                    {shop}
                </div>
            </div>
        </button>
    )
}

export default React.memo(MapSpotCard)
