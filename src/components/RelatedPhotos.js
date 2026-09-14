import React, { useContext } from 'react'
import { translate } from 'components/I18N'
import ThumbFrame from 'components/ThumbFrame'
import { useLocale } from 'hooks'
import { PhotoSwipeContext } from 'contexts/PhotoSwipeProvider'

const RelatedPhotos = ({ data, className }) => {
    const { setPhotoSwipeData } = useContext(PhotoSwipeContext)
    const lang = useLocale()
    return (
        <ul className={`grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-1 ${className}`}>
            {data.map((img, i) => (
                <li key={i}>
                    <a
                        className="hover-thumb-scale"
                        href={img.url}
                        title={`${img.title}${translate('另開視窗', lang)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                            e.preventDefault()

                            setPhotoSwipeData({
                                data: data.map((img) => ({
                                    src: img.url.replace('480x360', '1024x768'),
                                    title: img.comment || img.title,
                                    w: img.width || 1024,
                                    h: img.height || 768
                                })),
                                index: i
                            })
                        }}
                    >
                        <ThumbFrame
                            src={img.url}
                            alt={img.comment || img.title}
                            ratio="4by3"
                            className=""
                            isRounded={true}
                            roundedSize="16px"
                            priority={true}
                        />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default React.memo(RelatedPhotos)
