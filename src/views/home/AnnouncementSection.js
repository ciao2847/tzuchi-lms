import React, { useEffect, useState } from 'react'
import Spinner from 'components/Spinner'
import AutoSwitchLink from 'components/AutoSwitchLink'
import ThumbFrame from 'components/ThumbFrame'

const ANNOUNCEMENT_CONFIG = [
    {
        id: 'general-course',
        category: '系統公告',
        title: '115年全院通識課程\n學分認列開始申請',
        description:
            '即日起至 2026/06/30 止，請同仁至學習平台完成通識課程學分認列申請，逾期將不受理。',
        image: `${process.env.BASE_PATH}/images/global/banner-01.png`,
        link: 'http://10.2.10.236:8064/tzuchi/',
        isLinkOut: true
    },
    {
        id: 'learning-guide',
        category: '學習服務',
        title: '學習平台使用說明\n常見問題與操作指引',
        description:
            '登入、課程操作與學習紀錄相關問題，請參考學習平台常見問題。',
        image: `${process.env.BASE_PATH}/images/global/banner-02.png`,
        link: 'https://cms.tzuchi.com.tw/dl/2024/elearning_qa/index.html',
        isLinkOut: true
    }
]

const AnnouncementSection = ({
    announcements = ANNOUNCEMENT_CONFIG,
    onSelect,
    loading = false,
    statusContent = null,
    className = ''
}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const currentIndex = activeIndex < announcements.length ? activeIndex : 0
    const { image } = announcements[currentIndex] || {}
    const { length: announcementCount } = announcements
    const Action = onSelect ? 'button' : AutoSwitchLink
    const showNavigation = !loading && !statusContent && announcementCount > 1

    useEffect(() => {
        if (!showNavigation) return undefined
        const timer = window.setInterval(() => {
            setActiveIndex(current => (current + 1) % announcementCount)
        }, 5000)
        return () => window.clearInterval(timer)
    }, [showNavigation, announcementCount])

    const changeAnnouncement = (direction) => {
        setActiveIndex(
            (current) =>
                (current + direction + announcementCount) % announcementCount
        )
    }

    return (
        <div
            className={`relative min-w-0 ${className}`}
            role="region"
            aria-label="公告"
            aria-busy={loading}
        >
            <article className="relative h-full overflow-hidden rounded-[20px] border border-solid border-gray-200 bg-[#e7effb] shadow-sm">
                {!loading && !statusContent && image && <ThumbFrame
                    src={image}
                    alt=""
                    ratio="16by9"
                    lazy={false}
                    className="!absolute inset-0 !h-full w-full !pb-0"
                />}
                <div className="announcement-backdrop absolute inset-0 bg-gradient-to-r from-[#e7effb] via-[#e7effb]/90 to-transparent" />
                <div className={`relative z-[1] flex min-h-[320px] flex-col items-start justify-center px-8 pt-12 lg:h-full lg:min-h-0 lg:px-10 ${showNavigation ? 'pb-0 md:pb-12' : 'pb-12'}`}>
                    {loading ? <Spinner block className="h-[224px] w-full" /> : statusContent || (!announcementCount ? <p role="status" className="text-primary">暫無資料</p> : <div
                        className="grid w-full sm:max-w-[65%]"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        {announcements.map((announcement, index) => {
                            const { id, category, title, description, link, isLinkOut } = announcement
                            const isActive = index === currentIndex

                            return (
                                <div
                                    key={id}
                                    className={`col-start-1 row-start-1 min-w-0 self-center ${isActive ? '' : 'invisible md:hidden'}`}
                                    aria-hidden={!isActive}
                                >
                                    <span className="mb-5 inline-block rounded-full bg-secondary/15 px-3 py-1 text-[12px] font-bold leading-4 text-primary">
                                        {category}
                                    </span>
                                    <h2 className="announcement-title mb-4 line-clamp-2 whitespace-pre-line text-[24px] font-bold leading-snug text-primary md:text-[28px]">
                                        {title}
                                    </h2>
                                    <p className="announcement-description mb-6 line-clamp-3 text-[14px] leading-6 text-primary md:line-clamp-2">
                                        {description}
                                    </p>
                                    <Action
                                        {...(onSelect ? { type: 'button', onClick: () => onSelect(announcement) } : { href: link, isLinkOut })}
                                        className="inline-flex items-center gap-3 rounded-full border border-solid border-secondary px-4 py-2 text-[14px] font-bold leading-5 text-secondary transition-colors hover:bg-secondary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
                                    >
                                        查看詳細內容
                                        <i
                                            className="icon icon-arrow-right text-[16px] leading-6"
                                            aria-hidden="true"
                                        />
                                    </Action>
                                </div>
                            )
                        })}
                    </div>)}
                </div>
                {showNavigation && (
                    <div className="relative z-[1] mb-5 mt-4 flex justify-center gap-2 md:absolute md:inset-x-0 md:bottom-5 md:m-0">
                        {announcements.map(({ id }, index) => (
                            <button
                                key={id}
                                type="button"
                                aria-label={`切換至第 ${index + 1} 則公告`}
                                aria-current={
                                    currentIndex === index ? 'true' : undefined
                                }
                                onClick={() => setActiveIndex(index)}
                                className="flex h-6 w-8 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"
                            >
                                <span
                                    className={`h-2 w-6 rounded-full transition-colors ${
                                        currentIndex === index
                                            ? 'bg-main'
                                            : 'bg-secondary/50'
                                    }`}
                                    aria-hidden="true"
                                />
                            </button>
                        ))}
                    </div>
                )}
            </article>
            {showNavigation && (
                <>
                    <button
                        type="button"
                        aria-label="上一則公告"
                        onClick={() => changeAnnouncement(-1)}
                        className="carousel-arrow absolute left-0 top-1/2 z-[2] flex size-10 -translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200 text-primary transition-colors hover:bg-secondary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary xl:-translate-x-1/2"
                    >
                        <i
                            className="icon icon-arrow-left"
                            aria-hidden="true"
                        />
                    </button>
                    <button
                        type="button"
                        aria-label="下一則公告"
                        onClick={() => changeAnnouncement(1)}
                        className="carousel-arrow absolute right-0 top-1/2 z-[2] flex size-10 translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200 text-primary transition-colors hover:bg-secondary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary xl:translate-x-1/2"
                    >
                        <i
                            className="icon icon-arrow-right"
                            aria-hidden="true"
                        />
                    </button>
                </>
            )}
        </div>
    )
}

export default React.memo(AnnouncementSection)
