import React, { useState } from "react";
import NavBar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <NavBar handleShow={handleShow} />
      <Outlet context={[show, handleShow,handleClose]} />
      <Footer />
    </div>
  );
};

export default Home;
