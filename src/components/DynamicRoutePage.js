// import React, { lazy, Suspense } from 'react'
// import { useParams } from 'react-router-dom'

// const dash2Camel = (str) =>
// 	str
// 		.toLowerCase()
// 		.split('-')
// 		.map((s) => s[0].toUpperCase() + s.slice(1))
// 		.join('')

// const DynamicRoutePage = () => {
// 	const { page } = useParams()
// 	const Comp = lazy(() => import('views/static/' + dash2Camel(page)))

// 	return (
// 		<Suspense fallback={null}>
// 			<Comp />
// 		</Suspense>
// 	)
// }

// export default DynamicRoutePage
