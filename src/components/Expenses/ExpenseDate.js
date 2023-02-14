import './ExpenseDate.css';
const ExpenseDate=(props)=>{
  //   const month = props.date.toLocalDateString("en-US",{month: "long"});
  // const day = props.date.toLocalDateString("en-US",{day: "numeric"});
  // const year = props.data.toLocalDateString("en-US",{year: "numeric"});

  return(
    <div>
      <p>{props.date.toISOString()}</p> 
      {/* <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div> */}
    </div>
  )
};
export default ExpenseDate;