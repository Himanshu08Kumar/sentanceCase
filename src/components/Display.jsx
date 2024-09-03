import React from 'react';

const Display = ({textInput, handleInputChange}) => {

  return (
    <div>
      <form>
        <textarea cols={70} rows={5}
          type="text"
          value={textInput}
          onChange={handleInputChange}
          placeholder='Enter Text..'
        />
       
      </form>
    </div>
  );
};

export default Display;
