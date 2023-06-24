import React,{useEffect, useState} from 'react';


import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Transaction from './Transaction';
import dayjs from 'dayjs';

export default function BasicTable({transaction,fetchTransaction }) {
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const navigate=useNavigate();
  const [loading,setLoading]=useState(false)
  const token =Cookies.get('token')


  const removeItem=async(_id)=>{
   setLoading(true)
    const res=await fetch( `${apiUrl}/transaction/${_id}`,{
      method:'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
    if(res.ok){
      fetchTransaction();
    }
    setLoading(false)
  }

 
  function updateTransaction(_id,amount,text,date){
    navigate('/form',{state:{_id,amount,text,date}})

  }

  return (
    <>
    <div className='flex justify-center flex-col max-[460px]:block'>
     {
      transaction.length === 0?<h2 className=" text-xl text-slate-600  mx-3 my-2 font-bold">No Transactions</h2>:
      (transaction.map((prop)=>{
          return (
            <Transaction key={prop._id} data={prop} updateTransaction={updateTransaction}  removeItem={removeItem}/>
          )
      }))
     }
    </div>
    </>
  );
}