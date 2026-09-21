import I18N from 'components/I18N'
import Link from 'components/Link'
import { useLocale } from 'hooks'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Breadcrumbs = ({ data, className, contained = true }) => {
    const lang = useLocale()
    const [search] = useSearchParams()
    const isEmbed = search.get('embed') === '1'
    if (isEmbed) return null

    return (
        <nav
            className={`breadcrumbs w-full py-2 ${className || ''}`}
            aria-label="麵包屑"
        >
            <div
                className={`flex min-h-8 w-full items-center overflow-x-auto text-[12px] md:text-[13px] xl:text-[14px] ${
                    contained
                        ? 'mx-auto px-4 md:px-6 xl:max-w-[1200px] xl:px-0 2xl:max-w-[1400px]'
                        : ''
                }`}
            >
                <a
                    accessKey="C"
                    href="#"
                    title="中間定位點(C)"
                    className="hidden xl:block ml-1 w-4 text-inherit"
                    onClick={(e) => {
                        e.preventDefault()
                    }}
                >
                    :::
                </a>
                <ol className="flex min-w-max items-center">
                    <li className="flex crumb items-center ml-1">
                        <Link
                            href={lang === 'zh-tw' ? '/' : `/${lang}`}
                            className={`text-inherit hover:text-primary`}
                        >
                            <I18N>首頁</I18N>
                        </Link>
                    </li>
                    {!!data?.length &&
                        data.map(({ title, url }, index) => (
                            <li
                                className="crumb flex items-center"
                                key={`${title}-${index}`}
                                aria-current={
                                    index === data.length - 1
                                        ? 'page'
                                        : undefined
                                }
                            >
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
                </ol>
            </div>
        </nav>
    )
}

export default React.memo(Breadcrumbs)
