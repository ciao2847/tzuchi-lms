import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_ROUTES } from 'constants'
export const fetchPromotionsData = createAsyncThunk(
    'promotions/fetchPromotionsData',
    async (lang, thunkApi) => {
        fetch(API_ROUTES.getPromotions.replace('zh-tw', lang))
            .then((resp) => resp.json())
            .then(({ data, category }) => {
                const county = category.filter(
                    ({ groupName }) => groupName === 'Location'
                )
                data.forEach((item) => {
                    item.cover = item.image.replace('480x360', '640x480')
                    item.categoryObjs = item.category.map((c) =>
                        category.find(({ id }) => id === c)
                    )
                    item.lat = item.latitude
                    item.lng = item.longitude
                    item.county = item.location
                    item.zipcode = item.zipcode * 1
                    item.url = `/${lang}/promotion/${item.id}`
                })
                category = category
                    .filter(({ groupName, id }) => groupName === 'Category')
                    .map((cate) => ({ ...cate, shortcut: cate.id !== 567 }))

                thunkApi.dispatch(
                    changeData({
                        lang: lang,
                        data: {
                            data,
                            category,
                            county
                        }
                    })
                )
            })
            .catch(console.error)
    }
)
const promotionsSlice = createSlice({
    name: 'promotions',
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

export const { changeData } = promotionsSlice.actions
export default promotionsSlice.reducer
