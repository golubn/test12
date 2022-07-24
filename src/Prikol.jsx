import React, {useState, useEffect} from 'react';
import './App.css'

const Prikol = () => {

    const [temp, setTemp] = useState('good ton') 
    return (
<>
<p className='memes_text'>Hello its me</p>
<p className='memes_text'>{temp}</p>
<button className='memes_button' onClick={()=>setTemp('text peredala')}>click me</button>
<div>
</div>
</>
    );
} 

export default Prikol;