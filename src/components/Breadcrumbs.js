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
        <div className={`breadcrumbs py-2 w-full ${className || ''}`}>
            <div className="flex items-center max-w-[1400px] h-4 mx-auto text-[14px]">
                <a
                    accessKey="C"
                    href="#"
                    title="中間定位點(C)"
                    className="hidden xl:block w-2 -ml-2 text-inherit"
                    onClick={(e) => {
                        e.preventDefault()
                    }}
                >
                    :::
                </a>
                <ul className="flex items-center">
                    <li className="flex crumb items-center">
                        <Link
                            href={`/${lang}`}
                            className={`text-inherit hover:text-primary`}
                        >
                            <I18N>首頁</I18N>
                        </Link>
                    </li>
                    {!!data?.length &&
                        data.map(({ title, url }, i) => (
                            <li className="flex crumb items-center" key={i}>
                                {!!url ? (
                                    <Link
                                        className={`text-inherit hover:text-primary`}
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
