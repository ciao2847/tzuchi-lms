import React, { forwardRef } from 'react'
import Link from 'components/Link'
import { useLocale } from 'hooks'
import { translate } from 'components/I18N'
const AutoSwitchLink = forwardRef(
    ({ children, isLinkOut, title, className, ...props }, ref) => {
        const lang = useLocale()
        const LinkComp = isLinkOut || props.href?.startsWith('#') ? 'a' : Link
        return (
            <LinkComp
                className={`transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${className || ''}`}
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
                {...(isLinkOut && props['aria-label'] ? { 'aria-label': `${props['aria-label']}（${translate('另開視窗', lang)}）` } : {})}
                ref={ref}
            >
                {children}
                {isLinkOut && !props['aria-label'] && <span className="sr-only">（{translate('另開視窗', lang)}）</span>}
            </LinkComp>
        )
    }
)

export default React.memo(AutoSwitchLink)
