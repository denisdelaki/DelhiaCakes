import React, {useState, useEffect} from "react";
import Cart from "./Cart";
import Custom from "./Custom";
 import "../App.css";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  const [cakes, setCakes]=useState([])
  useEffect(() => {
    fetch("http://localhost:8004/cakes")
      .then(res => res.json())
    .then(cakes=>setCakes(cakes))
  }, [])
  function onAddCart() {
    console.log("added to the cart")
  }
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/home" element={<Home cakes={cakes} onAddCart={onAddCart} />}></Route>
        <Route exact path="/custom" element={<Custom />}></Route>
        <Route exact path="/cart" element={<Cart onAddCart={onAddCart} />}></Route>
       
      </Routes>
      
    </>
  );
}

export default App;
