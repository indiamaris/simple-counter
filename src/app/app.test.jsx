import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

// Wrap App with BrowserRouter since it uses routing
const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('App Component', () => {

  test('renders without crashing', () => {
    renderWithRouter(<App />);
  });

  test('renders app container with correct data-testid', () => {
    renderWithRouter(<App />);
    const appContainer = screen.getByTestId('app-container');
    expect(appContainer).toBeInTheDocument();
  });

}); 