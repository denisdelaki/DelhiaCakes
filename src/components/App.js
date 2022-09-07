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
 
  // const {image, name, price, quantity}=cart
  useEffect(() => {
    fetch("http://localhost:8004/cakes")
      .then(res => res.json())
      .then(cakes => setCakes(cakes))
    
  }, [])
 useEffect(() => {
   fetch("http://localhost:8004/cart")
     .then((res) => res.json())
   .then(cart=>setCart(cart))
 }, []);
  function onAddCart(cakes) {
   
    // const mycart=[...cart, cake]
    fetch("http://localhost:8004/cart", {
      method: "POST",
      headers: {
         "Content-Type":"application/json",
      },
      body: JSON.stringify(cakes)
    })
      .then((res) => res.json())
      .then((data) => {
         if (cakes.indexOf(cart) !== -1) return ;
        setCart(data)
      })
   
    // setCart(mycart)
    alert("Cart Added Successfully")
    window.location.reload()
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
