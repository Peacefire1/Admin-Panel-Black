import React from "react";
import { Route, Routes } from "react-router-dom";
import Customer from "../../Pages/Customers/Customers";
import Dashboard from "../../Pages/Dashbaord/Dashboard";
import Inventory from "../../Pages/Inventory/Inventory";
import Orders from "../../Pages/Orders/Orders";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/customers" element={<Customer />}></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
