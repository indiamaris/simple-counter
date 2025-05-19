import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Counter from './counter';

describe('Counter Component', () => {
  test('renders without crashing', () => {
    render(<Counter />);
  });

  test('displays initial count of 0', () => {
    render(<Counter />);
    const countDisplay = screen.getByTestId('total-value');
    expect(countDisplay).toHaveTextContent('0');
  });

  test('increments count when increment button is clicked', () => {
    render(<Counter />);
    const buttons = screen.getAllByTestId('counter-button');
    const incrementButton = buttons.find(button => button.textContent === '+1');
    fireEvent.click(incrementButton);
    const countDisplay = screen.getByTestId('total-value');
    expect(countDisplay).toHaveTextContent('1');
  });

  test('decrements count when decrement button is clicked', () => {
    render(<Counter />);
    const buttons = screen.getAllByTestId('counter-button');
    const decrementButton = buttons.find(button => button.textContent === '-1');
    fireEvent.click(decrementButton);
    const countDisplay = screen.getByTestId('total-value');
    expect(countDisplay).toHaveTextContent('-1');
  });
}); 