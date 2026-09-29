const MOCK_LOGIN_DELAY = 500

const MOCK_USER = Object.freeze({
    id: 'user-001',
    account: 'TC123456',
    name: '王小明',
    department: '護理部',
    role: 'learner'
})

export const MOCK_LOGIN_RESPONSE = Object.freeze({
    status: 200,
    message: '登入成功',
    data: {
        user: MOCK_USER
    }
})

const wait = (delay) =>
    new Promise((resolve) => {
        setTimeout(resolve, delay)
    })

/**
 * 登入資料存取層。
 * 後端 API 完成後，將此函式的 mock 內容改為 API 請求即可。
 * LoginProvider 會依回應的 status 判斷是否登入。
 */
export const login = async ({ account = '' } = {}) => {
    await wait(MOCK_LOGIN_DELAY)

    return {
        ...MOCK_LOGIN_RESPONSE,
        data: {
            ...MOCK_LOGIN_RESPONSE.data,
            user: {
                ...MOCK_USER,
                account: String(account).trim() || MOCK_USER.account
            }
        }
    }
}
