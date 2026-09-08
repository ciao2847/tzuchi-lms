import React, { useState, useRef, useEffect, Suspense } from 'react'
import { isInViewport } from 'constants/utils'
const LazyComponent = ({
	offsetTop = '25vh',
	placeholder = null,
	children
}) => {
	const [isLoaded, toggleLoaded] = useState(false)
	const sensorEl = useRef(null)
	const observerRef = useRef(null)
	const timerRef = useRef(null)

	useEffect(() => {
		const sensor = sensorEl.current

		observerRef.current = new IntersectionObserver((entries, observer) => {
			if (entries[0].isIntersecting) {
				toggleLoaded(true)
			}
		})

		observerRef.current.observe(sensor)
		timerRef.current = setTimeout(() => {
			const sensor = sensorEl.current
			if (isInViewport(sensor)) {
				toggleLoaded(true)
			}
		}, 500)
		return () => {
			observerRef.current.disconnect()
			clearTimeout(timerRef.current)
		}
	}, [])

	useEffect(() => {
		if (isLoaded) {
			observerRef.current.disconnect()
			clearTimeout(timerRef.current)
		}
	}, [isLoaded])

	return (
		<div className="position-relative">
			<div
				className="z-2000 w-0 absolute-bottom-left pointer-events-none"
				ref={sensorEl}
				style={{ height: `calc(${offsetTop} + 100%)` }}
			></div>
			{placeholder}
			<Suspense fallback={null}>{isLoaded && children}</Suspense>
		</div>
	)
}

export default React.memo(LazyComponent)
