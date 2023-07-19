import {useState,useEffect} from "react"
import "../css/index.css"
import { Link } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import {  getUsers, signOutAsync } from "../store/auth/authSlice";
import Cookies from "js-cookie";
import { resetTransactions } from "../store/transaction/transactionSlice";

export default function Navbar() {
  const dispatch=useDispatch();
  const user=useSelector(getUsers)

  function remove() {
    Cookies.remove('token')
    dispatch(signOutAsync());
    dispatch(resetTransactions());
  }

  return (
<>
     
<nav className="py-4 px-8  bg-white shadow-lg shadow-neutral-950/50 ">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold text-black">
            <Link to="/">EXPENZAR</Link>
          </h1>
          <div>
            {user ? (
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
