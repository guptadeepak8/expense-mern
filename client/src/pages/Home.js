import { useEffect, useState } from "react";
import Form from "../Components/Form";
import TransactionTable from "../Components/Transactiontable.js"
import { Container } from "@mui/material";
import Cookies from "js-cookie";

function Home() {
  const [transaction,setTransaction]=useState([])
  const [editTransaction,setEdittransaction]=useState()

  const fetchTransaction=async()=>{
    const token=Cookies.get("token")
    const res =await fetch("http://localhost:5000/transaction",{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    const {data}=await res.json()
    setTransaction(data)
  }

useEffect(() => {
  fetchTransaction()
}, [])


  return (
    <div>
      <Container>
      <Form fetchTransaction={fetchTransaction} editTransaction={editTransaction}/>
      <TransactionTable transaction={transaction} fetchTransaction={fetchTransaction} setEdittransaction={setEdittransaction}/>
      </Container>
     
    </div>
  );
}

export default Home;
