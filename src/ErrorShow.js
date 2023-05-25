import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorShow = () => {
  const navigate = useNavigate();

  const navigateFunc = () => {
    navigate("/");
  };
  return (
    <>
      <div>You Have Entered Wrong this LINk !!!!!!!!!!!! </div>
      <button onClick={navigateFunc}>Go to Homepage</button>
    </>
  );
};

export default ErrorShow;
