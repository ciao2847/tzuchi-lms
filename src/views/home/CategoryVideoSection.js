import React, { useId, useRef, useState } from 'react'
import VideoCard from './VideoCard'

// 示範資料：每個類別分別設定影片、日期與講師。
const CATEGORY_VIDEO_CONFIG = [
    {
        id: 'academic',
        title: '學術演講',
        videos: [
            {
                id: 'academic-1',
                title: '人力短缺下的團隊合作',
                image: `${process.env.BASE_PATH}/images/index/video-lecture-placeholder.svg`,
                date: '2026-08-11',
                lecturer: '藍陳清',
                link: '#'
            },
            {
                id: 'academic-2',
                title: '醫療事故之刑事責任分析',
                image: `${process.env.BASE_PATH}/images/index/video-lecture-placeholder.svg`,
                date: '2026-08-11',
                lecturer: '藍陳清',
                link: '#'
            },
            {
                id: 'academic-3',
                title: '病人安全與照護實務',
                image: `${process.env.BASE_PATH}/images/index/video-lecture-placeholder.svg`,
                date: '2026-08-11',
                lecturer: '藍陳清',
                link: '#'
            },
            {
                id: 'academic-4',
                title: '臨床教學與專業交流',
                image: `${process.env.BASE_PATH}/images/index/video-lecture-placeholder.svg`,
                date: '2026-08-11',
                lecturer: '藍陳清',
                link: '#'
            }
        ]
    },
    {
        id: 'one-minute',
        title: '一分鐘知識',
        videos: [
            {
                id: 'one-minute-1',
                title: '用藥安全一分鐘',
                image: `${process.env.BASE_PATH}/images/index/video-medicine-placeholder.svg`,
                date: '2026-08-12',
                lecturer: '衛教團隊',
                link: '#'
            },
            {
                id: 'one-minute-2',
                title: '關節保健小知識',
                image: `${process.env.BASE_PATH}/images/index/video-knee-placeholder.svg`,
                date: '2026-08-12',
                lecturer: '衛教團隊',
                link: '#'
            },
            {
                id: 'one-minute-3',
                title: '病人安全小提醒',
                image: `${process.env.BASE_PATH}/images/index/video-lecture-placeholder.svg`,
                date: '2026-08-12',
                lecturer: '衛教團隊',
                link: '#'
            },
            {
                id: 'one-minute-4',
                title: '兒童糖漿配製教學',
                image: `${process.env.BASE_PATH}/images/index/video-medicine-placeholder.svg`,
                date: '2026-08-12',
                lecturer: '衛教團隊',
                link: '#'
            }
        ]
    }
]

const CategoryVideoSection = ({ categories = CATEGORY_VIDEO_CONFIG }) => {
    const sectionId = useId()
    const tabRefs = useRef([])
    const [firstCategory = {}] = categories
    const { id: firstCategoryId } = firstCategory
    const { length: categoryCount } = categories
    const [activeId, setActiveId] = useState(firstCategoryId)
    const { id: selectedId, videos = [] } =
        categories.find(({ id }) => id === activeId) || firstCategory

    const handleTabKeyDown = (event, index) => {
        const { key } = event
        let nextIndex
        if (key === 'ArrowRight') {
            nextIndex = (index + 1) % categoryCount
        } else if (key === 'ArrowLeft') {
            nextIndex = (index - 1 + categoryCount) % categoryCount
        } else if (key === 'Home') {
            nextIndex = 0
        } else if (key === 'End') {
            nextIndex = categoryCount - 1
        } else {
            return
        }
        event.preventDefault()
        const { id } = categories[nextIndex]
        const { current } = tabRefs
        setActiveId(id)
        current[nextIndex]?.focus()
    }

    return (
        <section
            className="bg-[#e4f1f3] px-4 py-10 md:px-6 md:py-20 xl:px-10 xl:py-28"
            aria-label="類別影片"
        >
            <div className="mx-auto w-full max-w-[1120px]">
                <ul
                    role="tablist"
                    aria-label="影片類別"
                    className="relative z-[1] -mb-px flex gap-3 pl-4 md:pl-6"
                >
                    {categories.map(({ id, title }, index) => (
                        <li key={id} role="presentation">
                            <button
                                id={`${sectionId}-tab-${id}`}
                                type="button"
                                role="tab"
                                aria-selected={selectedId === id}
                                aria-controls={`${sectionId}-panel`}
                                tabIndex={selectedId === id ? 0 : -1}
                                ref={(node) => {
                                    const { current } = tabRefs
                                    current[index] = node
                                }}
                                onClick={() => setActiveId(id)}
                                onKeyDown={(event) =>
                                    handleTabKeyDown(event, index)
                                }
                                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-t-[8px] border border-solid bg-white px-4 py-3 text-[16px] font-bold leading-6 transition-colors hover:text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary md:px-6 md:text-[18px] ${
                                    selectedId === id
                                        ? 'border-gray-200 border-b-white text-main'
                                        : 'border-gray-200 text-primary'
                                }`}
                            >
                                <span
                                    className="h-2.5 w-2.5 shrink-0 rounded-full bg-current"
                                    aria-hidden="true"
                                />
                                {title}
                            </button>
                        </li>
                    ))}
                </ul>
                <div
                    id={`${sectionId}-panel`}
                    role="tabpanel"
                    aria-labelledby={`${sectionId}-tab-${selectedId}`}
                    tabIndex={0}
                    className="overflow-hidden rounded-[8px] border border-solid border-gray-200 bg-white py-4 pl-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary md:py-6 md:pl-6 xl:py-10 xl:px-6"
                >
                    <ul
                        key={selectedId}
                        className="-my-2 -ml-2 flex snap-x snap-mandatory scroll-p-2 gap-4 overflow-x-auto overscroll-x-contain p-2 md:-mr-2 md:gap-6 xl:grid xl:grid-cols-4 xl:snap-none xl:overflow-visible"
                    >
                        {videos.map(({ id, ...video }) => (
                            <li
                                key={id}
                                className="w-[160px] min-w-0 max-w-full shrink-0 snap-start md:w-[260px] xl:w-auto"
                            >
                                <VideoCard
                                    video={video}
                                    showDetails
                                    thumbnailClassName="!h-[100px] !pb-0 md:!h-0 md:!pb-[56.25%]"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default React.memo(CategoryVideoSection)
