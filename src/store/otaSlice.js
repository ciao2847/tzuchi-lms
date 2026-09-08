import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const PROVIDER_MAP = {
    1: process.env.WEB_TITLE,
    2: 'KKday',
    3: '雄獅旅遊',
    4: 'Klook'
}

export const fetchOtaData = createAsyncThunk(
    'ota/fetchOtaData',
    async (lang, thunkApi) => {
        fetch(API_ROUTES.getOta.replace('zh-tw', lang), {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((resp) => resp.json())
            .then(({ data, category }) => {
                data = data.map(
                    ({
                        product_id: id,
                        name: title,
                        pic_url: cover,
                        provider_id,
                        url,
                        date_created,
                        date_modified,
                        categories
                    }) => {
                        const categoryNames = categories
                            .map(
                                (cate) =>
                                    category.find((c) => c.id === cate)?.name
                            )
                            .filter(Boolean)
                        const provider = PROVIDER_MAP[provider_id]
                        return {
                            id,
                            title,
                            cover,
                            provider_id,
                            provider,
                            url,
                            date_created,
                            date_modified,
                            categories,
                            categoryNames
                        }
                    }
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
const otaSlice = createSlice({
    name: 'ota',
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

export const { changeData } = otaSlice.actions
export default otaSlice.reducer
