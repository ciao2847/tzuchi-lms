import { useEffect, useRef } from 'react'
import useBodyScrollLock from 'hooks/useBodyScrollLock'

const FOCUSABLE_SELECTOR =
    'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex="0"]'

const useDialogInteraction = ({
    dialogId,
    dialogRef,
    initialFocusRef,
    onClose
}) => {
    const onCloseRef = useRef(onClose)
    onCloseRef.current = onClose

    useBodyScrollLock(true, dialogId)

    useEffect(() => {
        const previouslyFocused = document.activeElement
        const root = document.getElementById('root')
        const wasInert = root?.inert
        if (root) root.inert = true
        initialFocusRef.current?.focus()

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                event.preventDefault()
                onCloseRef.current()
                return
            }
            if (event.key !== 'Tab') return

            const focusable =
                dialogRef.current?.querySelectorAll(FOCUSABLE_SELECTOR)
            if (!focusable?.length) return

            const first = focusable[0]
            const last = focusable[focusable.length - 1]
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault()
                last.focus()
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault()
                first.focus()
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            if (root) root.inert = wasInert
            previouslyFocused?.focus()
        }
    }, [dialogRef, initialFocusRef])
}

export default useDialogInteraction
