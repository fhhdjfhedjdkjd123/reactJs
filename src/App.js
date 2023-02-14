import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense.js";
import React,{useState} from 'react';
import ExpenseFilter from "./components/Expenses/ExpenseFilter";

const DUMMY_EXPENSES=[
  {
    id:1,
    date: new Date(Date.UTC(2021,2,3,0,0,0)),
    title:"Wings of fire",
    locaOfExpenditure: "Chennai",
    price:318.4
  } ,
  {
    id:2,
    date: new Date(Date.UTC(2021,2,3,0,0,0)),
    title:"Rich dad poor dad",
    locaOfExpenditure: "Hyderabad",
    price:254.2
  },
  {
    id:3,
    date: new Date(Date.UTC(2021,2,3,0,0,0)),
    title:"Ikeguy",
    locaOfExpenditure: "Banglore",
    price:299.6
  },
  {
    id:4,
    date: new Date(Date.UTC(2021,2,3,0,0,0)),
    title:"Questions are the answers",
    locaOfExpenditure: "Pune",
    price:208.4
  }
];


const App=()=>{
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  const onsaveExpenseHandler =(expense)=>{
    setExpenses(prevExpense=>{
      return [expense,...prevExpense];
    });
  }
  const [filteredYear, setFilteredYear] = useState('2022');
  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
  }

  return(
    <div>
      <NewExpense onSaveNewExpense={onsaveExpenseHandler}></NewExpense>
      <div className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
      {expenses.map((expense)=>(
       <ExpenseItem 
        date={expense.date}
        title={expense.title}
        location={expense.locaOfExpenditure}
        price={expense.price}
        key={expense.id}
      ></ExpenseItem>
      ))}
    </div>
    </div>
  );
}
export default App;
