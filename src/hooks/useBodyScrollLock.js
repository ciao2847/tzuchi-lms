import { useEffect } from 'react'

let activeLocks = 0
let originalOverflow = ''

const useBodyScrollLock = (isLocked, routeKey) => {
    useEffect(() => {
        if (!isLocked) {
            if (activeLocks === 0 && document.body.style.overflow === 'hidden') {
                document.body.style.overflow = ''
            }

            return undefined
        }

        if (activeLocks === 0) {
            originalOverflow = document.body.style.overflow
            document.body.style.overflow = 'hidden'
        }

        activeLocks += 1

        return () => {
            activeLocks -= 1

            if (activeLocks === 0) {
                document.body.style.overflow = originalOverflow
            }
        }
    }, [isLocked, routeKey])
}

export default useBodyScrollLock
