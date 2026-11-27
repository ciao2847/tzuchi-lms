import AutoSwitchLink from 'components/AutoSwitchLink'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import I18N from 'components/I18N'
import TitleBlk from 'components/TitleBlk'
import { cancelCourseRegistration, getCourseInfo } from 'api/courseInfo'
import { LoginContext } from 'contexts/LoginProvider'
import Spinner from 'components/Spinner'
import DashboardStatus from 'components/DashboardStatus'
import CourseHtml from 'components/CourseHtml'
import { CourseRegistrationDialog } from 'views/course-registration'

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

const RegisterButton = ({ className = '', href, label, onClick, registered }) => {
    const buttonClass = `${className} inline-flex h-11 w-full items-center justify-center rounded-[6px] px-6 text-[14px] font-bold md:h-12 md:text-[15px] xl:text-[17px] ${registered ? 'cursor-not-allowed bg-gray-200 text-gray-500' : 'bg-main text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'}`

    return href ? (
        <AutoSwitchLink
            href={href}
            isLinkOut
            rel="noopener noreferrer"
            className={buttonClass}
            aria-label={`${label}（另開視窗）`}
        >
            <I18N>{label}</I18N>
        </AutoSwitchLink>
    ) : (
        <button type="button" disabled={!onClick} onClick={onClick} className={buttonClass}>
            <I18N>{label}</I18N>
        </button>
    )
}

const RegistrationSummary = ({ family, suit, className }) => (
    <>
        {family && <p className={className}>{family}</p>}
        {suit && <p className={className}>{suit}</p>}
    </>
)

