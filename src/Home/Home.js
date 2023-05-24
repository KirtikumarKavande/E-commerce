import React, { useState } from "react";
import NavBar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <NavBar handleShow={handleShow} />
      <Body handleClose={handleClose} show={show} />
      <Footer />
    </div>
  );
};

export default Home;
