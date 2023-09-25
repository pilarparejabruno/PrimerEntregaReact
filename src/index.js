import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCPd9d3SrWVkcFfk6vtmMRZmMnfmSKz2mc",
  authDomain: "e-ccomerceraices.firebaseapp.com",
  projectId: "e-ccomerceraices",
  storageBucket: "e-ccomerceraices.appspot.com",
  messagingSenderId: "314259625555",
  appId: "1:314259625555:web:bd8449dc84743e93c798a6",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
