import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { BlogContextProvider } from "./context/blogContext";

import { BrowserRouter as Router } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008158",
    },
    secondary: {
      main: "#b7423b",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BlogContextProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </BlogContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
