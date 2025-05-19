import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { CounterButton } from './counter-button';

describe('CounterButton Component', () => {
  const mockHandleClick = jest.fn();

  beforeEach(() => {
    mockHandleClick.mockClear();
  });

  test('renders without crashing', () => {
    render(<CounterButton handleClick={mockHandleClick} label="+" />);
  });

  test('displays the correct label', () => {
    render(<CounterButton handleClick={mockHandleClick} label="+" />);
    const button = screen.getByText('+');
    expect(button).toBeInTheDocument();
  });

  test('calls handleClick when clicked', () => {
    render(<CounterButton handleClick={mockHandleClick} label="+" />);
    const button = screen.getByText('+');
    fireEvent.click(button);
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });

  test('has correct styling class', () => {
    render(<CounterButton handleClick={mockHandleClick} label="+" />);
    const button = document.querySelector('.btn');
    expect(button).toBeInTheDocument();
  });
}); 