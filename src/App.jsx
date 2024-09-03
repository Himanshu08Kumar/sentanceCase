import './App.css'
import Display from './components/Display'
import Buttons from './components/Buttons'
import InputDetails from './components/InputDetails'
import { useEffect, useState } from 'react'
import Header from './components/Header'


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
  const sentenceCase = (e) => {
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
     <Header/>
     <Display textInput={textInput} handleInputChange={handleInputChange}/>
     <div className='display'>
     <InputDetails detail={countChar} title="Character Count : "/>
     <InputDetails detail={countWord} title="Word Count : "/>
     </div>
     <div className='display1'>
     <Buttons onClick={lowerCase} title="lower case" />
     <Buttons onClick={upperCase} title="upper case"/>
     <Buttons onClick={sentenceCase} title="sentence case"/>
     </div>
    </>
  )
}

export default App
