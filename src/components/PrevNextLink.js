import React from 'react'
import AutoSwitchLink from 'components/AutoSwitchLink'
import I18N, { translate } from 'components/I18N'
const PrevNextLink = ({ url, title, label = '上一則', isPrev, isNext }) => {
    return (
        <AutoSwitchLink
            className={`btn flex-1 px-2 text-[16px] h-6`}
            href={url}
            title={title}
        >
            <I18N>{label}</I18N>
        </AutoSwitchLink>
    )
}
export default React.memo(PrevNextLink)
