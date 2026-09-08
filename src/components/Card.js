import React from 'react'
import Link from 'components/Link'
import ThumbFrame from 'components/ThumbFrame'
import I18N from 'components/I18N'
import { TAGS_CONFIG } from 'constants'
import { formatPriceWithLocale } from 'constants/utils'
import { useLocale } from 'hooks'

const Card = ({ data, isLinkOut }) => {
    const lang = useLocale()
    const { title, name, thumb, cover, url, categoryObjs, price, hits } = data
    const tag = categoryObjs?.find(({ id }) =>
        TAGS_CONFIG.find((tag) => tag.id === id)
    )
    const clx = !!tag && TAGS_CONFIG.find(({ id }) => tag.id === id).clx
    return (
        <Link
            className="d-flex flex-md-column align-items-center w-100 text-default bg-white rounded hover:bg-primary/10 trs-all"
            href={url}
            {...(isLinkOut
                ? {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                  }
                : null)}
        >
            <div className="flex-shrink-0 w-[150px] md:w-[100%] position-relative">
                {!!tag && (
                    <div
                        className={`${clx[0]} m-1 py-2px px-4px rounded-[4px] absolute-top-left z-10 fz-12px lh-initial text-white`}
                    >
                        <I18N>{tag.title}</I18N>
                    </div>
                )}
                <ThumbFrame
                    className="rounded-l md:rounded-t md:rounded-b-none"
                    src={cover || thumb}
                    alt=""
                    ratio="4by3"
                />
            </div>
            <div className="d-flex flex-column flex-fill align-self-stretch w-100 miw-0 py-1 px-2 px-md-2 pt-xl-2">
                <div className="w-100 mb-1 fz-18px fz-xl-22px line-clamp-2 font-weight-bold lh-initial">
                    {title || name}
                </div>
                {!!price && (
                    <div className="mt-auto fz-15px fz-md-16px">
                        {formatPriceWithLocale(price, lang)}
                    </div>
                )}
            </div>
        </Link>
    )
}

export default React.memo(Card)
