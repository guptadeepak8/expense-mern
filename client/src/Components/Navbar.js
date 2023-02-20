
import "../css/index.css"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function Navbar() {
  const navigate = useNavigate();

  function remove() {
    Cookies.remove("token");
    navigate("/login");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EXPENZAR
          </Typography>
          <Button color="inherit">
            <Link  className="btn" to="/login">LOGIN</Link>
          </Button>
          <Button color="inherit" onClick={remove}>
            LOGOUT
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