export const RegistrationDetail = ({ course, userkey, confirmedRegistration, onRegistered, onCancelled, onSessionExpired }) => {
    const fixedRegisterBarRef = useRef(null)
    const cancellationRef = useRef(null)
    const [registrationOpen, setRegistrationOpen] = useState(false)
    const [cancelling, setCancelling] = useState(false)
    useEffect(() => () => cancellationRef.current?.abort(), [course.id, userkey])
    const {
        moodle_courseid: moodleCourseId, coursename: title, category, program, teacher, student, length,
        startdate, starthh, startmm, enddate, endhh, endmm, classroom,
        completion, contacter, signUpCheck, registerdate, outline, introduction, purpose, ps,
        year, type, limit
    } = course
    const attribute = Object.values(category || {}).filter(item => typeof item === 'string')
    const programs = Array.isArray(program) ? program : []
    const teachers = Array.isArray(teacher) ? teacher : []
    const audiences = Array.isArray(student) ? student : []
    const duration = length != null ? `${length} 分鐘` : '—'
    const time = (date, hh, mm) => date ? `${date}${hh != null && mm != null ? ` ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}` : ''}` : '—'
    const date = `${time(startdate, starthh, startmm)} ～ ${time(enddate, endhh, endmm)}`
    const location = String(classroom ?? '').trim() || '—'
    const rule = Array.isArray(completion) ? completion.join('、') || '—' : '—'
    const contact = contacter || '—'
    const check = signUpCheck || {}
    const registered = confirmedRegistration || check.typeMes?.registered === true
    const canCancel = Boolean(onCancelled) && String(type) === '2' && registered
    const showRegistered = registered && check.enterCourse !== true
    const familySummary = registered && typeof check.typeMes?.familyString === 'string'
        ? check.typeMes.familyString.trim()
        : ''
    const suitSummary = registered && typeof check.typeMes?.suitString === 'string'
        ? check.typeMes.suitString.replace(/<br\s*\/?>/gi, '\n').replace(/&nbsp;/gi, '\u00a0').trim()
        : ''
    const canRegister = check.enterCourse === true || check.canRegister === true || showRegistered
    const actionLabel = check.enterCourse === true ? '進入課程' : showRegistered ? '您已報名' : '我要報名'
    const moodleUrl = typeof check.typeMes?.moodleUrl === 'string' ? check.typeMes.moodleUrl.trim() : ''
    const courseId = String(moodleCourseId ?? '').trim()
    const registerUrl = check.enterCourse === true
        ? (/^[1-9][0-9]*$/.test(courseId) ? `http://10.2.10.236:8064/tzuchi/lms2/course/view.php?id=${courseId}` : null)
        : check.canRegister === true && /^https?:\/\//i.test(moodleUrl) ? moodleUrl : null
    const registrationMessage = typeof check.message?.register === 'string' ? check.message.register : ''
    const registrationKind = !showRegistered && check.enterCourse !== true && check.canRegister === true
        ? check.setFamily === true && check.setSuit === true ? 'both'
            : check.setFamily === true ? 'dependents'
            : check.setSuit === true ? 'uniform'
            : String(type) === '2' ? 'standard' : null
        : null
    const registerAction = showRegistered ? { registered: true } : registrationKind
        ? { onClick: () => setRegistrationOpen(true) }
        : { href: registerUrl }
    const cancelRegistration = async () => {
        if (cancellationRef.current || !window.confirm('確定要取消報名嗎？取消後，眷屬報名與制服申請資料也會一併刪除。')) return
        const controller = new AbortController()
        cancellationRef.current = controller
        setCancelling(true)
        try {
            const { message } = await cancelCourseRegistration(course.id, controller.signal, userkey)
            if (controller.signal.aborted) return
            window.alert(message)
            onCancelled()
        } catch (error) {
            if (controller.signal.aborted) return
            if (error.status === 401) onSessionExpired?.()
            window.alert(error instanceof TypeError ? '無法連線至報名服務，請重新查看課程報名狀態。' : error.message)
        } finally {
            cancellationRef.current = null
            if (!controller.signal.aborted) setCancelling(false)
        }
    }
    const cancelButton = className => canCancel && (
        <button type="button" disabled={cancelling} aria-busy={cancelling} aria-label={cancelling ? '取消報名處理中' : undefined} onClick={cancelRegistration}
            className={`${className} h-11 rounded-[6px] bg-[#e6f5ef] text-[14px] font-bold text-[#247a56] transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success disabled:opacity-60 md:h-12 md:text-[15px]`}>
            {cancelling ? <Spinner color="#247a56" /> : '取消報名'}
        </button>
    )

    useEffect(() => {
        if (!canRegister) return undefined

        let animationFrameId
        const registerBar = fixedRegisterBarRef.current
        const resizeObserver = new ResizeObserver(() => {
            const height = registerBar.offsetHeight
            if (height > 0) registerBar.parentElement.style.setProperty('--register-bar-height', `${height}px`)
        })
        resizeObserver.observe(registerBar)

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
            resizeObserver.disconnect()
            window.cancelAnimationFrame(animationFrameId)
            window.removeEventListener('scroll', updateFooterOffset)
            window.removeEventListener('resize', updateFooterOffset)
        }
    }, [canRegister])

    return (
        <div
            className={`min-h-[calc(100dvh-48px)] bg-light pt-[var(--header-height)] ${
                canRegister ? 'pb-[var(--register-bar-height,76px)] xl:pb-0' : ''
            }`}
        >
            <TitleBlk
                title="報名選課"
                icon="doc"
                breadcrumbs={[
                    { title: '快速選課', url: '/course' },
                    { title: '報名選課' }
                ]}
            />
            <section className="mx-auto w-full px-4 py-4 md:px-6 md:py-5 xl:max-w-[1200px] xl:px-8 xl:py-10 2xl:px-0 2xl:max-w-[1400px]">
                <div className="xl:grid xl:grid-cols-[minmax(0,2fr)_360px] xl:items-start xl:gap-8">
                    <div className="min-w-0">
                        <div>
                            <span className="inline-flex h-6 items-center rounded-full bg-[#e8f2ff] px-3 text-[11px] font-bold text-secondary md:text-[12px] xl:h-7 xl:text-[14px]">
                                <I18N>
                                    {[year != null ? `${year}年度` : '', String(type) === '1' ? '數位課程' : '實體課程'].filter(Boolean).join('–')}
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

                            <DetailBlock title="認列學程">
                                <div className="space-y-1 text-[11px] font-medium leading-5 text-primary md:text-[12px] md:leading-6 xl:text-[14px] xl:leading-7">
                                    {programs.length ? (
                                        programs.map((program) => (
                                            <p key={`${program.id}-${program.name}`}>{program.program} / {program.name}：{program.credit ?? '—'} 學分</p>
                                        ))
                                    ) : (
                                        <p>—</p>
                                    )}
                                </div>
                            </DetailBlock>

                            <DetailBlock title="講師">
                                <div className="space-y-3">{teachers.length ? teachers.map((teacher, index) => (
                                <div key={`${teacher.id}-${index}`} className="flex items-center gap-3">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#78aada] to-[#477db8] text-[20px] font-bold text-white">
                                        {(teacher.name || '—').slice(0, 1)}
                                    </span>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-[14px] font-bold leading-5 text-primary md:text-[15px] xl:text-[17px] xl:leading-6">
                                            {teacher.name || '—'}
                                        </p>
                                        {[teacher.company, teacher.jobname].filter(Boolean).join(' / ') && (
                                            <p className="mt-0.5 text-[10px] leading-4 text-[#60748c] md:text-[11px] xl:text-[13px] xl:leading-5">
                                                {[teacher.company, teacher.jobname].filter(Boolean).join(' / ')}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                )) : <p>—</p>}</div>
                            </DetailBlock>

                            <DetailBlock title="課程大綱"><CourseHtml title="課程大綱" html={outline} /></DetailBlock>
                            <DetailBlock title="課程簡介"><CourseHtml title="課程簡介" html={introduction} /></DetailBlock>
                            <DetailBlock title="課程目的"><CourseHtml title="課程目的" html={purpose} /></DetailBlock>
                            {ps && <DetailBlock title="備註"><CourseHtml title="備註" html={ps} /></DetailBlock>}

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
                            <CourseInfoItem icon="calendar" title="報名截止日">
                                {registerdate || '—'}
                            </CourseInfoItem>
                            {check.typeMes && <CourseInfoItem icon="doc" title="報名人數">
                                {check.typeMes.currentRegistrations ?? '—'} / {check.typeMes.maxRegistrations ?? limit ?? '—'}
                                {registered && '（已報名）'}
                                {check.typeMes.waiting === true && '（候補）'}
                            </CourseInfoItem>}
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

                        {(familySummary || suitSummary) && (
                            <div className="space-y-2 rounded-[8px] border border-solid border-[#dfe7f1] bg-white p-4 [box-shadow:0_2px_9px_rgba(9,58,123,0.04)] xl:hidden">
                                <RegistrationSummary family={familySummary} suit={suitSummary}
                                    className="whitespace-pre-wrap break-words text-[13px] not-italic text-[#486785]" />
                            </div>
                        )}
                        {registrationMessage && <p role="status" className="text-[14px] text-primary">{registrationMessage}</p>}
                        {canRegister ? (
                            <div className="hidden xl:block">
                                <RegisterButton {...registerAction} label={actionLabel} />
                                {cancelButton('mt-2 w-full')}
                                <RegistrationSummary family={familySummary} suit={suitSummary}
                                    className="mt-2 whitespace-pre-wrap break-words text-[14px] not-italic text-[#486785]" />
                            </div>
                        ) :
                            <button type="button" disabled className="h-11 w-full rounded-[6px] bg-gray-200 text-[14px] text-gray-500">{registrationMessage || '目前不開放報名或進入課程'}</button>}

                    </aside>


                </div>
            </section>

            {canRegister && (
                <div
                    ref={fixedRegisterBarRef}
                    className="fixed inset-x-0 bottom-0 z-40 border-t border-solid border-[#e0e8f1] bg-white/95 px-3 pb-[calc(env(safe-area-inset-bottom)+8px)] pt-2 backdrop-blur xl:hidden"
                >
                    {canCancel && showRegistered ? (
                        <div className="grid w-full grid-cols-2 items-center gap-3">
                            <span className="text-center text-[14px] font-bold text-primary md:text-[15px]"><I18N>您已報名</I18N></span>
                            {cancelButton('w-full px-2')}
                        </div>
                    ) : (
                        <>
                            <RegisterButton {...registerAction} label={actionLabel} />
                            {cancelButton('mt-2 w-full')}
                        </>
                    )}
                </div>
            )}
            {registrationOpen && registrationKind && (
                <CourseRegistrationDialog kind={registrationKind} courseId={course.id} userkey={userkey} onSessionExpired={onSessionExpired}
                    onClose={registered => {
                        setRegistrationOpen(false)
                        if (registered) onRegistered?.()
                    }} />
            )}
        </div>
    )
}

const Page = () => {
    const { id } = useParams()
    const { isLogin, user, expireSession } = useContext(LoginContext)
    const [result, setResult] = useState({ status: 'loading' })
    const [confirmation, setConfirmation] = useState(null)
    useEffect(() => {
        if (!isLogin) return undefined
        const controller = new AbortController()
        setResult({ status: 'loading', id, owner: user.id })
        getCourseInfo(id, controller.signal, user.userkey).then(course => {
            if (!controller.signal.aborted) setResult({ status: 'success', course, id, owner: user.id })
        }).catch(error => {
            if (controller.signal.aborted) return
            if (error.status === 401) expireSession()
            setResult({ status: 'error', id, owner: user.id })
        })
        return () => controller.abort()
    }, [id, isLogin, user.id, user.userkey, expireSession])
    if (!isLogin) return <div className="pt-[var(--header-height)]"><DashboardStatus /></div>
    if (result.id !== id || result.owner !== user.id || result.status === 'loading') return <div className="flex flex-1 items-center justify-center pt-[var(--header-height)]"><Spinner block /></div>
    if (result.status === 'error') return <div role="status" className="min-h-[50vh] px-4 pt-[calc(var(--header-height)+24px)] text-primary"><p>暫無資料</p></div>
    return <RegistrationDetail key={id} course={result.course} userkey={user.userkey} onSessionExpired={expireSession}
        confirmedRegistration={confirmation?.id === id && confirmation?.owner === user.id}
        onCancelled={() => {
            setConfirmation(null)
            setRevision(value => value + 1)
        }}
        onRegistered={() => {
            setConfirmation({ id, owner: user.id })
            setRevision(value => value + 1)
        }} />
}

export default React.memo(Page)
