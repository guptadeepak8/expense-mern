import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Reduce.js';

export const store = configureStore({
  reducer: {
    auth:authReducer,
  },
});