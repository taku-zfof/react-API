import React, { useState,useEffect } from 'react'
import './App.css';

function App(){
  const[images,setImages] = useState([])
  const[text,setText] = useState("")
  const[query,setQuery] = useState('apple')
  
  useEffect(() => {
    console.log('useEffect発火')
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=process.env.REACT_APP_CLIENT_ID`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setImages(data.results)
    })
  }, [query] )
  
  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(text)
    setText('')
    console.log('onSubmit発火')
  }
    
  return(
    <div className="App">
     <div className="main">
     
      <form onSubmit = {onSubmit}>
      
       <input 
          type="text"
          onChange={e => setText(e.target.value)}
          value = {text}
        />
        <button type="submit">
          search
        </button>
        
        
      </form>
     </div>
    </div>
    )
}

export default App;
