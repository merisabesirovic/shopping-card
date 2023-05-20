import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/shopping-cart-3045.png";
export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to={"/home"}>
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <div className="links">
        <NavLink
          to={"/home"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <h2>HOME</h2>
        </NavLink>
        <NavLink
          to={"/shop"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <h2>PRODUCTS</h2>
        </NavLink>
        <NavLink
          to={"/cart"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <h2>CART</h2>
        </NavLink>
      </div>
    </header>
  );
}
