import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { makeIsCover } from 'constants/utils'
export const fetchColumnsData = createAsyncThunk(
    '/fetchColumnsData',
    async (lang, thunkApi) => {
        fetch(API_ROUTES.getColumns.replace('zh-tw', lang), {
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
                })
                makeIsCover(data)
                thunkApi.dispatch(
                    changeData({
                        lang: lang,
                        data: {
                            data
                        }
                    })
                )
            })
            .catch(console.error)
    }
)
const columnsSlice = createSlice({
    name: 'column',
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

export const { changeData } = columnsSlice.actions
export default columnsSlice.reducer
