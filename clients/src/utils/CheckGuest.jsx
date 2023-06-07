import React from 'react'
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
export default function CheckGuest({children}) {
  const token = Cookies.get("token");
  const auth = useSelector((state) => state.auth);
  return !auth.isAuth ? children : <Navigate to="/" replace={true} />
}

 