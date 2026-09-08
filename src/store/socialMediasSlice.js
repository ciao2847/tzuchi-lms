import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_ROUTES } from 'constants'
export const fetchSocialMediasData = createAsyncThunk(
    'socialMedias/fetchSocialMediasData',
    async (lang, thunkApi) => {
        fetch(API_ROUTES.getSocialMedias.replace('zh-tw', lang))
            .then((resp) => resp.json())
            .then(({ data, category }) => {
                data.forEach((item) => {
                    item.cover = item.image.replace('480x360', '640x480')
                    item.categoryObjs = item.category.map((c) =>
                        category.find(({ id }) => id === c)
                    )
                    item.type = item.url.includes('instagram') ? 1 : 2
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
const socialMediasSlice = createSlice({
    name: 'socialMedias',
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

export const { changeData } = socialMediasSlice.actions
export default socialMediasSlice.reducer
