import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { makeIsCover } from 'constants/utils'
export const fetchNewsData = createAsyncThunk(
    '/fetchNewsData',
    async (lang, thunkApi) => {
        fetch(API_ROUTES.getNews.replace('zh-tw', lang), {
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
                data.forEach((item) => {
                    item.categoryNames = item.categories
                        .map(
                            (cate) => category.find((c) => c.id === cate)?.name
                        )
                        .filter(Boolean)
                })
                makeIsCover(data)
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
const newsSlice = createSlice({
    name: 'news',
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

export const { changeData } = newsSlice.actions
export default newsSlice.reducer
