import React from 'react';
import ExpenseItem from './ExpenseItem.js';
import './ExpensesList.css';
const ExpensesList =(props)=>{
    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback'>No Expenses found!!!</h2>
    }
    return(
        <ul className='expenses-list'>
        {props.items.map((expense)=>(
            <ExpenseItem 
            date={expense.date}
            title={expense.title}
            location={expense.locaOfExpenditure}
            amount={expense.amount}
            key={expense.id}
            ></ExpenseItem>
            ))
        }
        </ul>
    )
}
export default ExpensesList;