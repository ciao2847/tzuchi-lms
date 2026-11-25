export const TEXT_SIZE_KEY = 'lms-text-size'

export const readTextSize = () => {
    try {
        const saved = Number(window.localStorage.getItem(TEXT_SIZE_KEY))
        if (saved === 125 || saved === 150) return saved
    } catch {
        // Storage may be unavailable in this browser.
    }
    return 100
}
