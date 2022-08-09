import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './assets/css/App.css'
import HeadGreeting from './components/HeadGreeting'
import Dashboard from './components/Dashboard'
import { Routes, Route, Link } from 'react-router-dom'


function App() {
  return (  
    <Routes>
      <Route path="*" element={<HeadGreeting/>} />                 
      <Route path="/" element={<HeadGreeting/>} />            
      <Route path="/dashboard" element={<Dashboard/>} />                 
    </Routes>                     
  );
}

export default App;
