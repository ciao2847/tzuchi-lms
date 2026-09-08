import I18N from 'components/I18N'
import Link from 'components/Link'
import { useLocale } from 'hooks'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Breadcrumbs = ({ data, className }) => {
    const lang = useLocale()
    const [search] = useSearchParams()
    const isEmbed = search.get('embed') === '1'
    if (isEmbed) return null

    return (
        <div className={`breadcrumbs py-2 full-width ${className}`}>
            <div className="d-flex align-items-center maw-1400px h-4 mx-auto fz-14px">
                <a
                    accessKey="C"
                    href="#"
                    title="中間定位點(C)"
                    className="d-none d-xl-block w-2 ml-n2 text-inherit"
                    onClick={(e) => {
                        e.preventDefault()
                    }}
                >
                    :::
                </a>
                <ul className="d-flex">
                    <li className="d-flex crumb">
                        <Link
                            href={`/${lang}`}
                            className={`text-inherit hover-primary`}
                        >
                            <I18N>首頁</I18N>
                        </Link>
                    </li>
                    {!!data?.length &&
                        data.map(({ title, url }, i) => (
                            <li className="d-flex crumb" key={i}>
                                {!!url ? (
                                    <Link
                                        className={`text-inherit hover-primary`}
                                        href={url}
                                    >
                                        <I18N>{title}</I18N>
                                    </Link>
                                ) : (
                                    <I18N>{title}</I18N>
                                )}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default React.memo(Breadcrumbs)
