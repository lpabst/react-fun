import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fakeBackend from '../../fakeBackend';
import { context } from '../../store/store';
import Modal from '../modal/Modal';
import './Login.css';

function Login() {
  const {state, dispatch} = useContext(context) 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // before v6, it was "useHistory" instead of "useNavigate"
  const navigate = useNavigate();

  function closeModal() {
    return dispatch({
      type: 'CLOSE_MODAL'
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
    closeModal();
    dispatch({
      type: "EDIT_USER",
      value: res.data.user
    })
    // before v6, we would have done "history.push('/account');"
    navigate('/account');
  }

  return (
    <Modal>
      <p className='modalTitle'>Sign in to your account</p>
      <input className='modalInput' autoComplete={'new-password'} placeholder='email' type='text' value={email} onChange={e => setEmail(e.target.value)} />
      <input className='modalInput' autoComplete={'new-password'} placeholder='password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
      <button className='modalButton' onClick={handleLogin}>Sign In</button>
      {error && <p className='modalError'>Error: {error}</p>}
    </Modal>
  );
}

export default Login;
