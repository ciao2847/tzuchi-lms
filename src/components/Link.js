import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const LinkComp = ({ children, href, ...props }) => {
	const [search] = useSearchParams()
	const isEmbed = search.get('embed') === '1'

	return isEmbed ? (
		<a href={href} {...props}>
			{children}
		</a>
	) : (
		<Link to={href} {...props}>
			{children}
		</Link>
	)
}

export default React.memo(LinkComp)
