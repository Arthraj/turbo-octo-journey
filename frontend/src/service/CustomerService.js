import axios from "axios";

const CUSTOMER_BASE_API_URL = "http://localhost:8080/api";
const AUTH_BASE_API_URL = "http://localhost:8080/authenticate";
const bearerToken = sessionStorage.getItem("Token");

class CustomerService {
  authenticateUser(credentials) {
    return axios.post(AUTH_BASE_API_URL, credentials);
  }

  getCustomers() {
    return axios.get(CUSTOMER_BASE_API_URL, {
      headers: {
        Authorization: `${bearerToken}`,
      },
    });
  }
  newCustomer(customer) {
    console.log("inside new Customer");
    return axios.post(CUSTOMER_BASE_API_URL, customer, {
      headers: {
        Authorization: `${bearerToken}`,
      },
    });
  }
  updateCustomerById(customer, uuid) {
    return axios.put(CUSTOMER_BASE_API_URL + "/" + uuid, customer, {
      headers: {
        Authorization: `${bearerToken}`,
      },
    });
  }
  deleteCustomerById(uuid) {
    return axios.delete(CUSTOMER_BASE_API_URL + "/" + uuid, {
      headers: {
        Authorization: `${bearerToken}`,
      },
    });
  }
}
export default new CustomerService();
// here we are returning the object of this class, not the class
// so that we can directly use object of this class inside a component
