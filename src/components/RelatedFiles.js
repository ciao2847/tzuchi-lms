import React from 'react'
import { translate } from 'components/I18N'
import { useLocale } from 'hooks'
const RelatedFiles = ({ data, className }) => {
    const lang = useLocale()
    return (
        <ul className={`flex flex-wrap ${className}`}>
            {data.map((file, i) => (
                <li className="mt-1 mr-2 last:mr-0" key={i}>
                    <a
                        className="btn btn-white rounded"
                        href={file.url}
                        title={`${file.subject}${translate('另開視窗', lang)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i
                            className="icon icon-download mr-1 text-primary text-[16px]"
                            aria-hidden="true"
                        ></i>
                        <span className="">
                            {file.title}({file.url.split('.').at(-1)})
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default React.memo(RelatedFiles)
