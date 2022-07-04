import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: false,
  },
  reducers: {
    setAuth: (state) => {
      state.value = true
    },
    setGuest: (state) => {
      state.value = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAuth, setGuest } = authSlice.actions

export default authSlice.reducer