import { useContext, useState } from 'react';
import { context } from '../../store/store';
import Modal from '../modal/Modal';
import './Register.css';

function Register() {
  const { state, dispatch } = useContext(context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');

  async function handleRegister() {
    // make sure passwords match, create new user, etc
    if (password !== passwordConfirmation) {
        return setError('Passwords must match');
    }
    console.log(email, password, passwordConfirmation)
    dispatch({ type: "CLOSE_MODAL"})
  }

  return (
    <Modal>
      <p className='modalTitle'>Sign up for your account</p>
      <input className='modalInput' autoComplete={'new-password'} placeholder='email' type='text' value={email} onChange={e => setEmail(e.target.value)} />
      <input className='modalInput' autoComplete={'new-password'} placeholder='password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
      <input className='modalInput' autoComplete={'new-password'} placeholder='confirm password' type='password' value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
      <button className='modalButton' onClick={handleRegister}>Sign Up</button>
      {error && <p className='modalError'>Error: {error}</p>}
    </Modal>
  );
}

export default Register;
