import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense = (props) => {
    const [isEdit, setIsEdit] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEdit(false)
    }

    const startEditingHandler = () => {
        setIsEdit(true)
    }

    const stopEditingHandler = () => {
        setIsEdit(false)
    }

    return <div className='new-expense'>
        {!isEdit && <button onClick={startEditingHandler} >Add New Expense</button>}
        {isEdit && (
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={stopEditingHandler}
            />
        )}
    </div>
}

export default NewExpense