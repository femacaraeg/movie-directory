import React from "react";
import { screen, render } from "@testing-library/react";

import AppBar from "../AppBar";

describe("AppBar component", () => {
  test('renders "Home" as a text', () => {
    // Arrange
    render(<AppBar />);

    // Act
    // ...nothing

    // Assert
    const titleElement = screen.getByText("Home", { exact: false });
    expect(titleElement).toBeInTheDocument();
  });
});
