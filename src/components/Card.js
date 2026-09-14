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
            className="flex md:flex-col items-center w-full text-default bg-white rounded hover:bg-primary/10 transition-all duration-300"
            href={url}
            {...(isLinkOut
                ? {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                  }
                : null)}
        >
            <div className="shrink-0 w-[150px] md:w-full relative">
                {!!tag && (
                    <div
                        className={`${clx[0]} m-1 py-[2px] px-[4px] rounded-[4px] absolute top-0 left-0 z-10 text-[12px] leading-normal text-white`}
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
            <div className="flex flex-col flex-1 self-stretch w-full min-w-0 py-1 px-2 md:px-2 xl:pt-2">
                <div className="w-full mb-1 text-[18px] xl:text-[22px] line-clamp-2 font-bold leading-normal">
                    {title || name}
                </div>
                {!!price && (
                    <div className="mt-auto text-[15px] md:text-[16px]">
                        {formatPriceWithLocale(price, lang)}
                    </div>
                )}
            </div>
        </Link>
    )
}

export default React.memo(Card)
