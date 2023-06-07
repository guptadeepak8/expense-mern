import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
  name: 'auth',
  initialState :{
    isAuth:false,
    user:{}
  },
  reducers: {
    getUser: (state,{payload}) => {
      state.user=payload.user,
      state.isAuth=true
    },
    logout: (state) => {
      state.user={},
      state.isAuth=false
    }
  }
})

// Action creators are generated for each case reducer function
export const { getUser,logout } = authSlice.actions

export default authSlice.reducer