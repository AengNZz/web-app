import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/header';

const telegram = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    telegram.ready();
  }, [])

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
