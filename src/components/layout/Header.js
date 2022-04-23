import React from 'react';
import './header.css';
class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <h1 className="header-title">Simple TodoApp</h1>
      </header>
    );
  }
}

export default Header;
