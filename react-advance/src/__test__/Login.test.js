import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Login from '../7_1_UnitTesting/Login';

test('checking component loaded' , () => {
    render(<Login />);
    expect(screen.queryByText(/Login/)).toBeInTheDocument();
});

test('checking email and password loaded' , () => {
    render(<Login />);
    expect(screen.queryByPlaceholderText('Email')).toHaveValue('');
    expect(screen.queryByPlaceholderText('Password')).toHaveValue('');
});