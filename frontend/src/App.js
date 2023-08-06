import "./App.css";
import CreateCustomer from "./components/CreateCustomer";
import HeaderComponent from "./components/HeaderComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListAllCustomer from "./components/ListAllCustomer";
import UpdateCustomer from "./components/UpdateCustomer.jsx";
import Login from "./components/Login";
import AuthenticateUser from "./components/AuthenticateUser";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <div className="container">
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route
                exact
                path="/"
                element={
                  <AuthenticateUser>
                    <HeaderComponent />
                    <ListAllCustomer />
                  </AuthenticateUser>
                }
              ></Route>
              <Route
                path="/add-customer"
                element={
                  <AuthenticateUser>
                    <HeaderComponent />
                    <CreateCustomer />
                  </AuthenticateUser>
                }
              ></Route>
              <Route
                path="/update-customer/:uuid"
                element={
                  <AuthenticateUser>
                    <HeaderComponent />
                    <UpdateCustomer />
                  </AuthenticateUser>
                }
              ></Route>
              <Route path="*" element={<h1>Page Not Found</h1>}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
