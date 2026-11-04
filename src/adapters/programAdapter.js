const STATUS_MAP = {
    p: 'complete', q: 'overdueComplete', w: 'inProgress',
    d: 'failed', 'd.': 'failed', o: 'notStarted'
}

const isRecord = value => value && typeof value === 'object' && !Array.isArray(value)
const invalidResponse = () => { throw new Error('學程明細回應格式異常。') }
const creditValue = value => {
    if (value === undefined || value === null || value === '') return 0
    if (!['string', 'number'].includes(typeof value) || !Number.isFinite(Number(value))) invalidResponse()
    return value
}

export const adaptProgramInfo = (data) => {
    if (!isRecord(data) || !isRecord(data.programCategory)) invalidResponse()
    return {
        totalCredit: creditValue(data.totalCredit),
        passCredit: creditValue(data.passCredit),
        passRealCredit: creditValue(data.passRealCredit),
        categories: Object.entries(data.programCategory).map(([id, category]) => {
            if (!isRecord(category) || (category.status != null && !Array.isArray(category.status)) ||
                (category.course != null && !Array.isArray(category.course))) invalidResponse()
            return {
                id, title: String(category.name || ''), credit: creditValue(category.credit),
                states: (category.status || []).map(status => STATUS_MAP[status] || 'unknown'),
                courses: (category.course || []).map(course => {
                    if (!isRecord(course)) invalidResponse()
                    return {
                        id: course.id == null ? '' : String(course.id), title: String(course.name || ''),
                        status: String(course.status ?? '').trim(), type: String(course.type || '')
                    }
                })
            }
        })
    }
}
