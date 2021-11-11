import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "./themeComponents/ThemeContext";
import Main from "./themeComponents/Main";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Main>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </Main>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
