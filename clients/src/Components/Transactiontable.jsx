import React, { useEffect, useState } from "react";
import { FaPlusCircle } from 'react-icons/fa';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Transaction from "./Transaction";
import { useGetTransactionsQuery } from "../store/transaction/transactionApi";
import { quotes } from "./quotes";
export default function BasicTable() {
  const { data, error, isLoading } = useGetTransactionsQuery();
  const [quote,setQuote]=useState('')

  useEffect(()=>{
    if(data && data.transaction.length === 0){
      const randomQuote = getRandomQuote();
      setQuote(randomQuote);
    }
  },[data])

  if (isLoading) {
    return <Skeletons />;
  }


  
  function Skeletons() {
    const isMobile = window.innerWidth <= 480;
    return (
      <div className="flex justify-center flex-col">
        {isMobile ? (
          <Skeleton count={5} className="mx-4 my-3" height={50} width={"90%"} />
        ) : (
          <Skeleton
            count={5}
            className="mx-20 my-3"
            height={50}
            width={"80%"}
          />
        )}
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function getRandomQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  

  return (
    <>
      <div className="flex justify-center flex-col max-[460px]:block">
        {data.transaction.length === 0 ? (
         <div className="bg-gray-100 rounded-lg p-4 mx-3 my-2 text-center">
         <h2 className="text-xl text-slate-600 font-bold">No Transactions</h2>
         <p className="text-sm text-gray-500 mt-2">{quote}</p>
        </div>
        ) : (
          data.transaction.map((prop) => {
            return <Transaction key={prop._id} data={prop} />;
          })
        )}
      </div>
    </>
  );
}
