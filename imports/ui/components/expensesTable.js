import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import './expenseTable.scss';

import Expense from './expense';
import { Expenses } from '../../api/expenses';

export default class ExpenseTable extends TrackerReact(React.Component) {
  expense() {
    return Expenses.find({}, { sort: { createdAt: -1 } }).fetch();
  }

  render() {
    let expenses = this.expense();
    return (
      <div className="expense-table">
        <div className="expense-header">
          <span>Type</span>
          <span>Amount</span>
          <span>Date</span>
          <span>Actions</span>
        </div>
        <div className="expense-data">
          {expenses.map((expense) => {
            return <Expense key={expense._id} expense={expense} />;
          })}
        </div>
      </div>
    );
  }
}
