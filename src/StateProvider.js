// setting up the data layer of the context api , which can be accessed by any component.

import React,{ createContext,useContext,useReducer } from "react";

// we need this to track the basket.useReducer is also an alternative to useState so basically its a hook.

// THIS IS THE DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// we need the useStateValue function to extract data from the
export const useStateValue = () => useContext(StateContext); 
