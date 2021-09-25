import axios from "axios";
import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

export const Login = () => {
  const [formData, setFormData] = useState({});
  const { token, handleLogin } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return token ? (
    <Redirect to="/" />
  ) : (
    <div>
      <h3>Login</h3>
      <input
        onChange={handleChange}
        type="text"
        name="email"
        placeholder="Email"
      />
      <br />
      <input
        onChange={handleChange}
        type="password"
        name="password"
        placeholder="Password"
      />
      <br />
      <button
        onClick={() => {
          console.log(formData);
          axios
            .post("https://reqres.in/api/login", formData)
            .then((res) => {
              console.log(res.data.token);
              handleLogin(res.data.token);
              // <Redirect to="/" />;
            })
            .catch((err) => {
              console.log("err: ", err);
            });
        }}
      >
        Login
      </button>
    </div>
  );
};
