import React from 'react'
import ThumbFrame from './ThumbFrame'
import I18N from './I18N'
import RelatedFiles from 'components/RelatedFiles'
import useMedia from 'hooks/useMedia'
import { TAGS_CONFIG } from 'constants'
const PublicationCard = ({ data, isInIndex = false }) => {
    const { name, locationNames, categoryObjs, title, cover, press, files } =
        data
    const tag = categoryObjs?.find(({ id }) =>
        TAGS_CONFIG.find((tag) => tag.id === id)
    )
    const clx = !!tag && TAGS_CONFIG.find(({ id }) => tag.id === id).clx

    return (
        <div className="p-1 bg-white rounded">
            <div
                className={`md:flex items-stretch w-full ${
                    isInIndex ? 'text-white' : 'text-dark'
                }`}
            >
                <div className="w-full md:w-[200px] xl:w-[240px] shrink-0 relative">
                    {!!tag && (
                        <div
                            className={`${clx[0]} m-1 py-[2px] px-[4px] rounded-[4px] absolute top-0 left-0 z-10 text-[12px] leading-normal text-white`}
                        >
                            {tag.title}
                        </div>
                    )}
                    <ThumbFrame
                        src={
                            cover.replace('150x150', '480x360') ||
                            '/images/not-found/4to3.jpg'
                        }
                        alt=""
                        ratio="4by3"
                        isRounded={true}
                        className="w-full"
                    />
                </div>

                <div
                    className="flex flex-col mt-2 md:mt-0 md:py-1 md:px-2 xl:px-[20px] flex-1 min-w-0"
                >
                    <div
                        className="text-[18px] xl:text-[20px] line-clamp-2 font-bold leading-normal"
                    >
                        {name || title}
                    </div>
                    {press && (
                        <div className="flex items-center mt-[12px] text-[15px] text-info leading-normal">
                            <I18N>發行</I18N>：{press}
                        </div>
                    )}
                    {/*!!categoryNames?.length && (
                        <div className="flex items-center mt-[12px] text-[15px] text-info leading-normal">
                            <I18N>類別</I18N>：{categoryNames.join('、')}
                        </div>
                    )*/}
                    {!!locationNames?.length && (
                        <ul className="flex flex-wrap items-center mt-[12px] -mb-1 text-[15px] text-info leading-normal">
                            {locationNames.map((name, i) => (
                                <li
                                    className="flex items-center mr-2 mb-1"
                                    key={i}
                                >
                                    <i
                                        className="icon icon-location mr-[4px] text-primary"
                                        aria-hidden="true"
                                    ></i>
                                    {name}
                                </li>
                            ))}
                        </ul>
                    )}

                    {!!files?.length && (
                        <RelatedFiles className="mt-1 text-[15px]" data={files} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default React.memo(PublicationCard)
