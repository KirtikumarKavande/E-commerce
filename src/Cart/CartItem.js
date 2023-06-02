import React, { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Card } from "react-bootstrap";
import CartCtx from "../Store/CartContex";

const CartItem = ({ handleClose, show }) => {
  const ctxData = useContext(CartCtx);
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card border="primary" style={{ width: "100%" }}>
            <Card.Header>CART</Card.Header>
            <Card.Body>
              <Card.Text>
                <Row>
                  <Col style={{fontWeight:"bold"}} xs={3}>ITEM</Col>
                  <Col style={{fontWeight:"bold"}}  xs={2}>NAME</Col>

                  <Col style={{fontWeight:"bold"}}  xs={2}>PRICE</Col>
                  <Col style={{fontWeight:"bold"}}  xs={2}>Qty</Col>
                  <Col style={{fontWeight:"bold"}}  xs={3}>ADD</Col>
                </Row>
                <Row>
                  {ctxData?.cartData?.map((item) => (
                    <>
                      <Col xs={3}>
                        <img
                          src={item.image}
                          style={{ height: "2rem", width: "4rem", margin: "auto",
                          display: "block"}}
                          alt="not loaded"
                        />
                      </Col>
                      <Col xs={2}>{item.title}</Col>

                      <Col xs={2}>{item.price}</Col>
                      <Col xs={2}>{item.quantity}</Col>
                      <Col xs={3}>
                        <Button
                          size="sm"
                          variant="success"
                          style={{ marginRight: "10px" }}
                          onClick={()=>{ctxData.addItemToCartFunc(item)}}
                        >
                          +
                        </Button>
                        <Button variant="danger" size="sm" onClick={()=>{ctxData.removeItemFromCartFunc(item)}}>
                          -
                        </Button>
                      </Col>
                      <hr></hr>
                    </>
                   
                  ))}
                </Row>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <span style={{ display: "block", textAlign: "end" }}>Total</span>
              <span
                style={{
                  display: "block",
                  textAlign: "end",
                  fontWeight: "bold",
                }}
              >
                $12.99
              </span>
            </Card.Footer>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Proceed to Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartItem;
