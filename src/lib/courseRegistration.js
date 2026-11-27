export const DEPENDENT_ROWS = [1, 2, 3, 4, 5]
const PANTS_SIZES = ['f26', 'f28', 'f30', 'f32', 'f34', 'm28', 'm30', 'm32', 'm34', 'm36', 'm40', 'm42']
export const UNIFORM_ITEMS = [
    { id: 'grey_cloth', label: '灰衣', price: 260, sizes: ['SS', 'S', 'M', 'L', 'XL', '2L', '3L'] },
    { id: 'white_pants', label: '白褲', price: 420, sizes: PANTS_SIZES },
    { id: 'blue_pants', label: '藍褲', price: 280, sizes: PANTS_SIZES }
]

export const buildRegistrationPayload = (kind, fields) => {
    const read = name => String(fields.get(name) ?? '').trim()
    const payload = { mobilephone: read('phone').replace('-', '') }

    if (kind !== 'uniform') {
        const family = DEPENDENT_ROWS.flatMap(number => {
            const row = {
                name: read(`dependent-${number}-name`),
                relationship: read(`dependent-${number}-relationship`),
                idcard: read(`dependent-${number}-identity`),
                birthday: read(`dependent-${number}-birthday`).replaceAll('-', '/')
            }
            const values = Object.values(row)
            if (!values.some(Boolean)) return []
            if (!values.every(Boolean)) throw new Error(`請填完整眷屬 ${number} 的姓名、關係、身分證號與西元生日。`)
            return [row]
        })
        if (family.length) payload.family = family
        if (kind === 'dependents') return payload
    }

    const helpbuy = read('uniform-purchase') === '協請代購' ? 'yes' : 'no'
    const suits = { helpbuy }
    for (const { id, label, sizes } of UNIFORM_ITEMS) {
        const quantity = helpbuy === 'yes' ? Number(read(`${id}-quantity`)) : ''
        const size = quantity > 0 ? read(`${id}-size`) : ''
        if (quantity > 0 && !sizes.includes(size)) throw new Error(`請選擇${label}尺寸。`)
        suits[id] = quantity
        suits[`${id}_size`] = size
    }
    suits.belt = helpbuy === 'yes' ? Number(read('belt-quantity')) : ''
    suits.status = helpbuy === 'yes' ? read('identity') : ''
    if (helpbuy === 'yes' && !suits.status) throw new Error('請選擇身分。')
    return { ...payload, suits }
}
