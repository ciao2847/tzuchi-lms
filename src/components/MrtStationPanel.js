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
        <div className="w-100">
            <nav
                className={`border-mrt-${currentLine.toLowerCase()} border-bottom border-width-4px`}
            >
                <ul className="d-flex">
                    {MRT_LINE_DATA.map(({ id, title }) => (
                        <li className="flex-fill" key={id}>
                            <button
                                className={`w-100 py-1 fz-14px fz-md-16px text-white bg-mrt-${id.toLowerCase()}`}
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
                <ul className="row g-1">
                    {MRT_STATION_DATA.filter(
                        (station) => station.line === currentLine
                    ).map(({ id, name }) => (
                        <li className="col-4" key={id}>
                            <button
                                className={`${
                                    currentStationId === id &&
                                    `bg-mrt-${currentLine.toLowerCase()} text-white`
                                } border-mrt-${currentLine.toLowerCase()} btn w-100 h-5 fz-15px`}
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
