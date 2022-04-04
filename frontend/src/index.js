import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./prismic";

ReactDOM.render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PrismicProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
