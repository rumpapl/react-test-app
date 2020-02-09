import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';

const initialState = 0;
const reducerFunction = (currentState, action) => {
    switch (action) {
        case '+':
            return currentState + 1;
        case '-':
            return currentState - 1;
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
            <Button onClick={() => dispatch('+')}>+</Button>
            &ensp;
            <Button onClick={() => dispatch('-')}>-</Button>
            &ensp;
            <Button onClick={() => dispatch('reset')}>0</Button>

        </div>
    );
};

export default counterComp;