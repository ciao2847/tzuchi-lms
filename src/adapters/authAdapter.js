export const adaptLoginUser = (data, account) => {
    if (!data || typeof data.id !== 'string' || !data.id ||
        typeof data.name !== 'string' || !data.name) {
        throw new Error('登入回應資料不完整，請稍後再試。')
    }
    return {
        id: data.id,
        account,
        name: data.name,
        department: data.depname || '',
        mail: data.mail || '',
        modurl: data.modurl || ''
    }
}
