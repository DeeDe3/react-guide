import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'

const Expenses = () => {
    const expenses = [
        {
            id: 'e1',
            title: 'Car Insurance',
            amount: 420.69,
            date: new Date(2021, 5, 28)
        },
        {
            id: 'e2',
            title: 'Fire Insurance',
            amount: 69.69,
            date: new Date(2021, 2, 30)
        },
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

    return (
        <Card className='expenses'>
            <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            />
            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            />
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            />
            <ExpenseItem
                title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}
            />
        </Card>
    )
}

export default Expenses