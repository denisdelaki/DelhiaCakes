import React from "react";
 import "../App.css";
import Nav from "./Nav";
function Header() {
  return (
    <div id="header">
      <div>
        <h1 className="name">DELHIA CAKES</h1>
        <h4>Making Every Celebration Sweeter.</h4>
      </div>
      <div>
        <Nav />
      </div>
    </div>
  );
}
export default Header;
