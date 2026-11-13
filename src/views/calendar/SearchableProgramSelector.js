import React, { useId, useState } from 'react'
import RoundedSearchField from 'components/RoundedSearchField'
import Select from 'components/Select'
import MoreOptionsSelector from 'components/MoreOptionsSelector'
import Spinner from 'components/Spinner'
import KeywordSearchRow from 'components/KeywordSearchRow'
import useMedia from 'hooks/useMedia'

const SearchableProgramSelector = ({ programs, selectedProgram, onChange, status, searchWithButtons = false }) => {
    const searchId = useId()
    const isMobile = useMedia('(max-width: 767px)')
    const useMobileSearch = searchWithButtons && isMobile
    const [keyword, setKeyword] = useState('')
    const [submittedKeyword, setSubmittedKeyword] = useState('')
    const query = (searchWithButtons ? submittedKeyword : keyword).trim().toLocaleLowerCase()
    const matches = programs.filter(program => program.title.toLocaleLowerCase().includes(query))
    if (status === 'loading') return <Spinner block />
    return <div className="space-y-3 py-3 md:px-1">
        {useMobileSearch ? <Select
            aria-label="選擇學程"
            value={matches.some(program => program.id === selectedProgram) ? selectedProgram : ''}
            className="!h-[42px] !rounded-full !border-[#1769d2] !bg-[#edf3fc] !px-5 !text-[13px] !text-[#0755cf]"
            onChange={event => onChange(event.target.value)}
        >
            <option value="">請選擇學程</option>
            {matches.map(program => <option key={program.id} value={program.id}>{program.title}</option>)}
        </Select> : <MoreOptionsSelector options={matches.map(program => ({ value: program.id, label: program.title }))}
            value={selectedProgram} onChange={onChange} ariaLabel="選擇學程" moreLabel="更多學程" emptyText="目前沒有更多學程" />}
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
        {!matches.length && <p role="status" className="text-[14px] text-[#8292a7]">{status === 'idle' ? '請先登入以查看學程' : '暫無資料'}</p>}
    </div>
}

export default SearchableProgramSelector
