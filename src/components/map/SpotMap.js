import React, { useEffect, useRef } from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { useLocale } from 'hooks'
import GoogleMapReact from 'google-maps-react-markers'

const Marker = ({ children }) => children

const SpotMap = ({ data, currentSpotIdx, nearInfoData, onItemClick }) => {
    const lang = useLocale()
    const mapInstanceRef = useRef(null)
    const infoWindowRef = useRef(null)
    const isClickInsideRef = useRef(false)
    const defaultProps = {
        center: {
            lat: 22.766085242961513,
            lng: 121.14516974502749
        },
        zoom: 7
    }
    const fitBoundsWithData = (data) => {
        const markerBounds = new google.maps.LatLngBounds()

        data.forEach((spot) =>
            markerBounds.extend(new google.maps.LatLng(spot.lat, spot.lng))
        )
        if (data.length) {
            mapInstanceRef.current.fitBounds(markerBounds)
            if (data.length === 1) {
                mapInstanceRef.current.setZoom(15)
            }
        } else {
            mapInstanceRef.current.setCenter(defaultProps.center)
            mapInstanceRef.current.setZoom(defaultProps.zoom)
        }
    }
    useEffect(() => {
        if (!window.google?.maps || !mapInstanceRef.current) return

        fitBoundsWithData(data)
    }, [data])

    useEffect(() => {
        infoWindowRef.current?.close()
        if (!nearInfoData || !window.google?.maps || !mapInstanceRef.current)
            return
        const { lat, lng } = data.find((spot) => spot.uid === currentSpotIdx)
        const markerBounds = new google.maps.LatLngBounds()
        markerBounds.extend(new google.maps.LatLng(lat, lng))
        nearInfoData.data.forEach((spot) =>
            markerBounds.extend(new google.maps.LatLng(spot.lat, spot.lng))
        )

        mapInstanceRef.current.fitBounds(markerBounds)
    }, [nearInfoData])

    useEffect(() => {
        infoWindowRef.current?.close()
        if (currentSpotIdx === -1 || isClickInsideRef.current) {
            isClickInsideRef.current = false
            return
        }
        const { lat, lng } = data.find((spot) => spot.uid === currentSpotIdx)
        mapInstanceRef.current.setCenter({ lat, lng })
    }, [currentSpotIdx])

    return (
        <div className="google-map-wrapper w-full flex-1 relative pointer-events-auto">
            <GoogleMapReact
                apiKey={`${process.env.GOOGLE_MAP_KEY}&language=${lang}`}
                locale={lang}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                options={{
                    mapTypeControl: false,
                    zoomControl: false,
                    streetViewControl: false,
                    clickableIcons: false,
                    gestureHandling: 'greedy',
                    fullscreenControl: false,
                    styles: []
                }}
                onGoogleApiLoaded={({ map, maps }) => {
                    mapInstanceRef.current = map
                    infoWindowRef.current = new google.maps.InfoWindow({
                        pixelOffset: new google.maps.Size(0, -30)
                    })
                    infoWindowRef.current.setZIndex(999999)
                    fitBoundsWithData(data)
                }}
            >
                {data.map(({ uid, type, lat, lng, name }) => (
                    <Marker key={uid} lat={lat} lng={lng}>
                        <button
                            className="spot-marker"
                            onClick={() => {
                                isClickInsideRef.current = true
                                onItemClick(uid)
                            }}
                        >
                            <img
                                className="block w-4"
                                src={`${process.env.BASE_PATH}/images/map/marker-${type}.png`}
                                alt=""
                            />
                            <div className="sr-only">{name}</div>
                        </button>
                    </Marker>
                ))}
                {currentSpotIdx !== -1 &&
                    data
                        .filter((spot) => spot.uid === currentSpotIdx)
                        .map((spot) => {
                            const { uid, type, lat, lng, name } = spot
                            return (
                                <Marker lat={lat} lng={lng} key={uid}>
                                    <div className="spot-marker act">
                                        <img
                                            className="block w-4"
                                            src={`${process.env.BASE_PATH}/images/map/marker-${type}-current.png`}
                                            alt=""
                                        />
                                        <div className="sr-only">{name}</div>
                                    </div>
                                </Marker>
                            )
                        })}
                {nearInfoData &&
                    nearInfoData.data.map((spot, i) => {
                        const type = nearInfoData.type
                        const {
                            name,
                            lat,
                            lng,
                            current_business_hours,
                            extra_info
                        } = spot

                        return (
                            <Marker key={i} lat={lat} lng={lng}>
                                <button
                                    className="relative w-0 h-0"
                                    onClick={() => {
                                        const contentElement =
                                            document.createElement(`div`)
                                        const root =
                                            ReactDOMClient.createRoot(
                                                contentElement
                                            )
                                        root.render(
                                            <div className="flex items-center bg-white rounded">
                                                <i
                                                    className={`icon icon-${type} w-5 h-5 shrink-0 bg-primary text-white text-[22px] rounded-full`}
                                                    aria-hidden="true"
                                                ></i>
                                                <div className="pl-1 font-bold">
                                                    <div className="flex items-center mb-[2px] text-[16px] min-h-[20px]">
                                                        {name}
                                                    </div>
                                                    {extra_info?.total_lots && (
                                                        <div className="flex items-center h-[20px] text-[14px] text-main">
                                                            總車位數：
                                                            {
                                                                extra_info.total_lots
                                                            }
                                                        </div>
                                                    )}
                                                    {current_business_hours && (
                                                        <div className="flex items-center h-[20px] text-[14px] text-success">
                                                            {
                                                                current_business_hours
                                                            }
                                                        </div>
                                                    )}
                                                </div>

                                                <a
                                                    className="btn w-5 h-5 rounded no-underline ml-1 font-bold text-primary text-[15px]"
                                                    href={`http://maps.google.com/maps?daddr=${lat},${lng}&amp;hl=zh-tw`}
                                                    title="導航(另開視窗)"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    GO
                                                </a>
                                            </div>
                                        )
                                        infoWindowRef.current.setContent(
                                            contentElement
                                        )
                                        infoWindowRef.current.setOptions({
                                            pixelOffset: new google.maps.Size(
                                                0,
                                                0
                                            )
                                        })
                                        infoWindowRef.current.setPosition({
                                            lat: spot.lat,
                                            lng: spot.lng
                                        })
                                        infoWindowRef.current.open(
                                            mapInstanceRef.current
                                        )
                                    }}
                                >
                                    <i
                                        className={`icon icon-${type} w-4 h-4 btn btn-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full`}
                                        aria-hidden="true"
                                    ></i>
                                    <div className="sr-only">{name}</div>
                                </button>
                            </Marker>
                        )
                    })}
            </GoogleMapReact>
        </div>
    )
}

export default React.memo(SpotMap)
