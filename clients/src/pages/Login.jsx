import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../Components/Loading.jsx";

import { useDispatch } from "react-redux";
import {  loginUserAsync } from "../store/auth/authSlice.js";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const [form,setForm]=useState({
    email:'',
    password:''
  })
  const [isLoading, setIsLoading] = useState(false);
 const handleChange=(e)=>{
  const {name,value}=e.target
  setForm({...form,[name]:value})
 }


  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const res = await dispatch(loginUserAsync(form));
      if(res){
        Cookies.set('token', res.payload.token);
        navigate('/');
      }
     else{
      throw new Error
     }
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message, {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
      
    }finally {
      setIsLoading(false);
    }
  }



  const isFormValid = form.email.trim() !== '' && form.password.trim() !== '';
 
  return (
    <>

     {isLoading && <Loading />} 
      <div className="flex flex-col justify-center items-center min-h-screen ">
        <div className=" bg-zinc-100 rounded-xl">
         <div className="py-6 px-5">
       
         <h2 className="mx-10 my-5 text-xl text-slate-600 font-bold text-center">SignIN</h2>
        <form  onSubmit={handleSubmit} className="flex flex-col">
          <input 
            className="text-slate-600  bg-slate-200  min-[850px]:mx-50 outline-none  text-xl  px-4 py-3 mx-3 my-3 shadow-lg shadow-indigo-700/50 rounded-3xl"
            id="email"
            placeholder="Email Address"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            autoFocus
          />
          <input
             className="text-slate-600 bg-slate-200 min-[850px]:mx-50 outline-none  text-xl  px-4 py-3 mx-3 my-3 shadow-lg shadow-indigo-700/50 rounded-3xl"
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            id="password"
            placeholder="Password"
            autoComplete="current-password"
          />
          <button
            type="submit"
            disabled={!isFormValid}
            className={`mx-10 my-3 px-4  py-2  text-white  text-xl rounded-xl text-center ${
              isFormValid
                ? "bg-slate-600 shadow-lg shadow-neutral-500/50"
                : "bg-gray-400 cursor-not-allowed"}`}
          >
            Sign In
          </button>
          <h2 className="mx-10 my-2 text-l text-slate-600 font-bold">Don't have an account?<Link to="/register" ><span className="text-indigo-500">Register Here</span></Link></h2>
        </form>
         </div>
        </div>
      </div>
    </>
  );
}
