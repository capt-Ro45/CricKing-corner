import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./Expenseitem";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const expenseRows = [];
  if (filteredExpenses.length === 0) {
    expenseRows.push(<p className="no-items-found">No items found!!!</p>);
  } else {
    for (let i = 0; i < props.items.length; i += 3) {
      expenseRows.push(
        <div className="expense-row" key={i}>
          {filteredExpenses.slice(i, i + 3).map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              logo={`${expense.title.toLowerCase()}-logo.png`}
            />
          ))}
        </div>
      );
    }
  }

  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {expenseRows}
    </div>
  );
}

export default Expenses;
