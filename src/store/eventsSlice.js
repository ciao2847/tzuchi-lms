import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { makeIsCover } from 'constants/utils'
import { API_ROUTES } from 'constants'

export const fetchEventsData = createAsyncThunk(
    'events/fetchEventsData',
    async (lang, thunkApi) => {
        fetch(API_ROUTES.getEvents.replace('zh-tw', lang), {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((resp) => resp.json())
            .then(
                ({ data, category, district: zipcode, county, transport }) => {
                    /* data.forEach((item) => {
                        item.categoryNames = item.categories
                            .map(
                                (cate) =>
                                    category.find((c) => c.id === cate)?.name
                            )
                            .filter(Boolean)
                    }) */
                    makeIsCover(data)
                    thunkApi.dispatch(
                        changeData({
                            lang: lang,
                            data: {
                                data,
                                category,
                                county,
                                transport
                            }
                        })
                    )
                }
            )
            .catch(console.error)
    }
)
const eventsSlice = createSlice({
    name: 'events',
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

export const { changeData } = eventsSlice.actions
export default eventsSlice.reducer
