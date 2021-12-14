import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import Card from '../UI/Card'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
    const [year, setYear] = useState('2020')

    const filterYear = year => {
        setYear(year);
    }

    const filterExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === year
    })
    /* 
        If the conditoin is true, the next statement in the '&&' is outputted(Conditional Content). 
    */
    return (
        <Card className='expenses'>
            <ExpensesFilter
                selected={year}
                onFilterYear={filterYear}
            />
            <ExpensesChart expense={filterExpense}/>
            <ExpensesList items={filterExpense}/>
        </Card>
    )
}

export default Expenses