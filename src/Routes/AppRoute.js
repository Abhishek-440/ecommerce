/* eslint-disable react/prop-types */
import React from "react";
import { Navigate } from "react-router";
import { Routes, Route, Outlet } from "react-router-dom";
import { Login, Register, Home, ExpenseMonth, ExpenseDay } from "../pages";
import { ExpenseInformation } from "../components/organisms/ExpenseInput";
import { IncomeInformation } from "components/organisms/IncomeInput";
import { useSelector } from "react-redux";
import { LogOutt } from "Containers/ecommerce/action";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";

const ProtectedRoutes = ({ login, redirectpath = "/" }) => {
  if (!login) {
    return <Navigate to={redirectpath} />;
  }

  return <Outlet />;
};

function AppRoute() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login.isAuthenticated);
  console.log("🚀 ~ file: AppRoute.js ~ line 20 ~ AppRoute ~ login", login);
  const storedJwt = localStorage.getItem("token");

  if (storedJwt) {
    const decoded = jwtDecode(storedJwt);
    let expireDate = decoded.exp;
    // let login = useSelector((state) => state.login?.isAuthenticate);
    let currentTimeInMillisecs = new Date().getTime();
    var currentTimeInSecs = currentTimeInMillisecs / 1000;
    if (expireDate < currentTimeInSecs) {
      dispatch(LogOutt());
    }
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes login={login} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/expense/input" element={<ExpenseInformation />} />
          <Route path="/expense/month" element={<ExpenseMonth />} />
          <Route path="/income/input" element={<IncomeInformation />} />
          <Route path="/expense/day" element={<ExpenseDay />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoute;
