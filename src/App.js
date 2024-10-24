import React, { useEffect } from 'react';
import Header from './components/Header/header';
import Form from './components/Form/Form'
import ProductList from './components/ProductList/ProductList'
import { useTelegram } from './hooks/useTelegram';
import { Route, Routes} from 'react-router-dom';
import './App.css';

function App() {

  const { telegram, onToggleButton } = useTelegram();

  useEffect(() => {
    telegram.ready();
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
