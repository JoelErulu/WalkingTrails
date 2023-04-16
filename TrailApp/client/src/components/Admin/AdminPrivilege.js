import React, { useState, useEffect } from 'react';
import { FormControlLabel } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../actions/users';
import RoleCheckbox from "./RoleCheckbox.js";
import { Button, Paper, Grid, Typography, Container, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent } from '@material-ui/core';

const AdminPrivilege = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  useEffect(() => {
    //This calls for the users within the db the first time and changes based on user change (if new or updated user)
    dispatch(getUsers());
  }, [dispatch]);

 
  // const [privileges, setAdminPrivileges] = useState(
  //   users.map((user) => ({
  //     id: user._id,
  //     checked: user.role === 'admin',
  // })
  // ));
  const [privileges, setAdminPrivileges] = useState([]); 
  useEffect(() => {
    // update privileges array when users state changes
    if (users) {
      setAdminPrivileges(users.map((user) => ({
        id: user._id,
        checked: user.role === 'admin',
      })));
    }
  }, [users]);


  // useEffect(() => {
  //   if (users) {
  //     setPrivileges(users.map(user => user.role));
  //   }
  // }, [users]);

  //first, retrieve the user role and make the checkbox on if found
  //updates db
  //retrieves user 

  const handleCheckboxChange = (userId, isChecked) => {
    setAdminPrivileges((prevState) =>
      prevState.map((item) =>
        item.id === userId ? { ...item, checked: isChecked } : item
      )
    );
  };
  return (
    // <List>
    //   {users && users.map((user, index) => (
    //     <ListItem key={user._id}>
    //       <ListItemText primary={user.name} />
    //       <FormControlLabel
    //         control={
    //           <Checkbox
    //             checked={privileges[index]}
    //             onChange={event => handleCheckboxChange(event, index)}
    //             name={`user-${user.id}-privilege`}
    //           />
    //         }
    //         label="Assign privilege"
    //       />
    //     </ListItem>
    <Container>
      <Typography variant="h2" align='center'>Assign Admin Privileges</Typography>
      {users && users.map((user) => (
        <div key={user._id}>
          {/* <p>{user.name}</p> */}
          <FormControlLabel
            label={ <Typography variant="body1">
                {user.name}
              </Typography>}
               control={
                <RoleCheckbox
                    checked={
                      privileges.find((item) => item.id === user._id)?.checked
                    }
                    onChange={(isChecked) => handleCheckboxChange(user._id, isChecked)}
                  />
               }
            
          />
          {/* {user.role === 'admin' && (
            <RoleCheckbox
              checked={
                privileges.find((item) => item.id === user._id)?.checked
              }
              onChange={(isChecked) => handleCheckboxChange(user._id, isChecked)}
            />
          )} */}
        </div>
      ))}
    </Container>
  
  );
};

export default AdminPrivilege;