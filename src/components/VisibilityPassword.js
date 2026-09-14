import React, { useState, forwardRef } from 'react'

const VisibilityPassword = forwardRef((props, ref) => {
    const [visible, toggle] = useState(false)
    return (
        <div className="relative">
            <input type={visible ? 'text' : 'password'} ref={ref} {...props} />
            <button
                className="btn w-5 h-5 m-[1px] border-0 rounded absolute top-0 right-0"
                type="button"
                onClick={() => {
                    toggle(!visible)
                }}
            >
                <i
                    className={`icon icon-eye${visible ? '' : '-slash'}`}
                    aria-hidden="true"
                ></i>
            </button>
        </div>
    )
})

export default React.memo(VisibilityPassword)
