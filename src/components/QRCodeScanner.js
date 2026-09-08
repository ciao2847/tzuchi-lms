import React, { useEffect, useRef } from 'react'
import { Html5Qrcode, Html5QrcodeSupportedFormats } from 'html5-qrcode'
const QRCodeScanner = ({ active, onScan }) => {
	const scannerRef = useRef(null)
	const startScan = () => {
		scannerRef.current
			.start(
				{ facingMode: 'environment' },
				{
					fps: 30,
					qrbox: { width: 120, height: 120 },
					formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE]
				},
				(decodedText) => {
					onScan(decodedText)
				}
			)
			.catch((err) => {})
	}
	useEffect(() => {
		if (!active) return
		Html5Qrcode.getCameras()
			.then((devices) => {
				if (devices && devices.length) {
					scannerRef.current = new Html5Qrcode('scanner')
					startScan()
				}
			})
			.catch((err) => {})
		return () => {
			if (
				scannerRef.current?.getState() === 1 ||
				scannerRef.current?.getState() === 2
			) {
				scannerRef.current.stop()
				//scannerRef.current.stop()
			}
		}
	}, [active])
	return (
		<div
			className="mx-auto bg-light rounded overflow-hidden"
			style={{ width: 300, height: 400 }}
			id="scanner"
		></div>
	)
}

export default React.memo(QRCodeScanner)
