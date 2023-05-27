import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
function App() {
  return (
    <div className="">
      <Navbar Cookies={Cookies}/>
      <Outlet />
     
    </div>
  );
}

export default App;
