import Expense from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: 'e3',
    title: 'Health Insurance',
    amount: 420.420,
    date: new Date(2020, 7, 28)
  },
  {
    id: 'e4',
    title: 'KKK Membership',
    amount: 420.69,
    date: new Date(2021, 12, 28)
  },
  {
    id: 'e5',
    title: 'Gun',
    amount: 420.69,
    date: new Date(2021, 11, 28)
  },
  {
    id: 'e6',
    title: 'Epstien Island Ticket',
    amount: 420.69,
    date: new Date(2021, 9, 28)
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;