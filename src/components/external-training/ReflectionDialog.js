import React, { useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import I18N from 'components/I18N'
import useDialogInteraction from 'hooks/useDialogInteraction'

const recommendationKey = (id) => `tzuchi-external-training-recommended:${id}`

const ReflectionDialog = ({ record, onClose }) => {
    const dialogId = useId()
    const dialogRef = useRef(null)
    const closeButtonRef = useRef(null)
    const [isRecommended, setIsRecommended] = useState(() => {
        if (typeof window === 'undefined') return false
        try {
            return (
                window.localStorage.getItem(recommendationKey(record.id)) ===
                'true'
            )
        } catch {
            return false
        }
    })

    useDialogInteraction({
        dialogId,
        dialogRef,
        initialFocusRef: closeButtonRef,
        onClose
    })

    const rawReflection = record.details?.reflection ?? record.reflection
    const reflection =
        typeof rawReflection === 'string' && rawReflection.trim()
            ? rawReflection.trim()
            : '尚無心得內容'

    const handleRecommend = () => {
        if (isRecommended) return
        setIsRecommended(true)
        try {
            window.localStorage.setItem(recommendationKey(record.id), 'true')
        } catch {
            // Keep the confirmation visible when browser storage is unavailable.
        }
    }

    return createPortal(
        <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-[#061f42]/65 md:p-6">
            <section
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={dialogId + '-title'}
                aria-describedby={dialogId + '-content'}
                className="flex h-[100dvh] w-full flex-col overflow-hidden bg-white text-primary md:h-auto md:max-h-[calc(100dvh-48px)] md:max-w-[720px] md:rounded-[12px] md:border md:border-solid md:border-[#cfdbea] md:shadow-2xl"
            >
                <header className="flex shrink-0 items-start justify-between gap-4 bg-[#e4f1f3] px-4 py-4 text-primary md:px-6">
                    <div className="min-w-0">
                        <h2
                            id={dialogId + '-title'}
                            className="text-[18px] font-bold md:text-[22px]"
                        >
                            <I18N>學習心得</I18N>
                        </h2>
                    </div>
                    <button
                        ref={closeButtonRef}
                        type="button"
                        aria-label="關閉學習心得視窗"
                        className="flex size-9 shrink-0 items-center justify-center rounded-full text-[17px] text-primary transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                        onClick={onClose}
                    >
                        <i className="icon icon-close" aria-hidden="true" />
                    </button>
                </header>

                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 md:px-6 md:py-6">
                    <p
                        id={dialogId + '-content'}
                        className="mt-3 whitespace-pre-wrap break-words text-[13px] leading-6 text-[#405a78] md:text-[15px] md:leading-7"
                    >
                        {reflection}
                    </p>
                </div>

                <footer className="shrink-0 border-t border-solid border-[#dce5f0] bg-white px-4 py-3 md:px-6 md:py-4">
                    <button
                        type="button"
                        disabled={isRecommended}
                        className="ml-auto block min-h-10 rounded-[6px] bg-primary px-6 text-[13px] font-bold text-white transition-colors enabled:hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-default disabled:bg-[#e6f5ef] disabled:text-[#247a56] md:text-[14px]"
                        onClick={handleRecommend}
                    >
                        <span aria-live="polite">
                            <I18N>
                                {isRecommended
                                    ? '感謝你的推薦'
                                    : '推薦這篇文章'}
                            </I18N>
                        </span>
                    </button>
                </footer>
            </section>
        </div>,
        document.body
    )
}

export default React.memo(ReflectionDialog)
