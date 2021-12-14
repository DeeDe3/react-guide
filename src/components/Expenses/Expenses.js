import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import Card from '../UI/Card'

const Expenses = (props) => {
    const [year, setYear] = useState('2020')

    const filterYear = year => {
        console.log('year :', year);
        setYear(year);
    }

    const filterExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === year
    })

    let expensesContent = <p>No expenses found</p>
    if (filterExpense.length > 0) {
        expensesContent = filterExpense.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }

    /* 
        If the conditoin is true, the next statement in the '&&' is outputted(Conditional Content). 
    */
    return (
        <Card className='expenses'>
            <ExpensesFilter
                selected={year}
                onFilterYear={filterYear}
            />
            {expensesContent}
            {/* {filterExpense.length === 0 && <p>No expenses found</p>}
            {filterExpense.length > 0 &&
                filterExpense.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            } */}
        </Card>
    )
}

export default Expenses