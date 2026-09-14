import React from 'react'
import { useSearchParams } from 'react-router-dom'
import I18N, { translate } from 'components/I18N'
const PageTitle = ({ title, className }) => {
	const [search] = useSearchParams()
	const isEmbed = search.get('embed') === '1'
	if (isEmbed) return null
	return (
		<h2
			className={`pt-3 pb-5 xl:pt-5 xl:pb-7 text-[40px] xl:text-[50px] font-bold ${className}`}
		>
			<I18N>{title}</I18N>
		</h2>
	)
}

export default React.memo(PageTitle)
