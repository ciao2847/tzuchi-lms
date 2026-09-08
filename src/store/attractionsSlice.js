import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_ROUTES } from 'constants'

export const fetchAttractionsData = createAsyncThunk(
    'attractions/fetchAttractionsData',
    async (lang, thunkApi) => {
        fetch(API_ROUTES.getAttractions.replace('zh-tw', lang), {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((resp) => resp.json())
            .then(({ data, category, district: zipcode, county, service }) => {
                data.forEach((item) => {
                    const [lat, lng] = item.latlng.split(',')
                    item.lat = lat ? lat * 1 : null
                    item.lng = lng ? lng * 1 : null
                    item.cover = (
                        item.thumb?.replace(
                            '~/',
                            'https://tour.taitung.gov.tw/'
                        ) || '/images/not-found/miss.jpg'
                    ).replace('150x150', '480x360')
                })

                thunkApi.dispatch(
                    changeData({
                        lang: lang,
                        data: {
                            data,
                            category,
                            zipcode,
                            county,
                            service
                        }
                    })
                )
            })
            .catch(console.error)
    }
)
const attractionsSlice = createSlice({
    name: 'attractions',
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

export const { changeData } = attractionsSlice.actions
export default attractionsSlice.reducer
