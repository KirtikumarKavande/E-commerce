import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import { useParams } from "react-router-dom";
import { productsArr } from "../ProductData/productData";

const Product = () => {
  const paramsId = useParams();

  const index = productsArr.findIndex((object) => {
    return Number(object.id) === Number(paramsId.productDetails);
  });
  console.log(index);
  const dataObj = productsArr[index];

  return (
    <div>
      <Container>
        <Row>
          <Col xs={4} style={{ backgroundColor: "#e1e1e1" }}>
            <img
              src={dataObj.imageUrl}
              style={{
                width: "100%",
                height:"100%",
                position: "sticky",
                top: "0",
                paddingTop: "1rem",
              }}
              alt="loading...."
            />
          </Col>
          <Col xs={8}>
            <div>
              <div style={{ fontSize: "1.5rem" }}>{dataObj.title}</div>
              <div style={{ fontWeight: "bolder", fontSize: "2rem" }}>
                {" "}
                &#x20b9;{dataObj.price}
              </div>
              <h4>
                <Badge bg="success">4 star</Badge>
              </h4>
            </div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </div>
            <div>
              <p style={{ fontSize: "2rem" }}> Rating and Reviws</p>

                {dataObj.Review.map((item)=>{
                    return(
                        <>
                         <div style={{ marginBottom: "0.7rem" }}>
                <span>
                  <Badge bg="success">{item.rating} star</Badge>
                  <span style={{ fontSize: "1rem", marginLeft: "2px" }}>
                  {item.comment}
                  </span>
                  <div style={{ color: "#807171" }}>{item.name}</div>
                </span>
              </div>
                        </>
                    )
                })}
             
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
