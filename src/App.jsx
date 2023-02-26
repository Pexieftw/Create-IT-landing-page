import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Categories from './Categories'

function App() {
  const [count, setCount] = useState(0)

  function handler(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
  }

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handler);
    })
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
        anchor.removeEventListener('click', handler);
      })
    } 
  })
  
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Categories />
    </div>
  )
}

export default App
