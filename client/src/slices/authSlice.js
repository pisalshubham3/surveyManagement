import { createSlice } from '@reduxjs/toolkit'
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    // user is not logged in
    status: false,
  },
  reducers: {
    signInAction: (state, action) => {
      state.status = true
      sessionStorage['userId'] = action.payload['userId']
      sessionStorage['userName'] = action.payload['firstName']
    },
    signOutAction: (state, action) => {
      state.status = false
      sessionStorage.removeItem('userName')
      sessionStorage.removeItem('userId')
    },
  },
})

export default authSlice.reducer

export const { signInAction, signOutAction } = authSlice.actions
