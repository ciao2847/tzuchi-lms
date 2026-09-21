import { createSlice } from '@reduxjs/toolkit'

const headerThemeSlice = createSlice({
    name: 'headerTheme',
    initialState: 'clear',
    reducers: {
        changeHeaderTheme: (state, action) => action.payload
    }
})

export const { changeHeaderTheme } = headerThemeSlice.actions
export default headerThemeSlice.reducer
