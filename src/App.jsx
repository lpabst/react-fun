import React, { useContext } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import { context } from './store/store.js';

function App() {
  const {state, dispatch} = useContext(context);

  return (
    <div className="App">
      <Header />
      {state.showLogin && <Login />}
      <div className='landingImage'>
        <div className='landingImageText'>
          <p className='landingImageMainText'>The Leader</p>
          <p className='landingImageSubText'>In Space Exploration</p>
        </div>
      </div>
    </div>
  );
}

export default App;
