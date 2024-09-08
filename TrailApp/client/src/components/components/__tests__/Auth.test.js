import { renderHook } from '@testing-library/react-hooks';
import { useGoogleLogin } from '@react-oauth/google';
import { navigate } from 'react-router-dom';
import { googleLogin } from '../../api';
import { useDispatch } from 'react-redux';

jest.mock('@react-oauth/google');
// jest.mock('react-router-dom');
jest.mock('react-router-dom', () => ({ navigate: jest.fn() }));
jest.mock('../../api');
jest.mock('react-redux');

describe('Login component', () => {
  beforeEach(() => {
    navigate.mockClear();
  });

  it('should navigate to admin page if user is an admin', async () => {
    const response = {
      data: {
        jwtToken: 'jwtToken',
        result: { role: 'admin' },
        payload: { name: 'test user' },
      },
    };
    googleLogin.mockResolvedValue(response);
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useGoogleLogin.mockReturnValue({
      flow: 'auth-code',
      onSuccess: async tokenResponse => {
        const token = response.data.jwtToken;
        const credential = response.data.result;
        const payload = response.data.payload;
        dispatch({ type: 'AUTH', data: { payload, token } });
        navigate(response.data.result.role === 'admin' ? '/admin' : '/home');
      },
      onError: errorResponse => console.log(errorResponse),
    });
    renderHook(() => useGoogleLogin());
    expect(navigate).toHaveBeenCalledWith('/admin');
    console.log(navigate.mock.calls);
    expect(navigate).toHaveBeenCalledWith('/admin');
  });

  it('should navigate to home page if user is not an admin', async () => {
    const response = {
      data: {
        jwtToken: 'jwtToken',
        result: { role: 'user' },
        payload: { name: 'test user' },
      },
    };
    googleLogin.mockResolvedValue(response);
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useGoogleLogin.mockReturnValue({
      flow: 'auth-code',
      onSuccess: async tokenResponse => {
        const token = response.data.jwtToken;
        const credential = response.data.result;
        const payload = response.data.payload;
        dispatch({ type: 'AUTH', data: { payload, token } });
        navigate(response.data.result.role === 'admin' ? '/admin' : '/home');
      },
      onError: errorResponse => console.log(errorResponse),
    });
    renderHook(() => useGoogleLogin());
    expect(navigate).toHaveBeenCalledWith('/home');
  });
});