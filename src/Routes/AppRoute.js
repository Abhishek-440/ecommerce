import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Login,
  Register,
  Home,
  ExpenseMonth,
  IncomeDay,
  IncomeMonth,
} from "../pages";
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
        <Route path="/expense/input" element={<ExpenseInformation />} />
        <Route path="/expense/month" element={<ExpenseMonth />} />
        <Route path="/income/input" element={<IncomeInformation />} />
        <Route path="/income/day" element={<IncomeDay />} />
        <Route path="/income/month" element={<IncomeMonth />} />
      </Routes>
    </>
  );
}

export default AppRoute;
