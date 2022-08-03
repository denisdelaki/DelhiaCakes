import React from "react";
function Product({ cake, onAddCart }) {
  
    return (
      <div id="cakes">
        <div key={cake.id} className="cakecard">
          <img src={cake.image} alt={cake.name} height="70%" width="100%" />
          <div className="content" >
            <div>
              <h4>Name: {cake.name}</h4>
              <h4>Price: {cake.price}</h4>
            </div>
            <div>
              <h4>QNT: {cake.quantity}</h4>
              <h4>Available: {cake.available}</h4>
            </div>
          </div>
          <button className="cartbutton" onClick={()=>onAddCart(cake)}>Add To Cart</button>
        </div>
      </div>
    );
}
export default Product;
