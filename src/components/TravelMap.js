import React from 'react'

const TravelMap = ({
    defaultSrc,
    hoveredItem,
    alt,
    ratio,
    className,
    style,
    isRounded,
    roundedSize,
    lazy = true
}) => (
    <div
        className={`map-frame embed-responsive ${
            ratio !== '' ? 'embed-responsive-' + ratio : ''
        } ${className} ${
            isRounded || roundedSize
                ? `rounded${roundedSize ? `-${roundedSize}` : ''}`
                : ''
        }`}
        style={style}
    >
        {defaultSrc && (
            <img
                src={defaultSrc}
                alt={alt}
                className="thumb embed-responsive-item position-absolute inset-0 z-0"
                style={{ opacity: 1 }}
            />
        )}
        {hoveredItem && (
            <img
                src={
                    lazy
                        ? `${process.env.BASE_PATH}/images/global/blank.gif`
                        : hoveredItem.img
                }
                data-src={hoveredItem.img}
                alt={alt}
                className={`thumb embed-responsive-item pointer-events-none ${
                    lazy ? 'lazy' : 'lazyloaded'
                } ${
                    isRounded || roundedSize
                        ? `rounded${roundedSize ? `-${roundedSize}` : ''}`
                        : ''
                }`}
                style={{ zIndex: 1 }}
            />
        )}
    </div>
)

export default React.memo(TravelMap)
