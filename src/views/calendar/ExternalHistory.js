import AutoSwitchLink from 'components/AutoSwitchLink'
import React from 'react'
import { getExternalHistory } from 'api/externalHistory'
import AnnualLearningHistory from './AnnualLearningHistory'

export const displayDate = value => !value || String(value).startsWith('1970') ? '—' : String(value)
const actionClass = 'mt-1 block text-secondary underline underline-offset-2 transition-colors hover:text-main focus-visible:text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary'
const Status = ({ value }) => <span className={`inline-flex rounded-full px-2 py-0.5 text-[12px] font-bold ${value === '通過' || value === '完成' ? 'bg-[#e7f5df] text-[#329500]' : 'bg-[#f0f2f5] text-[#556273]'}`}>{value || '—'}</span>

const FeedbackDetails = ({ feedback, course }) => <>
    <button type="button" className={actionClass} aria-label={`檢視滿意度：${course}`} onClick={event => event.currentTarget.nextElementSibling.showModal()}>檢視</button>
    <dialog aria-label={`滿意度檢視：${course}`} className="m-auto max-h-[85vh] w-[min(92vw,560px)] overflow-auto rounded-[10px] bg-white p-5 text-primary shadow-xl backdrop:bg-black/40">
        <h3 className="mb-2 text-[18px] font-bold">滿意度檢視</h3>
        <p className="mb-4 break-words">{course}</p>
        <table className="w-full border-collapse text-left text-[14px]">
            <thead><tr className="bg-slate-100"><th scope="col" className="border border-solid border-[#ccc] p-2">題目</th><th scope="col" className="border border-solid border-[#ccc] p-2">滿意度</th></tr></thead>
            <tbody>{feedback.map((item, index) => <tr key={index}><th scope="row" className="break-words border border-solid border-[#ccc] p-2 font-normal">{index + 1}.{item.title || '—'}</th><td className="break-words border border-solid border-[#ccc] p-2">{item.feedbackText || '—'}</td></tr>)}</tbody>
        </table>
        <form method="dialog" className="mt-4 text-right"><button type="submit" className="rounded bg-secondary px-4 py-2 text-white">關閉</button></form>
    </dialog>
</>

const Progress = ({ value, title, course }) => {
    const { status, time, artical, feedbackInfo, grade } = value || {}
    const article = typeof artical === 'string' ? artical : ''
    const feedback = Array.isArray(feedbackInfo) ? feedbackInfo.filter(item => item && typeof item === 'object') : []
    const content = title === '滿意度' ? feedback.map(item => `${item.title || ''}：${item.feedbackText || '—'}`).join('\n') : article
    if (title === '滿意度' || title === '心得') {
        if (status !== '完成' || !content.trim()) return <span>{status || '—'}</span>
        return <div>
            <time className="block text-[12px] text-[#486785]">{displayDate(time)}</time>
            {title === '滿意度' ? <FeedbackDetails feedback={feedback} course={course} /> : <button type="button" className={actionClass} aria-label={`檢視${title}：${course}`} onClick={() => window.alert(`${course}\n${title}\n\n${content}`)}>檢視</button>}
        </div>
    }
    return <div>
        <span>{status || '—'}</span>
        {displayDate(time) !== '—' && <time className="mt-1 block text-[12px] text-[#486785]">{displayDate(time)}</time>}
        {title === '測驗' && status === '完成' && <span className="block">{grade ?? '—'} 分</span>}
    </div>
}

// The attachment schema is not defined by the API; only expose explicit HTTP(S) links.
export const attachmentUrl = file => {
    const value = typeof file === 'string' ? file : file?.url || file?.fileurl
    if (typeof value !== 'string' || !value.trim()) return null
    try {
        const url = new URL(value, `${window.location.origin}/`)
        return ['http:', 'https:'].includes(url.protocol) ? url.href : null
    } catch { return null }
}
const Attachments = ({ files }) => {
    const links = (Array.isArray(files) ? files : []).map(file => ({ file, url: attachmentUrl(file) })).filter(item => item.url)
    return links.length ? <div className="flex flex-wrap gap-2">{links.map(({ file, url }, index) => {
        const label = file?.filename || file?.name || `下載附件 ${index + 1}`
        return <AutoSwitchLink key={`${url}-${index}`} href={url} isLinkOut rel="noopener noreferrer" aria-label={`${label}（另開視窗）`} title={`${label}（另開視窗）`} className="inline-flex h-9 w-9 items-center justify-center rounded-full text-secondary transition-colors hover:bg-[#eaf3ff] hover:text-main focus-visible:text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary"><i className="icon icon-download text-[18px]" aria-hidden="true" /></AutoSwitchLink>
    })}</div> : '—'
}
const columns = [
    ['課程名稱', record => record.coursename], ['假別', record => record.pubCost || '—'],
    ['開始時間', record => displayDate(record.startTime)], ['結束時間', record => displayDate(record.endTime)],
    ['時數', record => record.cost ?? '—'], ['狀態', record => <Status value={record.status} />],
    ...[['上課', 'resource'], ['測驗', 'quiz'], ['滿意度', 'feedback'], ['心得', 'haslearned'], ['工作計畫', 'plan'], ['轉訓', 'transfer']].map(([title, key]) => [title, record => <Progress value={record[key]} title={title} course={record.coursename} />]),
    ['附件', record => <Attachments files={record.file} />]
]

export const ExternalHistoryResults = ({ data, viewMode }) => viewMode === 'list' ?
    <div role="region" aria-label="外訓紀錄列表，可左右捲動查看完整欄位" tabIndex={0} className="overflow-x-auto rounded-[10px] border border-solid border-[#dce5f0] bg-white text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary">
        <table className="w-full min-w-[1600px] border-collapse text-left text-[12px] leading-5 xl:text-[14px]">
            <caption className="sr-only">個人外訓紀錄</caption>
            <thead><tr className="bg-slate-100">{columns.map(([title]) => <th key={title} scope="col" className="whitespace-nowrap px-3 py-4 font-semibold">{title}</th>)}</tr></thead>
            <tbody>{data.map(record => <tr key={`${record.source}-${record.id}`} className="border-t border-solid border-[#e5ebf3] hover:bg-[#eaf3ff]">{columns.map(([title, render]) => <td key={title} className={`px-3 py-3 align-top ${title === '課程名稱' ? 'min-w-[220px] break-words font-semibold' : 'min-w-[90px]'}`}>{render(record)}</td>)}</tr>)}</tbody>
        </table>
    </div> :
    <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">{data.map(record => <li key={`${record.source}-${record.id}`} className="rounded-[10px] border border-solid border-[#dce5f0] bg-white p-4 text-primary">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2"><span className="rounded-full bg-[#eaf3ff] px-2 py-1 text-[12px] text-secondary">{record.pubCost || '外訓'}</span><Status value={record.status} /></div>
        <h3 className="mb-3 break-words text-[15px] font-bold">{record.coursename}</h3>
        <dl className="space-y-2 text-[12px] leading-5">{columns.slice(2).filter(([title]) => title !== '狀態').map(([title, render]) => <div key={title} className="grid grid-cols-[64px_1fr] gap-2"><dt className="text-[#486785]">{title}</dt><dd className="min-w-0 break-words">{render(record)}</dd></div>)}</dl>
    </li>)}</ul>

const ExternalHistory = () => <AnnualLearningHistory fetchHistory={getExternalHistory} label="外訓紀錄" resultsComponent={ExternalHistoryResults} />
export default ExternalHistory
