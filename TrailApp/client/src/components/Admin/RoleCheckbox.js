import { Checkbox } from '@material-ui/core';
import React from 'react';

const RoleCheckbox = ({ checked, onChange }) => {
  return (
    <label>
      {/* <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      /> */}
      <Checkbox
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      Assign admin privileges
    </label>
  );

};

export default RoleCheckbox;

