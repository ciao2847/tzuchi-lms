import { createSlice } from '@reduxjs/toolkit'

const headerThemeSlice = createSlice({
	name: 'tours',
	initialState: 'transparent',
	reducers: {
		changeHeaderTheme: (state, action) => {
			return action.payload
		}
	}
})

export const { changeHeaderTheme } = headerThemeSlice.actions
export default headerThemeSlice.reducer
