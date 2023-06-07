
import { Navigate} from "react-router-dom";
import { useSelector } from 'react-redux';


export default function AuthCheck({children}) {
  const auth = useSelector((state) => state.auth);
  return auth.isAuth?children:<Navigate to='/login'/>
}

 