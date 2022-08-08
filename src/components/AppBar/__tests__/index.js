
import React from 'react';
import {screen, render} from '@testing-library/react';

import AppBar from '../AppBar';

describe("AppBar component", () => {

  test('renders "MOVEA" as a text', () => {
    // Arrange
    render(<AppBar />);
  
    // Act
    // ...nothing
  
    // Assert
    const titleElement = screen.getByText('MOVEA');
    expect(titleElement).toBeInTheDocument();
  });
})