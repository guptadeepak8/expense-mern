import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
  status: 'idle',
  error: null,
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
   
    resetTransactions: (state) => {
      state.transactions = [];
      state.status = 'idle';
      state.error = null;
    },
  },
 
});

export const { resetTransactions } = transactionSlice.actions;

export default transactionSlice.reducer;