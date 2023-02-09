import ExpenseItem from "./components/ExpenseItem";

function App(){
  const expenses =[
    {
      id:1,
      date: "Feb 02",
      title:"Wings of fire",
      locaOfExpenditure: "Chennai",
      price:318.4
    } ,
    {
      id:2,
      date: "Feb 04",
      title:"Rich dad poor dad",
      locaOfExpenditure: "Hyderabad",
      price:254.2
    },
    {
      id:3,
      date: "March 12",
      title:"Ikeguy",
      locaOfExpenditure: "Banglore",
      price:299.6
    },
    {
      id:4,
      date: "Dec 05",
      title:"Questions are the answers",
      locaOfExpenditure: "Pune",
      price:208.4
    }

  ];
  return(
    <div>
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