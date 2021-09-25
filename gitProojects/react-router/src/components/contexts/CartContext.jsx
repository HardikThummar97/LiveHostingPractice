import React, { createContext, useState } from "react";
// import { Redirect } from "react-router-dom";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (obj) => {
    setCart([...cart, obj]);
    // <Redirect to="/" />;
  };

  let value = { cart, addCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
