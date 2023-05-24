import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartCtx from "../Store/CartContex";

const CardComponent = (props) => {
 const ctxData=useContext(CartCtx)
  const { title, price, image, } = props;

  return (
  
      <Card style={{ width: "14rem", margin:"auto"}}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div className="d-flex mr">
            <Card.Text style={{ marginRight: "89px", marginTop: "10px" }}>
              ${price}
            </Card.Text>
            <Button
              variant="primary"
              style={{ width: "109px", height: "36px" }}
              onClick={()=>{ctxData.addItemToCartFunc(props)}}
         
            >
              Add to cart
            </Button>
          </div>
        </Card.Body>
      </Card>
  
  );
};

export default CardComponent;
