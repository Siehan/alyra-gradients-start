import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css"; // <- importer bootsrtap, depuis node_modules
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ServiceWorker from "./ServiceWorker";
//import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
ServiceWorker();
