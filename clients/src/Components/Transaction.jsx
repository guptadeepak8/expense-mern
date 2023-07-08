import React from 'react'
import dayjs from 'dayjs';
import { MdDelete } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { useDeleteTransactionMutation } from '../store/transaction/transactionApi';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Transaction = ({data}) => {
  const [deleteTransaction] = useDeleteTransactionMutation();
  const navigate=useNavigate();

  function formatdate(date){
    return dayjs(date).format('DD MMMM,YYYY')
  }

  const removeTransaction=async(id)=>{
    try {
        const {data}=await deleteTransaction(id)
        if (data) {
          toast.success(data.message, {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
          });
        }else{
          throw new Error
        }
    } catch (error) {
      console.error(error)
    }
  }

   
  function updateTransactions(_id,amount,text,date){
    navigate('/form',{state:{_id,amount,text,date}})

  }

  return (
    <div  className=" flex my-3 justify-around py-4 px-1 max-[2000px]:mx-20 max-[480px]:mx-3 bg-slate-100 shadow-lg shadow-neutral-500/50  rounded-xl items-center">
    <span >{data.text}</span>
    <span >{formatdate(data.date)}</span>
    <span className='text-red-600'>₹{data.amount}</span>   
    <GrEdit  size={25} onClick={()=>updateTransactions(data._id,data.amount,data.text,data.date)}/>
    <MdDelete style={{ color: 'lightcoral' }} size={25} onClick={()=>removeTransaction(data._id)} />
  </div>
  )
}

export default Transaction