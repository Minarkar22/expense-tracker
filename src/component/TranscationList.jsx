import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

function TranscationList() {
  const { transactions } = useContext(GlobalContext);
  // console.log('Context ', context);
  
  return (
    <>
        <h3>History</h3>
        <ul className="list">
          {
            transactions.map(transaction => ( <Transaction transaction={transaction} key={transaction.id}/> ))
          }
            
        </ul>
    </>
  )
}

export default TranscationList