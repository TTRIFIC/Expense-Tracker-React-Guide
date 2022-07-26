import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // *ABOVE*
  // This is responsible for making the filter interactive. Since it is an interactive component, you want to use useState
  // to be able to save what the input is for the drop down.
  // The filteredExpenses const evaulates the value of the filtered year and returns the filtered array. Implemented below
  // as filteredExpenses.map...

  // *BELOW*
  //The props.items.map portion is responsible for adding new dynamically rendered components. When a new expense is added
  // that function adds a new component to the code. This will be good to know for future uses

  // Key attribute adds uniqueness to components. A MUST HAVE when having a list of items

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
