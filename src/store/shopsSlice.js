import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { makeIsCover } from 'constants/utils'
export const fetchShopsData = createAsyncThunk(
    'shop/fetchShopsData',
    async (lang, thunkApi) => {
        fetch(API_ROUTES.getShops.replace('zh-tw', lang), {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((resp) => resp.json())
            .then(({ data, category, district }) => {
                data.forEach((item) => {
                    if (item.tags) {
                        item.tourismBrandId = Object.keys(item.tags) * 1
                    }
                    const [lat, lng] = item.latlng.split(',')
                    item.lat = lat ? lat * 1 : null
                    item.lng = lng ? lng * 1 : null
                    item.type = 'shop'
                    item.categoryNames = item.categories
                        .map(
                            (cate) => category.find((c) => c.id === cate)?.name
                        )
                        .filter(Boolean)
                })
                data.sort((a, b) => a.priority - b.priority)
                makeIsCover(data)
                thunkApi.dispatch(
                    changeData({
                        lang: lang,
                        data: {
                            data,
                            category,
                            district
                        }
                    })
                )
            })
            .catch(console.error)
    }
)
const shopsSlice = createSlice({
    name: 'shops',
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

export const { changeData } = shopsSlice.actions
export default shopsSlice.reducer
