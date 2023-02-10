import './ExpenseDate.css';
const ExpenseDate=(props)=>{
  return(
    <div>
        <div>{props.date.toISOString()}</div>
    </div>
  )
};
export default ExpenseDate;