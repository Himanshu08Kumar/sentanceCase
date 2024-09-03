import './App.css'
import Display from './components/Display'
import Buttons from './components/Buttons'
import { useState } from 'react'


function App() {
  const [textInput, setTextInput] = useState('');

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };

  const lowerCase = (e) => {
    e.preventDefault();
    setTextInput((e) => e.toLowerCase());
  };

  const upperCase = (e) =>{
    e.preventDefault();
    setTextInput((e) => e.toUpperCase());
  };
  const sentanceCase = (e) => {
    e.preventDefault();
    setTextInput((prevInput) => {prevInput.charAt(0).toUpperCase() + prevInput.slice(1).toLowerCase()})
  }

  return (
    <>
     <Display textInput={textInput} handleInputChange={handleInputChange}/>
     <Buttons onClick={lowerCase} title="lower case" />
     <Buttons onClick={upperCase} title="upper case"/>
     <Buttons onClick={sentanceCase} title="sentance case"/>
    </>
  )
}

export default App
