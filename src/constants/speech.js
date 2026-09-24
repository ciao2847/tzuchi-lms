export const SPEECH_PORTAL_URL = 'https://nlms.tzuchi.com.tw/speech/'
export const SPEECH_DATA_URL = `${SPEECH_PORTAL_URL}sp.json`

// Production is served from nlms.tzuchi.com.tw; development uses webpack's
// same-origin proxy because the speech endpoint does not expose CORS headers.
export const SPEECH_REQUEST_URL =
    process.env.NODE_ENV === 'development' ? '/speech/sp.json' : SPEECH_DATA_URL
