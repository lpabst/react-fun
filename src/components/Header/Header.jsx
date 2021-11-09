import { useContext, useState } from 'react';
import { context } from '../../store/store';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const {state, dispatch} = useContext(context);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  function showLoginModal() {
    return dispatch({
      type: 'EDIT_SHOW_LOGIN',
      value: true
    })
  }

  function logout() {
    setShowUserMenu(false);
    dispatch({
      type: 'EDIT_USER',
      value: null
    })
    navigate('/')
  }
  
  return (
    <div className="header">
      {state.user && (
        <div className='navBar'>
          <div onMouseEnter={() => setShowUserMenu(true)} onMouseLeave={() => setShowUserMenu(false)}>
            <p className='navItem'>{state.user.firstName}</p>
            {showUserMenu && (
              <div className='userMenu'>
                <p className='navItem'>Account</p>
                <p className='navItem' onClick={logout}>Logout</p>
              </div>
            )}
          </div>
        </div>
      )}
      {!state.user && (
        <div className='navBar'>
            <p className='navItem'>Sign Up</p>
            <p className='navSpacer'>|</p>
            <p className='navItem' onClick={showLoginModal}>Sign In</p>
        </div>
      )}
    </div>
  );
}

export default Header;
