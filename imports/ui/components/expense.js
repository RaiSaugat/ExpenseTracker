import React, { useState } from 'react';

import { Expenses } from '../../api/expenses';

const Expense = ({ expense }) => {
  const [showInput, setShowInput] = useState(false);
  const [inputId, setInputId] = useState();
  const [type, setType] = useState(expense.type);
  const [amount, setAmount] = useState(expense.amount);
  const [date, setDate] = useState(expense.createdAt);

  const updateExpense = (inputId) => {
    setShowInput(true);
    setInputId(inputId);
  };

  return (
    <div className="expense">
      <p className="type">
        {showInput && inputId === expense._id ? (
          <input
            type="text"
            name="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          />
        ) : (
          expense.type
        )}
      </p>
      <p>
        {showInput && inputId === expense._id ? (
          <input
            type="text"
            name="amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        ) : (
          expense.amount
        )}
      </p>
      <p>
        {showInput && inputId === expense._id ? (
          <input
            type="date"
            name="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        ) : (
          moment(expense.createdAt).format('MMM Do YYYY')
        )}
      </p>
      <div className="buttons__wrapper">
        {!showInput ? (
          <button className="button" onClick={() => updateExpense(expense._id)}>
            Edit
          </button>
        ) : (
          <button
            className="button"
            onClick={() => {
              Expenses.update(expense._id, {
                $set: {
                  type,
                  amount,
                  createdAt: date,
                },
              });
              setShowInput(false);
            }}
          >
            Update
          </button>
        )}
        {showInput ? (
          <button className="button" onClick={() => setShowInput(false)}>
            Cancel
          </button>
        ) : (
          <button
            className="button danger"
            onClick={() => Expenses.remove(expense._id)}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Expense;
