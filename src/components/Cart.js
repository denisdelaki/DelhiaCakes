
import React, {  useState } from "react";

function Cart({ cart, onDeleteCart, setCart }) {
  // const {name, price, image, quantity} = cart;
  const [amount, setAmount] = useState(1);
 let subTotal
  function handleChange(e) {
    setAmount(e.target.value);
  }
  
  function handleCartDelete(cart_id) {
    fetch(`http://localhost:9292/cart/${cart_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        onDeleteCart(cart_id);
        alert("Cart Item deleted successfully")
      });
  }
  
  let Total=cart.reduce((previousvalue, currentValue)=>previousvalue+currentValue.price, 0,)
   
   
  const thecart = cart.map((cartItem) => (
    <div key={cartItem.id} className="cartTable">
      <div>
        <table className="carttable">
          <tr>
            <td>
              <img
                className="imagecart"
                src={cartItem.image}
                alt={cartItem.name}
              />
            </td>
            <td>{cartItem.name}</td>
            <td>{cartItem.quantity}</td>
            <td>
              <span>
                <label>
                  <input
                    className="quant"
                    type="number"
                    value={amount}
                    onChange={handleChange}
                  />
                </label>
              </span>
            </td>
            <td>{cartItem.price}</td>
            <td></td>
            <td>{(subTotal = cartItem.price * amount)}</td>
            <td>
              <button
                className="deletecart"
                onClick={() => handleCartDelete(cartItem.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  ));

  return (
    <div>
      <div id="cartcard">
        {thecart}
        <h3>Total price of the goods in the Cart:</h3>
        <p>Ksh: {Total}</p>
        
        <button className="checkout">checkout</button>
      </div>
    </div>
  );
}
export default Cart