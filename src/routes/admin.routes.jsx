import { Route, Routes } from "react-router-dom";

import { EditPrato } from "../pages/EditPrato";

import { HomeAdmin } from "../pages/Home_Admin/Home";
import { NewPrato } from "../pages/NewPrato";
import { Prato_Admin } from "../pages/Prato_Admin";

export const AppRoutesAdmin = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/prato/:id" element={<Prato_Admin />} />
      <Route path="/edit/:id" element={<EditPrato />}></Route>
      <Route path="/new" element={<NewPrato />}></Route>
    </Routes>
  );
};
