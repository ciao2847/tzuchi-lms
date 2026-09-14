import React, { forwardRef } from 'react'
import { FixedSizeList as List } from 'react-window'
import { FixedSizeGrid as Grid } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import useMedia from 'hooks/useMedia'
import MapSpotCard from './MapSpotCard'
// eslint-disable-next-line react/display-name
const MapSpotList = forwardRef(({ data, onItemClick }, ref) => {
	const isLayoutLG = useMedia('(min-width: 992px)')
	return (
		<AutoSizer>
			{({ height, width }) =>
				isLayoutLG ? (
					<List
						height={height}
						itemCount={data.length}
						itemSize={96}
						width={width}
						ref={ref}
					>
						{({ index, style }) => {
							const spot = data[index]
							return (
								<div
									className="border-b"
									style={style}
									key={spot.id}
								>
									<MapSpotCard
										data={spot}
										onClick={() => {
											onItemClick(spot.uid)
										}}
									/>
								</div>
							)
						}}
					</List>
				) : (
					<Grid
						columnCount={data.length}
						columnWidth={240}
						height={96}
						rowCount={1}
						rowHeight={96}
						width={width}
					>
						{({ columnIndex, rowIndex, style }) => {
							const spot = data[columnIndex]
							if (!spot) return null
							return (
								<div
									className="border-r"
									style={style}
									key={spot.id}
								>
									<MapSpotCard
										data={spot}
										onClick={() => {
											onItemClick(spot.uid)
										}}
									/>
								</div>
							)
						}}
					</Grid>
				)
			}
		</AutoSizer>
	)
})

export default React.memo(MapSpotList)
