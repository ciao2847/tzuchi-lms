import React, { useState, useRef, useEffect } from 'react'
import HlsVideo from 'components/HlsVideo'
const ObserverVideo = ({
    className,
    sensorStyle = { top: '50%', left: '50%' },
    ...props
}) => {
    const [isPlaying, togglePlay] = useState(false)
    const seonsorRef = useRef()
    useEffect(() => {
        const sensor = seonsorRef.current

        const observer = new IntersectionObserver((entries) => {
            togglePlay(entries[0].isIntersecting)
        })

        observer.observe(sensor)
        return () => {
            observer.disconnect()
        }
    }, [])
    return (
        <div className={`relative ${className || ''}`}>
            <HlsVideo
                className="w-full h-full object-cover"
                isPlaying={isPlaying}
                {...props}
            />

            <div
                className="w-0 h-0 absolute z-10 pointer-events-none"
                style={sensorStyle}
                ref={seonsorRef}
            ></div>
        </div>
    )
}

export default React.memo(ObserverVideo)
