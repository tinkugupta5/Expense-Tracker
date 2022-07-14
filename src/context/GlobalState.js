import React,{ createContext,useReducer } from 'react'

// initial state
const initialState = {
    transactions:[
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
]
}

// create context first step initialization
export const GlobalContext = createContext(initialState);
// Provider component 
export const GlobalProvider = ({ children }) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);
    return (

    <GlobalContext.Provider>
        {children}
    </GlobalContext.Provider>
    )
    
}