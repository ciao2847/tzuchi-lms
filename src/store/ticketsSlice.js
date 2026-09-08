import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_ROUTES } from 'constants'
export const fetchTicketsData = createAsyncThunk(
    'tickets/fetchTicketsData',
    async (lang, thunkApi) => {
        fetch(API_ROUTES.getTickets.replace('zh-tw', lang))
            .then((resp) => resp.json())
            .then(({ data, category }) => {
                category = category.filter(
                    ({ groupName }) => groupName === 'Category'
                )
                data.forEach((item) => {
                    item.cover = item.image.replace('480x360', '640x480')
                    item.categoryObjs = item.category.map((c) =>
                        category.find(({ id }) => id === c)
                    )
                    item.url = `/${lang}/ticket/${item.id}`
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
const ticketsSlice = createSlice({
    name: 'tickets',
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

export const { changeData } = ticketsSlice.actions
export default ticketsSlice.reducer
