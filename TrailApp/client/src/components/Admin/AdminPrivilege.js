import React,{useState, useEffect} from 'react';
import { List, ListItem, ListItemText, Checkbox, FormControlLabel } from '@material-ui/core';
import { fetchUsers } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../actions/users';

const AdminPrivilege = () => {
  const dispatch = useDispatch();
    // const {user, setUser} = useState();

    //if email exists
    //assign them role
  
    // if(!User){
    //     //call api to create them and assign them in db

    // }
    // const users = [
    //     { id: 1, name: 'Alice', privilege: false },
    //     { id: 2, name: 'Bob', privilege: false },
    //     { id: 3, name: 'Charlie', privilege: false },
    //     { id: 4, name: 'Dave', privilege: false },
    //   ];
    const users = dispatch(getUsers());
    console.log(users);    
    const [privileges, setPrivileges] = useState(users.map(user => user.role));

    const handleCheckboxChange = (event, index) => {
      const newPrivileges = [...privileges];
      newPrivileges[index] = event.target.checked;
      setPrivileges(newPrivileges);
    };
  
    return (
      <List>
        {users.map((user, index) => (
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
}

export default AdminPrivilege;