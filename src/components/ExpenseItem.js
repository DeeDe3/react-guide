import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
function ExpenseItem(props) {
    
    /*
        Now props has the expense data, pass the props date data to ExpenseData
        tag to minimize the codes, and ExpenseDate.js will receive it.
    */
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem