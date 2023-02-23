import {useState,useEffect} from "react"
import "../css/index.css"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({Cookies}) {
  const navigate = useNavigate();
const token=Cookies.get('token')

const [toggle,setToggle]=useState()
  function remove() {
    Cookies.remove("token");
    setToggle(null)
    navigate("/login");
  }

  useEffect(()=>{
    setToggle(token)
    console.log('iam running');
  },[token])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EXPENZAR
          </Typography>


          {!toggle &&<Button color="inherit">
            <Link  className="btn" to="/login">LOGIN</Link>
          </Button>}
          {toggle &&<Button color="inherit" onClick={remove}>
            LOGOUT
          </Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
