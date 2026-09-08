import React, { useEffect, useRef } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { translate } from 'components/I18N'
import { removeAllTags } from 'constants/utils'
import { Helmet } from 'react-helmet'
import { sendGA } from 'constants/utils'

const isProd = process.env.NODE_ENV === 'production' && !process.env.IS_STAGING

const Seo = ({
    title = '',
    description = '',
    path = '',
    gaNope = false,
    isListPage = false
}) => {
    const location = useLocation()
    const { lang = 'zh-tw' } = useParams()
    const isTW = lang === 'zh-tw'
    path = path || process.env.BASE_PATH + location.pathname + location.search

    useEffect(() => {
        if (gaNope || isListPage || !isProd) return
        sendGA({ title, path })
    }, [gaNope, title])
    useEffect(() => {
        if (gaNope || !isListPage || !isProd) return
        sendGA({ title, path })
    }, [gaNope, isListPage, location])

    return (
        <Helmet>
            <meta name="language" content={lang} />
            <title>{title || translate(process.env.WEB_TITLE, lang)}</title>
            {isTW && (
                <meta
                    name="description"
                    content={
                        description
                            ? removeAllTags(description)
                                  .replace(/\n/g, '')
                                  .replace(/\r/g, '')
                                  .replace(/ /g, '')
                                  .replace(/&nbsp;/g, '')
                                  .trim()
                                  .substring(0, 150)
                            : process.env.WEB_TITLE
                    }
                />
            )}
        </Helmet>
    )
}

export default React.memo(Seo)
