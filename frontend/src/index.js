import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./prismic";
import { ThemeProvider } from "@mui/styles";
import { theme } from "./pages/ProductPage/styles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PrismicProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PrismicProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
