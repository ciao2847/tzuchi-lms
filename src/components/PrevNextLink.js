import React from 'react'
import Link from 'components/Link'
import I18N, { translate } from 'components/I18N'
const PrevNextLink = ({ url, title, label = '上一則', isPrev, isNext }) => {
    return (
        <Link
            className={`btn flex-fill px-2 fz-16px h-6`}
            href={url}
            title={title}
        >
            <I18N>{label}</I18N>
        </Link>
    )
}
export default React.memo(PrevNextLink)
