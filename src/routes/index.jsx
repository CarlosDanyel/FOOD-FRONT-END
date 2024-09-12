import { BrowserRouter } from "react-router-dom";
import React from "react";
import { useAuth } from "../hooks/auth";
import { AppRoutesAdmin } from "./admin.routes";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export const Routes = () => {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      {user ? user.Admin ? <AppRoutesAdmin /> : <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
};
