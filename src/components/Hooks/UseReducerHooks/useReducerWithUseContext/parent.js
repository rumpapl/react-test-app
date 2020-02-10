import React, { useReducer } from 'react';
import CompA from './compA';
import CompB from './compB';
import CompC from './compC';

export const CountContext = React.createContext();

const initialState = 0;

const reducerFunction = (currentState, action) => {
    switch (action.type) {
        case '+':
            return currentState + action.value;
        case '-':
            return currentState - action.value;
        case 'reset':
            return initialState;
        default:
            return currentState;
    }
}

const parent = () => {
    const [newState, dispatch] = useReducer(reducerFunction, initialState);

    return (
        <div>
            <CountContext.Provider value={{ count: newState, dispatch: dispatch }}>
                <h1>Global Counter</h1>
                <h3>Count: {newState}</h3>
                <CompA />
                <CompB />
                <CompC />
            </CountContext.Provider>
        </div>
    );
};

export default parent;