import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import Card from '../UI/Card'

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
]

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
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    )
}

export default Expenses