import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { useParams } from 'react-router-dom'
import GoogleMapReact from 'google-map-react'
import useSupercluster from 'use-supercluster'
const Marker = ({ children }) => children

const SpotMap = ({ data, currentSpotIdx, nearInfoData, onItemClick }) => {
	const { lang = 'zh-tw' } = useParams()
	const [bounds, setBounds] = useState(null)
	const [zoom, setZoom] = useState(10)

	const mapInstanceRef = useRef(null)
	const infoWindowRef = useRef(null)
	const isClickInsideRef = useRef(false)
	const defaultProps = {
		center: {
			lat: 23.664003066007382,
			lng: 121.08439493576248
		},
		zoom: 7
	}
	const points = data.map((spot) => ({
		type: 'Feature',
		properties: { cluster: false, spotId: spot.id },
		geometry: {
			type: 'Point',
			coordinates: [spot.lng, spot.lat],
			name: spot.name
		}
	}))
	const { clusters, supercluster } = useSupercluster({
		points,
		bounds,
		zoom,
		options: { radius: 125, maxZoom: 15 }
	})
	useEffect(() => {
		if (!window.google?.maps || !mapInstanceRef.current) return

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
	}, [data])

	useEffect(() => {
		infoWindowRef.current?.close()
		if (!nearInfoData || !window.google?.maps || !mapInstanceRef.current)
			return
		const { lat, lng } = data.find((spot) => spot.id === currentSpotIdx)
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
		const { lat, lng } = data.find((spot) => spot.id === currentSpotIdx)
		mapInstanceRef.current.setCenter({ lat, lng })
	}, [currentSpotIdx])

	return (
		<div className="google-map-wrapper w-100 flex-fill position-relative pointer-events-auto">
			<GoogleMapReact
				bootstrapURLKeys={{
					key: process.env.GOOGLE_MAP_KEY,
					language: lang
				}}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
				options={{
					mapTypeControl: false,
					zoomControl: false,
					streetViewControl: true,
					clickableIcons: true,
					gestureHandling: 'greedy',
					fullscreenControl: false,
					styles: []
				}}
				onGoogleApiLoaded={({ map, maps }) => {
					mapInstanceRef.current = map
					map.setClickableIcons(true)
					infoWindowRef.current = new google.maps.InfoWindow({
						pixelOffset: new google.maps.Size(0, -30)
					})
				}}
				onChange={({ zoom, bounds }) => {
					setZoom(zoom)
					setBounds([
						bounds.nw.lng,
						bounds.se.lat,
						bounds.se.lng,
						bounds.nw.lat
					])
				}}
			>
				{clusters.map((cluster, i) => {
					const [lng, lat] = cluster.geometry.coordinates
					const {
						cluster: isCluster,
						point_count: pointCount
					} = cluster.properties

					if (isCluster) {
						return (
							<Marker
								key={`cluster-${cluster.id}`}
								lat={lat}
								lng={lng}
							>
								<button
									className={`${
										pointCount >= 100
											? 'w-6 h-6'
											: 'w-5 h-5'
									} d-flex justify-content-center align-items-center bg-primary rounded-circle text-white font-weight-bold border border-white border-width-2px fz-15px`}
									onClick={() => {
										const expansionZoom = Math.min(
											supercluster.getClusterExpansionZoom(
												cluster.id
											),
											20
										)
										mapInstanceRef.current.setZoom(
											expansionZoom
										)
										mapInstanceRef.current.panTo({
											lat: lat,
											lng: lng
										})
									}}
								>
									{pointCount}
								</button>
							</Marker>
						)
					}
					return (
						<Marker
							key={`spot-${cluster.properties.spotId}`}
							lat={lat}
							lng={lng}
						>
							<button
								className="spot-marker"
								onClick={() => {
									isClickInsideRef.current = true
									onItemClick(cluster.properties.spotId)
								}}
							>
								<img
									className="d-block w-4"
									src="/images/content/spot-marker.png"
									alt=""
								/>
								<div className="sr-only">
									{cluster.geometry.name}
								</div>
							</button>
						</Marker>
					)
				})}
				{currentSpotIdx > -1 &&
					data
						.filter((spot) => spot.id === currentSpotIdx)
						.map((spot) => {
							const { lat, lng } = spot
							return (
								<Marker lat={lat} lng={lng} key={spot.id}>
									<div className="w-5 h-5 translate-n50-n100">
										<img
											className="d-block w-5"
											src="/images/content/spot-marker-current.png"
											alt=""
										/>
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
									className="position-relative w-0 h-0"
									onClick={() => {
										const contentElement = document.createElement(
											`div`
										)
										ReactDOM.render(
											<div className="d-flex align-items-center bg-white rounded">
												<i
													className={`icon icon-${type} w-5 h-5 flex-shrink-0 bg-primary text-white fz-22px rounded-circle`}
													aria-hidden="true"
												></i>
												<div className="pl-1 font-weight-bold">
													<div className="d-flex align-items-center h-20px mb-2px fz-16px">
														{name}
													</div>
													{extra_info?.total_lots && (
														<div className="d-flex align-items-center h-20px fz-14px text-main">
															總車位數：
															{
																extra_info.total_lots
															}
														</div>
													)}
													{current_business_hours && (
														<div className="d-flex align-items-center h-20px fz-14px text-success">
															{
																current_business_hours
															}
														</div>
													)}
												</div>

												<a
													className="btn w-5 h-5 rounded text-decoration-none ml-1 font-weight-bold text-primary fz-15px"
													href={`http://maps.google.com/maps?daddr=${lat},${lng}&amp;hl=zh-tw`}
													title="導航(另開視窗)"
													target="_blank"
													rel="noopener noreferrer"
												>
													GO
												</a>
											</div>,
											contentElement
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
										className={`icon icon-${type} w-4 h-4 bg-primary text-white absolute-center rounded-circle`}
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
