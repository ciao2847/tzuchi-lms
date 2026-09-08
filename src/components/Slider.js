import React, { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import useMedia from 'hooks/useMedia'
import 'swiper/css/bundle'
SwiperCore.use([Navigation, Pagination])

const Slider = ({
    children,
    className,
    onSlideChange,
    pagination = true,
    slidesPerView = 1,
    spaceBetween = 0
}) => {
    const isMobileLayout = useMedia('(max-width: 767.9px)')

    return (
        <Swiper
            className={className}
            pagination={pagination}
            navigation={!isMobileLayout}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            onSlideChange={(e) => onSlideChange && onSlideChange(e)}
        >
            {children.map((child, i) => (
                <SwiperSlide key={i}>{child}</SwiperSlide>
            ))}
        </Swiper>
    )
}
export default React.memo(Slider)
