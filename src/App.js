import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './components/Home'
import Services from './components/Services'
import Recommendation from './components/Recommendation'
import Quality from './components/Quality'
import Choose from './components/Choose'
import Contact from './components/Contact'
import Copy from './components/Copy'

function App() {
  return (
    <>
      <Home />
      <Services />
      <Recommendation />
      <Quality />
      <Choose />
      <Contact />
      <Copy />
    </>
  );
}

export default App;
