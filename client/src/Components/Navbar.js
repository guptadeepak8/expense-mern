import { useState } from "react";
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
          <Link to="/login">
            <Button color="inherit">LOGIN </Button>
          </Link>
          <Button color="inherit" onClick={remove}>
            LOGOUT
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
