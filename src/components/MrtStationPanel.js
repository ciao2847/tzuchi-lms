import React, { useState, useEffect } from 'react'
import { MRT_LINE_DATA, MRT_STATION_DATA } from 'constants'
import { useMedia } from 'hooks'

const MrtStationPanel = ({ currentStationId, onChange }) => {
    const isLayoutMD = useMedia('(min-width: 768px)')
    const [currentLine, setCurrentLine] = useState('BR')
    useEffect(() => {
        setCurrentLine(
            MRT_STATION_DATA.find((station) => station.id === currentStationId)
                ?.line || 'BR'
        )
    }, [currentStationId])
    return (
        <div className="w-full">
            <nav
                className={`border-mrt-${currentLine.toLowerCase()} border-b-4`}
            >
                <ul className="flex">
                    {MRT_LINE_DATA.map(({ id, title }) => (
                        <li className="flex-1" key={id}>
                            <button
                                className={`w-full py-1 text-[14px] md:text-[16px] text-white bg-mrt-${id.toLowerCase()}`}
                                onClick={() => {
                                    setCurrentLine(id)
                                }}
                            >
                                {title}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div
                className="p-2"
                style={!isLayoutMD ? { minHeight: 456 } : null}
            >
                <ul className="grid grid-cols-3 gap-1">
                    {MRT_STATION_DATA.filter(
                        (station) => station.line === currentLine
                    ).map(({ id, name }) => (
                        <li key={id}>
                            <button
                                className={`${
                                    currentStationId === id &&
                                    `bg-mrt-${currentLine.toLowerCase()} text-white`
                                } border-mrt-${currentLine.toLowerCase()} btn w-full h-5 text-[15px]`}
                                onClick={() => onChange(id)}
                            >
                                {name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default React.memo(MrtStationPanel)
