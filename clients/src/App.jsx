import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="">
      <ToastContainer/>
      <Navbar Cookies={Cookies}/>
      <Outlet />
     
    </div>
  );
}

export default App;
