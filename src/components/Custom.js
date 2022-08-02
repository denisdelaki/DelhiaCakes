
import React from "react";
function Custom() {
  return (
    <div>
      <form id="customorder">
        <h1>Delhia Bakers</h1>
        <h4>Custom Orders</h4>
        <label>
          Full Names <span className="asterisk">*</span>:
        </label>
        <br />
        <input type="text" name="fullname" placeholder="Full Name" required /> <br />
        <label>
          Emaill Address <span className="asterisk">*</span>:
        </label>
        <br />
        <input type="email" name="email" placeholder="Email Addresss"
        required/> <br />
        <label>
          Cake's Name <span className="asterisk">*</span>:
        </label>
        <br />
        <input type="text" name="cake" placeholder="Name of the cake"
        required /> <br />
        <label>
          Quantity in kgs <span className="asterisk">*</span>:
        </label>
        <br />
        <input
          type="text"
          name="quantity"
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
          placeholder="Phone Number "
          required
        />{" "}
        <br />
        <label>
          Image:
        </label>
        <br />
        <input
          type="text"
          name="image"
          placeholder="Upload the Image Url"
          
        />
        <br />
        <label>Additional description:</label> <br />
        <textarea rows="6" cols="60" style={{marginLeft:"0.9rem"}}></textarea> <br />
        <button type="submit" className="orderbutton">
          Order
        </button>
      </form>
    </div>
  );
}
export default Custom;
