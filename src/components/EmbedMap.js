import React from 'react'
import I18N, { translate } from 'components/I18N'
const EmbedMap = ({ id, lat, lng, zoom = 14, lang = 'zh-tw' }) => {
	const iframe = (
		<iframe
			src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAP_KEY}&q=${lat},${lng}&zoom=${zoom}&language=${lang}`}
			key={id}
			title={translate('Google 地圖', lang)}
		></iframe>
	)
	return iframe
}

export default React.memo(EmbedMap)
