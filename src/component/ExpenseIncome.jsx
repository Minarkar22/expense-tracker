import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function ExpenseIncome() {
  const { transactions } = useContext(GlobalContext); 
  const amounts = transactions.map(transaction => transaction.amount );
  const income = amounts
              .filter(item => item > 0)
              .reduce((acc, item) => (acc += item), 0)
              .toFixed(2);
  // console.log('Income ', income);

  const expense = amounts
              .filter(item => item < 0)
              .reduce((acc, item) => (acc += item), 0)
              .toFixed(2) * -1;
  // console.log("expense ", expense);
  
  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p className="money plus">+${ income }</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p className="money minus">-${ expense }</p>
    </div>
  </div>
  )
}

export default ExpenseIncome