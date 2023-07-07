import React from 'react'
import dayjs from 'dayjs';
import { MdDelete } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
const Transaction = ({data,updateTransaction,removeItem,}) => {
  function formatdate(date){
    return dayjs(date).format('DD MMMM,YYYY')
  }

  return (
    <div  className=" flex my-3 justify-around py-4 px-1 max-[2000px]:mx-20 max-[480px]:mx-3 bg-slate-100 shadow-lg shadow-neutral-500/50  rounded-xl items-center">
    <span >{data.text}</span>
    <span >{formatdate(data.date)}</span>
    <span className='text-red-600'>₹{data.amount}</span>   
    <GrEdit  size={25} onClick={()=>updateTransaction(data._id,data.amount,data.text,data.date)}/>
    <MdDelete  size={25} onClick={()=>removeItem(data._id)} />
  </div>
  )
}

export default Transaction