import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import CartCtx from "../Store/CartContex";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { LoginToken } from "../Store/Login/LoginContext";

const NavBar = ({ handleShow }) => {
  const ctxData = useContext(CartCtx);
  const LoginData=useContext(LoginToken);
  let quantity = 0;
  ctxData.cartData.map((item) => {
    quantity = quantity + item.quantity;
  });
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {!!LoginData.token &&
            <NavLink
            to="/album"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "2rem",
            }}
          >
            Album
          </NavLink>
            }
            

            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "2rem",
              }}
              end
            >
              Home
            </NavLink> 


            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "2rem",
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/contactUs"
              className={({ isActive }) => (isActive ? "activeLink" : "")}
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "2rem",
              }}
            >
              Contact
            </NavLink>
            {!!!LoginData.token &&
            
            <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "2rem",
            }}
          >
          Login
          </NavLink>
            }
           
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Button variant="primary" onClick={handleShow} >
              <img
                src="https://media.gettyimages.com/id/1243437913/photo/online-shopping-cart.jpg?s=612x612&w=0&k=20&c=qY5X2h2kkq6fZzHJpySr2B6t8m6EqJdnCLWxoOXabeE="
                alt="cart"
                style={{ width: "50px", height: "50px", borderRadius: "10px" }}
              />
              {quantity > 0 && (
                <Badge
                  bg="secondary"
                  style={{ position: "relative", right: "15px", top: "-22px" }}
                >
                  {quantity}
                </Badge>
              )}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
