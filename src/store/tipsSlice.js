import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export const fetchTipsData = createAsyncThunk(
    'tips/fetchTipsData',
    async (lang, thunkApi) => {
        fetch(API_ROUTES.getTips.replace('zh-tw', lang), {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((resp) => resp.json())
            .then(({ data, category }) => {
                data.forEach((item) => {
                    item.categoryNames = item.categories
                        .map(
                            (cate) => category.find((c) => c.id === cate)?.name
                        )
                        .filter(Boolean)
                    item.cover =
                        item.cover?.url || '/assets/images/not-found/miss.jpg'
                })
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
const tipsSlice = createSlice({
    name: 'tips',
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

export const { changeData } = tipsSlice.actions
export default tipsSlice.reducer
