import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import I18N from 'components/I18N'
import TitleBlk from 'components/TitleBlk'
import { getCalendarCourseById } from 'constants/learningCalendar'

const COURSE_DETAIL = {
    title: '護理部_PI/NOR_專科主題課程_嬰兒足底採血情境式模擬演練_1150807-8',
    attribute: ['護理', '課程規則', '單位專科主題'],
    programs: [
        '核心課程階段_第1年基層護理人員臨床專業能力訓練–常見疾病、檢查與治療之護理，一般疼痛評估及護理：1學分',
        '專業課程階段_第2年基層護理人員臨床專業能力訓練–自我成長(1)、教與學：1學分'
    ],
    lecturer: {
        name: '賴佳穗',
        unit: '大林慈濟護理部小兒加護病房–護理長'
    },
    outline: '嬰兒足底採血情境式模擬演練',
    audiences: ['醫師', '護理'],
    duration: '共 60 分',
    date: '2026年08月07日 07點50分 ～ 08點50分',
    location: 'P討論室',
    rule: '本課程需完成【PTT】【滿意度】始得通過課程',
    contact: '課程負責人 / 1551'
}

const DetailBlock = ({ title, children, className = '' }) => (
    <section
        className={`${className} border-b border-solid border-[#e7edf5] py-3.5 md:py-4`}
    >
        <h2 className="mb-1.5 text-[12px] font-bold leading-5 text-secondary md:text-[13px] xl:text-[15px] xl:leading-6">
            <I18N>{title}</I18N>
        </h2>
        {children}
    </section>
)

const CourseInfoItem = ({ icon, title, children }) => (
    <div className="flex items-start gap-3">
        <i
            className={`icon icon-${icon} mt-0.5  text-[18px] text-secondary`}
            aria-hidden="true"
        />
        <div className="min-w-0">
            <h3 className="text-[12px] font-bold leading-5 text-secondary md:text-[13px] xl:text-[15px] xl:leading-6">
                <I18N>{title}</I18N>
            </h3>
            <div className="mt-0.5 break-words text-[12px] font-semibold leading-5 text-primary md:text-[13px] xl:text-[15px] xl:leading-6">
                {children}
            </div>
        </div>
    </div>
)

const RegisterButton = ({ className = '', href }) => {
    const buttonClass = `${className} inline-flex h-11 w-full items-center justify-center rounded-[6px] bg-main px-6 text-[14px] font-bold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:h-12 md:text-[15px] xl:text-[17px]`

    return href ? (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
        >
            <I18N>我要報名</I18N>
        </a>
    ) : (
        <button type="button" className={buttonClass}>
            <I18N>我要報名</I18N>
        </button>
    )
}

