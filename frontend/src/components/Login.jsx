import React from "react";
import { useState } from "react";
import CustomerService from "../service/CustomerService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [info, setInfo] = useState();
  const [message, setMessage] = useState("Enter Credentials");

  const nav = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const authenticate = () => {
    CustomerService.authenticateUser(info).then((response) => {
      console.log(response);
      if (response.headers.get(["Content-Length"]) === "0") {
        console.log("badd");
        setMessage(
          "Bad Credentials please try test@sunbasedata.com and Test@123"
        );
      } else {
        console.log("Logged In");
        const token = response.data.access_token;
        // write to storage
        sessionStorage.setItem("Token", token);
        // read from storage
        setTimeout(() => {}, 1000);
        nav("/");
      }
    });
  };

  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-md-5 mx-auto my-5">
            <h1>Login Page</h1>

            <form method="POST" className="border p-3">
              <div className=" form-group">
                <input
                  type="text"
                  onChange={(e) => handleLogin(e)}
                  className="form-control "
                  name="login_id"
                  placeholder="Login Id"
                  aria-describedby="login_id"
                  required
                />

                <input
                  type="password"
                  onChange={(e) => handleLogin(e)}
                  className="form-control "
                  name="password"
                  placeholder="Password"
                  aria-describedby="password"
                  required
                />
              </div>
              <button
                type="button"
                className="btn addnewform my-5"
                onClick={() => authenticate()}
              >
                Login
              </button>
            </form>

            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
