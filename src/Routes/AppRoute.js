import React from "react";
import { Routes, Route } from "react-router-dom";
import { /* Homepage, Login, */ Register } from "../pages";

const AppRoute = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} />
      <Route path="/home" element={<Homepage />} /> */}
      <Route path="/" element={<Register />} />
    </Routes>
  );
};

export default AppRoute;
