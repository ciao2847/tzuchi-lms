import React, { useRef } from 'react'

const BtnCaptchaVoice = ({ className }) => {
    const audioRef = useRef()

    return (
        <>
            <button
                className={`btn w-5 h-5 flex-shrink-0 ml-1 rounded ${className}`}
                type="button"
                onClick={() => {
                    audioRef.current.src = `/_api/zh-tw/captcha-voice?t=${new Date().getTime()}`
                    audioRef.current.play()
                }}
            >
                <i className="icon icon-speaker" aria-hidden="true"></i>
                <div className="sr-only">播放驗證碼</div>
            </button>
            <audio src={`/_api/zh-tw/captcha-voice`} ref={audioRef}></audio>
        </>
    )
}

export default React.memo(BtnCaptchaVoice)
