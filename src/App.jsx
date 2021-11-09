import './App.css';
import Header from './components/Header/Header'
import Login from './components/Login/Login'

function App() {
  const showLogin = false;
  return (
    <div className="App">
      <Header />
      {showLogin && <Login />}
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
