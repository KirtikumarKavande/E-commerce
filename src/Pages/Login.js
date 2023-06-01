import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const navigate=useNavigate()
  const emailRef = useRef();
  const passRef = useRef();

  const ContactUsFormData = (e) => {
    e.preventDefault();
    const obj = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    // console.log(obj);
    async function sendContactUsData() {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDnMuNg7zDVo3zomci3-trrky63QTafcMg",
        {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
            "content-type": "application/json",
          },
        }
      )
          const res=await response.json()
          if(res.idToken){
            navigate('/album')
            localStorage.setItem("idToken", res.idToken)
          }else{
            alert('you entered wrong Pawsword')
          }
    }
    emailRef.current.value = "";
    passRef.current.value = "";
    sendContactUsData();
  };
  return (
    <div className="container">
      <Form
        style={{
          width: "22rem",
          border: "1px solid  #0D6EFD",
          padding: "2rem",
          margin: "2rem auto",
          marginBottom:"5rem",
          marginTop:"7rem"
        }}
        onSubmit={ContactUsFormData}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" ref={emailRef} />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            ref={passRef}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
