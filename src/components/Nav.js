import React from "react";
 import "../App.css";
import { NavLink } from "react-router-dom";
function Nav() {
    return (
        <nav>
          
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/classes">Classes</NavLink>
            <NavLink to="/cart">Cart</NavLink>
       </nav>
    )
}
export default Nav

