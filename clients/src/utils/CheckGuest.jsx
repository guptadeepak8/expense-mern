import React from 'react'
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import {  getUsers } from '../store/auth/authSlice';
import Cookies from 'js-cookie';
export default function CheckGuest({children}) {
  const token=Cookies.get('token')
  const auth = useSelector(getUsers);
  return auth ? <Navigate to="/" replace={true}/> :children
}

 