import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register, Home } from "../pages";
import { IncomeInformation } from "components/organisms/IncomeInput";

function AppRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/incomeInput" element={<IncomeInformation />} />
      </Routes>
    </>
  );
}

export default AppRoute;
