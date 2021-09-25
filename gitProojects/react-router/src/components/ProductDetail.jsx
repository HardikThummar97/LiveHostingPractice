import React, { useState, useEffect, useContext } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./contexts/AuthContext";
import { CartContext } from "./contexts/CartContext";

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);

  const { token } = useContext(AuthContext);
  const { addCart } = useContext(CartContext);

  const handleQty = (val) => {
    setQty(qty + val);
  };

  const getProduct = () => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
      // console.log(res.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return token === "" ? (
    <Redirect to="/login" />
  ) : loading ? (
    <div>Loading...</div>
  ) : (
    <div key={product.id} className="description">
      <img src={product.image} alt="product" />
      <div>
        <h3>{product.title}</h3>
        <h2>Rs. {product.price}</h2>
        <h4>Rating: {product.rating.rate}</h4>
        <h4>Category: {product.category}</h4>
        <p>{product.description}</p>
        <div className="quantity">
          <button
            disabled={qty === 1}
            onClick={() => {
              handleQty(-1);
            }}
          >
            -
          </button>
          <input readOnly type="text" value={qty} />
          <button
            onClick={() => {
              handleQty(1);
            }}
          >
            +
          </button>
        </div>
        <button
          onClick={() => {
            const obj = { ...product, quantity: qty };
            addCart(obj);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
