import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Header Component', () => {
  test('renders without crashing', () => {
    renderWithRouter(<Header />);
  });

  test('displays the header title', () => {
    renderWithRouter(<Header />);
    const headerTitle = screen.getByText(/Simple Counter/i);
    expect(headerTitle).toBeInTheDocument();
  });

  test('header title is a link to home', () => {
    renderWithRouter(<Header />);
    const headerLink = screen.getByRole('link');
    expect(headerLink).toHaveAttribute('href', '/');
  });

  test('has correct styling class', () => {
    renderWithRouter(<Header />);
    const headerElement = document.querySelector('.header');
    expect(headerElement).toBeInTheDocument();
  });
}); 