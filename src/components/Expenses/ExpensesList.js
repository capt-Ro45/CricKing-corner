import React from "react";
import ExpenseItem from "./Expenseitem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No items Found!!!</h2>;
  }

  const itemsPerRow = 3; // Number of items to display per row
  const expenseItems = props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      logo={`${expense.title.toLowerCase()}-logo.png`}
    />
  ));

  const rows = [];
  for (let i = 0; i < expenseItems.length; i += itemsPerRow) {
    const rowItems = expenseItems.slice(i, i + itemsPerRow);
    rows.push(
      <div className="expenses-list__row" key={i}>
        {rowItems}
      </div>
    );
  }

  return <div className="expenses-list">{rows}</div>;
};

export default ExpensesList;
