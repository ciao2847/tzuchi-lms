import React from 'react'
import AutoSwitchLink from 'components/AutoSwitchLink'
import ThumbFrame from 'components/ThumbFrame'

const VideoCard = ({
    video,
    showDetails = false,
    thumbnailClassName = '!h-0 !pb-[56.25%]'
}) => {
    const { title, image, link, isLinkOut, date, lecturer } = video

    return (
        <AutoSwitchLink
            href={link}
            isLinkOut={isLinkOut}
            className="group block w-full min-w-0 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
        >
            <ThumbFrame
                src={image}
                alt=""
                ratio="16by9"
                lazy={false}
                className={`${thumbnailClassName} w-full rounded-[12px] drop-shadow`}
            />
            <h3
                className={`mt-3 truncate text-[16px] font-bold leading-6 text-secondary transition-colors group-hover:text-main md:text-[18px] ${
                    showDetails ? '' : 'text-center'
                }`}
            >
                {title}
            </h3>
            {showDetails && (
                <div className="mt-2 space-y-1 text-[12px] leading-5 text-secondary transition-colors group-hover:text-main md:text-[14px]">
                    <p>
                        日期：<time dateTime={date}>{date}</time>
                    </p>
                    <p>講師：{lecturer}</p>
                </div>
            )}
        </AutoSwitchLink>
    )
}

export default React.memo(VideoCard)
