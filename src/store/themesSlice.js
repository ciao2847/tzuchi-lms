import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { makeIsCover } from 'constants/utils'
export const fetchThemesData = createAsyncThunk(
    'themes/fetchThemesData',
    async (lang, thunkApi) => {
        fetch(API_ROUTES.getThemes.replace('zh-tw', lang), {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((resp) => resp.json())
            .then(({ data, district }) => {
                data.sort((a, b) => a.priority - b.priority)
                data.forEach((item) => {
                    item.regionNames = item.regionIds
                        .map((rid) => district.find((d) => d.id === rid)?.name)
                        .filter(Boolean)
                })
                makeIsCover(data)
                thunkApi.dispatch(
                    changeData({
                        lang: lang,
                        data: {
                            data,
                            district
                        }
                    })
                )
            })
            .catch(console.error)
    }
)
const themesSlice = createSlice({
    name: 'themes',
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

export const { changeData } = themesSlice.actions
export default themesSlice.reducer
