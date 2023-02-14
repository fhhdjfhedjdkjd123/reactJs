import ExpenseForm from './ExpenseForm.js';
import "./NewExpense.css";
const NewExpense=(props)=>{
    const onSaveExpenseHandler = (enteredExpensedata)=>{
        const expenseData ={
            ...enteredExpensedata,
            id: Math.random().toString()
        };
        props.onSaveNewExpense(expenseData);
        //console.log(expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseHandler}></ExpenseForm>
    </div>
};
export default NewExpense;