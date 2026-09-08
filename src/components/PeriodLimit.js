import React from 'react'
const isStag = process.env.NODE_ENV === 'development' || process.env.IS_STAGING
const PeriodLimit = ({ start, end, children, showAtStaging = null }) => {
    const now = new Date()
    if (isStag && showAtStaging === true) {
        return children
    }
    if (isStag && showAtStaging === false) {
        return null
    }

    if (!start && !end) {
        return (
            <div className="p-1 bg-danger text-white rounded">
                起迄期間尚未設定
            </div>
        )
    }
    if (now.getTime() < new Date(`${start}.000+08:00`).getTime()) {
        return null
    }
    if (now.getTime() > new Date(`${end}.000+08:00`).getTime()) {
        return null
    }

    return children
}

export default React.memo(PeriodLimit)
