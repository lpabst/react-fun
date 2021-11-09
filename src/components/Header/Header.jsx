import { useContext, useState } from 'react';
import { context } from '../../store/store';
import './Header.css';

function Header() {
  const {state, dispatch} = useContext(context);
  const [showUserMenu, setShowUserMenu] = useState(true);

  function showLoginModal() {
    return dispatch({
      type: 'EDIT_SHOW_LOGIN',
      value: true
    })
  }
  
  return (
    <div className="header">
      {state.user && (
        <div className='navBar'>
          <p className='navItem'>{state.user.firstName}</p>
          {showUserMenu && (
            <div className='userMenu'>
              <p className='navItem'>Account</p>
              <p className='navItem'>Logout</p>
            </div>
          )}
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
