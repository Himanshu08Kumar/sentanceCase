import React from 'react';

const Buttons = ({ onClick , title}) => {
  return (
    <div>
      <button onClick={onClick} 
      style={{border: "1px solid black"}}
      >
        {title}
      </button>
    </div>
  );
};

export default Buttons;
