import { render, screen } from '@testing-library/react';
import React from 'react';
import { Total } from './total';

describe('Total Component', () => {
  test('renders without crashing', () => {
    render(<Total value={0} />);
  });

  test('displays the correct value', () => {
    render(<Total value={42} />);
    const totalDisplay = screen.getByText('42');
    expect(totalDisplay).toBeInTheDocument();
  });

  test('displays negative values correctly', () => {
    render(<Total value={-10} />);
    const totalDisplay = screen.getByText('-10');
    expect(totalDisplay).toBeInTheDocument();
  });

  test('has correct styling classes', () => {
    render(<Total value={0} />);
    const totalContainer = document.querySelector('.totalContainer');
    const totalElement = document.querySelector('.total');
    expect(totalContainer).toBeInTheDocument();
    expect(totalElement).toBeInTheDocument();
  });
}); 