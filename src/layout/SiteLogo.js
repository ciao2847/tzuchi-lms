import React from 'react'
import AutoSwitchLink from 'components/AutoSwitchLink'
import I18N from 'components/I18N'

const SiteLogo = ({ onClick }) => (
    <AutoSwitchLink
        href="/"
        className="main-logo block h-12 w-[176px] shrink-0 bg-contain bg-center bg-no-repeat md:h-16 md:w-[235px]"
        style={{
            backgroundImage: `url('${process.env.BASE_PATH}/images/global/main-logo.png')`
        }}
        onClick={onClick}
    >
        <span className="sr-only">
            <I18N>慈濟醫療志業學習網</I18N>
        </span>
    </AutoSwitchLink>
)

export default SiteLogo
