import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export const fetchMarchesData = createAsyncThunk(
    '/fetchMarchesData',
    async (lang, thunkApi) => {
        fetch(API_ROUTES.getMarches.replace('zh-tw', lang), {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((resp) => resp.json())
            .then(({ data, category }) => {
                data.sort((a, b) => a.priority - b.priority)
                data.sort(
                    (a, b) => new Date(b.date_posted) - new Date(a.date_posted)
                )

                thunkApi.dispatch(
                    changeData({
                        lang: lang,
                        data: {
                            data,
                            category
                        }
                    })
                )
            })
            .catch(console.error)
    }
)
const marchesSlice = createSlice({
    name: 'marches',
    initialState: {
        'zh-tw': null,
        en: null,
        ja: null
    },
    reducers: {
        changeData: (state, action) => {
            const { lang, data } = action.payload
            return { ...state, [lang]: data }
        }
    }
})

export const { changeData } = marchesSlice.actions
export default marchesSlice.reducer
