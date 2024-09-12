import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { LoginOut } from "../pages/LoginOut";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/loginUp" element={<LoginOut />} />
    </Routes>
  );
};
