import { SATISFACTION_QUESTIONS } from './formConfig'

const DRAFT_KEY = 'tzuchi-external-training-draft'

const createInitialForm = () => {
    const initialForm = {
        year: '115',
        applicability: '自主外訓',
        title: '',
        organization: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        hours: '0',
        minutes: '0',
        attributes: [],
        satisfaction: Object.fromEntries(
            SATISFACTION_QUESTIONS.map((question) => [question, '5'])
        ),
        reflection: ''
    }

    if (typeof window === 'undefined') return initialForm

    try {
        const saved = JSON.parse(window.localStorage.getItem(DRAFT_KEY))
        if (!saved || typeof saved !== 'object') return initialForm

        return {
            ...initialForm,
            ...saved,
            attributes: Array.isArray(saved.attributes) ? saved.attributes : [],
            satisfaction: {
                ...initialForm.satisfaction,
                ...saved.satisfaction
            }
        }
    } catch {
        return initialForm
    }
}

export const saveTrainingDraft = (form) => {
    window.localStorage.setItem(DRAFT_KEY, JSON.stringify(form))
}

export const clearTrainingDraft = () => {
    window.localStorage.removeItem(DRAFT_KEY)
}

export const getTrainingDateError = (form) => {
    const start = new Date(form.startDate + 'T' + form.startTime).getTime()
    const end = new Date(form.endDate + 'T' + form.endTime).getTime()
    return end <= start ? '結束時間須晚於開始時間' : ''
}

export { createInitialForm }
