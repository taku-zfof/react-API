import React, { useState } from 'react'
import './App.css';

function App(){
  const[count, setCount] = useState(0)
  return(
    <div>
     <p>you clicked {count} times.</p>
     <button onClick = {()=>setCount(count + 1) }> click me!</button>
    </div>
    )
}

export default App;
