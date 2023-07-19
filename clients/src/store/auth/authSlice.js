  import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
  import Cookies from 'js-cookie';
import {fetchUser, loginUser, newUser, signOut} from './authApi';


  const initialState={
    user:null,
    status:'idle'
  } 

  export const loginUserAsync = createAsyncThunk(
    'users/loginUser',
    async (form) => {
      const response = await loginUser(form)
      return response.data
    }
  )
  
  export const fetchUserAsync = createAsyncThunk('users/fetchUser', async () => {
    const token = Cookies.get('token');
    if (token) {
      const response = await fetchUser(token);
      return response.data;
    }
    return null;
  });

  export const newUserAsync = createAsyncThunk('users/newUser', async (form) => {
    try {
        const response = await newUser(form)
        return response.data
      
    } catch (error) {
      console.log(error);
    }
  });

  export const signOutAsync = createAsyncThunk(
    'user/signOut',
    async () => {
      const response = await signOut();
      return response.data;
    }
  );
  

  export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
      builder
      //for login
      .addCase(loginUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUserAsync.fulfilled, (state, {payload}) => {
        state.status = 'fulfilled';
        state.user = payload.user;

      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.status = 'rejected'
      })
      //for register of new user
      .addCase(newUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(newUserAsync.fulfilled, (state, {payload}) => {
        state.status = 'fulfilled';
        state.user = payload.newUser;
      })
      .addCase(newUserAsync.rejected, (state, action) => {
        state.status = 'rejected'
      })
      //for fetching users
      .addCase(fetchUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserAsync.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.user = payload;
      })
      .addCase(fetchUserAsync.rejected, (state) => {
        state.status = 'rejected';
      })
      //for signout
      .addCase(signOutAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.user = null;
      })
    },
  
  })

  export const getUsers = (state) => state.auth.user;

  export default authSlice.reducer