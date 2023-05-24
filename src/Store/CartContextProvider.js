import React, { useState } from "react";
import CartCtx from "./CartContex";

const CartContextProvider = (props) => {
 const [cartItem,setCartItem]=useState([])
    const getCartDataFunc=(item)=>{
      setCartItem([...cartItem,item])

        
    }
    const obj={
        cartData:cartItem,
        getCartDataFunc:getCartDataFunc
    }
  return (
    <div>
      <CartCtx.Provider value={obj}>{props.children}</CartCtx.Provider>
    </div>
  );
};

export default CartContextProvider;
