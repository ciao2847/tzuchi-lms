import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_ROUTES } from 'constants'
export const fetchPublicationsData = createAsyncThunk(
    'publications/fetchPublicationsData',
    async (lang, thunkApi) => {
        fetch(API_ROUTES.getPublications.replace('zh-tw', lang))
            .then((resp) => resp.json())
            .then(({ data, category }) => {
                data.forEach((item) => {
                    item.cover = item.image.replace('480x360', '640x480')
                    item.categoryNames = item.category
                        .map(
                            (cate) => category.find((c) => c.id === cate)?.title
                        )
                        .filter(Boolean)
                    item.categoryObjs = item.category.map((c) =>
                        category.find(({ id }) => id === c)
                    )
                    item.location = [
                        ...item.location.filter((l) => l !== 573),
                        ...item.location.filter((l) => l === 573)
                    ]
                    item.locationNames = item.location
                        .map((l) => {
                            return category.find((c) => c.id === l)?.title
                        })
                        .filter(Boolean)
                })
                category = category.filter(
                    ({ groupName }) => groupName === 'Category'
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
const publicationsSlice = createSlice({
    name: 'publications',
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

export const { changeData } = publicationsSlice.actions
export default publicationsSlice.reducer
