const isWebUrl = (value) => {
    if (typeof value !== 'string') return false
    try {
        const { protocol } = new URL(value)
        return protocol === 'https:' || protocol === 'http:'
    } catch {
        return false
    }
}

export const adaptSdmVideos = (entries) => {
    const videos = new Map()
    for (const entry of entries) {
        if (typeof entry?.title !== 'string' || !entry.title.trim() ||
            !isWebUrl(entry.img) || !isWebUrl(entry.url) || videos.has(entry.url)) continue

        videos.set(entry.url, {
            id: entry.url,
            title: entry.title.trim(),
            image: entry.img,
            link: entry.url,
            isLinkOut: true
        })
    }
    return [...videos.values()]
}
