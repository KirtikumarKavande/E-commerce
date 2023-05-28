import React from "react";
import CardComponent from "./Card";
import { Col, Row } from "react-bootstrap";
import CartItem from "../Cart/CartItem";
import { useOutletContext } from "react-router-dom";
import {productsArr} from '../ProductData/productData'

const Body = () => {
  const [show, handleShow,handleClose] = useOutletContext();
  console.log('show',show)
  
  

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
