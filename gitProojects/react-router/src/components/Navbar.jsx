import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    to: "/",
    title: "Home"
  },
  {
    to: "/about",
    title: "About"
  },
  {
    to: "/contact",
    title: "Contact"
  },
  {
    to: "/Products",
    title: "Products"
  },
  {
    to: "/login",
    title: "LogIn"
  },
  {
    to: "/dashboard",
    title: "Dashboard"
  },
  {
    to: "/dashboard/setting",
    title: "Dashboard Settings"
  },
  {
    to: "/cart",
    title: "Cart"
  }
];

export const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "center" }}>
      {links.map((link, i) => (
        <div key={i} style={{ padding: "10px" }}>
          <Link to={link.to}>{link.title}</Link>
        </div>
      ))}
    </nav>
  );
};
