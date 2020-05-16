import React from 'react';
import ExpensesTable from './components/expensesTable';

export const App = () => {
  return (
    <React.Fragment>
      <h1>Welcome to expense recorder</h1>
      <ExpensesTable />
    </React.Fragment>
  );
};
