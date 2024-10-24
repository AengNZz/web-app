import React, { useEffect } from 'react';
import Header from './components/Header/header';
import Form from './components/Form/Form'
import ProductList from './components/ProductList/ProductList'
import { useTelegram } from './hooks/useTelegram';
import { Route, Routers } from 'react-router-dom';
import './App.css';

function App() {

  const { telegram, onToggleButton } = useTelegram();

  useEffect(() => {
    telegram.ready();
  }, [])

  return (
    <div className="App">
      <Header />
      <Routers>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
      </Routers>
    </div>
  );
}

export default App;
