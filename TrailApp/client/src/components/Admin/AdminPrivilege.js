import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, updateUserRole } from '../../actions/users';
import RoleCheckbox from './RoleCheckbox';
import useStyles from './styles';
import {
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Grid,
  Typography,
} from '@material-ui/core';

const AdminPrivilege = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleCheckboxChange = (userId, isChecked) => {
    dispatch(updateUserRole(userId, {role: isChecked ? 'admin' : 'user'}));

    //click on checkbox
    //update db
    //refresh page
    //checkbox? ==> dispatch 
  };

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} md={8} lg={6}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
              Assign Admin Privileges
            </Typography>
            {users &&
              users.map((user) => (
                <Grid container key={user._id} alignItems="center" spacing={2}>
                  <Grid item xs={8}>
                    <Typography variant="body1">{user.name}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControlLabel
                      control={
                        <RoleCheckbox
                          checked={user.role === 'admin'}
                          onChange={(isChecked) =>
                            handleCheckboxChange(user._id, isChecked)
                          }
                        />
                      }
                      label="Assign privilege"
                    />
                  </Grid>
                </Grid>
              ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AdminPrivilege;