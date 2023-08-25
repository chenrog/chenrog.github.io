import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className="header">
      <img src={logo} alt="React Logo" className="logo" />
    </div>
  );
};

export default Header;