/** @format */
import React from "react";

import { Outlet } from "react-router";
import "./app.css";

export function AppUI({ main }) {
  return (
    <div className="homeContainer">
      <div className="main">
        <div className="headerContainer">{main}</div>
      </div>
      <div className="counter">
        <Outlet />
      </div>
    </div>
  );
}

export default AppUI;
