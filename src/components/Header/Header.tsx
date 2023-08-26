import React from 'react';
import logo from '../../logo.svg';

const Header: React.FC = () => {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={logo} alt="Logo" width="112" height="28"/>
        </a>
      </div>
    </nav>
  );
};

export default Header;