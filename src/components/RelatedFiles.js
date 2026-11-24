import AutoSwitchLink from 'components/AutoSwitchLink'
import EmptyState from 'components/EmptyState'
import React from 'react'
import { translate } from 'components/I18N'
import { useLocale } from 'hooks'
const RelatedFiles = ({ data = [], className }) => {
    const lang = useLocale()
    if (!data.length) return <EmptyState />
    return (
        <ul className={`flex flex-wrap ${className}`}>
            {data.map((file, i) => (
                <li className="mt-1 mr-2 last:mr-0" key={i}>
                    <AutoSwitchLink
                        className="btn btn-white rounded hover:!text-main focus-visible:!text-main"
                        href={file.url}
                        title={file.title || file.subject || '下載附件'}
                        isLinkOut
                        rel="noopener noreferrer"
                    >
                        <i
                            className="icon icon-download mr-1 text-primary text-[16px]"
                            aria-hidden="true"
                        ></i>
                        <span className="">
                            {file.title}({file.url.split('.').at(-1)})
                        </span>
                    </AutoSwitchLink>
                </li>
            ))}
        </ul>
    )
}

export default React.memo(RelatedFiles)
