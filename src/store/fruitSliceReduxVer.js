import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_ROUTES } from 'constants'
import swal from 'sweetalert'

export const fetchFruitData = createAsyncThunk(
    'fruit/fetchFruitData',
    async ({ lang, id }, thunkApi) => {
        fetch(API_ROUTES.getFruits.replace('zh-tw', lang) + `?id=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then((resp) => resp.json())
            //.then((resp) => {return resp.json()})
            .then(({ success, data }) => {
                if (success) {
                    thunkApi.dispatch(
                        changeData({
                            lang: lang,
                            data: {
                                data,
                                success
                            }
                        })
                    )
                    return { lang, id, data }
                    console.log(data)
                } else {
                    swal({
                        title: data.toString(),
                        icon: 'info'
                    })
                }
            })
            .catch((error) => {
                swal({
                    title: '錯誤',
                    text: error.message,
                    icon: 'error'
                })
            })
    }
)
const fruitSliceReduxVer = createSlice({
    name: 'fruit',
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

export const { changeData } = fruitSliceReduxVer.actions
export default fruitSliceReduxVer.reducer
