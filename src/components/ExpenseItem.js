import './ExpenseItem.css';
function ExpenseItem(props) {
  // const{date,title,location,price} = props;
  return (
    <div className='expense-items'>
      <p className='date'>{props.date}</p>
      <h3 className='type-of-item'>{props.title}</h3>
        <p className='location'>{props.location}</p>
        <div className='price-box'>
        <p className='expense-price'>${props.price}</p>
        </div>
    </div>
  );
}
export default ExpenseItem;
