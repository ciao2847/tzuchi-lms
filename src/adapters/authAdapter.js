export const adaptLoginUser = (data, account) => {
    if (!data || typeof data.id !== 'string' || !data.id ||
        typeof data.name !== 'string' || !data.name) {
        throw new Error('登入回應資料不完整，請稍後再試。')
    }
    const { id, name, depname, mail, modurl, branch } = data
    return {
        id,
        account,
        name,
        department: depname || '',
        mail: mail || '',
        modurl: modurl || '',
        branch: branch || ''
    }
}
