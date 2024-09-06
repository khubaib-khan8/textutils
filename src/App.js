import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

//import About from './components/About';
/*import {
BrowserRouter as Router,
Routes,    // Switch replaced with Routes
Route,     // Route import
} from "react-router-dom";
import { useState } from 'react';*/

function App() {
  const togglemode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'; // Dark mode color
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // Light mode color
    }
  }

  const [mode, setMode] = useState('light'); // Default light mode

  return (
    <>
    
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
      <div className="container my-3">
          <TextForm heading="Enter the text to analyze" mode={mode}/> 
      </div>
    </>
  );
}

export default App;
