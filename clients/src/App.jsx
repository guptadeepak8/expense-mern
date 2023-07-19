import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { ToastContainer } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import {  fetchUserAsync, getUsers } from "./store/auth/authSlice";
import Loading from "./Components/Loading";


function App() {
  const user=useSelector(getUsers)
  const [loading, setLoading]=useState(true)
  const dispatch = useDispatch()

  
   function fetchuser() {
    dispatch(fetchUserAsync())
    setLoading(false)
  }

  useEffect(()=>{
    fetchuser()
  },[])

  
  if(loading){
    return <Loading/>
  }


  return (
    <>
      <ToastContainer/>
      <Navbar />
      <Outlet />
     
    </>
  );
}

export default App;
