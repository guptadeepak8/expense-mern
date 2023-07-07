import Navbar from "./Components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { ToastContainer } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import { getUser } from "./store/Reduce";
import Loading from "./Components/Loading";


function App() {
  const [loading, setLoading]=useState(true)
  const dispatch = useDispatch()
  const navigate=useNavigate();
  const token = Cookies.get("token");
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
 
  const fetchUser=async()=>{
    const res=await fetch(`${apiUrl}/user`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });

    if(res.ok){
      const user=await res.json();
      dispatch(getUser(user));
      setLoading(false)
    } else(
      setLoading(false)
    )
  }

  useEffect(()=>{
    fetchUser(); 
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
