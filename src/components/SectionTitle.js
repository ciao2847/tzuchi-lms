import React from 'react'
import I18N from 'components/I18N'
const SectionTitle = ({ title, className }) => {
	return (
		<div
			className={`fz-20px fz-md-22px fz-xl-24px font-weight-bold ${className}`}
		>
			<I18N>{title}</I18N>
		</div>
	)
}

export default React.memo(SectionTitle)
