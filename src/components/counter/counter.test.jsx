import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Counter from '../counter';

describe('Counter Component', () => {
  test('renders without crashing', () => {
    render(<Counter />);
  });

  test('displays initial count of 0', () => {
    render(<Counter />);
    const countDisplay = screen.getByText('0');
    expect(countDisplay).toBeInTheDocument();
  });

  test('increments count when increment button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('+1');
    fireEvent.click(incrementButton);
    const countDisplay = screen.getByText('1');
    expect(countDisplay).toBeInTheDocument();
  });

  test('decrements count when decrement button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('-1');
    fireEvent.click(decrementButton);
    const countDisplay = screen.getByText('-1');
    expect(countDisplay).toBeInTheDocument();
  });

  test('resets count when reset button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('+1');
    const resetButton = screen.getByText('Reset');
    
    // First increment to 1
    fireEvent.click(incrementButton);
    expect(screen.getByText('1')).toBeInTheDocument();
    
    // Then reset
    fireEvent.click(resetButton);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
}); 