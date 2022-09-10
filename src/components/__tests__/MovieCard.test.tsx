import React from "react";
import { screen, render, cleanup } from "@testing-library/react";

import MovieCard from "../MovieCard";

describe("test", () => {
  test("alt contains correct value", () => {
    // Arrange
    render(<MovieCard />);

    // Act
    //  ...nothing

    // Assert
    const testImg = document.querySelector("img") as HTMLImageElement;
    expect(testImg.alt).toContain("movie poster");
  });
});
