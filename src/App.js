import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Prikol from './Prikol'




function App() {


const [temp, setTemp] = useState(0) 
useEffect(() => {
  console.log("xernia")
},[temp])

const hello = async () => {
  await console.log("hey maxim")
  await console.log("i love u")
  return 'hello'
}

function hello2(){
  return 'hello2'
}



  return (
    <div className="App">
      <button className='memes_button' onClick={() => hello()}>button for function</button>
      <button className='memes_button' onClick={() => setTemp(temp + 1)}>button for increment</button>
      <p className='memes_text'>{temp}</p>
      <Prikol />
    </div>

  );
}

export default App;


