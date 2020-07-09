import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProductId } from '../actions/';

const Header = () => {
  const [userInput, setUserInput] = useState('');
  const dispatch = useDispatch();

  return (
    <div className='header-component'>
      <div className='header-container'>
        <h2>Blazar</h2>
        <input type='text' value={userInput} onChange={(e) => setUserInput(e.target.value)}></input>
        <img src='./assets/magnifying-glass-black-icon.png' onClick={() => {
          dispatch(setProductId(userInput));
          setUserInput('');
        }}/>
      </div>
      <div className='announcement-container'>
        <p>Summer Sale - Free shipping on all $30+ purchases!</p>
      </div>
    </div>
  );
};

export default Header;
