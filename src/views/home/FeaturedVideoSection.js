import React, { useId, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import VideoCard from './VideoCard'

// 示範資料：正式影片的縮圖與連結可在這裡替換。
const FEATURED_VIDEO_CONFIG = [
    {
        id: 'knee-treatment',
        title: '退化性關節炎放射抗發炎治療',
        image: `${process.env.BASE_PATH}/images/index/video-knee-placeholder.svg`,
        link: '#'
    },
    {
        id: 'medicine-guide',
        title: '兒童糖漿配製教學｜日舒懸液',
        image: `${process.env.BASE_PATH}/images/index/video-medicine-placeholder.svg`,
        link: '#'
    },
    {
        id: 'medicine-safety',
        title: '用藥安全與衛教指引',
        image: `${process.env.BASE_PATH}/images/index/video-medicine-placeholder.svg`,
        link: '#'
    },
    {
        id: 'medical-law',
        title: '醫療事故之刑事責任分析',
        image: `${process.env.BASE_PATH}/images/index/video-lecture-placeholder.svg`,
        link: '#'
    },
    {
        id: 'patient-safety',
        title: '病人安全與照護實務',
        image: `${process.env.BASE_PATH}/images/index/video-lecture-placeholder.svg`,
        link: '#'
    },
    {
        id: 'joint-health',
        title: '關節保健與健康促進',
        image: `${process.env.BASE_PATH}/images/index/video-knee-placeholder.svg`,
        link: '#'
    }
]

const SLIDER_BREAKPOINTS = {
    768: { slidesPerView: 3, spaceBetween: 24 },
    1200: { slidesPerView: 3, spaceBetween: 24 }
}

const FeaturedVideoSection = ({ videos = FEATURED_VIDEO_CONFIG }) => {
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
                <div className="relative">
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
                        className="absolute left-0 top-[calc(50%-18px)] z-[1] flex h-10 w-10 -translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200 text-[20px] text-primary transition-colors hover:bg-secondary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary disabled:cursor-default disabled:opacity-40 xl:-translate-x-1/2"
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
                        className="absolute right-0 top-[calc(50%-18px)] z-[1] flex h-10 w-10 translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200 text-[20px] text-primary transition-colors hover:bg-secondary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary disabled:cursor-default disabled:opacity-40 xl:translate-x-1/2"
                    >
                        <i
                            className="icon icon-arrow-right"
                            aria-hidden="true"
                        />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default React.memo(FeaturedVideoSection)
