import React,{useEffect, useState} from 'react';
import {  Checkbox, IconButton, Typography } from '@mui/material';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import dayjs from 'dayjs';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function BasicTable({transaction,fetchTransaction }) {
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const navigate=useNavigate();
  const [editTransaction,setEdittransaction]=useState({})
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

  function formatdate(date){
    return dayjs(date).format('DD MMMM,YYYY')
  }

 
  function updateTransaction(_id,amount,text,date){
    setEdittransaction({_id,amount,text,date})
    navigate('/form',{state:{_id,amount,text,date}})

  }



  return (
    <>
    <div className='flex justify-center flex-col max-[460px]:block'>
     {
      transaction.length === 0?<h2 className=" text-xl text-slate-600  mx-3 my-2 font-bold">No Transactions</h2>:
      (transaction.map(({_id,amount,text,date})=>{
          return (
            <div key={_id} className=" flex my-3 justify-around py-4 px-1 max-[2000px]:mx-20 max-[480px]:mx-3 bg-slate-100 shadow-lg shadow-neutral-500/50  rounded-xl items-center">
              <span >{text}</span>
              <span >{formatdate(date)}</span>
              <span className='text-red-600'>{amount}</span>   
              <IconButton onClick={()=>updateTransaction(_id,amount,text,date)}>
                <EditSharpIcon/>
                </IconButton>
                <IconButton onClick={()=>removeItem(_id)}  >
                <DeleteSharpIcon />
                </IconButton>
            </div>
          )
      }))
     }
    </div>
    </>
  );
}