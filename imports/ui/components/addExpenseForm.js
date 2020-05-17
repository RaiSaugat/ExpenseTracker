import React, { useState } from 'react';

import './addExpenseForm.scss';

import { Expenses } from '../../api/expenses';

const AddExpenseForm = () => {
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();
  const [type, setType] = useState('rent');
  const [note, setNote] = useState('');

  const handleExpense = (event) => {
    event.preventDefault();

    if (date && type && amount) {
      Expenses.insert({
        amount,
        type,
        createdAt: date,
      });
      setNote(`${type} of Rs.${amount} has been added`);
    }

    setNote(`Please add expense`);
  };

  return (
    <div className="addExpense-form">
      <form>
        <div className="type">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            onChange={(event) => {
              setNote('');
              setType(event.currentTarget.value);
            }}
          >
            <option value="rent">Rent</option>
            <option value="electricity">Electricity</option>
          </select>
        </div>
        <div className="amount">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            name="amount"
            onChange={(event) => {
              setAmount(event.target.value);
              setNote('');
            }}
          />
        </div>
        <div className="date">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            onChange={(event) => {
              setNote('');
              setDate(event.target.value);
            }}
          />
        </div>
        <button className="button" onClick={handleExpense}>
          Add
        </button>

        {note && (
          <div className="info">
            <p>{note}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddExpenseForm;
