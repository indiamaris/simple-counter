import { render, screen } from "@testing-library/react";
import React from "react";
import Info from "./info";

describe("Info Component", () => {
  test("renders without crashing", () => {
    render(<Info />);
  });

  test("displays the info text", () => {
    render(<Info />);
    const infoText = screen.getByText(/we are here to help you counting/i);
    expect(infoText).toBeInTheDocument();
  });

  test("has correct styling class", () => {
    render(<Info />);
    const infoElement = document.querySelector(".info");
    expect(infoElement).toBeInTheDocument();
  });
});
