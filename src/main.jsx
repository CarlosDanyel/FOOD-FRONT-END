import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/Globalstyle.jsx";
import { defaultTheme } from "./styles/theme/Theme.jsx";
import { AuthProvider } from "./hooks/auth.jsx";
import { Routes } from "./routes/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>
);
