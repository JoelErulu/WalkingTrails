import renderer from 'react-test-renderer';
import React, { useState, useEffect } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField, Icon } from '@material-ui/core';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import icon from '../Auth/icon.js';
import useStyles from '../Auth/styles.js';
import Input from '../Auth/Input.js';
import { signin, signup } from '../../actions/auth.js';
import { googleLogin } from '../../api/index.js';
import Auth from '../Auth/Auth.js';

jest.mock('@material-ui/core');
jest.mock('@react-oauth/google');
jest.mock('react-redux');
jest.mock('react-router-dom');
jest.mock('jwt-decode');
jest.mock('@material-ui/icons/LockOutlined');
jest.mock('./icon.js');
jest.mock('./styles.js');
jest.mock('./Input.js');
jest.mock('../../actions/auth.js');
jest.mock('../../api/index.js');

const renderTree = tree => renderer.create(tree);
describe('<Auth>', () => {
  it('should render component', () => {
    expect(renderTree(<Auth 
    />).toJSON()).toMatchSnapshot();
  });
  
});