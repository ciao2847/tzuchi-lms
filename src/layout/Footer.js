import React from 'react'
import { useLocale } from 'hooks'
import I18N, { translate } from 'components/I18N'
import AutoSwitchLink from 'components/AutoSwitchLink'
import { OTHER_CONFIG } from 'constants'

const Footer = () => {
    const lang = useLocale()

    return (
        <footer className="relative z-[1] bg-white w-full">
            <div className="flex flex-col items-center justify-center mx-auto max-w-[1200px] text-center py-4 px-4 md:px-6 xl:px-10 gap-12">
                <div className="flex flex-col items-center gap-4 w-full">
                    <h2 className="flex w-full items-center gap-4 text-primary text-[20px] md:text-[24px] font-bold">
                        <span className="h-px flex-1 bg-primary opacity-40" aria-hidden="true" />
                        <span className="shrink-0">
                            <I18N>其他連結</I18N>
                        </span>
                        <span className="h-px flex-1 bg-primary opacity-40" aria-hidden="true" />
                    </h2>
                    <ul className="mx-auto flex flex-wrap justify-center w-full  gap-y-6 md:grid md:grid-flow-col md:auto-cols-fr">
                        {OTHER_CONFIG.map(({title,links}) => (
                            <li
                                className="flex flex-col items-center gap-2 w-1/3 min-w-0 md:px-2 md:w-auto max-md:[&:nth-child(n+4)]:w-1/2 border-r border-solid border-gray-200 last:border-r-0 max-md:[&:nth-child(3n)]:border-r-0"
                                key={title}
                            >
                                <h3 className="text-primary text-[16px] md:text-[18px] font-bold">
                                    <I18N>{title}</I18N>
                                </h3>
                                <ul className="flex flex-col flex-wrap justify-center gap-2">
                                    {links?.map(({id,url,isLinkOut,title}) => (
                                        <li key={id}>
                                            <AutoSwitchLink
                                                className="block text-primary hover:text-main  text-[12px] md:text-[16px] transition-colors duration-300"
                                                href={url}
                                                title={translate(title, lang)}
                                                isLinkOut={isLinkOut}
                                            >
                                                <I18N>{title}</I18N>
                                            </AutoSwitchLink>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
              <div className='bg-primary text-white text-center py-3 px-3 md:px-0'>
                    <I18N>大林慈濟</I18N> © {new Date().getFullYear()} All
                    rights reserved.
                </div>
        </footer>
    )
}

export default React.memo(Footer)
