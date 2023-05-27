import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const ContactUsFormData = (e) => {
    e.preventDefault();
    const obj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };
    // console.log(obj);
    async function sendContactUsData() {
      const response = await fetch(
        "https://ecommercemusic-626b2-default-rtdb.firebaseio.com/contact.json",
        {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "content-type": "application/json",
          },
        }
      );
    }
    sendContactUsData()
  };
  return (
    <div className="container">
      <Form
        style={{
          width: "22rem",
          border: "1px solid  #0D6EFD",
          padding: "2rem",
          margin: "2rem auto",
        }}
        onSubmit={ContactUsFormData}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Name" ref={nameRef} />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Phone Number"
            ref={phoneRef}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
