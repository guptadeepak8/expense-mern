import React,{useEffect, useState} from 'react';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Transaction from './Transaction';
import { useGetTransactionsQuery } from '../store/transaction/transactionApi';

export default function BasicTable() {

  
  const {data, error, isLoading } = useGetTransactionsQuery()
  
   if (isLoading) {
    return <Skeletons/>;
  }

  function Skeletons() {
    const isMobile = window.innerWidth <= 480;
  return (
    <div className='flex justify-center flex-col'>
      {isMobile ? (
        <Skeleton count={5} className="mx-4 my-3" height={50} width={'90%'} />
      ) : (
        <Skeleton count={5} className="mx-20 my-3" height={50} width={'80%'} />
      )}
    </div>
  );
  }


  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
    <div className='flex justify-center flex-col max-[460px]:block'>
     {
      data.transaction.length === 0?<h2 className=" text-xl text-slate-600  mx-3 my-2 font-bold">No Transactions</h2>:
      (data.transaction.map((prop)=>{
          return (
            <Transaction key={prop._id} data={prop}/>
          )
      }))
     }
    </div>
    </>
  );
}