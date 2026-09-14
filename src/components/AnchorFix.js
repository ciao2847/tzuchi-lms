import React from 'react'
import useMedia from 'hooks/useMedia'
const AnchorFix = ({
    offset = -56,
    mdOffset = -56,
    xlOffset = -80,
    id,
    className,
    text
}) => {
    const isTabletLayout = useMedia('(min-width: 768px)')
    const isDesktopLayout = useMedia('(min-width: 1200px)')
    const topOffset =
        (isDesktopLayout && xlOffset) || (isTabletLayout && mdOffset) || offset

    return (
        <a
            className={`block w-0 h-0 absolute top-0 left-0 indent-[-9999px] overflow-hidden pointer-events-none ${className || ''}`}
            title={text}
            tabIndex="-1"
            id={id}
            style={{ marginTop: topOffset }}
        >
            {text}
        </a>
    )
}

export default React.memo(AnchorFix)
