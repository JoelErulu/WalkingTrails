import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Checkbox, FormControlLabel } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../actions/users';

const AdminPrivilege = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const [privileges, setPrivileges] = useState([]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (users) {
      setPrivileges(users.map(user => user.role));
    }
  }, [users]);

  const handleCheckboxChange = (event, index) => {
    const newPrivileges = [...privileges];
    newPrivileges[index] = event.target.checked;
    setPrivileges(newPrivileges);
    // Update user in the database here
  };

  return (
    <List>
      hi
      {users && users.map((user, index) => (
        <ListItem key={user.id}>
          <ListItemText primary={user.name} />
          <FormControlLabel
            control={
              <Checkbox
                checked={privileges[index]}
                onChange={event => handleCheckboxChange(event, index)}
                name={`user-${user.id}-privilege`}
              />
            }
            label="Assign privilege"
          />
        </ListItem>
      ))}
    </List>
  );
};

export default AdminPrivilege;