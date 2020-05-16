import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Expenses } from '../../api/expenses';

export default class ExpenseTable extends TrackerReact(React.Component) {
  expenses() {
    return Expenses.find().fetch();
  }

  render() {
    let expenses = this.expenses();
    return (
      <div className="expenses-table">
        <div className="expense-header">
          <span>Type</span>
          <span>Amount</span>
          <span>Date</span>
        </div>
        <div className="expense-data">
          {expenses.map((expense) => {
            return (
              <p>
                {expense.type} - {expense.amount} -{' '}
                {moment(expense.createdAt).format('MMM Do YYYY')}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}
