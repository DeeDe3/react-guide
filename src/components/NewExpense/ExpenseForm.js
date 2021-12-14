import { useState } from 'react/cjs/react.development'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [input, setInput] = useState({
        title: '',
        date: '',
        amount: ''
    })

    const titleChangeHandler = (event) => {
        /* 
            Use this function if your state update depends in your previous state
        */
        setInput((prevState) => {
            return { ...prevState, title: event.target.value }
        })
    }
    const dateChangeHandler = (event) => {
        setInput((prevState) => {
            return { ...prevState, date: event.target.value }
        })
    }
    const amountChangeHandler = (event) => {
        setInput((prevState) => {
            return { ...prevState, amount: event.target.value }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            //...input
            title: input.title,
            amount: +input.amount,
            date: new Date(input.date)//IMPORTANT TO NOT PASS DATE AS STRING
        }

        props.onSaveExpenseData(expenseData)

        setInput((prevState) => {
            return {
                title: '',
                date: '',
                amount: ''
            }
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={input.title}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input
                        type='number'
                        value={input.amount}
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input
                        type='date'
                        value={input.date}
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel} >Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm