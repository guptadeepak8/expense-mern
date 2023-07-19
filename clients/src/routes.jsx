import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import App from "./App";


import { createBrowserRouter } from "react-router-dom";
import AuthCheck from "./utils/AuthCheck";
import CheckGuest from "./utils/CheckGuest";
import FormPage from "./pages/FormPage";
import Graph from "./pages/Graph";

export default createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <AuthCheck><Home/></AuthCheck>
      },
      {
        path: "/form",
        element: <AuthCheck><FormPage/></AuthCheck>,
      },
      {
        path: "/graph",
        element: <AuthCheck><Graph/></AuthCheck>,
      },
    ],
  },
  {
    path: "/register",
    element: <CheckGuest><Register /></CheckGuest>,
  },
  {
    path: "/login",
    element: <CheckGuest><Login /></CheckGuest>,
  }
  
]);
