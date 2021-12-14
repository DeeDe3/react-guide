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

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={year} onFilterYear={filterYear} />
            {props.items.map((expense) => (
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