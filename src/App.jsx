
import './App.css'
import Header from './component/Header'
import Balance from './component/Balance'
import ExpenseIncome from './component/ExpenseIncome'
import TranscationList from './component/TranscationList'
import AddTranscation from './component/AddTranscation'
import GlobalProvider from './context/GlobalState'

function App() {
  

  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <ExpenseIncome/>
        <TranscationList/>
        <AddTranscation/>
      </div>
    </GlobalProvider>
  )
}

export default App
