import React from 'react'
import AutoSwitchLink from 'components/AutoSwitchLink'
import ThumbFrame from 'components/ThumbFrame'

const SocialMediaCard = ({ data }) => {
    const { title, type, cover, url } = data

    return (
        <AutoSwitchLink
            className="block w-full relative hover-thumb-scale"
            href={url}
            title={title}
            isLinkOut={true}
        >
            <ThumbFrame src={cover} alt="" ratio="1by1" />
            <i
                className={`icon icon-${
                    type === 1 ? 'instagram' : 'facebook-rounded'
                } m-1 absolute bottom-0 right-0 text-white drop-shadow-black-50 text-[24px] md:text-[32px] xl:text-[40px]`}
                aria-hidden="true"
            ></i>
            <div className="sr-only">{title}</div>
        </AutoSwitchLink>
    )
}

export default React.memo(SocialMediaCard)
