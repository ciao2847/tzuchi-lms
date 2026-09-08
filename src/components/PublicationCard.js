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
                className={`d-md-flex align-items-stretch w-100 ${
                    isInIndex ? 'text-white' : 'text-dark'
                }`}
            >
                <div className="w-100 md:w-[200px] xl:w-[240px] flex-shrink-0 position-relative">
                    {!!tag && (
                        <div
                            className={`${clx[0]} m-1 py-2px px-4px rounded-[4px] absolute-top-left z-10 fz-12px lh-initial text-white`}
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
                        className={`w-100`}
                    />
                </div>

                <div
                    className={`d-flex flex-column mt-2 mt-md-0 py-md-1 px-md-2 px-xl-20px flex-fill miw-0`}
                >
                    <div
                        className={`fz-18px fz-xl-20px line-clamp-2 font-weight-bold lh-initial`}
                    >
                        {name || title}
                    </div>
                    {press && (
                        <div className="d-flex align-items-center mt-12px fz-15px text-info lh-initial">
                            <I18N>發行</I18N>：{press}
                        </div>
                    )}
                    {/*!!categoryNames?.length && (
                        <div className="d-flex align-items-center mt-12px fz-15px text-info lh-initial">
                            <I18N>類別</I18N>：{categoryNames.join('、')}
                        </div>
                    )*/}
                    {!!locationNames?.length && (
                        <ul className="d-flex flex-wrap align-items-center mt-12px mb-n1 fz-15px text-info lh-initial">
                            {locationNames.map((name, i) => (
                                <li
                                    className="d-flex align-items-center mr-2 mb-1"
                                    key={i}
                                >
                                    <i
                                        className="icon icon-location mr-4px text-primary"
                                        aria-hidden="true"
                                    ></i>
                                    {name}
                                </li>
                            ))}
                        </ul>
                    )}

                    {!!files?.length && (
                        <RelatedFiles className="mt-1 fz-15px" data={files} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default React.memo(PublicationCard)
