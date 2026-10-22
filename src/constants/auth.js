// Keep cookies on the page's origin in local development.
export const AUTH_API_BASE = process.env.NODE_ENV === 'development'
    ? '/tzuchi-api'
    : 'http://10.2.10.236:8064/tzuchi/api'

export const AUTH_API_KEY = 'a6114b73dc937fb0d86fb7ec6d9ba5b69b807533b16413b6bd676b8d2daa6263'
