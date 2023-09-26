import React, { useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "CEAT",
    amount: 45000,
    date: new Date(2023, 7, 22),
    logo: ".logos/ceat-logo.png"
  },
  {
    id: "e2",
    title: "SG",
    amount: 32500,
    date: new Date(2023, 5, 14),
    logo: ".logos/sg-logo.png"
  },
  {
    id: "e3",
    title: "SS",
    amount: 38250,
    date: new Date(2023, 8, 12),
    logo: ".logos/ss-logo.png"
  },
  {
    id: "e4",
    title: "MRF",
    amount: 18499,
    date: new Date(2021, 1, 22),
    logo: ".logos/mrf-logo.png"
  },
  {
    id: "e5",
    title: "KOOKABURRA",
    amount: 39999,
    date: new Date(2023, 6, 2),
    logo: ".logos/kookaburra-logo.png"
  },
  {
    id: "e6",
    title: "GRAYNICHOLLS",
    amount: 33999,
    date: new Date(2021, 7, 13),
    logo: ".logos/graynicholls-logo.png"
  },
  {
    id: "e7",
    title: "ADIDAS",
    amount: 99999,
    date: new Date(2022, 0, 22),
    logo: ".logos/adidas-logo.png"
  },
];

function App() {
  const[expenses , setExpenses] = useState(INITIAL_EXPENSES);
  
const addExpenseHandler = expense => {
 setExpenses(prevExpenses =>{
  return [expense,...prevExpenses];
 });
};

return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;