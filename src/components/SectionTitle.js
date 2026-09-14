import React from 'react'
import I18N from 'components/I18N'
const SectionTitle = ({ title, className }) => {
	return (
		<div
			className={`text-[20px] md:text-[22px] xl:text-[24px] font-bold ${className}`}
		>
			<I18N>{title}</I18N>
		</div>
	)
}

export default React.memo(SectionTitle)
