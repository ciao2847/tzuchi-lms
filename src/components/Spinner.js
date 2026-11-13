import React from 'react'

const Spinner = ({ size, color, className, block = false }) => {
    size = size || (block ? 12 : 8)
    color = color || (block ? '#093a7b' : '#767676')
    return (
        <span role={block ? 'status' : undefined} aria-busy={block ? true : undefined} aria-label={block ? '讀取資料' : undefined}
            className={block ? `flex items-center justify-center ${className ?? 'py-6'}` : `inline-flex items-center ${className || ''}`}>
            <span className="inline-flex items-center" aria-hidden={block ? true : undefined}>
            <span
                className="loading-animate rounded-full shrink-0"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    marginRight: `${size / 2}px`,
                    animationDelay: '-0.32s',
                    backgroundColor: color
                }}
            ></span>
            <span
                className="loading-animate rounded-full shrink-0"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    marginRight: `${size / 2}px`,
                    animationDelay: '-0.16s',
                    backgroundColor: color
                }}
            ></span>
            <span
                className="loading-animate rounded-full shrink-0"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundColor: color
                }}
            ></span>
            </span>
        </span>
    )
}

export default React.memo(Spinner)
