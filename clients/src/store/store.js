import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Reduce.js';
import transactionApi from './transaction/transactionApi.js';

export const store = configureStore({
  reducer: {
    auth:authReducer,
    [transactionApi.reducerPath]:transactionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(transactionApi.middleware),
});