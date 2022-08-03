import React from "react";
import Product from "./Products";
function Home({cakes, onAddCart}) {
    
    const delhiacakes = cakes.map((cake) => {
      return <Product key={cake.id} cake={cake} onAddCart={onAddCart}/>
  })
    
  return (
      <div>
    {delhiacakes}
    </div>
  );
}
export default Home;
