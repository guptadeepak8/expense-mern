import React from 'react'
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
export default function AuthCheck({children}) {
  const token = Cookies.get("token");
  return token ? children : <Navigate to="/login" replace={true} />
}

 