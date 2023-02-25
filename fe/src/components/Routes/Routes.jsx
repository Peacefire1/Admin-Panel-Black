import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customer from "../../Pages/Customers/Customers";
import Dashboard from "../../Pages/Dashbaord/dashboard";
import Inventory from "../../Pages/Inventory/inventory";
import Orders from "../../Pages/Orders/Orders";

const AppRoutes = () => {
  return;

  <Routes>
    <Route path="/" element={<Dashboard />}></Route>
    <Route path="/inventory" element={<Inventory />}></Route>
    <Route path="/orders" element={<Orders />}></Route>
    <Route path="/customers" element={<Customer />}></Route>
  </Routes>;
};

export default AppRoutes;
