/** @format */
import React from "react";
import Header from "../components/main/header/header";
import Info from "../components/main/info/info";
import { StartButton } from "../components/main/start-button/start-button";
import { AppUI } from "./app.ui";

function App() {
  return (
    <AppUI
      main={
        <div data-testid="app-container">
          <Header />
          <Info />
          <StartButton />
        </div>
      }
    />
  );
}

export default App;
