export const SPEECH_PORTAL_URL = 'https://nlms.tzuchi.com.tw/speech/'
export const SPEECH_DATA_URL = `${SPEECH_PORTAL_URL}sp.json`

// Keep JSON requests on the page's origin. Production uses the bundled PHP
// endpoint; webpack proxies the same path during development.
const basePath = new URL(process.env.BASE_PATH, 'http://localhost')
    .pathname.replace(/\/$/, '')
export const SPEECH_REQUEST_URL = `${basePath}/api/academic-videos.php`
