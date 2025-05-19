import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StartButton } from "./start-button";

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("StartButton Component", () => {
  test("renders without crashing", () => {
    renderWithRouter(<StartButton />);
  });

  test("displays the start text", () => {
    renderWithRouter(<StartButton />);
    const startText = screen.getByText(/start!/i);
    expect(startText).toBeInTheDocument();
  });

  test("is a link to the counter page", () => {
    renderWithRouter(<StartButton />);
    const startLink = screen.getByRole("link");
    expect(startLink).toHaveAttribute("href", "/loving");
  });

  test("has correct styling class", () => {
    renderWithRouter(<StartButton />);
    const startButton = document.querySelector(".start");
    expect(startButton).toBeInTheDocument();
  });
});
