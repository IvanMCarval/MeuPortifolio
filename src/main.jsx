import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import NavBar from "./Components/NavBar/NavBar";
import "./styles/bootstrap-5.3.0-alpha3-dist/css/bootstrap.css";
import "./styles/bootstrap-5.3.0-alpha3-dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>
);
