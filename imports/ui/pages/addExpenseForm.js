import React, { useState } from 'react';
import { Expenses } from '../../api/expenses';

const AddExpenseForm = () => {
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();
  const [type, setType] = useState('rent');

  const handleExpense = (event) => {
    event.preventDefault();

    Expenses.insert({
      amount,
      type,
      createdAt: date,
    });
  };

  return (
    <div className="addExpense-form">
      <form>
        <label htmlFor="type"></label>
        <select
          name="type"
          onChange={(event) => setType(event.currentTarget.value)}
        >
          <option value="rent">Rent</option>
          <option value="electricity">Electricity</option>
        </select>
        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          name="amount"
          onChange={(event) => setAmount(event.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          onChange={(event) => setDate(event.target.value)}
        />
        <button onClick={handleExpense}>Add</button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
