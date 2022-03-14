import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register, Home, ExpenseMonth } from "../pages";
import { ExpenseInformation } from "../components/organisms/ExpenseInput";

function AppRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/expenseinput" element={<ExpenseInformation />} />
        <Route path="/expensemonth" element={<ExpenseMonth />} />
      </Routes>
    </>
  );
}

export default AppRoute;
