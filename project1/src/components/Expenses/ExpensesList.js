import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expens) => (
        <ExpenseItem
          key={expens.id} // this is unique key need. else it will give key error in console.
          title={expens.title}
          amount={expens.amount}
          date={expens.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
