/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./app/app";
import Counter from "./components/counter/counter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/loving" element={<Counter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
