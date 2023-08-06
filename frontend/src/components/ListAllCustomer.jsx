import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerService from "../service/CustomerService";
import { useQuery } from "@tanstack/react-query";

const ListAllCustomer = () => {
  const [customer, setCustomer] = useState([]);

  const nav = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("Token");
    nav("/login");
  };

  const myFunction = () => {
    return CustomerService.getCustomers();
  };
  const { isLoading, error, data, isSuccess, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: myFunction,
  });
  isLoading ? console.log("loading") : console.log(data);

  return (
    <div>
      <h2 className="text-center">Customers List</h2>
      <button className="logoutbtn" onClick={() => logout()}>
        Logout
      </button>
      <div className="row ">
        <button
          className="btn addCustomer my-3 w-25 mx-auto"
          onClick={() => nav("/add-customer")}
        >
          {" "}
          Add Customers
        </button>
      </div>

      <div className="row ">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {isSuccess &&
              data.data.map((cust, uuid) => {
                return (
                  <tr key={cust.uuid}>
                    <td>{cust.first_name}</td>
                    <td>{cust.last_name}</td>
                    <td>{cust.address}</td>
                    <td>{cust.city}</td>
                    <td>{cust.state}</td>
                    <td>{cust.email}</td>
                    <td>{cust.phone}</td>
                    <td>
                      <button
                        onClick={() => {
                          nav(`/update-customer/${cust.uuid}`);
                          refetch();
                        }}
                        className="btn update text-light"
                      >
                        Update
                      </button>

                      <button
                        onClick={() =>
                          CustomerService.deleteCustomerById(cust.uuid).then(
                            (res) => {
                              refetch();
                            }
                          )
                        }
                        className="btn delete text-light mx-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ListAllCustomer;
