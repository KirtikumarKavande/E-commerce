import React, { useContext } from "react";
import Home from "./Home/Home";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
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

const App = () => {
  const ctxstatus = useContext(LoginToken);

  const myrouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorShow />,
      children: [
        { path: "", element: <Body /> },

        {
          path: "/:productDetails",
          element: !!ctxstatus.token ? <Product /> : <Login />,
        },
        { path: "about", element: <About /> },
        { path: "album", element: <Album /> },
        { path: "contactUs", element: <Contact /> },
        {
          path: "login",
          element: !!!ctxstatus.token ? (
            <Login />
          ) : (
            <p>you are already looged in</p>
          ),
        },

        { path: "album/:details", element: <AlbumDetails /> },
      ],
    },
  ]);

  const statusToken = useContext(LoginToken);
  console.log("app", statusToken.token);

  return (
    <div>
      <RouterProvider router={myrouter} />
      {/* <Home /> */}
    </div>
  );
};

export default App;
