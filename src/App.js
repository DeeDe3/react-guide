import Expense from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  

  /*
    Pass the expense data to ExpenseItem tag,
    ExpenseItem.js will receeive the data as props
  */
  return (
    <div>
      <NewExpense />
      <Expense />
    </div>
  );
}

export default App;