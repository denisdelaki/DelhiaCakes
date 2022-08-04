
import React, {useState, useEffect} from "react";
function Cart({ cart, setCart }) {
  const [amount, setAmount]=useState(1)
  const [price, setPrice] = useState(0)
  useEffect(() => {
    function handlePrice() {
      let cartPrice = 0;
      cart.map((cartItem) => (cartPrice += amount * cartItem.price));
      setPrice(cartPrice);
    }
  })
 
    
  function handleChange(e ) {
    setAmount(e.target.value)
    
   }

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
                  <input className="quant" type="number" value={amount} onChange={handleChange} />
              </label>
              </span>
            </td>
            <td>{cartItem.price}</td>
            <td>
              <button className="deletecart">Delete Cart</button>
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
          <p>Ksh: {price}</p>
          <button className="checkout">checkout</button>
        </div>
      </div>
    );
}
export default Cart