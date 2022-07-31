import React from "react";
import Product from "./Products";
function Home({cakes}) {
    
    const delhiacakes = cakes.map((cake) => {
        return <Product cake={cake} />
  })
    
  return (
      <div>
    {delhiacakes}
    </div>
  );
}
export default Home;
