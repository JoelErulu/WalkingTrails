import renderer from 'react-test-renderer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Grid, Typography, Container, Button, Paper, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector} from 'react-redux';
import { getTrails } from '../../actions/trails.js';
import useStyles from '../Admin/styles.js';
import gold from '../../images/gold.png';
import green from '../../images/green.png';
import gray from '../../images/gray.png';
import Admin from '../Admin/Admin.js';

jest.mock('react-router-dom');
jest.mock('@material-ui/core');
jest.mock('react-redux');
jest.mock('../../actions/trails.js');
jest.mock('./styles.js');
jest.mock('../../images/gold.png');
jest.mock('../../images/green.png');
jest.mock('../../images/gray.png');

const renderTree = tree => renderer.create(tree);
describe('<Admin>', () => {
  it('should render component', () => {
    expect(renderTree(<Admin 
    />).toJSON()).toMatchSnapshot();
  });
  
});