const RegistrationDetail = ({ course }) => {
    const fixedRegisterBarRef = useRef(null)
    const detail = course
        ? {
              title: course.title,
              attribute: [course.category],
              programs: [],
              lecturer: { name: '—', unit: '' },
              outline: '—',
              audiences: [],
              duration: '—',
              date: '—',
              location: '—',
              rule: '—',
              contact: '—'
          }
        : COURSE_DETAIL
    const {
        title,
        attribute,
        programs,
        lecturer: { name: lecturerName, unit: lecturerUnit },
        outline,
        audiences,
        duration,
        date,
        location,
        rule,
        contact
    } = detail
    const registerUrl = course?.status === '可選課' ? course.originalUrl : null
    const canRegister = !course || Boolean(registerUrl)

    useEffect(() => {
        if (!canRegister) return undefined

        let animationFrameId

        const updateFooterOffset = () => {
            window.cancelAnimationFrame(animationFrameId)
            animationFrameId = window.requestAnimationFrame(() => {
                const footer = document.querySelector('footer')
                const registerBar = fixedRegisterBarRef.current

                if (!footer || !registerBar) return

                const { height, top } = footer.getBoundingClientRect()
                const visibleFooterHeight = Math.min(
                    height,
                    Math.max(0, window.innerHeight - top)
                )

                registerBar.style.bottom = `${visibleFooterHeight}px`
            })
        }

        updateFooterOffset()
        window.addEventListener('scroll', updateFooterOffset, {
            passive: true
        })
        window.addEventListener('resize', updateFooterOffset)

        return () => {
            window.cancelAnimationFrame(animationFrameId)
            window.removeEventListener('scroll', updateFooterOffset)
            window.removeEventListener('resize', updateFooterOffset)
        }
    }, [canRegister])

    return (
        <div
            className={`min-h-[calc(100dvh-48px)] bg-light pt-[56px] xl:pt-[80px] ${
                canRegister ? 'pb-[76px] xl:pb-0' : ''
            }`}
        >
            <TitleBlk
                title="報名選課"
                icon="doc"
                breadcrumbs={[
                    { title: '快速選課', url: '/pick' },
                    { title: '報名選課' }
                ]}
            />
            <section className="mx-auto w-full px-4 py-4 md:px-6 md:py-5 xl:max-w-[1200px] xl:px-8 xl:py-10 2xl:px-0 2xl:max-w-[1400px]">
                <div className="xl:grid xl:grid-cols-[minmax(0,2fr)_360px] xl:items-start xl:gap-8">
                    <div className="min-w-0">
                        <div>
                            <span className="inline-flex h-6 items-center rounded-full bg-[#e8f2ff] px-3 text-[11px] font-bold text-secondary md:text-[12px] xl:h-7 xl:text-[14px]">
                                <I18N>
                                    {course?.status || '115年度–實體課程'}
                                </I18N>
                            </span>
                        </div>

                        <div className="mt-1">
                            <DetailBlock title="課程名稱">
                                <p className="break-words text-[12px] font-semibold leading-5 text-primary md:text-[13px] md:leading-6 xl:text-[15px] xl:leading-7">
                                    {title}
                                </p>
                            </DetailBlock>

                            <DetailBlock title="屬性">
                                <ol className="flex flex-wrap items-center gap-2 text-[11px] font-medium leading-5 text-primary md:text-[12px] xl:text-[14px] xl:leading-6">
                                    {attribute.map((item, index) => (
                                        <React.Fragment key={item}>
                                            <li>{item}</li>
                                            {index < attribute.length - 1 && (
                                                <li aria-hidden="true">
                                                    <i className="icon icon-arrow-right h-2.5 w-2.5 text-[8px] text-[#8da1b8]" />
                                                </li>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </ol>
                            </DetailBlock>

                            <DetailBlock title="學程探討">
                                <div className="space-y-1 text-[11px] font-medium leading-5 text-primary md:text-[12px] md:leading-6 xl:text-[14px] xl:leading-7">
                                    {programs.length ? (
                                        programs.map((program) => (
                                            <p key={program}>{program}</p>
                                        ))
                                    ) : (
                                        <p>—</p>
                                    )}
                                </div>
                            </DetailBlock>

                            <DetailBlock title="講師">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#78aada] to-[#477db8] text-[20px] font-bold text-white">
                                        {lecturerName.slice(0, 1)}
                                    </span>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-[14px] font-bold leading-5 text-primary md:text-[15px] xl:text-[17px] xl:leading-6">
                                            {lecturerName}
                                        </p>
                                        {lecturerUnit && (
                                            <p className="mt-0.5 text-[10px] leading-4 text-[#60748c] md:text-[11px] xl:text-[13px] xl:leading-5">
                                                {lecturerUnit}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </DetailBlock>

                            <DetailBlock title="課程大綱">
                                <p className="text-[11px] font-medium leading-5 text-primary md:text-[12px] xl:text-[14px] xl:leading-6">
                                    {outline}
                                </p>
                            </DetailBlock>

                            <DetailBlock
                                title="適用對象"
                                className="border-b-0"
                            >
                                <ul className="flex flex-wrap gap-2">
                                    {audiences.length ? (
                                        audiences.map((audience, index) => (
                                            <li
                                                key={audience}
                                                className={`inline-flex h-6 items-center rounded-full px-3 text-[11px] font-bold xl:h-7 xl:text-[13px] ${
                                                    index === 0
                                                        ? 'bg-[#e9f3ff] text-secondary'
                                                        : 'bg-[#e7f5f3] text-success'
                                                }`}
                                            >
                                                {audience}
                                            </li>
                                        ))
                                    ) : (
                                        <li>—</li>
                                    )}
                                </ul>
                            </DetailBlock>
                        </div>

                        <p className="mt-4 hidden text-center text-[13px] text-[#60748c] xl:block">
                            ※ <I18N>查無需要到課資料</I18N>
                        </p>
                    </div>

                    <aside
                        className="mt-3 space-y-3 xl:mt-0"
                        aria-label="課程報名資訊"
                    >
                        <section className="space-y-5 rounded-[8px] border border-solid border-[#dfe7f1] bg-white p-4 [box-shadow:0_2px_9px_rgba(9,58,123,0.04)] md:p-5">
                            <CourseInfoItem icon="time" title="課程總長">
                                {duration}
                            </CourseInfoItem>
                            <CourseInfoItem icon="calendar" title="上課日期">
                                {date}
                            </CourseInfoItem>
                            <CourseInfoItem icon="location" title="上課地點">
                                {location}
                            </CourseInfoItem>
                        </section>

                        <section className="rounded-[8px] border border-solid border-[#ffdfe4] bg-[#fff2f4] p-4 text-danger">
                            <h2 className="text-[12px] font-bold leading-5 md:text-[13px] xl:text-[15px] xl:leading-6">
                                <I18N>課程規範</I18N>
                            </h2>
                            <p className="mt-1 text-[11px] font-bold leading-5 md:text-[12px] xl:text-[14px] xl:leading-6">
                                {rule}
                            </p>
                        </section>

                        <section className="flex items-center gap-3 rounded-[8px] border border-solid border-[#dfe7f1] bg-white p-4 [box-shadow:0_2px_9px_rgba(9,58,123,0.04)]">
                            <div className="min-w-0 flex-1">
                                <h2 className="text-[12px] font-bold leading-5 text-secondary md:text-[13px] xl:text-[15px] xl:leading-6">
                                    <I18N>課程連絡人</I18N>
                                </h2>
                                <p className="mt-1 text-[12px] font-semibold leading-5 text-primary md:text-[13px] xl:text-[15px] xl:leading-6">
                                    {contact}
                                </p>
                            </div>
                        </section>

                        {canRegister ? (
                            <RegisterButton
                                className="hidden xl:inline-flex"
                                href={registerUrl}
                            />
                        ) : (
                            course?.originalUrl && (
                                <a
                                    href={course.originalUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex min-h-11 w-full items-center justify-center rounded-[6px] bg-main px-6 text-[14px] font-bold text-white hover:opacity-90 xl:min-h-12 xl:text-[15px]"
                                >
                                    進入原課程頁
                                </a>
                            )
                        )}
                    </aside>

                    <p className="mt-4 text-center text-[11px] text-[#60748c] xl:hidden">
                        ※ <I18N>查無需要到課資料</I18N>
                    </p>
                </div>
            </section>

            {canRegister && (
                <div
                    ref={fixedRegisterBarRef}
                    className="fixed inset-x-0 bottom-0 z-40 border-t border-solid border-[#e0e8f1] bg-white/95 px-3 pb-[calc(env(safe-area-inset-bottom)+8px)] pt-2 backdrop-blur xl:hidden"
                >
                    <RegisterButton href={registerUrl} />
                </div>
            )}
        </div>
    )
}

const Page = () => {
    const { id } = useParams()
    const calendarCourse = getCalendarCourseById(id)

    return <RegistrationDetail course={calendarCourse} />
}

export default React.memo(Page)
