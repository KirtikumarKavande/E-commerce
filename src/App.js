import React, { useContext } from "react";
import Home from "./Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Album from "./Pages/Album";
import About from "./Pages/About";
import Root from "./Root";
import { useState } from "react";
import Body from "./Home/Body";
import ErrorShow from "./ErrorShow";
import AlbumDetails from "./Pages/AlbumDetails";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import { LoginToken } from "./Store/Login/LoginContext";

const LoginStatus = localStorage.getItem("idToken");
let isLoggedIn = false;

const myrouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorShow />,
    children: [
      { path: "", element: <Body /> },

      {
        path: "/:productDetails",
        element: <Product />,
      },
      { path: "about", element: <About /> },
      { path: "album", element: <Album /> },
      { path: "contactUs", element: <Contact /> },
      { path: "login", element: <Login /> },

      { path: "album/:details", element: <AlbumDetails /> },
    ],
  },
]);

const App = () => {
  const statusToken = useContext(LoginToken);
  console.log("app", statusToken.token);

  isLoggedIn = !!statusToken;
  return (
    <div>
      <RouterProvider router={myrouter} />
      {/* <Home /> */}
    </div>
  );
};

export default App;
