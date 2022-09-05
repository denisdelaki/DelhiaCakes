import React from "react";
 import "../App.css";
import { NavLink } from "react-router-dom";
function Nav({cart}) {
    let carts=cart.length
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/custom">Custom Orders</NavLink>
      <NavLink to="/cart">
        InCart <span>{carts}</span>
      </NavLink>
    </nav>
  );
}
export default Nav

