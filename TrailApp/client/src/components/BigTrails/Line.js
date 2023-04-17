import React from 'react';
import './Line.css';

const Line = (props) => {
    const { color, name, id } = props;
    return (
        <div>
          <div
            className="Line"
            style={{ backgroundColor: color, cursor: 'pointer' }}
            title={name}
          />
        </div>
      );
};

export default Line;
