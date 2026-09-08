import React, { forwardRef } from 'react'
import Link from 'components/Link'
import { useLocale } from 'hooks'
import { translate } from 'components/I18N'
const AutoSwitchLink = forwardRef(
    ({ children, isLinkOut, title, className, ...props }, ref) => {
        const lang = useLocale()
        const LinkComp = isLinkOut ? 'a' : Link
        return (
            <LinkComp
                className={className}
                {...(title
                    ? {
                          title: `${translate(title, lang)}${
                              isLinkOut
                                  ? ` (${translate('另開視窗', lang)})`
                                  : ''
                          }`
                      }
                    : null)}
                {...(isLinkOut
                    ? {
                          target: '_blank',
                          rel: 'noopener noreferrer'
                      }
                    : null)}
                {...props}
                ref={ref}
            >
                {children}
            </LinkComp>
        )
    }
)

export default React.memo(AutoSwitchLink)
