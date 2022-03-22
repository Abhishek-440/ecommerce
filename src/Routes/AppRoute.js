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
import { AuthProvider } from "./auth";
import { RequireAuth } from "./RequireAuth";

function AppRoute() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/expense/input"
          element={
            <RequireAuth>
              <ExpenseInformation />
            </RequireAuth>
          }
        />
        <Route
          path="/expense/month"
          element={
            <RequireAuth>
              <ExpenseMonth />
            </RequireAuth>
          }
        />
        <Route
          path="/income/input"
          element={
            <RequireAuth>
              <IncomeInformation />
            </RequireAuth>
          }
        />
        <Route
          path="/income/day"
          element={
            <RequireAuth>
              <IncomeDay />
            </RequireAuth>
          }
        />
        <Route
          path="/income/month"
          element={
            <RequireAuth>
              <IncomeMonth />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default AppRoute;
