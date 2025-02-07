import { useReducer } from "react";
import { createContext } from "react";
import AppReducer from "./AppReducer";



// Initial state
const InitialState = {
    transactions : []
}
  
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

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}