import React from 'react';

const RoleCheckbox = ({ checked, onChange }) => {
  return (
    <label>Assign admin privileges
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  );

};

export default RoleCheckbox;

