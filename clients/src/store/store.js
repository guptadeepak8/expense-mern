import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../store/auth/authSlice';
import transactionApi from './transaction/transactionApi.js';
import transactionReducer from './transaction/transactionSlice';

export const store = configureStore({
  reducer: {
    auth:authReducer,
    [transactionApi.reducerPath]:transactionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(transactionApi.middleware),
});