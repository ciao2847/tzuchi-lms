import React from 'react'
import HlsVideo from 'components/HlsVideo'
import useClientCheck from 'hooks/useClientCheck'
const HeroVideo = ({ src, poster, className, style, isPlaying = true }) => {
    const isClient = useClientCheck()
    return (
        <div className={`${className}`} style={style}>
            {isClient && (
                <HlsVideo
                    className="fill-parent fit-cover"
                    src={src}
                    poster={poster}
                    muted
                    loop
                    playsInline
                    isPlaying={isPlaying}
                />
            )}
            <div className="fill-parent"></div>
        </div>
    )
}

export default React.memo(HeroVideo)
