import renderer from 'react-test-renderer';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, updateUserRole } from '../../actions/users';
import RoleCheckbox from '../Admin/RoleCheckbox';
import useStyles from '../Admin/styles';
import {
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Grid,
  Typography,
} from '@material-ui/core';
import AdminPrivilege from '../Admin/AdminPrivilege';

jest.mock('react-redux');
jest.mock('../../actions/users');
jest.mock('../Admin/RoleCheckbox');
jest.mock('../Admin/styles');
jest.mock('@material-ui/core');

const renderTree = tree => renderer.create(tree);
describe('<AdminPrivilege>', () => {
  it('should render component', () => {
    expect(renderTree(<AdminPrivilege 
    />).toJSON()).toMatchSnapshot();
  });
  
});