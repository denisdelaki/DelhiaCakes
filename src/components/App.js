import React, {useState, useEffect} from "react";
import Cart from "./Cart";
import Classes from "./Classes";
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
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/home" element={<Home cakes={cakes} />}></Route>
        <Route exact path="/classes" element={<Classes />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
       
      </Routes>
      
    </>
  );
}

export default App;
