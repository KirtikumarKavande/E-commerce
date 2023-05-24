import React, { useState } from "react";
import CartCtx from "./CartContex";

const CartContextProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
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
 
  return (
    <div>
      <CartCtx.Provider value={obj}>{props.children}</CartCtx.Provider>
    </div>
  );
};

export default CartContextProvider;
