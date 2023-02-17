import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
// import ExpenseFilter from './ExpenseFilter.js';
import './ExpenseItem.css';
const ExpenseItem=(props)=>{
  // const{date,title,location,price} = props;
  // const month = props.date.toLocalString("en-US",{month: "long"});
  // const day = props.date.toLocalString("en-US",{day: "numeric"});
  // const year = props.data.toLocalString("en-US",{year: "numeric"});
  const[amount, setPrice] = useState(props.amount);
  const deleteButton=()=>{

  }
  const changePrice=()=>{
    setPrice(100);
  }
  // const [filteredYear, setFilteredYear] = useState("2022");
  // const filterChangeHandler=(selectedYear)=>{
  //   setFilteredYear(selectedYear);
  // }
  return (
  <li>
    <div className='expense-item'>
      {/* <p>{props.date.toISOString()}</p> */}
      {/* <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div> */}
      <ExpenseDate date={props.date}></ExpenseDate>
      <p className='location'>{props.location}</p>
      <ExpenseDetails title={props.title} amount={amount}></ExpenseDetails>
      {/* <div className='expense-item__description'>
         <h2>{props.title}</h2>
         <div className='expense-item__price'>${props.price}</div>
      </div> */}
      <button className='changePriceBtn' onClick={changePrice}>Change Price</button>
      <button className='deleteButton' onClick={deleteButton}>Delete Expense</button>
    </div>
  </li>
  );
}
export default ExpenseItem;
