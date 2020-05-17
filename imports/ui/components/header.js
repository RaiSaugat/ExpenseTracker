import React from 'react';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1>Expense Tracker</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/add">Add Expense</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
