import { useContext } from 'react';
import { context } from '../../store/store';
import './Modal.css';

function Modal({ children }) {
  const {state, dispatch} = useContext(context) 

  function closeModal() {
    return dispatch({
      type: 'CLOSE_MODAL'
    })
  }

  return (
    <div className="modalBackground">
      <div className='modal'>
        <p className='closeX' onClick={closeModal}>x</p>
        {children}
      </div>
    </div>
  );
}

export default Modal;
