import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
const ExpenseItem=(props)=>{
  // const{date,title,location,price} = props;
  // const month = props.date.toLocalString("en-US",{month: "long"});
  // const day = props.date.toLocalString("en-US",{day: "numeric"});
  // const year = props.data.toLocalString("en-US",{year: "numeric"});
  const[price, setPrice] = useState(props.price);
  const deleteButton=()=>{

  }
  const changePrice=()=>{
    setPrice(100);
  }
  return (
    <div className='expense-item'>
      {/* <p>{props.date.toISOString()}</p> */}
      {/* <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div> */}
      <ExpenseDate date={props.date}></ExpenseDate>
      <p className='location'>{props.location}</p>
      <ExpenseDetails title={props.title} price={price}></ExpenseDetails>
      {/* <div className='expense-item__description'>
         <h2>{props.title}</h2>
         <div className='expense-item__price'>${props.price}</div>
      </div> */}
      <button className='changePriceBtn' onClick={changePrice}>Change Price</button>
      <button className='deleteButton' onClick={deleteButton}>Delete Expense</button>
    </div>
  );
}
export default ExpenseItem;
