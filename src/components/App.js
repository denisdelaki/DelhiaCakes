import React, {useState, useEffect} from "react";
import Cart from "./Cart";
import Custom from "./Custom";
 import "../App.css";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  const [cakes, setCakes] = useState([])
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch("http://localhost:8004/cakes")
      .then(res => res.json())
      .then(cakes => setCakes(cakes))
    
  }, [])
 
  function onAddCart(cake) {
    if (cart.indexOf(cake) !== -1) return;
    
    fetch("http://localhost:8004/cart", {
      method: "POST",
      headers: {
         "Content-Type":"application/json",
      },
      body:JSON.stringify(cake)
    })
      .then((res) => res.json())
    .then(()=>setCart(...cart, cake))
   
    // setCart(mycart)
    alert("Cart Added Successfully")
  }
  
  function onDeleteCart(id) {
    let filtered = cart.filter(cart => cart.id !== id)
    setCart(filtered)
  }
   
  return (
    <>
      <Header cart={cart} />
      <Routes>
        <Route
          exact
          path="/home"
          element={<Home cakes={cakes} onAddCart={onAddCart} />}
        ></Route>
        <Route exact path="/custom" element={
 <Custom /> }></Route>
        <Route
          exact
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              onDeleteCart={onDeleteCart}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
