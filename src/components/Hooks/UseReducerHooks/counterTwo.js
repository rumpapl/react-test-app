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

const counterTwo = () => {

    const [count1State, dispatch] = useReducer(reducerFunction, initialState);
    const [count2State, dispatch2] = useReducer(reducerFunction, initialState);

    return (
        <div>
            <h2>Counter 1: {count1State}</h2>
            <Button onClick={() => dispatch({ type: '+', value: 1 })}>+</Button>
            &ensp;
            <Button onClick={() => dispatch({ type: '-', value: 1 })}>-</Button>
            &ensp;
            <Button onClick={() => dispatch({ type: '+', value: 5 })}>+5</Button>
            &ensp;
            <Button onClick={() => dispatch({ type: '-', value: 5 })}>-5</Button>
            &ensp;
            <Button onClick={() => dispatch({ type: "reset" })}>Reset</Button>

            <h2>Counter 2: {count2State}</h2>
            <Button onClick={() => dispatch2({ type: '+', value: 1 })}>+</Button>
            &ensp;
            <Button onClick={() => dispatch2({ type: '-', value: 1 })}>-</Button>
            &ensp;
            <Button onClick={() => dispatch2({ type: '+', value: 5 })}>+5</Button>
            &ensp;
            <Button onClick={() => dispatch2({ type: '-', value: 5 })}>-5</Button>
            &ensp;
            <Button onClick={() => dispatch2({ type: "reset" })}>Reset</Button>

        </div>
    );
};

export default counterTwo;