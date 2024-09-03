import React from 'react';

const Buttons = ({ onClick , title}) => {
  return (
    <div>
      <button onClick={onClick}>{title}</button>
    </div>
  );
};

export default Buttons;
