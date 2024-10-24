import React, { useEffect } from 'react';
import { useTelegram } from "../../hooks/useTelegram";
import './App.css';

function App() {
  const { telegram, onToggleButton } = useTelegram();

  useEffect(() => {
    telegram.ready();
  }, [])

  return (
    <div className="App">
      <button onClick={onToggleButton}>Переключение</button>
    </div>
  );
}

export default App;
