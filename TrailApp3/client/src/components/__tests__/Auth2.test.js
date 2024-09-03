import { render, fireEvent, screen } from '@testing-library/react';
import { GoogleLogin } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';


import Admin from '../Admin/Admin';
import Home from '../Home/Home';

test('admin user should be redirected to admin page', async () => {
  const mockTokenResponse = { code: 'mockCode', role: 'admin' };
  const onSuccess = jest.fn(async (tokenResponse) => {
    if (tokenResponse.code === mockTokenResponse.code) {
      if (tokenResponse.role === 'admin') {
        return <Admin />;
      } else {
        return <Home />;
      }
    }
  });

  render(
    <BrowserRouter>
      <GoogleLogin onSuccess={onSuccess} />
    </BrowserRouter>
  );

  fireEvent.click(screen.getByText('Sign in with Google'));

  expect(screen.getByText('Welcome to the admin page')).toBeInTheDocument();
});

test('non-admin user should be redirected to home page', async () => {
  const mockTokenResponse = { code: 'mockCode', role: 'user' };
  const onSuccess = jest.fn(async (tokenResponse) => {
    if (tokenResponse.code === mockTokenResponse.code) {
      if (tokenResponse.role === 'admin') {
        return <Admin />;
      } else {
        return <Home />;
      }
    }
  });

  render(
    <BrowserRouter>
      <GoogleLogin onSuccess={onSuccess} />
    </BrowserRouter>
  );

  fireEvent.click(screen.getByText('Sign in with Google'));

  expect(screen.getByText('Welcome to the home page')).toBeInTheDocument();
});

test('should handle errors', async () => {
  const onError = jest.fn();
  const onSuccess = jest.fn();

  render(
    <BrowserRouter>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </BrowserRouter>
  );

  fireEvent.click(screen.getByText('Sign in with Google'));

  expect(onError).toHaveBeenCalled();
});

test('should handle edge cases', async () => {
  const onSuccess = jest.fn();

  render(
    <BrowserRouter>
      <GoogleLogin onSuccess={onSuccess} />
    </BrowserRouter>
  );

  fireEvent.click(screen.getByText('Sign in with Google'));

  // Add more edge cases here
});
