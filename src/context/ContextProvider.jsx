import React from 'react'
import { createContext, useState } from 'react'

const CounterContext = createContext();

const ContextProvider = ({ children }) => {
  const [textInput, setTextInput] = useState('');

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const lowerCase = (e) => {
    e.preventDefault();
    setTextInput((prevInput) => prevInput.toLowerCase());
  };

  const upperCase = (e) =>{
    e.preventDefault();
    setTextInput((prevInput) => prevInput.toUpperCase());
  }
  return (
    <CounterContext.Provider value={{
      textInput,
      handleInputChange,
      lowerCase,
      upperCase
    }}>
      { children}
    </CounterContext.Provider>
  )
}

export {ContextProvider,CounterContext};
