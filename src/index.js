import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CssBaseline, ThemeProvider, CircularProgress } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./styles/theme";
import "./css/left.css";
import "./css/right.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";

import { getConfig } from "./utils/config";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <CssBaseline />
      <Suspense fallback={<CircularProgress />}>
        <Router basename={getConfig("CONTEXT_ROOT")}>
          <App />
        </Router>
      </Suspense>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root"),
);
