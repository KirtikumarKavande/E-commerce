import React from "react";
import CardComponent from "./Card";
import { Col, Row } from "react-bootstrap";
import CartItem from "../Cart/CartItem";
import { useOutletContext } from "react-router-dom";

const Body = () => {
  const [show, handleShow,handleClose] = useOutletContext();
  console.log('show',show)
  
  const productsArr = [
    {
      id: 1,
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      
    },

    {
      id: 2,
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        
    },

    {
      id: 3,
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: 4,
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <div>
      <CartItem handleClose={handleClose} show={show} />
      <div className="container ">
        <Row>
          {productsArr.map((item) => (
            <Col lg={6} md={6} sm={12} key={item.id}>
              <CardComponent
                title={item.title}
                price={item.price}
                image={item.imageUrl}
                id={item.id}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Body;
