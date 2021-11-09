import React, { useContext } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import { Routes, Route } from 'react-router-dom';
import { context } from './store/store.js';
import Home from './views/Home/Home';
import Account from './views/Account/Account';

function App() {
  const {state, dispatch} = useContext(context);

  return (
    <div className="App">
      <Header />
      {state.showLogin && <Login />}
      {/* "Switch" was replaced with "Routes" in v6 of react-router-dom, and now we use element=component */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='account' element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
