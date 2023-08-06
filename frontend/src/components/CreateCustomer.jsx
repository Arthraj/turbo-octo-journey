import React from "react";
import { useState } from "react";
import CustomerService from "../service/CustomerService";
import { useNavigate } from "react-router-dom";

function CreateCustomer() {
  const [message, setMessage] = useState("");
  const [customer, setCustomer] = useState({
    address: "",
    city: "",
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    state: "",
    street: "",
  });
  const nav = useNavigate();

  const handleAddCustomer = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const createCustomer = () => {
    console.log(customer);
    if (customer.first_name.length > 0 && customer.last_name.length > 0)
      CustomerService.newCustomer(customer).then((response) => nav("/"));
    else {
      setMessage("Enter First Name and Last Name");
    }
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-5 mx-auto my-5">
          <h2>Add New Customer</h2>

          <form method="POST" className="border p-3">
            <div className=" form-group">
              <input
                type="text"
                onChange={(e) => handleAddCustomer(e)}
                className="form-control "
                name="first_name"
                placeholder="First Name"
                aria-describedby="first_name"
                required
              />

              <input
                type="text"
                onChange={(e) => handleAddCustomer(e)}
                className="form-control "
                name="last_name"
                aria-describedby="last_name"
                placeholder="Last Name"
                required
              />

              <input
                type="text"
                onChange={(e) => handleAddCustomer(e)}
                className="form-control "
                name="street"
                aria-describedby="street"
                placeholder="Street"
                required
              />

              <input
                type="text"
                onChange={(e) => handleAddCustomer(e)}
                className="form-control "
                name="address"
                aria-describedby="address"
                placeholder="Address"
              />
              <input
                type="text"
                onChange={(e) => handleAddCustomer(e)}
                className="form-control "
                name="city"
                aria-describedby="city"
                placeholder="City"
              />
              <input
                type="text"
                onChange={(e) => handleAddCustomer(e)}
                className="form-control "
                name="state"
                aria-describedby="state"
                placeholder="State"
              />

              <input
                type="email"
                onChange={(e) => handleAddCustomer(e)}
                className="form-control "
                name="email"
                aria-describedby="email"
                placeholder="Email Id"
              />
              <input
                type="text"
                onChange={(e) => handleAddCustomer(e)}
                className="form-control "
                name="phone"
                aria-describedby="phone"
                placeholder="Phone"
              />
            </div>

            <button
              type="button"
              className="btn addnewform my-5"
              onClick={() => createCustomer()}
            >
              Submit
            </button>
            <p>{message}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateCustomer;
