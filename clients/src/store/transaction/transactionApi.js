import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from "js-cookie";


const token = Cookies.get('token');
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const transactionApi = createApi({
  baseQuery: fetchBaseQuery({ 
    baseUrl: apiUrl,
    prepareHeaders: (headers) => {
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
   }),
  
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: () => 'transaction',
      providesTags:['transaction']
    }),
    deleteTransaction: builder.mutation({
      query: (id) => ({
        url: `transaction/${id}`,
        method: 'DELETE',
       
      }),
      invalidatesTags:['transaction']
    }),
    updateTransaction: builder.mutation({
      query: ({ _id, ...data }) => ({
        url: `transaction/${_id}`,
        method: 'PATCH',
        body: data,
       
      }),
      invalidatesTags:['transaction']
    }),
    addTransaction: builder.mutation({
      query: (transactionData) => ({
        url: 'transaction',
        method: 'POST',
        body: transactionData,
       
      }),
      invalidatesTags:['transaction']
    }),
  }),
});


export const {
  useGetTransactionsQuery,
  useDeleteTransactionMutation,
  useUpdateTransactionMutation,
  useAddTransactionMutation,
} = transactionApi;

export default transactionApi;
