import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fakeBackend from '../../fakeBackend';
import { context } from '../../store/store';
import './Login.css';

function Login() {
  const {state, dispatch} = useContext(context) 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // before v6, it was "useHistory" instead of "useNavigate"
  const navigate = useNavigate();

  function closeLoginModal() {
    return dispatch({
      type: 'EDIT_SHOW_LOGIN',
      value: false
    })
  }

  async function handleLogin() {
    setError('');

    // NOTE: we'd hit an actual api in real life
    const res = await fakeBackend.login(email, password).catch(e => e)
    console.log(res)

    if (!res || (res.status === 200 && !res.data)) {
      setError('Unexpected Error. Please try again');
      return;
    }

    if (res.status !== 200 && res.message) {
      setError(res.message);
      return;
    }

    setError('');
    closeLoginModal();
    dispatch({
      type: "EDIT_USER",
      value: res.data.user
    })
    // before v6, we would have done "history.push('/account');"
    navigate('/account');
  }

  return (
    <div className="modalBackground">
      <div className='modal'>
        <p className='closeX' onClick={closeLoginModal}>x</p>
        <p className='loginModalText'>Sign in to your account</p>
        <input className='loginInput' autoComplete={'new-password'} placeholder='email' type='text' value={email} onChange={e => setEmail(e.target.value)} />
        <input className='loginInput' autoComplete={'new-password'} placeholder='password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
        <button className='loginButton' onClick={handleLogin}>Sign In</button>
        {error && <p className='loginError'>Error: {error}</p>}
      </div>
    </div>
  );
}

export default Login;
