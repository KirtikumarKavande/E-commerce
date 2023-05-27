import React from "react";
import Home from "./Home/Home";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Album from "./Pages/Album";
import About from "./Pages/About";
import Root from "./Root";
import { useState } from "react";
import Body from "./Home/Body";
import ErrorShow from "./ErrorShow";
import AlbumDetails from "./Pages/AlbumDetails";
import Contact from "./Pages/Contact";


const myrouter= createBrowserRouter([
 
{
    path:'/',
    element:<Home/>,
    errorElement:<ErrorShow/>,
    children:[
      {index:true,element:<Body/>},
      {path:'about', element:<About/>},
      {path:'album',element:<Album/>},
      {path:'contactUs',element:<Contact/>},

      {path:'album/:details',element:<AlbumDetails/>},

    ]
  }
]);

const App = () => {
  
  return (
    <div>
      <RouterProvider router={myrouter}/>
      {/* <Home /> */}
    </div>
  );
};

export default App;
