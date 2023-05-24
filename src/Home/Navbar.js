import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = ({handleShow}) => {
  return (
    <div> 
  <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
       
      <Button variant="primary" onClick={handleShow}>
      <img src="https://media.gettyimages.com/id/1243437913/photo/online-shopping-cart.jpg?s=612x612&w=0&k=20&c=qY5X2h2kkq6fZzHJpySr2B6t8m6EqJdnCLWxoOXabeE=" alt='cart' style={{width:"50px",height:"50px"}}/>
      </Button>
        </Navbar.Collapse>
    </Container>
  </Navbar>

 </div>
  )
}

export default NavBar