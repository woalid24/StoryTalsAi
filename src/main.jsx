import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Story from "./Story.jsx";
import Signin from "./Signin.jsx";
import Login from "./Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {" "}
      </Route>
      <Route path="/story" element={<Story />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  </BrowserRouter>
);
