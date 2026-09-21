import React, { useState, useEffect, forwardRef } from 'react'
import Select from 'components/Select'
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
            <div
                className={`flex w-full min-w-0 items-center ${
                    className || ''
                }`}
            >
                <Select
                    wrapperClassName="min-w-0 flex-1"
                    value={startTime}
                    aria-label="開始時間"
                    onChange={(e) => {
                        setStartTime(e.target.value)
                    }}
                >
                    <option value="">開始時間</option>
                    {timesArr.slice(0, timesArr.length - 1).map((time, i) => (
                        <option value={time.value} key={i}>
                            {time.label}
                        </option>
                    ))}
                </Select>
                <span className="mx-2 shrink-0 text-[20px] font-bold">~</span>
                <Select
                    wrapperClassName="min-w-0 flex-1"
                    value={endTime}
                    aria-label="結束時間"
                    onChange={(e) => {
                        setEndTime(e.target.value)
                    }}
                >
                    <option value="">結束時間</option>
                    {timesArr.slice(1).map((time, i) => (
                        <option value={time.value} key={i}>
                            {time.label}
                        </option>
                    ))}
                </Select>
            </div>
        )
    }
)

export default React.memo(TimeRangePicker)
