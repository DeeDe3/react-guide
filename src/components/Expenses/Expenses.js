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

    const filterExpense = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === year
    })

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={year} onFilterYear={filterYear} />
            {filterExpense.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    )
}

export default Expenses