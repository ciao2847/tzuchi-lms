import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_ROUTES } from 'constants'
export const fetchToursData = createAsyncThunk(
    'tours/fetchToursData',
    async (lang, thunkApi) => {
        fetch(API_ROUTES.getTours.replace('zh-tw', lang))
            .then((resp) => resp.json())
            .then(({ data }) => {
                const category = [
                    { id: 1, title: '團體旅遊', shortcut: true },
                    { id: 2, title: '自由行', shortcut: true }
                ]
                data.forEach((item) => {
                    item.cover =
                        item.image?.replace('480x360', '640x480') ||
                        '/images/not-found/4to3.jpg'
                    item.category.push(item.type === 0 ? 1 : 2)
                    item.categoryObjs = item.category
                        .map((c) => category.find(({ id }) => id === c))
                        .filter(Boolean)
                    item.url = `/${lang}/tour/${item.id}`
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
const toursSlice = createSlice({
    name: 'tours',
    initialState: {
        'zh-tw': null,
        en: null,
        ja: null,
        ko: null
    },
    reducers: {
        changeData: (state, action) => {
            const { lang, data } = action.payload
            return { ...state, [lang]: data }
        }
    }
})

export const { changeData } = toursSlice.actions
export default toursSlice.reducer
