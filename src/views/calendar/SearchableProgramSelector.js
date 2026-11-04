import React, { useId, useState } from 'react'
import RoundedSearchField from 'components/RoundedSearchField'
import Select from 'components/Select'
import KeywordSearchRow from 'components/KeywordSearchRow'
import useMedia from 'hooks/useMedia'

const buttonClass = selected => `flex h-10 w-full min-w-0 items-center justify-center gap-2 rounded-full border border-solid px-4 text-[13px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary xl:text-[14px] ${selected ? 'border-blue bg-[#eaf3ff] text-blue ring-2 ring-blue/15' : 'border-[#dce5f0] bg-white text-[#708399] hover:border-secondary hover:bg-[#f3f7fd]'}`

const SearchableProgramSelector = ({ programs, selectedProgram, onChange, status, searchWithButtons = false }) => {
    const searchId = useId()
    const isMobile = useMedia('(max-width: 767px)')
    const useMobileSearch = searchWithButtons && isMobile
    const [keyword, setKeyword] = useState('')
    const [submittedKeyword, setSubmittedKeyword] = useState('')
    const query = (searchWithButtons ? submittedKeyword : keyword).trim().toLocaleLowerCase()
    const matches = programs.filter(program => program.title.toLocaleLowerCase().includes(query))
    const more = matches.slice(2)
    const selectedMore = more.find(program => program.id === selectedProgram)
    return <div className="space-y-3 py-3 md:px-1">
        {useMobileSearch ? <Select
            aria-label="選擇學程"
            value={matches.some(program => program.id === selectedProgram) ? selectedProgram : ''}
            className="!h-[42px] !rounded-full !border-[#1769d2] !bg-[#edf3fc] !px-5 !text-[13px] !text-[#0755cf]"
            onChange={event => onChange(event.target.value)}
        >
            <option value="">請選擇學程</option>
            {matches.map(program => <option key={program.id} value={program.id}>{program.title}</option>)}
        </Select> : <div className="grid grid-cols-3 gap-2" role="group" aria-label="選擇學程">
            {matches.slice(0, 2).map(program => <button key={program.id} type="button" title={program.title}
                className={buttonClass(program.id === selectedProgram)} aria-pressed={program.id === selectedProgram}
                onClick={() => onChange(program.id)}><span className="truncate">{program.title}</span></button>)}
            <details className="relative col-start-3"
                onBlur={({ currentTarget, relatedTarget }) => { if (!currentTarget.contains(relatedTarget)) currentTarget.open = false }}
                onKeyDown={event => { if (event.key === 'Escape') { event.currentTarget.open = false; event.currentTarget.querySelector('summary')?.focus() } }}>
                <summary title={selectedMore?.title || '更多學程'} className={`${buttonClass(Boolean(selectedMore))} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>
                    <span className="truncate">{selectedMore ? `更多：${selectedMore.title}` : '更多'}</span>
                    <i className="icon icon-arrow-down shrink-0 text-[9px]" aria-hidden="true" />
                </summary>
                <div className="absolute right-0 top-full z-20 mt-2 max-h-60 w-[min(320px,calc(100vw-3rem))] overflow-y-auto overscroll-contain rounded-[8px] border border-solid border-[#d8e1ee] bg-white py-1 shadow-lg" role="group" aria-label="更多學程">
                    {more.length ? more.map(program => <button key={program.id} type="button" aria-pressed={program.id === selectedProgram}
                        className={`block w-full break-words px-4 py-2 text-left text-[13px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary xl:text-[14px] ${program.id === selectedProgram ? 'bg-[#eaf3ff] font-bold text-blue' : 'text-primary hover:bg-[#f3f7fd]'}`}
                        onClick={event => { onChange(program.id); event.currentTarget.closest('details').open = false }}>
                        {program.title}
                    </button>) : <p className="px-4 py-2 text-[13px] text-[#8292a7]">目前沒有更多學程</p>}
                </div>
            </details>
        </div>}
        {useMobileSearch ? <form className="grid grid-cols-[minmax(0,1fr)_42px_42px] items-center gap-2" role="search" aria-label="搜尋課程名稱" onSubmit={event => { event.preventDefault(); setSubmittedKeyword(keyword) }}>
            <label className="min-w-0" htmlFor={searchId}>
                <span className="sr-only">課程名稱</span>
                <input id={searchId} type="search" placeholder="想找什麼課程呢？" value={keyword} onChange={event => setKeyword(event.target.value)}
                    className="h-[42px] w-full min-w-0 rounded-full border border-solid border-[#dce5f0] bg-white px-5 text-[13px] text-primary placeholder:text-[#8292a7] focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20" />
            </label>
            <button type="submit" aria-label="開始查詢" className="flex size-[42px] items-center justify-center rounded-full bg-[#fa7637] text-white hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                <i className="icon icon-search text-[16px]" aria-hidden="true" />
            </button>
            <button type="button" aria-label="清除條件" onClick={() => { setKeyword(''); setSubmittedKeyword('') }}
                className="flex size-[42px] items-center justify-center rounded-full border border-solid border-primary bg-white text-primary hover:bg-[#edf3fc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" /></svg>
            </button>
        </form> : searchWithButtons ? <form role="search" aria-label="搜尋課程名稱" onSubmit={event => { event.preventDefault(); setSubmittedKeyword(keyword) }}>
            <KeywordSearchRow id={searchId} rounded inline label="課程名稱" placeholder="想找什麼課程呢？"
                value={keyword} onChange={setKeyword} onClear={() => { setKeyword(''); setSubmittedKeyword('') }} />
        </form> : <RoundedSearchField value={keyword} onChange={setKeyword} />}
        {!matches.length && <p role="status" className="text-[14px] text-[#8292a7]">{status === 'success' ? query ? '沒有符合課程名稱的學程' : '目前沒有學程' : status === 'loading' ? '學程載入中…' : status === 'idle' ? '請先登入以查看學程' : '學程載入失敗，請重新載入'}</p>}
    </div>
}

export default SearchableProgramSelector
