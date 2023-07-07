import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
  name: 'auth',
  initialState :{
    isAuth:false,
    user:{}
  },
  reducers: {
    getUser: (state,action) => {
      state.user=action.payload.user,
      state.isAuth=true
    },
    logout: (state) => {
      state.user={},
      state.isAuth=false
    }
  }
})

export const { getUser,logout } = authSlice.actions

export default authSlice.reducer