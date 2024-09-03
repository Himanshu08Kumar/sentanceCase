import './App.css'
import Display from './components/Display'
import Buttons from './components/Buttons'
import InputDetails from './components/InputDetails'
import { useEffect, useState } from 'react'


function App() {
  const [textInput, setTextInput] = useState('');
  const [countWord, setCountWord] = useState(0);
  const [countChar, setCountChar]  = useState(0);

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
    setTextInput((prevInput) => prevInput.charAt(0).toUpperCase() + prevInput.slice(1).toLowerCase());
  }

  useEffect(()=>{
    const text = textInput.trim();
    const words = text.split(/\s+/).filter((word) => word !=='');
    setCountWord(words.length);
    setCountChar(textInput.length);
  },[textInput]);


  return (
    <>
     <Display textInput={textInput} handleInputChange={handleInputChange}/>
     <div className='display'>
     <InputDetails detail={countChar} title="Character Count:"/>
     <InputDetails detail={countWord} title="Word Count : "/>
     </div>
     <Buttons onClick={lowerCase} title="lower case" />
     <Buttons onClick={upperCase} title="upper case"/>
     <Buttons onClick={sentanceCase} title="sentance case"/>
    </>
  )
}

export default App
