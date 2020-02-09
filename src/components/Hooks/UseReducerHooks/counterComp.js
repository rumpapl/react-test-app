import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';

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

const counterComp = () => {

    const [newState, dispatch] = useReducer(reducerFunction, initialState);

    return (
        <div>
            <h2>Count: {newState}</h2>
            <Button onClick={() => dispatch({ type: '+', value: 1 })}>+</Button>
            &ensp;
            <Button onClick={() => dispatch({ type: '-', value: 1 })}>-</Button>
            &ensp;
            <Button onClick={() => dispatch({ type: '+', value: 5 })}>+5</Button>
            &ensp;
            <Button onClick={() => dispatch({ type: '-', value: 5 })}>-5</Button>
            &ensp;
            <Button onClick={() => dispatch({ type: "reset" })}>0</Button>
        </div>
    );
};

export default counterComp;