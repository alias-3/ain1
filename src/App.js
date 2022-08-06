import React from 'react'
import './assets/css/App.css'
import HeadGreeting from './components/HeadGreeting'
import Dashboard from './components/Dashboard'
import { Routes, Route, Link } from 'react-router-dom'


function App() {
  return (  
    <Routes>
      <Route path="/" element={<HeadGreeting/>} />            
      <Route path="/dashboard" element={<Dashboard/>} />           
    </Routes>                     
  );
}

export default App;
