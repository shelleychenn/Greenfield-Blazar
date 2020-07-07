import React from 'react';

const Header = () => {
  return (
    <div className = 'header-component'>
      <div className = 'header-container'>
        <h2>Blazar</h2>
        <input type='text'></input>
        <img src='./assets/magnifying-glass-black-icon.png' />
      </div>
      <div className = 'announcement-container'>
        <p>Summer Sale - Free shipping on all $30+ purchases!</p>
      </div>
    </div>
  );
}

export default Header;