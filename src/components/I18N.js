import React from 'react'
import { useLocale } from 'hooks'
import { ZH_CN_STR, ZH_TW_STR, TRANSLATE_MAP } from 'constants/translate'

let data = { ...TRANSLATE_MAP }

export const extend = (map) => {
	data = { ...data, ...map }
}
export const simplized = (cc) => {
	if (!cc || typeof cc !== 'string') {
		return ''
	}
	let str = ''
	const ss = ZH_CN_STR
	const tt = ZH_TW_STR
	const len = cc.length
	for (let i = 0; i < len; i++) {
		if (cc.charCodeAt(i) > 10000 && tt.indexOf(cc.charAt(i)) != -1)
			str += ss.charAt(tt.indexOf(cc.charAt(i)))
		else str += cc.charAt(i)
	}
	return str
}
export const translate = (str, lang, params, id) => {
	let result =
		lang === 'zh-tw' || lang === 'zh-cn'
			? str
			: data[id || str]?.[lang] || str
	if (params) {
		params.forEach((p, i) => {
			let translateP =
				lang === 'zh-tw' || lang === 'zh-cn' ? p : data[p]?.[lang] || p
			result = result.replace(`{${i}}`, translateP)
		})
	}
	if (lang === 'zh-cn') {
		result = simplized(result)
	}
	return result
}
const I18N = ({ id, children, params }) => {
	const lang = useLocale()
	return <>{translate(children, lang, params, id)}</>
}

export default React.memo(I18N)
