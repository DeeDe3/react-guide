import { useState } from 'react/cjs/react.development'
import './ExpenseForm.css'

const ExpenseForm = () => {
    // const [title, setTitle] = useState('')
    // const [date, setDate] = useState('')
    // const [amount, setAmount] = useState('')
    const [input, setInput] = useState({
        title: '',
        date: '',
        amount: ''
    })

    const titleChangeHandler = (event) => {
        //setTitle(event.target.value)
        // setInput({
        //     ...input,
        //     title: event.target.value
        // })
        /* 
            Use this function if your state update depends in your previous state
        */
        setInput((prevState) =>{
            return { ...prevState, title: event.target.value}
        })
    }
    const dateChangeHandler = (event) => {
        //setDate(event.target.value)
        // setInput({
        //     ...input,
        //     date: event.target.value
        // })
        setInput((prevState) =>{
            return { ...prevState, date: event.target.value}
        })
    }
    const amountChangeHandler = (event) => {
        //setAmount(event.target.value)
        // setInput({
        //     ...input,
        //     amount: event.target.value
        // })
        setInput((prevState) =>{
            return { ...prevState, amount: event.target.value}
        })
    }

    const submitHandler = (event) =>{
        event.preventDefault()

        const expenseData = {
            ...input
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm