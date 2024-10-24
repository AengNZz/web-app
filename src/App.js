import React, { useEffect } from 'react';
import Header from './components/Header/header';
import { useTelegram } from './hooks/useTelegram';
import './App.css';

function App() {

  const { telegram, onToggleButton } = useTelegram();

  useEffect(() => {
    telegram.ready();
  }, [])

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>Переключение</button>
    </div>
  );
}

export default App;
