import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { loadScripts } from 'constants/utils'

const isDev = process.env.NODE_ENV === 'development'

window.googleTranslateElementInit = () => {
	if (document.querySelector('.goog-te-gadget')) {
		return false
	}
	try {
		new google.translate.TranslateElement(
			{
				pageLanguage: '@R.LanguageByGoogleTranslate',
				includedLanguages:
					'en,ja,ko,zh-TW,zh-CN,ar,de,el,es,fr,hi,id,it,la,lo,my,pt,ru,th,tl,vi,ms',
				layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
				autoDisplay: false
			},
			'google_translate_element'
		)
	} catch (e) {
		console.error(e)
	}
}
const GoogleTranslateWidget = ({ className }) => {
	const { lang = 'zh-tw' } = useParams()
	useEffect(() => {
		if (isDev) return
		loadScripts([
			`https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit&hl=${lang}`
		])
	}, [])
	return (
		<div className={`google-translate-blk px-2 px-xl-0 ${className}`}>
			<div id="google_translate_element"></div>
		</div>
	)
}

export default React.memo(GoogleTranslateWidget)
