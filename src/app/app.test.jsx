import { render } from '@testing-library/react';
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

  test('renders the main app container', () => {
    renderWithRouter(<App />);
    // Using a more specific selector to find the app container
    const appContainer = document.querySelector('div[class*="app"]');
    expect(appContainer).toBeInTheDocument();
  });
}); 