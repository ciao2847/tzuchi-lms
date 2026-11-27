import React, { useId, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import VideoCard from './VideoCard'
import EmptyState from 'components/EmptyState'
import Spinner from 'components/Spinner'

const SLIDER_BREAKPOINTS = {
    768: { slidesPerView: 3, spaceBetween: 24 },
    1200: { slidesPerView: 3, spaceBetween: 24 }
}

const FeaturedVideoSection = ({ videos, status }) => {
    const sectionId = useId()
    const swiperRef = useRef(null)
    const [navigation, setNavigation] = useState({
        isBeginning: true,
        isEnd: false
    })
    const { isBeginning, isEnd } = navigation

    const updateNavigation = ({ isBeginning, isEnd }) => {
        setNavigation({ isBeginning, isEnd })
    }

    const changeSlide = (direction) => {
        const { current } = swiperRef
        if (direction === 'previous') {
            current?.slidePrev()
        } else {
            current?.slideNext()
        }
    }

    return (
        <section
            className="bg-light px-4 py-10 md:px-6 md:py-20 xl:px-10 xl:py-32"
            aria-labelledby={`${sectionId}-title`}
        >
            <div className="mx-auto w-full xl:max-w-[1200px] 2xl:max-w-[1400px]">
                <h2
                    id={`${sectionId}-title`}
                    className="mb-6 text-center text-[24px] font-bold text-primary md:mb-8 md:text-[28px] xl:text-[36px]"
                >
                    精選影片
                </h2>
                {status === 'loading' ? <Spinner block /> : status === 'error' || !videos.length ? <EmptyState /> : <div className="relative">
                    <Swiper
                        id={`${sectionId}-slider`}
                        className="!-m-2 !p-2"
                        wrapperTag="ul"
                        slidesPerView={1}
                        spaceBetween={16}
                        breakpoints={SLIDER_BREAKPOINTS}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper
                            updateNavigation(swiper)
                        }}
                        onSlideChange={updateNavigation}
                        onResize={updateNavigation}
                        onBreakpoint={updateNavigation}
                        aria-label="精選影片列表"
                    >
                        {videos.map(({ id, ...video }) => (
                            <SwiperSlide key={id} tag="li" className="!h-auto">
                                <VideoCard video={video} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button
                        type="button"
                        aria-label="上一部精選影片"
                        aria-controls={`${sectionId}-slider`}
                        disabled={isBeginning}
                        onClick={() => changeSlide('previous')}
                        className="carousel-arrow absolute left-0 top-[calc(50%-18px)] z-[1] flex size-10 -translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200 text-[20px] text-primary transition-colors hover:bg-secondary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary disabled:cursor-default disabled:opacity-40 xl:-translate-x-1/2"
                    >
                        <i
                            className="icon icon-arrow-left"
                            aria-hidden="true"
                        />
                    </button>
                    <button
                        type="button"
                        aria-label="下一部精選影片"
                        aria-controls={`${sectionId}-slider`}
                        disabled={isEnd}
                        onClick={() => changeSlide('next')}
                        className="carousel-arrow absolute right-0 top-[calc(50%-18px)] z-[1] flex size-10 translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200 text-[20px] text-primary transition-colors hover:bg-secondary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary disabled:cursor-default disabled:opacity-40 xl:translate-x-1/2"
                    >
                        <i
                            className="icon icon-arrow-right"
                            aria-hidden="true"
                        />
                    </button>
                </div>}
            </div>
        </section>
    )
}

export default React.memo(FeaturedVideoSection)
