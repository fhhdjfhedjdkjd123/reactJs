import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm.js';
import "./NewExpense.css";
const NewExpense=(props)=>{
    const [isEditing, setIsEditing] = useState(false);
    const onSaveExpenseHandler = (enteredExpensedata)=>{
        const expenseData ={
            ...enteredExpensedata,
            id: Math.random().toString()
        };
        props.onAddNewExpense(expenseData);
        //console.log(expenseData);
    }
    const onAddNewExpenseHandler=()=>{
        setIsEditing(true);
    }
    const stopEditingHandler=()=>{
        setIsEditing(false);
    }
    return (
    <div className="new-expense">
        {!isEditing && <button onClick={onAddNewExpenseHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseHandler} onCancel={stopEditingHandler}></ExpenseForm>}
    </div>
    );
};
export default NewExpense;