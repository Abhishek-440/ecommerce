import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register, Home, ExpenseMonth } from "../pages";
import { ExpenseInformation } from "../components/organisms/ExpenseInput";
import { IncomeInformation } from "components/organisms/IncomeInput";

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
        <Route path="/incomeInput" element={<IncomeInformation />} />
      </Routes>
    </>
  );
}

export default AppRoute;
