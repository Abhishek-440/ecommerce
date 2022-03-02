import { Routes, Route } from "react-router-dom";
import { Login, Register } from "./pages";

function routes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default routes;
