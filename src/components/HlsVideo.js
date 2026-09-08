import React, { useState, useEffect, useRef } from 'react'
import { loadScripts } from 'constants/utils'
const HlsVideo = ({ isPlaying, className, ...props }) => {
    const { src } = props
    const videoRef = useRef()
    const hlsSupport = useRef(null)
    const isHls = src.includes('.m3u8')
    const [init, toggle] = useState(false)

    useEffect(() => {
        if (!init || !isHls) return
        hlsSupport.current =
            videoRef.current.canPlayType('application/vnd.apple.mpegURL') ||
            videoRef.current.canPlayType('audio/mpegurl')
        if (!hlsSupport.current) {
            loadScripts([`${process.env.BASE_PATH}/vendors/hls.min.js`]).then(
                () => {
                    const hls = new Hls()
                    hls.attachMedia(videoRef.current)
                    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
                        hls.loadSource(props.src)
                        hlsSupport.current = true
                        if (isPlaying) videoRef.current.play()
                    })
                }
            )
        } else {
            if (isPlaying) videoRef.current.play()
        }
    }, [init, props.src])
    useEffect(() => {
        if (isHls && !hlsSupport.current) return
        if (isPlaying) {
            videoRef.current.play()
        } else {
            const playPromise = videoRef.current.play()
            if (playPromise !== undefined) {
                playPromise
                    .then((_) => {
                        videoRef.current.pause()
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            }
        }
    }, [src, isPlaying])
    useEffect(() => {
        setTimeout(() => {
            toggle(true)
        }, 33)
    }, [])

    return (
        <video
            className={`${className}`}
            {...props}
            ref={videoRef}
            key={src}
            playsInline
        ></video>
    )
}

export default React.memo(HlsVideo)
