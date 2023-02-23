import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
function App() {
  return (
    <>
      <Navbar Cookies={Cookies}/>
      <Outlet/>
     
    </>
  );
}

export default App;
