import React from "react";
function Product({ cake, onAddCart }) {

  const { id } = cake
  
  function handleClicks() {
   let updatedlikes = {
      likes: cake.likes + 1,
   };
    window.location.reload()
    fetch(`https://delhiabakery.herokuapp.com/cakes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedlikes),
    })
      .then((res) => res.json())
      .then(updatedlikes);
  }
  
    return (
      <div id="cakes">
        <div key={cake.id} className="cakecard">
          <img src={cake.image} alt={cake.name} height="70%" width="100%" />
          <div className="content">
            <div>
              <h4>Name: {cake.name}</h4>
              <h4>Price: Ksh. {cake.price}</h4>
            </div>
            <div>
              <h4>QNT: {cake.quantity}</h4>
              <h4>Available: {cake.available}</h4>
            </div>
          </div>
          <button className="btn-likes" onClick={handleClicks}>
            Likes:{cake.likes}💛
          </button>
          <button className="cartbutton" onClick={() => onAddCart(cake)}>
            Add To Cart
          </button>
        </div>
      </div>
    );
}
export default Product;
