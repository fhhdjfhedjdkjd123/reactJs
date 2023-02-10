import ExpenseItem from "./components/Expenses/ExpenseItem";

function App(){
  const expenses =[
    {
      id:1,
      date: new Date(Date.UTC(2021,2,3)),
      title:"Wings of fire",
      locaOfExpenditure: "Chennai",
      price:318.4
    } ,
    {
      id:2,
      date: new Date(Date.UTC(2021,2,3)),
      title:"Rich dad poor dad",
      locaOfExpenditure: "Hyderabad",
      price:254.2
    },
    {
      id:3,
      date: new Date(Date.UTC(2021,2,3)),
      title:"Ikeguy",
      locaOfExpenditure: "Banglore",
      price:299.6
    },
    {
      id:4,
      date: new Date(Date.UTC(2021,2,3)),
      title:"Questions are the answers",
      locaOfExpenditure: "Pune",
      price:208.4
    }

  ];
  return(
    <div className="expenses">
      <h1>Let's get Started</h1>
      {expenses.map((expense)=>(
       <ExpenseItem 
        date={expense.date}
        title={expense.title}
        location={expense.locaOfExpenditure}
        price={expense.price}
      ></ExpenseItem>
      ))}
    </div>
  );
}
export default App;