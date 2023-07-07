import {useState,useEffect} from "react"
import "../css/index.css"
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/Reduce.js";
import Cookies from "js-cookie";

export default function Navbar() {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const token=Cookies.get('token')

const [toggle,setToggle]=useState()

  function remove() {
    dispatch(logout())
    Cookies.remove('token')
    setToggle(null)
    navigate("/login");
  }

  useEffect(()=>{
    setToggle(token)
  },[token])

  return (
<>
     
<nav className="py-4 px-8  bg-white shadow-lg shadow-neutral-950/50 ">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-black">
            <Link to="/">EXPENZAR</Link>
          </h1>
          <div>
            {toggle ? (
              <button 
                className="text-red-500 font-medium hover:text-red-400"
                onClick={remove}
              >
                LOGOUT
              </button>
            ) : (
              <Link
                to="/login"
                className="text-black font-medium hover:text-gray-200"
              >
                LOGIN
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
