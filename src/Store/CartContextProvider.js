import React, { useEffect, useState } from "react";
import CartCtx from "./CartContex";

const CartContextProvider = (props) => {
  const [newData, setNewData] = useState([]);
  const [originalCartItem, setOrignalCartItem] = useState([]);
  const[updatedIndex,setUpdatedIndex] = useState(-1)
  const[id,setId]=useState(null)
  console.log("original", originalCartItem);
  console.log("newData", newData);

  const [cartItem, setCartItem] = useState(originalCartItem);
  const addItemToCartFunc = (item) => {
    const itemWIthQuantity = { ...item, quantity: 1 };
    const index = obj.cartData.findIndex((object) => {
      return object.id === itemWIthQuantity.id;
    });
    const existingCartItem = obj.cartData[index];
    if (existingCartItem) {
      let updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      const newUpdatedObj = [...obj.cartData];
      newUpdatedObj[index] = updatedItem;
      setCartItem(newUpdatedObj);
    } else {
      setCartItem([...cartItem, itemWIthQuantity]);
    }
  };
  const removeItemFromCartFunc = (item) => {
    const index = obj.cartData.findIndex((object) => {
      return object.id === item.id;
    });
    const existingCartItem = obj.cartData[index];
    let updatedItem = {
      ...existingCartItem,
      quantity: existingCartItem.quantity - 1,
    };
    const newUpdatedObj = [...obj.cartData];
    newUpdatedObj[index] = updatedItem;

    setCartItem(newUpdatedObj);
  };

  const obj = {
    cartData: cartItem,
    addItemToCartFunc: addItemToCartFunc,
    removeItemFromCartFunc: removeItemFromCartFunc,
  };
  const email = localStorage.getItem("email");
  const newEmail = email?.replace(/[^a-zA-Z\s]/g, "");
  console.log("newEmail", obj);

  useEffect(() => {
    fetch(`https://crudcrud.com/api/ee6c577404a94ec5a375eb1377309fc8/${newEmail}`)
      .then((response) => response.json())
      .then((data) => {
       

        const index = data.findIndex((object) => {
          return String(object.email) === String(newEmail);
        });
        setNewData(data);

        
        if (index > -1) {
          console.log("underIndex", index);
          setCartItem(data[index]?.data);
          console.log("evalute useEffect");
          
        }
      });
  }, [newEmail,updatedIndex]);

  useEffect(() => {
    const email = localStorage.getItem("email");
    let newEmail = email?.replace(/[^a-zA-Z\s]/g, "");
    const token = localStorage.getItem("token");

    const newObj = {
      email: newEmail,
      data: obj.cartData,
    };
    let index = newData?.findIndex((object) => {
      return String(object.email) === String(newEmail);
    });
    console.log('imp',index)
    if (!!token && obj.cartData.length > 0) {
      if (updatedIndex < 0) {
        setUpdatedIndex(0)
        console.log("post");
        fetch(
          `https://crudcrud.com/api/ee6c577404a94ec5a375eb1377309fc8/${newEmail}`,
          {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: "POST",
            body: JSON.stringify(newObj),
          }
        )
          .then((response) => response.json())
          .then((data) => console.log(data));
      } else {
        console.log("put");
        const id = newData[updatedIndex]?._id;
        console.log(id)
        fetch(
          `https://crudcrud.com/api/ee6c577404a94ec5a375eb1377309fc8/${newEmail}/${id}`,
          {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: "PUT",
            body: JSON.stringify(newObj),
          }
        ).then((response) => console.log(response));
      }
    }
  }, [obj.cartData]);

  return (
    <div>
      <CartCtx.Provider value={obj}>{props.children}</CartCtx.Provider>
    </div>
  );
};

export default CartContextProvider;
