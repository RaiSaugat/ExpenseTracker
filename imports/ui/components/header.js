import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Home Expense</h1>
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
