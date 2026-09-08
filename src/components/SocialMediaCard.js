import React from 'react'
import AutoSwitchLink from 'components/AutoSwitchLink'
import ThumbFrame from 'components/ThumbFrame'

const SocialMediaCard = ({ data }) => {
    const { title, type, cover, url } = data

    return (
        <AutoSwitchLink
            className="d-block w-100 position-relative hover-thumb-scale"
            href={url}
            title={title}
            isLinkOut={true}
        >
            <ThumbFrame src={cover} alt="" ratio="1by1" />
            <i
                className={`icon icon-${
                    type === 1 ? 'instagram' : 'facebook-rounded'
                } m-1 absolute-bottom-right text-white drop-shadow-black-50 fz-24px fz-md-32px fz-xl-40px`}
                aria-hidden="true"
            ></i>
            <div className="sr-only">{title}</div>
        </AutoSwitchLink>
    )
}

export default React.memo(SocialMediaCard)
