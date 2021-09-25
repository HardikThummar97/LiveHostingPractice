import React, { useContext } from "react";
import { CartContext } from "./contexts/CartContext";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  const cartTotal = cart.reduce((ac, el) => {
    return ac + el.price * el.quantity;
  }, 0);

  console.log(cartTotal);
  return (
    <div className="cartContainer">
      <h3>Total Items</h3>
      <div className="table">
        <div style={{ fontWeight: "bold" }} className="row">
          <div>Item</div>
          <div>Qty</div>
          <div>
            Price
            <br />
            (in Rs)
          </div>
          <div>Final Price</div>
        </div>
        {cart.map((el) => (
          <div key={el.id} className="row">
            <div>{el.title}</div>
            <div>{el.quantity}</div>
            <div>{~~el.price}</div>
            <div>{~~el.price * el.quantity}</div>
          </div>
        ))}
      </div>
      <div style={{ fontWeight: "bold" }} className="row last">
        <div>Total Price</div>
        <div>{~~cartTotal}</div>
      </div>
    </div>
  );
};
