import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import App from "./App";


import { createBrowserRouter } from "react-router-dom";
import AuthCheck from "./utils/AuthCheck";
import CheckGuest from "./utils/CheckGuest";

export default createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <AuthCheck><Home/></AuthCheck>
      },
      {
        path: "/login",
        element: <CheckGuest><Login /></CheckGuest>,
      },
      {
        path: "/register",
        element: <CheckGuest><Register /></CheckGuest>,
      },
    ],
  },
]);
