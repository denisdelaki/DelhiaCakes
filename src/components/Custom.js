
import React, {useState, useEffect} from "react";
function Custom() {
  const [showForm, setShowForm] = useState(true);
  const [custom, setcustom]=useState([])
  const [customorders, setCustomeOrders] = useState({
    fullname: "",
    email: "",
    cake: "",
    quantity: "",
    phonenumber: "",
    image: "",
    description:""
  })
  const [customer, setCustomers] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    cake: ""
  });
   function toggleForm() {
     setShowForm((showForm) => {
       return !showForm;
     });
   }
  function handleChange(e) {
    const key = e.target.id;
    setCustomeOrders({ ...customorders, [key]: e.target.value });
    setCustomers({ ...customer, [key]: e.target.value });
  }
  useEffect(() => {
    fetch("https://delhiabakery.herokuapp.com/orders")
      .then((res) => res.json())
      .then((custom) => setcustom(custom));
  }, [])
  const theCustom = custom.map((custom) => (
    <div key={custom.id}>
      <table>
        <tbody>
          <tr>
            <th>
              <h2>Order Details</h2>
            </th>
            <td>
              <h3>fullname:{custom.fullname}</h3>
              <h3>Email:{custom.email}</h3>
              <h3>Phonenumber:{custom.phonenumber}</h3>
              <h3>Cake:{custom.cake}</h3>
              <h3>QNT:{custom.quantity}</h3>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ));
  function handleOrders(e) {
    e.preventDefault();
    fetch("https://delhiabakery.herokuapp.com/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: customer.fullname,
        email: customer.email,
        phonenumber: customer.phonenumber,
        cake: customer.cake,
      }),
    })
      .then((res) => res.json())
      .then((customer) => {
        setCustomers({
          ...customer,
          fullname: "",
          email: "",
          phonenumber: "",
          cake: "",
        });
      });
    fetch("https://delhiabakery.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: customorders.fullname,
        email: customorders.email,
        cake: customorders.cakecake,
        quantity: customorders.quantity,
        phonenumber: customorders.phonenumber,
        image: customorders.image,
        description: customorders.description,
      }),
    })
      .then((r) => r.json())
      .then((customorders) => {
        setCustomeOrders({
          ...customorders,
          fullname: "",
          email: "",
          cake: "",
          quantity: "",
          phonenumber: "",
          image: "",
          description: "",
        });
      });
  }
    
  return (
    <div>
      <button className="toggleBtn" onClick={toggleForm}>{showForm ? "View Orders" : "Make Order"}</button>
      { showForm? 
        <form id="customorder" onSubmit={handleOrders}>
          <h1>Delhia Bakers</h1>
          <h4>Custom Orders</h4>
          <label>
            Full Names <span className="asterisk">*</span>:
          </label>
          <br />
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full Name"
            value={customorders.fullname}
            onChange={handleChange}
            required
          />{" "}
          <br />
          <label>
            Emaill Address <span className="asterisk">*</span>:
          </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={customorders.email}
            onChange={handleChange}
            placeholder="Email Addresss"
            required
          />{" "}
          <br />
          <label>
            Cake's Name <span className="asterisk">*</span>:
          </label>
          <br />
          <input
            type="text"
            name="cake"
            id="cake"
            value={customorders.cake}
            onChange={handleChange}
            placeholder="Name of the cake"
            required
          />{" "}
          <br />
          <label>
            Quantity in kgs <span className="asterisk">*</span>:
          </label>
          <br />
          <input
            type="text"
            name="quantity"
            id="quantity"
            value={customorders.quantity}
            onChange={handleChange}
            placeholder="Specify the Quantity in kgs"
            required
          />
          <br />
          <label>
            Phone Number <span className="asterisk">*</span>:
          </label>
          <br />
          <input
            type="text"
            name="phonenumber"
            id="phonenumber"
            value={customorders.phonenumber}
            onChange={handleChange}
            placeholder="Phone Number "
            required
          />{" "}
          <br />
          <label>Image:</label>
          <br />
          <input
            type="text"
            name="image"
            id="image"
            value={customorders.image}
            onChange={handleChange}
            placeholder="Upload the Image Url"
          />
          <br />
          <label>Additional description:</label> <br />
          <textarea
            rows="6"
            cols="60"
            id="description"
            value={customorders.description}
            placeholder="Additional Description"
            onChange={handleChange}
            name="description"
            style={{ marginLeft: "0.9rem" }}
          ></textarea>{" "}
          <br />
          <button type="submit" className="orderbutton">
            Order
          </button>
        </form>
        : <div className="orders">
          <div className="orderCard">{theCustom}</div>
        </div>}
    </div>
  );
}
export default Custom;
