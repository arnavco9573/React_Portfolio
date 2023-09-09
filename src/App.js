import { useState } from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [activeSection, setActiveSection] = useState('home');
  const handleNavigation = (section)=>{
    setActiveSection(section);
  };
  return (
    <>
    <NavBar activeSection={activeSection} handleNavigation={handleNavigation}/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
