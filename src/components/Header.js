import React from "react";
 import "../App.css";
import Nav from "./Nav";
function Header() {
  return (
    <div id="header">
      <div>
        <h1 className="name">
          <span style={{color:"chocolate"}}>DEL</span>HIA BAKERS
        </h1>
        <h3>Making Every Celebration Sweeter.</h3>
      </div>
      <div>
        <Nav />
      </div>
    </div>
  );
}
export default Header;
