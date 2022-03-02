import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, HomePage } from "./pages";

function routes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default routes;
