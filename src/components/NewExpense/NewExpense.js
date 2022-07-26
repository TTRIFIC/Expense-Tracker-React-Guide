import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
// *BELOW* The onSaveExpenseData={saveExpenseDataHandler} is part of "Lifting the state up" through child and parent components.
// The basic structure is this. In the child component, props.onAddExpense(expensedata), the "onAddExpense" should be the
// same as in the parent components attribute. This connects the two components and creates the ability to pass data through
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
