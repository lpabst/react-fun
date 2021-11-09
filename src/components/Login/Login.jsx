import { useContext, useState } from 'react';
import fakeBackend from '../../fakeBackend';
import { context } from '../../store/store';
import './Login.css';

function Login() {
  const {state, dispatch} = useContext(context) 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function closeLoginModal() {
    return dispatch({
      type: 'EDIT_SHOW_LOGIN',
      value: false
    })
  }

  async function handleLogin() {
    setError('');

    // NOTE: we'd hit an actual api in real life
    const res = await fakeBackend.login(email, password).catch(e => {
      setError(e.message)
    })
    
    if (!res || !res.data || !res.data.user) {
      setError('Unexpected Error. Please try again')
    }

    dispatch({
      type: "EDIT_USER",
      value: res.data.user
    })
    setError('');
    closeLoginModal();
  }

  return (
    <div className="modalBackground">
      <div className='modal'>
        <p className='closeX' onClick={closeLoginModal}>x</p>
        <p className='loginModalText'>Sign in to your account</p>
        <input className='loginInput' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
        <input className='loginInput' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
        <button className='loginButton' onClick={handleLogin}>Sign In</button>
        {error && <p className='loginError'>Error: {error}</p>}
      </div>
    </div>
  );
}

export default Login;
