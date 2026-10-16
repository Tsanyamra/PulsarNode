// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PulsarNode title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PulsarNode/i);
    expect(titleElement).toBeInTheDocument();
});
