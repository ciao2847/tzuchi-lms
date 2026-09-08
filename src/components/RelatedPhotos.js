import React, { useContext } from 'react'
import { translate } from 'components/I18N'
import ThumbFrame from 'components/ThumbFrame'
import { useLocale } from 'hooks'
import { PhotoSwipeContext } from 'contexts/PhotoSwipeProvider'

const RelatedPhotos = ({ data, className }) => {
    const { setPhotoSwipeData } = useContext(PhotoSwipeContext)
    const lang = useLocale()
    return (
        <ul className={`row g-1 ${className}`}>
            {data.map((img, i) => (
                <li className="col-6 col-md-4 col-xl-1of5" key={i}>
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
