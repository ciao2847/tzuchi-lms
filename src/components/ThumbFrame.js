import React from 'react'

const RATIO_MAP = {
    '16by9': 'aspect-[16/9]',
    '4by3': 'aspect-[4/3]',
    '1by1': 'aspect-square',
    '21by9': 'aspect-[21/9]'
}

const ThumbFrame = ({
    src,
    alt,
    ratio,
    className = '',
    style,
    isRounded,
    roundedSize,
    lazy = true
}) => {
    const ratioClass = ratio ? (RATIO_MAP[ratio] || `aspect-${ratio}`) : ''
    const roundedClass =
        isRounded || roundedSize
            ? `rounded${roundedSize ? `-${roundedSize}` : ''}`
            : ''

    return (
        <div
            className={`thumb-frame relative overflow-hidden block ${ratioClass} ${className} ${roundedClass}`}
            style={style}
        >
            <img
                src={
                    lazy ? `${process.env.BASE_PATH}/images/global/blank.gif` : src
                }
                data-src={src}
                alt={alt}
                className={`thumb absolute inset-0 w-full h-full object-cover pointer-events-none ${
                    lazy ? 'lazy' : 'lazyloaded'
                } ${roundedClass}`}
            />
        </div>
    )
}

export default React.memo(ThumbFrame)

