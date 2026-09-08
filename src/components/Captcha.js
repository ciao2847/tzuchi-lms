import React, { useState, forwardRef, useImperativeHandle } from 'react'
import useClientCheck from 'hooks/useClientCheck'
// eslint-disable-next-line react/display-name
const Captcha = forwardRef(({ className }, ref) => {
    const isClient = useClientCheck()
    const [random, setRandom] = useState(new Date().getTime())
    const reload = () => {
        setRandom(new Date().getTime())
    }
    useImperativeHandle(ref, () => ({
        reload
    }))
    return (
        <div
            className={`flex-shrink-0 w-10 bg-placeholder rounded overflow-hidden position-relative ${className}`}
            style={{ height: 38 }}
        >
            {isClient ? (
                <img
                    className={`d-block fill-parent`}
                    src={`/api/zh-tw/util/captcha?${random}`}
                    alt="驗證碼圖片"
                    id="captcha-img"
                />
            ) : null}
        </div>
    )
})

export default React.memo(Captcha)
