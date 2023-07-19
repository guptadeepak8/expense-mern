
import { Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { getUsers } from "../store/auth/authSlice";


export default function AuthCheck({children}) {
  const token=Cookies.get('token')
  const user = useSelector(getUsers);
  return user?children:<Navigate to='/login'/>
}
