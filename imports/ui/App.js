import React from 'react';

import './assets/index.scss';

import ExpensesTable from './components/expensesTable';
import ExpenseHeader from './components/expenseHeader';

export const App = () => {
  return (
    <React.Fragment>
      <ExpenseHeader />
      <ExpensesTable />
    </React.Fragment>
  );
};
