import Expense from "./components/Expenses/Expenses";

function App() {
  

  /*
    Pass the expense data to ExpenseItem tag,
    ExpenseItem.js will receeive the data as props
  */
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense />
    </div>
  );
}

export default App;