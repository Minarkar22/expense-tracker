import { useReducer } from "react";
import { createContext } from "react";
import AppReducer from "./AppReducer";



// Initial state
const InitialState = {
    transactions : [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 },
        { id: 5, text: 'Groceries', amount: -50 },
        { id: 6, text: 'Freelance Work', amount: 200 },
        { id: 7, text: 'Dinner', amount: -30 },
        { id: 8, text: 'Bonus', amount: 100 },
        { id: 9, text: 'Movie Tickets', amount: -25 },
        { id: 10, text: 'Investment Dividends', amount: 75 }
]}
  
//Create Context
export const GlobalContext = createContext(InitialState);

//Create Provider Component
export default function GlobalProvider ({ children }) {
    const [state, dispatch] = useReducer(AppReducer, InitialState);

    //Action and Payload
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}