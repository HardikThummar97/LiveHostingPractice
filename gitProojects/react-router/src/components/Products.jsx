import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products">
      {products.map((el) => (
        <div className="product" key={el.id}>
          <Link to={`/products/${el.id}`}>
            <img src={el.image} alt="Product" />
            <h4>{el.title}</h4>
            <h3>{el.price}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
