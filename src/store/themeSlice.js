import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: (localStorage.getItem("app-theme")) ? localStorage.getItem("app-theme") : "dark",
  },
  reducers: {
    setDark: (state) => {
      state.value = 'dark'
    },
    setLight: (state) => {
      state.value = 'light'
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDark, setLight } = themeSlice.actions

export default themeSlice.reducer