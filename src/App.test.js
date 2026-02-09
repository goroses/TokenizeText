// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TokenizeText title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TokenizeText/i);
    expect(titleElement).toBeInTheDocument();
});
