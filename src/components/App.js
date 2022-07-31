import React from "react";
import Cart from "./Cart";
import Classes from "./Classes";
 import "../App.css";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";

function App() {
 
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/classes" element={<Classes />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
       
      </Routes>
      
    </>
  );
}

export default App;
