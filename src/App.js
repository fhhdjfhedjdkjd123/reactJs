// import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense.js";
import React,{useState} from 'react';
import './index.css';
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import ExpensesList from './components/Expenses/ExpensesList.js';

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
    date: new Date(Date.UTC(2022,2,3,0,0,0)),
    title:"Rich dad poor dad",
    locaOfExpenditure: "Hyderabad",
    price:254.2
  },
  {
    id:3,
    date: new Date(Date.UTC(2020,2,3,0,0,0)),
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
  const onAddExpenseHandler =(expense)=>{
    setExpenses(prevExpense=>{
      // console.log(prevExpense);
      // console.log(expense);
      return [expense,...prevExpense];
     
    });
  }
  const [filteredYear, setFilteredYear] = useState('2021');
  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = expenses.filter((expense)=>{
    return expense.date.toLocaleString("en-US",{year: "numeric"}) === filteredYear;
  })
  
  // let expensesContent = <p className="errorMsg">No Expenses found..</p>
  // if(filteredExpenses.length > 0){
  //   expensesContent = filteredExpenses.map((expense)=>(
  //     <ExpenseItem 
  //     date={expense.date}
  //     title={expense.title}
  //     location={expense.locaOfExpenditure}
  //     price={expense.price}
  //     key={expense.id}
  //    ></ExpenseItem>
  //   ))
  //   }
  return(
    <div>
      <NewExpense onAddNewExpense={onAddExpenseHandler}></NewExpense>
      <div className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
      <ExpensesList items={filteredExpenses}></ExpensesList>
      {filteredExpenses.length === 1 && <p className="remainderMsg">Only single Expense here. Please add more....</p>}
    </div>
    </div>
  );
  }
export default App;
