import { SPEECH_PORTAL_URL } from 'constants/speech'

const FALLBACK_IMAGE = `${process.env.BASE_PATH}/images/index/video-lecture-placeholder.svg`

export const adaptAcademicVideos = (videos) => {
    if (!Array.isArray(videos)) return []

    return videos
        .filter((video) => video?.id)
        .map(({ id, title, data, img, speaker }) => ({
            id: `academic-${id}`,
            title: title || '',
            image: img ? new URL(img, SPEECH_PORTAL_URL).href : FALLBACK_IMAGE,
            date: data || '',
            lecturer: speaker || '',
            link: `${SPEECH_PORTAL_URL}watch.php?id=${encodeURIComponent(id)}`,
            isLinkOut: true
        }))
}
