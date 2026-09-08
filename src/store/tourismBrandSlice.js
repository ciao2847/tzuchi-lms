import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export const fetchTourismBrandData = createAsyncThunk(
    'tourismBrand/fetchTourismBrandData',
    async (lang, thunkApi) => {
        fetch(API_ROUTES.getTourismBrand.replace('zh-tw', lang), {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((resp) => resp.json())
            .then(({ data }) => {
                data.forEach((item) => {
                    if (item.tags) {
                        item.tourismBrandTag = Object.keys(item.tags) * 1
                    }
                })
                data.sort((a, b) => a.priority - b.priority)
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
const tourismBrandSlice = createSlice({
    name: 'tourismBrand',
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

export const { changeData } = tourismBrandSlice.actions
export default tourismBrandSlice.reducer
