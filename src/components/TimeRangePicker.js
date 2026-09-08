import React, { useState, useEffect, forwardRef } from 'react'
// eslint-disable-next-line react/display-name
const TimeRangePicker = forwardRef(
    (
        {
            value = '',
            onChange,
            minTime = '00:00',
            maxTime = '23:59',
            step = 30,
            className
        },
        ref
    ) => {
        const [startTime, setStartTime] = useState('')
        const [endTime, setEndTime] = useState('')
        const makeRangeArr = (minTime, maxTime, step) => {
            const arr = []
            const startDate = new Date(`2000-01-01T${minTime}:00`)
            const endDate = new Date(`2000-01-01T${maxTime}:00`)
            let currentTime = startDate
            while (currentTime <= endDate) {
                const timeString = currentTime.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hourCycle: 'h23'
                })

                arr.push({ label: timeString, value: timeString.split(' ')[0] })
                currentTime = new Date(currentTime.getTime() + step * 60000)
            }

            return arr
        }
        const timesArr = makeRangeArr(minTime, maxTime, step)
        useEffect(() => {
            if (!!startTime && !!endTime) {
                const startIdx = timesArr.findIndex(
                    (item) => item.value === startTime
                )
                const endIdx = timesArr.findIndex(
                    (item) => item.value === endTime
                )
                if (endIdx <= startIdx) {
                    setEndTime(timesArr[startIdx + 1].value)
                }
                onChange(`${startTime}~${endTime}`)
            } else {
                onChange(null)
            }
        }, [startTime, endTime])
        useEffect(() => {
            setStartTime('')
            setEndTime('')
        }, [minTime, maxTime])
        return (
            <div className={`d-flex align-items-center ${className}`}>
                <select
                    className="form-select w-20 h-5 pl-12px rounded fz-16px"
                    value={startTime}
                    onChange={(e) => {
                        setStartTime(e.target.value)
                    }}
                >
                    <option value="">請選擇開始時間</option>
                    {timesArr.slice(0, timesArr.length - 1).map((time, i) => (
                        <option value={time.value} key={i}>
                            {time.label}
                        </option>
                    ))}
                </select>
                <span className="mx-2 fz-20px font-weight-bold">~</span>
                <select
                    className="form-select w-20 h-5 pl-12px rounded fz-16px"
                    value={endTime}
                    onChange={(e) => {
                        setEndTime(e.target.value)
                    }}
                >
                    <option value="">請選擇結束時間</option>
                    {timesArr.slice(1).map((time, i) => (
                        <option value={time.value} key={i}>
                            {time.label}
                        </option>
                    ))}
                </select>
            </div>
        )
    }
)

export default React.memo(TimeRangePicker)
