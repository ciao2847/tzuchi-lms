import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_ROUTES } from 'constants'
import { MONTHS_MAP } from 'constants/utils'

const makeMonthNames = (value) => {
    return Object.entries(MONTHS_MAP)
        .filter(([bitmask]) => (value & bitmask) === Number(bitmask))
        .map(([, month]) => month)
}

export const fetchFruitsData = createAsyncThunk(
    'fruits/fetchFruitsData',
    async (lang, thunkApi) => {
        fetch(API_ROUTES.getFruits.replace('zh-tw', lang) + `?id=${id}`, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((resp) => resp.json())
            .then(({ data, category }) => {
                data.forEach((item) => {
                    item.cover =
                        (item.images &&
                            item.images.find((item) => item.isCover) &&
                            item.images.find((item) => item.isCover).url) ||
                        (item.images &&
                            item.images.length > 0 &&
                            item.images[0].url) ||
                        `${process.env.BASE_PATH}/images/not-found/miss.jpg`

                    item.months = makeMonthNames(item.months)
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
const fruitsSlice = createSlice({
    name: 'fruits',
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

export const { changeData } = fruitsSlice.actions
export default fruitsSlice.reducer
