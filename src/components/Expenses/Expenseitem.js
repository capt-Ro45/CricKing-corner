import React, { useState } from "react";
import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  }; 

  return (
    <li>
      <div className="expense-item">
        <div className="expense-item__logo">
          <img
            src={`logos/${props.logo}`} // Relative path to the logo
            alt={`${props.title} Logo`}
            width="80" // Adjust the width as needed
            height="50" // Adjust the height as needed
          />
        </div>
        <div className="expense-item__title">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">₹{props.amount}</div>
          </div>
          <button onClick={clickHandler}>Change Title</button>
        </div>
      </div>
    </li>
  );
}

export default ExpenseItem;
