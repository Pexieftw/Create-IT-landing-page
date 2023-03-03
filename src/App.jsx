import { useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Categories from './Categories'
import Goals from './Goals'
import Sponsors from './Sponsors'
import Contact from './Contact'
import Footer from './Footer'

function App() {

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
      <Goals />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
