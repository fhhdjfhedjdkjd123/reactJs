import React,{useState} from 'react';
import "./ExpenseForm.css";
const ExpenseForm=(props)=>{
    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');

    // const[userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });
    const titleChange=(event)=>{
        setEnteredTitle(event.target.value);
        //console.log(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle:event.target.value};
        // })
    }
    const amountChange=(event)=>{
        setEnteredAmount(event.target.value);
    }
    const dateChange=(event)=>{
        setEnteredDate(event.target.value);
    }
    const submitForm=(event)=>{
        event.preventDefault();

        const expenses ={
            title:enteredTitle,
            amount:+enteredAmount,
            date:new Date(enteredDate)
        };
        props.onSaveExpenseData(expenses);
        console.log(expenses);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }
    return(
        <form onSubmit={submitForm}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChange}/>
                </div>
                <div className='new-expense__actions'>
                    <button type='button' onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};
export default ExpenseForm;