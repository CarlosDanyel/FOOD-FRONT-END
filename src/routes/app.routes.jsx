import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home_User/Home";
import Prato_User from "../pages/Prato_User";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pedidos/:id" element={<Prato_User />} />
    </Routes>
  );
};
