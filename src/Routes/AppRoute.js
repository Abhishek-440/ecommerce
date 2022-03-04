import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register, Home } from "../pages";

function AppRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default AppRoute;
